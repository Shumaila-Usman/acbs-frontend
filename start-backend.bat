@echo off
echo ========================================
echo Setting up Backend Server
echo ========================================
echo.

cd server

echo Checking if .env file exists...
if exist .env (
    echo ✓ .env file found
) else (
    echo ⚠ Creating .env file from template...
    echo PORT=5000> .env
    echo MONGODB_URI=mongodb://localhost:27017/alliedpro>> .env
    echo JWT_SECRET=allied-pro-secret-key-change-this-in-production-12345>> .env
    echo NODE_ENV=development>> .env
    echo ✓ .env file created
    echo.
    echo ⚠ IMPORTANT: Update MongoDB connection in server/.env if needed
)

echo.
echo Installing backend dependencies...
call npm install

echo.
echo ========================================
echo Starting Backend Server...
echo ========================================
echo Server will run on: http://localhost:5000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev



