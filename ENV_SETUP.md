# Environment Variables Setup

## Frontend Environment Variables

### For Local Development

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### For Vercel Production Deployment

Go to your Vercel project settings and add this environment variable:

**Key:** `VITE_API_URL`
**Value:** Your deployed backend URL (e.g., `https://your-backend.onrender.com/api`)

## Backend Deployment

Your backend (server folder) needs to be deployed separately on a platform like:
- Render (Recommended for Node.js)
- Railway
- Heroku
- DigitalOcean

After deploying your backend, use that URL for the `VITE_API_URL` variable in Vercel.

## Important Notes

1. **Vite Environment Variables:** Must start with `VITE_` to be exposed to the client
2. **Restart Dev Server:** After changing `.env.local`, restart `npm run dev`
3. **Vercel Redeploy:** After adding env variables in Vercel, trigger a new deployment

