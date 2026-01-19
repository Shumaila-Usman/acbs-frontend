# ✅ Deployment Checklist

## Quick Reference - What You Need to Do

### Current Status:
- ✅ Frontend deployed on Vercel
- ❌ Backend NOT deployed (causing registration failures)

---

## 🎯 To-Do List

### [ ] 1. Deploy Backend to Render.com

**Time Required:** 10-15 minutes

1. [ ] Create Render.com account (use GitHub login)
2. [ ] Create new Web Service
3. [ ] Connect your GitHub repository
4. [ ] Add environment variables:
   - [ ] `MONGODB_URI` - Your MongoDB connection string
   - [ ] `JWT_SECRET` - Any random secure string (e.g., `mysecretkey123456`)
   - [ ] `PORT` - Set to `10000`
   - [ ] `NODE_ENV` - Set to `production`
5. [ ] Wait for deployment (2-5 minutes)
6. [ ] Copy your backend URL (e.g., `https://alliedpro-backend.onrender.com`)

**Detailed guide:** See `BACKEND_DEPLOYMENT_GUIDE.md`

---

### [ ] 2. Configure Vercel Environment Variable

**Time Required:** 2 minutes

1. [ ] Go to Vercel project → Settings → Environment Variables
2. [ ] Add variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://YOUR-BACKEND-URL.onrender.com/api` (with `/api` at end!)
3. [ ] Save
4. [ ] Redeploy Vercel (Deployments → ... → Redeploy)

---

### [ ] 3. Test Everything

**Time Required:** 2 minutes

1. [ ] Visit your live website
2. [ ] Try dealer registration
3. [ ] Try regular user registration
4. [ ] Try login
5. [ ] Check dealer portal access

---

## 🚨 Common Issues & Solutions

### Issue: "Can't connect to MongoDB" in Render logs

**Solution:**
1. Go to MongoDB Atlas → Network Access
2. Add IP: `0.0.0.0/0` (allow all IPs)
3. Redeploy Render service

### Issue: Registration still failing after deployment

**Solution:**
1. Check Render service status (should show green "Live")
2. Verify `VITE_API_URL` in Vercel includes `/api` at end
3. Open browser console (F12) → check for specific error
4. Share error message with me

### Issue: "Server sleeping" / Slow first request

**Solution:**
- This is normal for Render free tier
- Server wakes up after first request (30-60 seconds)
- Keep site active or upgrade to paid tier

---

## 📋 Required Information

Before deploying, have these ready:

### MongoDB Atlas:
- [ ] Connection string (starts with `mongodb+srv://`)
- [ ] Database user/password created
- [ ] Network access configured (0.0.0.0/0)

### JWT Secret:
- [ ] Any random string (e.g., `alliedpro-secret-key-2024`)

### GitHub:
- [ ] Repository with backend code
- [ ] Render connected to GitHub account

---

## ⏱️ Total Time Estimate

- First time setup: **15-20 minutes**
- Already familiar: **5-10 minutes**

---

## 🆘 Stuck? Here's What to Share:

1. **Screenshot** of Render logs
2. **URL** of your deployed backend
3. **Error message** from browser console
4. **Which step** you're stuck on

I'll help you fix it immediately!








