param(
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
$entry = Join-Path $root "index.html"

if (-not (Test-Path $entry)) {
  Write-Host "未找到 index.html，请确认项目目录完整。" -ForegroundColor Red
  exit 1
}

$entryFileUrl = "file:///" + ($entry -replace "\\", "/")
Write-Host "== Shanhe Atelier Offline Launcher ==" -ForegroundColor Cyan
Write-Host "入口文件: $entry"
Write-Host "离线地址: $entryFileUrl"

if ($OpenBrowser) {
  try {
    Start-Process $entry | Out-Null
    Write-Host "已打开默认浏览器。"
  } catch {
    Write-Host "无法自动打开浏览器，请手动打开以下文件：" -ForegroundColor DarkYellow
    Write-Host $entry -ForegroundColor DarkYellow
  }
} else {
  Write-Host "可手动双击 index.html 打开。"
}
