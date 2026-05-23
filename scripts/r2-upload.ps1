$ErrorActionPreference = "Stop"

$R2_BUCKET = "lierda-docs"
$R2_PUBLIC_URL = "https://pub-03c73643e8b947b6b1bb6b32f808417f.r2.dev"
$DOCS_DIR = "$PSScriptRoot\..\docs"
$VIDEOS_DIR = "$PSScriptRoot\..\assets\videos"
$MANIFEST_FILE = "$DOCS_DIR\.manifest.json"

$VIDEO_MAP = @{
    "assets/videos/260224英文版宣传片(公司).mp4" = "$VIDEOS_DIR\260224英文版宣传片(公司).mp4"
    "assets/videos/工厂英文介绍（4k）.mp4" = "$VIDEOS_DIR\工厂英文介绍（4k）.mp4"
}

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
        ".mp4"  { return "video/mp4" }
        ".webm" { return "video/webm" }
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
            localPath = $f.FullName
        }
    }
    foreach ($r2Key in $VIDEO_MAP.Keys) {
        $localPath = $VIDEO_MAP[$r2Key]
        if (Test-Path $localPath) {
            $f = Get-Item $localPath
            $hash = Get-FileHash256 $f.FullName
            $result[$r2Key] = @{
                hash = $hash
                size = $f.Length
                lastWrite = $f.LastWriteTimeUtc.ToString("o")
                localPath = $f.FullName
            }
        }
    }
    return $result
}

$command = $args[0]

if (-not $command) {
    Write-Host ""
    Write-Host "  Lierda Docs R2 Upload Tool v2.1" -ForegroundColor White -BackgroundColor DarkCyan
    Write-Host ""
    Write-Host "  Usage: .\scripts\r2-upload.ps1 [command] [args]" -ForegroundColor White
    Write-Host ""
    Write-Host "  Commands:" -ForegroundColor Yellow
    Write-Host "    deploy              Scan & upload new/modified files (docs + videos)"
    Write-Host "    status              Show local file status (new/modified/unchanged/placeholder)"
    Write-Host "    init                Create docs/ directory structure"
    Write-Host '    upload [local] [R2] Upload single file'
    Write-Host '    delete [R2 key]     Delete R2 file'
    Write-Host "    check               Check wrangler environment"
    Write-Host "    reset               Reset upload manifest"
    Write-Host "    sync                Scan docs/ and sync data.js"
    Write-Host ""
    Write-Host "  Workflow:" -ForegroundColor Yellow
    Write-Host "    1. .\scripts\r2-upload.ps1 init"
    Write-Host "    2. Replace placeholder files in docs/"
    Write-Host "    3. .\scripts\r2-upload.ps1 status"
    Write-Host "    4. .\scripts\r2-upload.ps1 deploy"
    Write-Host ""
    exit 0
}

