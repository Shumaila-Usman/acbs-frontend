# 🚀 Quick Start Guide - ACBS eCommerce

## ⚡ Get Running in 3 Steps

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (recommended)
3. Run the installer
4. Verify: Open a new terminal and run `node --version`

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ This takes ~2-3 minutes

### Step 3: Start Dev Server
```bash
npm run dev
```
🌐 Open `http://localhost:5173` in your browser

---

## ✅ What You'll See

### Homepage (`/`)
- ✨ Top offer bar with gradient
- 🔍 Search bar with logo
- 👤 Register dropdown (hover on desktop, click on mobile)
- 📋 6 categories with mega-menu dropdowns
- 🎨 Hero section with 2 promo cards
- 🏷️ 6 category tiles
- 🛍️ 8 featured products

### Other Pages
- `/login` - Login form
- `/register` - Registration form
- `/account` - Account dashboard
- `/dealer-portal-login` - Dealer portal

---

## 🎯 Key Features to Demo

### 1. Header Navigation (Desktop)
- Hover over any category in the black nav bar
- See the mega-menu with multiple columns
- Try "Skincare", "Nail Care", etc.

### 2. Register Dropdown (Desktop)
- Hover over "Register" button in top-right
- See the dropdown with greeting and menu items
- Notice the icons, badges, and descriptions

### 3. Mobile Experience
- Resize browser to mobile width (< 768px)
- Click hamburger menu (☰) to see mobile nav
- Click "Register" to see mobile drawer
- Expand categories to see accordion behavior

### 4. Search Functionality
- Type in search bar (currently logs to console)
- Notice the gradient search button

### 5. Responsive Design
- Test at different screen sizes:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

---

## 🎨 Brand Colors

The site uses your specified brand colors:

| Color | Hex | Usage |
|-------|-----|-------|
| Light Blue | `#0ea7e0` | Accents, hover states |
| Dark Blue | `#5631cf` | Accents, gradients |
| Gradient | `rgba(14,167,224,0.85) → rgba(86,49,207,0.85)` | Buttons, offer bar |

---

## 📁 Project Files Created

```
✅ Configuration (5 files)
   - package.json
   - vite.config.js
   - tailwind.config.js
   - postcss.config.js
   - .gitignore

✅ Data Files (3 files)
   - navData.js (6 categories)
   - accountMenuData.js (10 menu items)
   - mockProducts.js (8 products, 6 categories)

✅ Header Components (7 files)
   - Header.jsx
   - TopOfferBar.jsx
   - MainHeaderRow.jsx
   - CategoryNavBar.jsx
   - RegisterDropdown.jsx
   - MegaMenu.jsx
   - MobileNavDrawer.jsx

✅ Home Components (3 files)
   - HeroSection.jsx
   - CategoryTiles.jsx
   - FeaturedProducts.jsx

✅ Pages (5 files)
   - HomePage.jsx
   - Login.jsx
   - Register.jsx
   - Account.jsx
   - DealerPortalLogin.jsx

✅ Core Files (4 files)
   - App.jsx
   - main.jsx
   - index.css
   - Footer.jsx

✅ Documentation (4 files)
   - README.md
   - SETUP_INSTRUCTIONS.md
   - PROJECT_STRUCTURE.md
   - QUICK_START.md (this file)

📦 Total: 31 files, ~1,850 lines of code
```

---

## 🐛 Troubleshooting

### Issue: npm not found
**Solution:** Install Node.js (see Step 1 above)

### Issue: Port 5173 already in use
**Solution:** Vite will automatically use the next available port (5174, 5175, etc.)

### Issue: Styles not loading
**Solution:** 
1. Stop the dev server (Ctrl+C)
2. Delete `node_modules` folder
3. Run `npm install` again
4. Run `npm run dev`

### Issue: Changes not showing
**Solution:** Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📱 Testing Checklist

### Desktop Testing
- [ ] All 6 categories show mega-menu on hover
- [ ] Register dropdown opens on hover
- [ ] Search bar is centered
- [ ] All links work
- [ ] Images load correctly
- [ ] Hero cards display side-by-side
- [ ] Product grid shows 4 columns

### Tablet Testing (768px - 1024px)
- [ ] Layout adjusts properly
- [ ] Product grid shows 3 columns
- [ ] Category tiles show 3 columns
- [ ] Search bar still visible

### Mobile Testing (< 768px)
- [ ] Hamburger menu appears
- [ ] Mobile nav drawer works
- [ ] Register opens in drawer
- [ ] Product grid shows 2 columns
- [ ] Category tiles show 2 columns
- [ ] Search bar moves below header
- [ ] All text is readable

---

## 🎬 Demo Script (3 minutes)

### Part 1: Header Features (60 seconds)
1. "This is the ACBS eCommerce homepage"
2. "At the top, we have a promotional offer bar with a gradient"
3. "The main header has our logo, search bar, and register dropdown"
4. Hover over Register: "Here's the account menu with personalized greeting"
5. Hover over Skincare: "Categories have mega-menus with multiple columns"

### Part 2: Homepage Content (60 seconds)
6. Scroll down: "Two featured promo cards for current campaigns"
7. "Six category quick-access tiles"
8. "Featured products with images, prices, and add-to-cart"
9. Scroll to footer: "Complete footer with newsletter signup"

### Part 3: Responsive Design (60 seconds)
10. Resize to mobile: "Fully responsive design"
11. Click hamburger: "Mobile navigation with accordion categories"
12. Click Register: "Register menu becomes a slide-out drawer"
13. "Everything adapts beautifully to any screen size"

---

## 🚀 Ready to Deploy?

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

---

## 📞 Need Help?

Refer to these files:
- **README.md** - Overview and features
- **SETUP_INSTRUCTIONS.md** - Detailed setup guide
- **PROJECT_STRUCTURE.md** - Complete file structure

---

## 🎉 You're All Set!

Your demo-ready eCommerce homepage is complete with:
✅ Sephora-inspired header  
✅ Mega-menu navigation  
✅ Register dropdown  
✅ Responsive design  
✅ Clean, production-quality code  
✅ No linter errors  

**Break a leg with your demo! 🌟**

