# 🚀 Quick Start Guide

## ✅ What's Done

### 1. FAQ Page Created ✅
- New page at `/faq`
- FAQs moved from Contact Us page
- Linked in footer

### 2. MongoDB Authentication System ✅
- User registration working
- User login working
- Auto-login on same browser
- Logout functionality
- JWT token authentication

---

## 📋 Quick Setup (5 Minutes)

### Step 1: Install MongoDB (if not installed)

**Windows:**
1. Download: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB Compass will be installed too (optional GUI)

**Or use MongoDB Atlas (Cloud - Free):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string

### Step 2: Setup Environment

```bash
# Create .env file in server folder
cd server
copy .env.example .env
```

Edit `server/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/alliedpro
JWT_SECRET=change-this-to-a-random-secret-key-12345
NODE_ENV=development
```

### Step 3: Run Everything

**Option A: Automatic (Windows)**
```bash
# Double-click this file:
start-dev.bat
```

**Option B: Manual**

Terminal 1 - Backend:
```bash
cd server
npm install
npm run dev
```

Terminal 2 - Frontend:
```bash
npm install
npm run dev
```

---

## 🎯 Test It!

1. **Open:** http://localhost:5173
2. **Register:** http://localhost:5173/register
   - Create account with any email/password
3. **Check:** You're automatically logged in!
4. **Close browser and reopen:** Still logged in!
5. **Open different browser:** Need to login again ✓

---

## 📊 View Your Data

### Using MongoDB Compass (GUI):
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Database: `alliedpro`
4. Collection: `users`
5. See your registered users!

### Using mongosh (Terminal):
```bash
mongosh
use alliedpro
db.users.find().pretty()
```

---

## 🔥 Features Working Now

✅ User Registration
✅ User Login  
✅ Auto-login (same browser)
✅ Secure password hashing
✅ JWT token authentication
✅ Logout functionality
✅ FAQ page
✅ All original pages intact

---

## 🎨 Pages

| Page | URL | Status |
|------|-----|--------|
| Home | `/` | ✅ Working |
| About Us | `/about` | ✅ Working |
| Contact | `/contact` | ✅ Working |
| FAQ | `/faq` | ✅ NEW |
| Register | `/register` | ✅ With MongoDB |
| Login | `/login` | ✅ With MongoDB |
| Dealer Login | `/dealer-portal-login` | ✅ With MongoDB |
| Account | `/account` | ✅ Protected |

---

## ⚠️ Important Notes

1. **Backend must be running** for login/register to work
2. **MongoDB must be running** for authentication
3. **Two terminals** needed (frontend + backend)
4. **Different browsers = different localStorage** = need to login separately

---

## 🐛 Common Issues

**"Cannot connect to MongoDB"**
→ Start MongoDB service: `net start MongoDB` (Windows as admin)

**"Network Error" on login**
→ Backend server not running. Start it: `cd server && npm run dev`

**"Port 5000 already in use"**
→ Change PORT in `server/.env` to 5001 or another port

---

## 📝 Test Credentials

After you register, you can use your own credentials.

Example:
- Email: test@alliedpro.com
- Password: test123456

---

## ✨ All Done!

Your authentication system is fully functional with MongoDB integration!

For detailed documentation, see: `AUTHENTICATION_SETUP.md`
