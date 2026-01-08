@echo off
echo ========================================
echo Starting Allied Pro Development Servers
echo ========================================
echo.

echo [1/2] Installing frontend dependencies...
call npm install
echo.

echo [2/2] Installing backend dependencies...
cd server
call npm install
cd ..
echo.

echo ========================================
echo Starting servers...
echo ========================================
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:5173
echo.
echo Press Ctrl+C in each window to stop servers
echo ========================================
echo.

start "Allied Pro Backend" cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak > nul
start "Allied Pro Frontend" cmd /k "npm run dev"

echo.
echo Both servers are starting in separate windows!
echo.
pause



