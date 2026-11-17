
@echo off
setlocal

set "LIMIT=307200"
set "FOLDER=%~dp0"

for %%F in ("%FOLDER%*.jpg" "%FOLDER%*.jpeg") do (
    if exist "%%~fF" call :PROCESS "%%~fF"
)

echo.
echo All images processed!
pause
exit /b


:PROCESS
set "INPUT=%~1"
set "TEMP=%~dpn1_temp.jpg"

for %%A in ("%INPUT%") do set "SIZE=%%~zA"

if %SIZE% LEQ %LIMIT% exit /b

echo.
echo Compressing: %~nx1

set "QUALITY=2"

:RETRY
ffmpeg -y -threads 1 -i "%INPUT%" -frames:v 1 -c:v mjpeg -threads 1 -q:v %QUALITY% "%TEMP%" -loglevel error

if not exist "%TEMP%" (
    echo ERROR: FFmpeg could not process %~nx1
    exit /b
)

for %%A in ("%TEMP%") do set "NEWSIZE=%%~zA"

if %NEWSIZE% LSS %LIMIT% (
    move /y "%TEMP%" "%INPUT%" >nul
    echo SUCCESS: %~nx1
    exit /b
)

del "%TEMP%" 2>nul

set /a QUALITY+=2

if %QUALITY% LEQ 31 goto RETRY

echo WARNING: Could not compress %~nx1 below 300 KB
exit /b
