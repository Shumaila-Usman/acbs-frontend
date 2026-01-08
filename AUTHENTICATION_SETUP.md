# Allied Pro Beauty Supply - Authentication Setup Guide

## ✅ What's Been Implemented

### 1. **FAQ Page** (`/faq`)
   - Separate page for Frequently Asked Questions
   - Linked in footer navigation
   - Removed from Contact Us page

### 2. **MongoDB Authentication System**
   - User registration with password hashing
   - User login with JWT tokens
   - Persistent login (stays logged in on same browser)
   - Automatic logout when switching browsers
   - Protected routes for account pages

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager

---

## Step 1: Install Frontend Dependencies

```bash
# In the project root directory
npm install
```

This will install axios and other required packages.

---

## Step 2: Setup Backend Server

### Install Backend Dependencies

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install
```

### Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
# Copy the example file
copy .env.example .env
```

Edit the `.env` file with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/alliedpro
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345
NODE_ENV=development
```

**Important:** Change the `JWT_SECRET` to a random, secure string in production!

---

## Step 3: Setup MongoDB

### Option A: Local MongoDB

1. Install MongoDB Community Edition:
   - Windows: https://www.mongodb.com/try/download/community
   - Mac: `brew install mongodb-community`
   - Linux: Follow official MongoDB docs

2. Start MongoDB service:
   ```bash
   # Windows (run as administrator)
   net start MongoDB
   
   # Mac
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

3. Verify MongoDB is running:
   ```bash
   mongosh
   ```

### Option B: MongoDB Atlas (Cloud)

1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Update your `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/alliedpro?retryWrites=true&w=majority
   ```

---

## Step 4: Run the Application

### Terminal 1: Start Backend Server

```bash
cd server
npm run dev
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
```

### Terminal 2: Start Frontend

```bash
# In project root
npm run dev
```

You should see:
```
VITE v5.x.x ready in xxx ms
➜  Local:   http://localhost:5173/
```

---

## 🎯 Testing Authentication

### 1. Register New User

1. Go to http://localhost:5173/register
2. Fill in the form:
   - First Name: John
   - Last Name: Doe
   - Email: john@example.com
   - Password: password123
   - Confirm Password: password123
3. Click "Create Account"
4. You'll be redirected to `/account` page (logged in)

### 2. Verify in MongoDB

```bash
mongosh
use alliedpro
db.users.find().pretty()
```

You should see your user document with hashed password.

### 3. Test Login

1. Open new incognito window or logout
2. Go to http://localhost:5173/login
3. Enter credentials:
   - Email: john@example.com
   - Password: password123
4. Click "Sign In"
5. You'll be logged in and redirected to `/account`

### 4. Test Persistent Login

1. Close browser (not incognito)
2. Reopen browser and go to http://localhost:5173
3. You should still be logged in (token in localStorage)
4. Open a different browser → you'll need to login again

---

## 📁 Project Structure

```
alliedpro/
├── server/                      # Backend API
│   ├── index.js                # Express server
│   ├── models/
│   │   └── User.js            # User model
│   ├── routes/
│   │   └── auth.js            # Authentication routes
│   ├── middleware/
│   │   └── auth.js            # JWT middleware
│   ├── package.json
│   └── .env                   # Environment variables
│
├── src/                        # Frontend
│   ├── context/
│   │   └── AuthContext.jsx    # Auth state management
│   ├── utils/
│   │   └── api.js            # API client
│   ├── pages/
│   │   ├── Register.jsx       # Registration page
│   │   ├── Login.jsx          # Login page
│   │   ├── DealerPortalLogin.jsx
│   │   ├── FAQ.jsx           # New FAQ page
│   │   ├── AboutUs.jsx
│   │   └── ContactUs.jsx
│   └── App.jsx               # With AuthProvider
│
└── package.json
```

---

## 🔐 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get current user (protected) |

### Example API Calls

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

## 🔒 How Authentication Works

1. **Registration:**
   - User fills registration form
   - Password is hashed using bcrypt
   - User saved to MongoDB
   - JWT token generated and sent to client
   - Token stored in localStorage

2. **Login:**
   - User provides email/password
   - Password verified against hashed password
   - JWT token generated on success
   - Token stored in localStorage

3. **Persistent Login:**
   - On page load, AuthContext checks for token in localStorage
   - If token exists, calls `/api/auth/me` to verify
   - If valid, user is logged in automatically
   - Different browsers = different localStorage = need to login again

4. **Logout:**
   - Token removed from localStorage
   - Cookie cleared on server
   - User state reset

---

## 🛠️ Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Verify MongoDB is running: `mongosh`
- Check connection string in `.env`
- For Atlas: verify IP whitelist and credentials

### Issue: "Network Error" on registration/login
**Solution:**
- Ensure backend server is running on port 5000
- Check CORS settings in `server/index.js`
- Verify API_BASE_URL in `src/utils/api.js`

### Issue: "Token expired" error
**Solution:**
- Tokens expire after 7 days
- User needs to login again
- Clear localStorage and login again

### Issue: Frontend not connecting to backend
**Solution:**
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`
- Check both servers are running
- Verify `API_BASE_URL` in `src/utils/api.js`

---

## 📦 Production Deployment

### Environment Variables for Production:

```env
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=very-long-random-secret-key-minimum-32-characters
NODE_ENV=production
```

### Security Checklist:
- ✅ Change JWT_SECRET to strong random string
- ✅ Use HTTPS in production
- ✅ Enable MongoDB authentication
- ✅ Set secure cookies (httpOnly, secure, sameSite)
- ✅ Implement rate limiting
- ✅ Add input validation and sanitization
- ✅ Use environment variables for sensitive data

---

## 📚 Next Steps

### Recommended Enhancements:
1. Email verification
2. Password reset functionality
3. Two-factor authentication
4. Account settings page
5. User profile management
6. Order history integration
7. Wishlist functionality

---

## ℹ️ Support

If you encounter any issues:
1. Check this documentation
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check console for error messages
5. Verify environment variables are set correctly

---

**Note:** All existing frontend pages remain unchanged. Only authentication functionality has been added.



