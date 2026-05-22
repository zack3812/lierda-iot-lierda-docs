$ErrorActionPreference = "Stop"

$R2_BUCKET = "lierda-docs"
$R2_PUBLIC_URL = "https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev"
$ACCOUNT_ID = "FILL_YOUR_CLOUDFLARE_ACCOUNT_ID"

function Write-Step($msg) { Write-Host "`n>> $msg" -ForegroundColor Cyan }
function Write-Done($msg) { Write-Host "   OK $msg" -ForegroundColor Green }
function Write-Warn($msg) { Write-Host "   !! $msg" -ForegroundColor Yellow }

Write-Step "利尔达文档 R2 上传工具"
Write-Host "   用法: .\scripts\r2-upload.ps1 <命令> [参数]"
Write-Host ""
Write-Host "   命令:"
Write-Host "     upload <本地路径> <R2目标路径>   上传单个文件"
Write-Host "     upload-dir <本地目录> <R2前缀>    上传整个目录"
Write-Host "     list [前缀]                       列出R2文件"
Write-Host "     delete <R2路径>                    删除R2文件"
Write-Host "     sync <本地目录> <R2前缀>           同步目录(仅上传新/修改文件)"
Write-Host "     check                             检查wrangler是否安装"
Write-Host ""

$command = $args[0]

if (-not $command) { exit 0 }

switch ($command) {
    "check" {
        Write-Step "检查环境"
        try {
            $ver = wrangler --version 2>&1
            Write-Done "wrangler 已安装: $ver"
        } catch {
            Write-Warn "wrangler 未安装，请运行: npm install -g wrangler"
            Write-Host "   安装后运行: wrangler login"
        }
        try {
            $test = wrangler r2 bucket list 2>&1
            Write-Done "R2 API 连接正常"
        } catch {
            Write-Warn "R2 API 连接失败，请检查 wrangler login"
        }
    }

    "upload" {
        $localPath = $args[1]
        $r2Key = $args[2]
        if (-not $localPath -or -not $r2Key) {
            Write-Warn "用法: .\scripts\r2-upload.ps1 upload <本地路径> <R2目标路径>"
            break
        }
        if (-not (Test-Path $localPath)) {
            Write-Warn "文件不存在: $localPath"
            break
        }
        Write-Step "上传: $localPath -> $r2Key"
        wrangler r2 object put "$R2_BUCKET/$r2Key" --file $localPath --content-type "$(Get-ContentType $localPath)"
        Write-Done "上传完成"
        Write-Host "   访问地址: $R2_PUBLIC_URL/$r2Key"
    }

    "upload-dir" {
        $localDir = $args[1]
        $r2Prefix = $args[2]
        if (-not $localDir -or -not $r2Prefix) {
            Write-Warn "用法: .\scripts\r2-upload.ps1 upload-dir <本地目录> <R2前缀>"
            break
        }
        if (-not (Test-Path $localDir)) {
            Write-Warn "目录不存在: $localDir"
            break
        }
        Write-Step "批量上传目录: $localDir -> $r2Prefix/"
        $files = Get-ChildItem -Path $localDir -File -Recurse
        $count = 0
        foreach ($f in $files) {
            $relative = $f.FullName.Substring((Resolve-Path $localDir).Path.Length + 1).Replace("\", "/")
            $r2Key = "$r2Prefix/$relative"
            Write-Host "   [$($count+1)/$($files.Count)] $relative"
            wrangler r2 object put "$R2_BUCKET/$r2Key" --file $f.FullName
            $count++
        }
        Write-Done "共上传 $count 个文件"
    }

    "list" {
        $prefix = $args[1]
        Write-Step "列出R2文件: $prefix"
        if ($prefix) {
            wrangler r2 object list $R2_BUCKET --prefix $prefix
        } else {
            wrangler r2 object list $R2_BUCKET
        }
    }

    "delete" {
        $r2Key = $args[1]
        if (-not $r2Key) {
            Write-Warn "用法: .\scripts\r2-upload.ps1 delete <R2路径>"
            break
        }
        Write-Step "删除: $r2Key"
        wrangler r2 object delete "$R2_BUCKET/$r2Key"
        Write-Done "已删除"
    }

    "sync" {
        $localDir = $args[1]
        $r2Prefix = $args[2]
        if (-not $localDir -or -not $r2Prefix) {
            Write-Warn "用法: .\scripts\r2-upload.ps1 sync <本地目录> <R2前缀>"
            break
        }
        Write-Step "同步目录: $localDir -> $r2Prefix/"
        Write-Warn "sync 功能需要先 list 远端文件做比对，当前为全量上传模式"
        $files = Get-ChildItem -Path $localDir -File -Recurse
        $count = 0
        foreach ($f in $files) {
            $relative = $f.FullName.Substring((Resolve-Path $localDir).Path.Length + 1).Replace("\", "/")
            $r2Key = "$r2Prefix/$relative"
            Write-Host "   [$($count+1)/$($files.Count)] $relative"
            wrangler r2 object put "$R2_BUCKET/$r2Key" --file $f.FullName
            $count++
        }
        Write-Done "共同步 $count 个文件"
    }

    default {
        Write-Warn "未知命令: $command"
    }
}

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