switch ($command) {
    "init" {
        Write-Step "Init docs/ directory structure"

        $jsFile = Join-Path $PSScriptRoot "init-dirs.js"
        $hasNode = $false
        try { node --version | Out-Null; $hasNode = $true } catch { }

        if ($hasNode -and (Test-Path $jsFile)) {
            $result = node $jsFile 2>&1
            $json = $result | ConvertFrom-Json
            Write-Done "Created $($json.dirs) dirs, $($json.files) placeholder files"
        } else {
            $dirs = @("b00/hardware","b00/software","b00/tools","b00/certification","b00/evb","c00/hardware","c00/software")
            foreach ($d in $dirs) {
                New-Item -ItemType Directory -Path "$DOCS_DIR\$d" -Force | Out-Null
            }
            Write-Done "Created $($dirs.Count) dirs"
            Write-Warn "Please create placeholder files manually, or install Node.js"
        }

        Write-Host ""
        Write-Host "  Next: Replace placeholder files in docs/" -ForegroundColor Yellow
        Write-Host "  Then: .\scripts\r2-upload.ps1 status" -ForegroundColor Yellow
    }

    "status" {
        Write-Step "Scan local file status"
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
            $isVideo = $key.StartsWith("assets/videos/")

            if ($isPlaceholder) {
                Write-Host "   [  PH  ] " -ForegroundColor DarkGray -NoNewline
                Write-Host $key -ForegroundColor DarkGray
                $placeholder++
            } elseif (-not $wasUploaded) {
                $tag = if ($isVideo) { "[ NEW V]" } else { "[ NEW +]" }
                $color = if ($isVideo) { "Magenta" } else { "Green" }
                Write-Host "   $tag " -ForegroundColor $color -NoNewline
                Write-Host $key -ForegroundColor $color
                $newCount++
            } elseif ($wasUploaded -and $manifestDict[$key].hash -ne $info.hash) {
                Write-Host "   [ MOD *] " -ForegroundColor Yellow -NoNewline
                Write-Host $key -ForegroundColor Yellow
                $modCount++
            } else {
                Write-Host "   [  OK -] " -ForegroundColor DarkGray -NoNewline
                Write-Host $key -ForegroundColor DarkGray
                $unchanged++
            }
        }

        Write-Host ""
        Write-Host "  Stats: new=$newCount  modified=$modCount  unchanged=$unchanged  placeholder=$placeholder" -ForegroundColor White
        if ($newCount -gt 0 -or $modCount -gt 0) {
            Write-Host "  Run: .\scripts\r2-upload.ps1 deploy" -ForegroundColor Yellow
        }
    }

    "deploy" {
        Write-Step "Deploy: scan changes and upload to R2"
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
            Write-Done "No files to upload"
            exit 0
        }

        Write-Host "  Found $($toUpload.Count) files to upload:" -ForegroundColor White
        $toUpload | ForEach-Object { Write-Host "    - $_" -ForegroundColor Cyan }

        $count = 0
        $failed = @()
        foreach ($key in ($toUpload | Sort-Object)) {
            $info = $localFiles[$key]
            $localPath = $info.localPath
            $count++
            Write-Host "`n  [$count/$($toUpload.Count)] $key" -ForegroundColor White
            try {
                $contentType = Get-ContentType $localPath
                wrangler r2 object put "$R2_BUCKET/$key" --file $localPath --content-type $contentType 2>&1 | Out-Null
                Write-Done "$key -> $R2_PUBLIC_URL/$key"
                $manifestDict[$key] = @{
                    hash = $info.hash
                    size = $info.size
                    uploadedAt = (Get-Date).ToString("o")
                }
            } catch {
                Write-Err "Upload failed: $key - $_"
                $failed += $key
            }
        }

        $newManifest = [PSCustomObject]$manifestDict
        Save-Manifest $newManifest

        Write-Host ""
        if ($failed.Count -eq 0) {
            Write-Done "All uploaded! Total: $count files"
        } else {
            Write-Warn "Upload done: success $($count - $failed.Count), failed $($failed.Count)"
            $failed | ForEach-Object { Write-Err "  Failed: $_" }
        }

        Write-Step "Sync data.js"
        $syncScript = Join-Path $PSScriptRoot "sync-data.js"
        if (Test-Path $syncScript) {
            try {
                node $syncScript sync 2>&1
                Write-Done "data.js updated"
            } catch {
                Write-Warn "Sync data.js failed: $_"
            }
        }
    }

    "upload" {
        $localPath = $args[1]
        $r2Key = $args[2]
        if (-not $localPath -or -not $r2Key) {
            Write-Warn 'Usage: .\scripts\r2-upload.ps1 upload [local path] [R2 key]'
            break
        }
        if (-not (Test-Path $localPath)) {
            Write-Warn "File not found: $localPath"
            break
        }
        Write-Step "Upload: $localPath -> $r2Key"
        $contentType = Get-ContentType $localPath
        wrangler r2 object put "$R2_BUCKET/$r2Key" --file $localPath --content-type $contentType
        Write-Done "Upload complete"
        Write-Host "   URL: $R2_PUBLIC_URL/$r2Key"
    }

    "delete" {
        $r2Key = $args[1]
        if (-not $r2Key) {
            Write-Warn 'Usage: .\scripts\r2-upload.ps1 delete [R2 key]'
            break
        }
        Write-Step "Delete: $r2Key"
        wrangler r2 object delete "$R2_BUCKET/$r2Key" 2>&1
        Write-Done "Deleted"
    }

    "check" {
        Write-Step "Check environment"
        try {
            $ver = wrangler --version 2>&1
            Write-Done "wrangler installed: $ver"
        } catch {
            Write-Warn "wrangler not installed, run: npm install -g wrangler"
            Write-Host "   Then run: wrangler login"
        }
        try {
            $test = wrangler r2 bucket list 2>&1
            Write-Done "R2 API connected"
        } catch {
            Write-Warn "R2 API connection failed, check wrangler login"
        }
        Write-Host "   docs/ dir: $DOCS_DIR"
        if (Test-Path $DOCS_DIR) {
            $fileCount = (Get-ChildItem -Path $DOCS_DIR -File -Recurse | Where-Object { $_.Name -ne ".manifest.json" }).Count
            Write-Done "docs/ has $fileCount files"
        } else {
            Write-Warn "docs/ not found, run: .\scripts\r2-upload.ps1 init"
        }
        Write-Host "   videos/ dir: $VIDEOS_DIR"
        if (Test-Path $VIDEOS_DIR) {
            $vidCount = (Get-ChildItem -Path $VIDEOS_DIR -File).Count
            Write-Done "videos/ has $vidCount files"
        } else {
            Write-Warn "videos/ not found"
        }
    }

    "reset" {
        Write-Step "Reset upload manifest"
        if (Test-Path $MANIFEST_FILE) {
            Remove-Item $MANIFEST_FILE -Force
            Write-Done "Deleted .manifest.json, next deploy will upload all"
        } else {
            Write-Warn "No manifest file found"
        }
    }

    "sync" {
        Write-Step "Scan docs/ and sync data.js"
        $syncScript = Join-Path $PSScriptRoot "sync-data.js"
        if (Test-Path $syncScript) {
            node $syncScript sync 2>&1
        } else {
            Write-Err "sync-data.js not found"
        }
    }

    default {
        Write-Warn "Unknown command: $command"
        Write-Host "   Run .\scripts\r2-upload.ps1 for help"
    }
}
