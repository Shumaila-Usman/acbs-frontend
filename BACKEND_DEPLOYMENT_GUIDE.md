# 🚀 Backend Deployment Guide - Render.com

## Why Deploy the Backend?

Your frontend (website) is hosted on Vercel, but your backend (database/API) is only on your local computer. To make registration and login work on the live site, you need to deploy your backend to a public server.

---

## 📋 Step-by-Step: Deploy to Render.com (FREE)

### Step 1: Prepare Your GitHub Repository

**Option A: Create Separate Backend Repository (Recommended)**

1. Go to GitHub and create a **NEW repository** called `acbs-backend`
2. In your terminal, navigate to the server folder and initialize git:

```bash
cd "d:\2sri nokri\allied pro\website\server"
git init
git add .
git commit -m "Initial backend commit"
git remote add origin https://github.com/YOUR-USERNAME/acbs-backend.git
git branch -M main
git push -u origin main
```

**Option B: Use Your Existing Repository**

If you prefer, you can deploy from your existing repository - Render will let you specify the `server` folder as the root directory.

---

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with your **GitHub account** (easiest)

---

### Step 3: Create New Web Service

1. After logging in, click **"New +"** → **"Web Service"**
2. Connect your GitHub repository:
   - If Option A: Select `acbs-backend` repository
   - If Option B: Select your main repository and set root directory to `server`
3. Configure the service:

```
Name: alliedpro-backend (or any name you want)
Region: Choose closest to you (e.g., Oregon USA)
Branch: main
Root Directory: (leave empty for Option A, or "server" for Option B)
Runtime: Node
Build Command: npm install
Start Command: npm start
Instance Type: Free
```

4. Click **"Create Web Service"**

---

### Step 4: Configure Environment Variables

Before the service fully deploys, you need to add environment variables:

1. On your Render dashboard, click your new web service
2. Go to **"Environment"** tab
3. Add these environment variables (click "Add Environment Variable" for each):

#### Required Variables:

| Key | Value | Example |
|-----|-------|---------|
| `MONGODB_URI` | Your MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/alliedpro` |
| `JWT_SECRET` | A random secure string | `your-super-secret-jwt-key-12345` |
| `PORT` | `10000` | `10000` (Render uses this port) |
| `NODE_ENV` | `production` | `production` |

#### Email Variables (Optional - for sending dealer IDs):

| Key | Value |
|-----|-------|
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASSWORD` | Gmail App Password |
| `EMAIL_FROM` | Same as EMAIL_USER |

5. Click **"Save Changes"**
6. Render will automatically redeploy with the new variables

---

### Step 5: Wait for Deployment

- Watch the **Logs** tab
- Wait 2-5 minutes for deployment to complete
- Look for: ✅ "Server is running on port 10000"
- Look for: ✅ "MongoDB connected successfully"

---

### Step 6: Get Your Backend URL

Once deployed successfully:

1. At the top of your Render service page, you'll see a URL like:
   ```
   https://alliedpro-backend.onrender.com
   ```
2. **COPY THIS URL** - you'll need it for the next step!

---

### Step 7: Configure Vercel to Use Your Backend

1. Go to [vercel.com](https://vercel.com)
2. Open your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:

```
Key: VITE_API_URL
Value: https://alliedpro-backend.onrender.com/api
```

**IMPORTANT:** Add `/api` at the end!

5. Save the variable
6. Go to **Deployments** tab
7. Click **"..."** on the latest deployment → **"Redeploy"**
8. Wait 1-2 minutes for redeployment

---

## ✅ Testing Your Deployment

After both Render and Vercel deployments finish:

1. Visit your live website on Vercel
2. Try to register as a dealer
3. Fill out the form and submit
4. Should see success message! ✅

---

## 🐛 Troubleshooting

### Problem: "Server is not running" in Render logs

**Check:**
- Is `MONGODB_URI` correct?
- Is `JWT_SECRET` set?
- Check the **Logs** tab for specific error messages

### Problem: Registration still failing on live site

**Check:**
1. Is your Render service showing "Live" status? (green dot)
2. Did you add `/api` to the end of VITE_API_URL in Vercel?
3. Did you redeploy Vercel after adding the environment variable?
4. Check browser console (F12) for error messages

### Problem: CORS errors

Your backend already has CORS configured for `.vercel.app` domains, so this should work automatically.

---

## 💡 Important Notes

### Free Tier Limitations:

- **Render Free Tier:** Server "sleeps" after 15 minutes of inactivity
- **First request after sleep:** Takes 30-60 seconds to "wake up"
- **Solution:** Keep your site active, or upgrade to paid tier ($7/month)

### MongoDB Connection:

Make sure your MongoDB Atlas:
1. Allows connections from **0.0.0.0/0** (all IPs)
2. Has the correct username/password in connection string

### Security:

- ✅ Never commit `.env` files to GitHub
- ✅ Keep `JWT_SECRET` secure and random
- ✅ Use strong database passwords

---

## 📞 Need Help?

If you get stuck at any step, share:
1. Screenshot of Render logs
2. Error message from browser console (F12)
3. Which step you're stuck on

I'll help you troubleshoot!

