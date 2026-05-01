param(
  [int]$Port = 5500,
  [switch]$OpenBrowser,
  [switch]$Offline,
  [switch]$NoFallback
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
$entry = Join-Path $root "index.html"
$entryFileUrl = "file:///" + ($entry -replace "\\", "/")

function Try-OpenTarget {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Target
  )

  try {
    Start-Process $Target | Out-Null
  } catch {
    Write-Host "Could not open browser automatically. Open this manually:" -ForegroundColor DarkYellow
    Write-Host $Target -ForegroundColor DarkYellow
  }
}

function Get-PythonLauncher {
  if (Get-Command py -ErrorAction SilentlyContinue) {
    return @{ Cmd = "py"; Args = @("-3") }
  }
  if (Get-Command python -ErrorAction SilentlyContinue) {
    return @{ Cmd = "python"; Args = @() }
  }
  return $null
}

function Start-OfflineMode {
  Write-Host "== Shanhe Atelier Offline Mode ==" -ForegroundColor Yellow
  Write-Host "Entry file: $entry"
  if (-not (Test-Path $entry)) {
    Write-Host "index.html was not found. Please check project files." -ForegroundColor Red
    exit 1
  }
  if ($OpenBrowser) {
    Try-OpenTarget -Target $entry
  }
  Write-Host "Switched to offline mode (file://)."
  Write-Host "Offline URL: $entryFileUrl"
}

function Test-LocalBind {
  param(
    [Parameter(Mandatory = $true)]
    [int]$TestPort
  )

  $listener = $null
  try {
    $addr = [System.Net.IPAddress]::Parse("127.0.0.1")
    $listener = [System.Net.Sockets.TcpListener]::new($addr, $TestPort)
    $listener.Start()
    return $true
  } catch {
    return $false
  } finally {
    if ($listener) {
      try { $listener.Stop() } catch {}
    }
  }
}

if ($Offline) {
  Start-OfflineMode
  exit 0
}

$launcher = Get-PythonLauncher
if (-not $launcher) {
  if ($NoFallback) {
    Write-Host "Python was not found. Install Python 3 first." -ForegroundColor Red
    exit 1
  }
  Write-Host "Python was not found. Falling back to offline mode." -ForegroundColor Yellow
  Start-OfflineMode
  exit 0
}

$url = "http://127.0.0.1:$Port/index.html"
Write-Host "== Shanhe Atelier Demo Server ==" -ForegroundColor Cyan
Write-Host "Project root: $root"
Write-Host "HTTP URL: $url"
Write-Host "Stop server: press Ctrl + C in this window."

if ($OpenBrowser) {
  Try-OpenTarget -Target $url
}

if (-not (Test-LocalBind -TestPort $Port)) {
  if ($NoFallback) {
    Write-Host "Local bind precheck failed for 127.0.0.1:$Port." -ForegroundColor Red
    exit 1
  }
  Write-Host "Local bind precheck failed. Falling back to offline mode." -ForegroundColor Yellow
  Start-OfflineMode
  exit 0
}

$args = @() + $launcher.Args + @("-m", "http.server", "$Port", "--bind", "127.0.0.1")
try {
  & $launcher.Cmd @args
  $exitCode = $LASTEXITCODE
  if ($null -eq $exitCode) {
    $exitCode = 0
  }
  if ($exitCode -ne 0) {
    if ($NoFallback) {
      exit $exitCode
    }
    Write-Host "HTTP server exited with non-zero code. Falling back to offline mode." -ForegroundColor Yellow
    Write-Host "Exit code: $exitCode" -ForegroundColor DarkYellow
    Start-OfflineMode
    exit 0
  }
} catch {
  if ($NoFallback) {
    throw
  }
  Write-Host "HTTP server failed to start. Falling back to offline mode." -ForegroundColor Yellow
  Write-Host "Error: $($_.Exception.Message)" -ForegroundColor DarkYellow
  Start-OfflineMode
  exit 0
}
