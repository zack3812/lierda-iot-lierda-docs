$ErrorActionPreference = "Stop"

$R2_BUCKET = "lierda-docs"
$R2_PUBLIC_URL = "https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev"
$DOCS_DIR = "$PSScriptRoot\..\docs"
$MANIFEST_FILE = "$DOCS_DIR\.manifest.json"

function Write-Step($msg) { Write-Host "`n>> $msg" -ForegroundColor Cyan }
function Write-Done($msg) { Write-Host "   OK $msg" -ForegroundColor Green }
function Write-Warn($msg) { Write-Host "   !! $msg" -ForegroundColor Yellow }
function Write-Err($msg)  { Write-Host "   X  $msg" -ForegroundColor Red }

function Get-ContentType($path) {
    $ext = [System.IO.Path]::GetExtension($path).ToLower()
    switch ($ext) {
        ".pdf"  { return "application/pdf" }
        ".zip"  { return "application/zip" }
        ".xlsx" { return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
        ".xls"  { return "application/vnd.ms-excel" }
        ".doc"  { return "application/msword" }
        ".docx" { return "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
        ".png"  { return "image/png" }
        ".jpg"  { return "image/jpeg" }
        ".json" { return "application/json" }
        default { return "application/octet-stream" }
    }
}

function Get-FileHash256($path) {
    $hash = Get-FileHash -Path $path -Algorithm SHA256
    return $hash.Hash
}

function Load-Manifest {
    if (Test-Path $MANIFEST_FILE) {
        return Get-Content $MANIFEST_FILE -Raw | ConvertFrom-Json
    }
    return @{}
}

function Save-Manifest($manifest) {
    $manifest | ConvertTo-Json -Depth 10 | Set-Content $MANIFEST_FILE -Encoding UTF8
}

function Get-LocalFiles {
    $result = @{}
    $files = Get-ChildItem -Path $DOCS_DIR -File -Recurse | Where-Object {
        $_.Name -ne ".manifest.json"
    }
    foreach ($f in $files) {
        $relative = $f.FullName.Substring((Resolve-Path $DOCS_DIR).Path.Length + 1).Replace("\", "/")
        $hash = Get-FileHash256 $f.FullName
        $result[$relative] = @{
            hash = $hash
            size = $f.Length
            lastWrite = $f.LastWriteTimeUtc.ToString("o")
        }
    }
    return $result
}

$command = $args[0]

if (-not $command) {
    Write-Host ""
    Write-Host "  利尔达文档 R2 上传工具 v2.0" -ForegroundColor White -BackgroundColor DarkCyan
    Write-Host ""
    Write-Host "  用法: .\scripts\r2-upload.ps1 [命令] [参数]" -ForegroundColor White
    Write-Host ""
    Write-Host "  命令:" -ForegroundColor Yellow
    Write-Host "    deploy              一键部署: 扫描 docs/ 并上传新增/修改文件"
    Write-Host "    status              查看本地文件状态(新增/修改/未变/占位)"
    Write-Host "    init                创建 docs/ 目录结构及占位文件"
    Write-Host '    upload [本地] [R2]  上传单个文件'
    Write-Host "    list [前缀]         列出 R2 文件"
    Write-Host '    delete [R2路径]     删除 R2 文件'
    Write-Host "    check               检查 wrangler 环境"
    Write-Host "    reset               重置上传记录(下次 deploy 全量上传)"
    Write-Host "    sync                扫描 docs/ 并同步 data.js"
    Write-Host ""
    Write-Host "  工作流:" -ForegroundColor Yellow
    Write-Host "    1. .\scripts\r2-upload.ps1 init       (初始化目录)"
    Write-Host "    2. 将真实文件替换 docs/ 中的占位文件"
    Write-Host "    3. .\scripts\r2-upload.ps1 status     (查看变更)"
    Write-Host "    4. .\scripts\r2-upload.ps1 deploy     (上传到 R2)"
    Write-Host ""
    exit 0
}

switch ($command) {
    "init" {
        Write-Step "初始化 docs/ 目录结构"

        $jsFile = Join-Path $PSScriptRoot "init-dirs.js"
        $hasNode = $false
        try { node --version | Out-Null; $hasNode = $true } catch { }

        if ($hasNode -and (Test-Path $jsFile)) {
            $result = node $jsFile 2>&1
            $json = $result | ConvertFrom-Json
            Write-Done "已创建 $($json.dirs) 个目录, $($json.files) 个占位文件"
        } else {
            $dirs = @("b00/hardware","b00/software","b00/tools","b00/certification","b00/evb","c00/hardware","c00/software")
            foreach ($d in $dirs) {
                New-Item -ItemType Directory -Path "$DOCS_DIR\$d" -Force | Out-Null
            }
            Write-Done "已创建 $($dirs.Count) 个目录"
            Write-Warn "请手动创建占位文件, 或安装 Node.js 后重新运行 init"
        }

        Write-Host ""
        Write-Host "  下一步: 将真实文件替换 docs/ 中的占位文件" -ForegroundColor Yellow
        Write-Host "  然后:   .\scripts\r2-upload.ps1 status" -ForegroundColor Yellow
    }

    "status" {
        Write-Step "扫描本地文件状态"
        $manifest = Load-Manifest
        $localFiles = Get-LocalFiles
        $manifestDict = @{}
        foreach ($prop in $manifest.PSObject.Properties) {
            $manifestDict[$prop.Name] = $prop.Value
        }

        $newCount = 0; $modCount = 0; $unchanged = 0; $placeholder = 0

        foreach ($key in ($localFiles.Keys | Sort-Object)) {
            $info = $localFiles[$key]
            $isPlaceholder = $info.size -lt 100
            $wasUploaded = $manifestDict.ContainsKey($key)

            if ($isPlaceholder) {
                Write-Host "   [  占位  ] " -ForegroundColor DarkGray -NoNewline
                Write-Host $key -ForegroundColor DarkGray
                $placeholder++
            } elseif (-not $wasUploaded) {
                Write-Host "   [ 新增 + ] " -ForegroundColor Green -NoNewline
                Write-Host $key -ForegroundColor Green
                $newCount++
            } elseif ($wasUploaded -and $manifestDict[$key].hash -ne $info.hash) {
                Write-Host "   [ 修改 * ] " -ForegroundColor Yellow -NoNewline
                Write-Host $key -ForegroundColor Yellow
                $modCount++
            } else {
                Write-Host "   [ 未变 - ] " -ForegroundColor DarkGray -NoNewline
                Write-Host $key -ForegroundColor DarkGray
                $unchanged++
            }
        }

        Write-Host ""
        Write-Host "  统计: 新增=$newCount  修改=$modCount  未变=$unchanged  占位=$placeholder" -ForegroundColor White
        if ($newCount -gt 0 -or $modCount -gt 0) {
            Write-Host "  执行 .\scripts\r2-upload.ps1 deploy 上传变更" -ForegroundColor Yellow
        }
    }

    "deploy" {
        Write-Step "部署: 扫描变更并上传到 R2"
        $manifest = Load-Manifest
        $manifestDict = @{}
        foreach ($prop in $manifest.PSObject.Properties) {
            $manifestDict[$prop.Name] = $prop.Value
        }

        $localFiles = Get-LocalFiles
        $toUpload = @()

        foreach ($key in $localFiles.Keys) {
            $info = $localFiles[$key]
            if ($info.size -lt 100) { continue }
            $wasUploaded = $manifestDict.ContainsKey($key)
            if (-not $wasUploaded -or $manifestDict[$key].hash -ne $info.hash) {
                $toUpload += $key
            }
        }

        if ($toUpload.Count -eq 0) {
            Write-Done "没有需要上传的文件"
            exit 0
        }

        Write-Host "  发现 $($toUpload.Count) 个文件需要上传:" -ForegroundColor White
        $toUpload | ForEach-Object { Write-Host "    - $_" -ForegroundColor Cyan }

        $count = 0
        $failed = @()
        foreach ($key in ($toUpload | Sort-Object)) {
            $localPath = Join-Path (Resolve-Path $DOCS_DIR).Path $key.Replace("/", "\")
            $count++
            Write-Host "`n  [$count/$($toUpload.Count)] $key" -ForegroundColor White
            try {
                $contentType = Get-ContentType $localPath
                wrangler r2 object put "$R2_BUCKET/$key" --file $localPath --content-type $contentType 2>&1 | Out-Null
                Write-Done "$key -> $R2_PUBLIC_URL/$key"
                $manifestDict[$key] = @{
                    hash = $localFiles[$key].hash
                    size = $localFiles[$key].size
                    uploadedAt = (Get-Date).ToString("o")
                }
            } catch {
                Write-Err "上传失败: $key - $_"
                $failed += $key
            }
        }

        $newManifest = [PSCustomObject]$manifestDict
        Save-Manifest $newManifest

        Write-Host ""
        if ($failed.Count -eq 0) {
            Write-Done "全部上传成功! 共 $count 个文件"
        } else {
            Write-Warn "上传完成: 成功 $($count - $failed.Count), 失败 $($failed.Count)"
            $failed | ForEach-Object { Write-Err "  失败: $_" }
        }

        Write-Step "同步 data.js"
        $syncScript = Join-Path $PSScriptRoot "sync-data.js"
        if (Test-Path $syncScript) {
            try {
                node $syncScript sync 2>&1
                Write-Done "data.js 已更新"
            } catch {
                Write-Warn "同步 data.js 失败: $_"
            }
        }
    }

    "upload" {
        $localPath = $args[1]
        $r2Key = $args[2]
        if (-not $localPath -or -not $r2Key) {
            Write-Warn '用法: .\scripts\r2-upload.ps1 upload [本地路径] [R2目标路径]'
            break
        }
        if (-not (Test-Path $localPath)) {
            Write-Warn "文件不存在: $localPath"
            break
        }
        Write-Step "上传: $localPath -> $r2Key"
        $contentType = Get-ContentType $localPath
        wrangler r2 object put "$R2_BUCKET/$r2Key" --file $localPath --content-type $contentType
        Write-Done "上传完成"
        Write-Host "   访问地址: $R2_PUBLIC_URL/$r2Key"
    }

    "list" {
        $prefix = $args[1]
        Write-Step "列出 R2 文件: $prefix"
        if ($prefix) {
            wrangler r2 object list $R2_BUCKET --prefix $prefix
        } else {
            wrangler r2 object list $R2_BUCKET
        }
    }

    "delete" {
        $r2Key = $args[1]
        if (-not $r2Key) {
            Write-Warn '用法: .\scripts\r2-upload.ps1 delete [R2路径]'
            break
        }
        Write-Step "删除: $r2Key"
        wrangler r2 object delete "$R2_BUCKET/$r2Key"
        Write-Done "已删除"
    }

    "check" {
        Write-Step "检查环境"
        try {
            $ver = wrangler --version 2>&1
            Write-Done "wrangler 已安装: $ver"
        } catch {
            Write-Warn "wrangler 未安装, 请运行: npm install -g wrangler"
            Write-Host "   安装后运行: wrangler login"
        }
        try {
            $test = wrangler r2 bucket list 2>&1
            Write-Done "R2 API 连接正常"
        } catch {
            Write-Warn "R2 API 连接失败, 请检查 wrangler login"
        }
        Write-Host "   docs/ 目录: $DOCS_DIR"
        if (Test-Path $DOCS_DIR) {
            $fileCount = (Get-ChildItem -Path $DOCS_DIR -File -Recurse | Where-Object { $_.Name -ne ".manifest.json" }).Count
            Write-Done "docs/ 中有 $fileCount 个文件"
        } else {
            Write-Warn "docs/ 目录不存在, 请运行: .\scripts\r2-upload.ps1 init"
        }
    }

    "reset" {
        Write-Step "重置上传记录"
        if (Test-Path $MANIFEST_FILE) {
            Remove-Item $MANIFEST_FILE -Force
            Write-Done "已删除 .manifest.json, 下次 deploy 将全量上传"
        } else {
            Write-Warn "没有找到上传记录文件"
        }
    }

    "sync" {
        Write-Step "扫描 docs/ 并同步 data.js"
        $syncScript = Join-Path $PSScriptRoot "sync-data.js"
        if (Test-Path $syncScript) {
            node $syncScript sync 2>&1
        } else {
            Write-Err "未找到 sync-data.js"
        }
    }

    default {
        Write-Warn "未知命令: $command"
        Write-Host "   运行 .\scripts\r2-upload.ps1 查看帮助"
    }
}
