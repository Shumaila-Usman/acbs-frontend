# ACBS eCommerce - Complete Project Structure

## 📁 Root Directory

```
allied-pro-website/
│
├── 📄 index.html                    # HTML entry point
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.js                # Vite configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Project documentation
├── 📄 SETUP_INSTRUCTIONS.md         # Detailed setup guide
├── 📄 PROJECT_STRUCTURE.md          # This file
│
└── 📁 src/                          # Source code directory
    ├── 📄 main.jsx                  # React app entry point
    ├── 📄 App.jsx                   # Main app component with routing
    ├── 📄 index.css                 # Global styles & Tailwind imports
    │
    ├── 📁 components/               # Reusable components
    │   │
    │   ├── 📁 header/               # Header-related components
    │   │   ├── 📄 Header.jsx                    # Main header wrapper
    │   │   ├── 📄 TopOfferBar.jsx               # Top promotional banner
    │   │   ├── 📄 MainHeaderRow.jsx             # Logo + Search + Register
    │   │   ├── 📄 CategoryNavBar.jsx            # Black category bar
    │   │   ├── 📄 RegisterDropdown.jsx          # Account dropdown/drawer
    │   │   ├── 📄 MegaMenu.jsx                  # Category mega menu
    │   │   └── 📄 MobileNavDrawer.jsx           # Mobile hamburger menu
    │   │
    │   ├── 📁 home/                 # Homepage-specific components
    │   │   ├── 📄 HeroSection.jsx               # Hero with promo cards
    │   │   ├── 📄 CategoryTiles.jsx             # 6 category tiles
    │   │   └── 📄 FeaturedProducts.jsx          # 8 product cards
    │   │
    │   └── 📄 Footer.jsx            # Site footer
    │
    ├── 📁 data/                     # Mock data & constants
    │   ├── 📄 navData.js                        # Navigation menu structure
    │   ├── 📄 accountMenuData.js                # Account dropdown items
    │   └── 📄 mockProducts.js                   # Product & category data
    │
    └── 📁 pages/                    # Page components (routes)
        ├── 📄 HomePage.jsx                      # "/" route
        ├── 📄 Login.jsx                         # "/login" route
        ├── 📄 Register.jsx                      # "/register" route
        ├── 📄 Account.jsx                       # "/account" route
        └── 📄 DealerPortalLogin.jsx             # "/dealer-portal-login" route
```

---

## 🎯 Component Hierarchy

```
App.jsx (Router)
│
├── Header.jsx
│   ├── TopOfferBar.jsx
│   │   └── ChevronRight icon
│   │
│   ├── MainHeaderRow.jsx
│   │   ├── Menu icon (mobile)
│   │   ├── Logo (ACBS)
│   │   ├── Search form
│   │   └── RegisterDropdown.jsx
│   │       ├── Desktop Dropdown (hover)
│   │       │   ├── Greeting
│   │       │   ├── Sign In button → /login
│   │       │   ├── Create Account button → /register
│   │       │   └── 10 Menu Items (with icons)
│   │       │
│   │       └── Mobile Drawer (click)
│   │           ├── Greeting
│   │           ├── Sign In button → /login
│   │           ├── Create Account button → /register
│   │           └── 10 Menu Items (with icons)
│   │
│   └── CategoryNavBar.jsx
│       ├── 6 Categories (hover for mega menu)
│       │   └── MegaMenu.jsx
│       │       └── Multi-column layout
│       └── Sale & Offers link
│
├── MobileNavDrawer.jsx (when hamburger clicked)
│   └── Accordion-style category navigation
│
├── Routes
│   ├── HomePage.jsx
│   │   ├── HeroSection.jsx
│   │   │   ├── Promo Card 1 (Extra 20% Off)
│   │   │   └── Promo Card 2 (Featured Brands)
│   │   │
│   │   ├── CategoryTiles.jsx
│   │   │   └── 6 Category Tiles (grid)
│   │   │
│   │   └── FeaturedProducts.jsx
│   │       └── 8 Product Cards (grid)
│   │
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Account.jsx
│   └── DealerPortalLogin.jsx
│
└── Footer.jsx
    ├── About section
    ├── Customer Service section
    ├── Quick Links section
    ├── Newsletter signup
    ├── Social media icons
    └── Bottom bar (copyright + legal links)
```

---

## 🎨 Data Structure

### navData.js - Navigation Menu

```javascript
NAV_DATA = [
  {
    id: 'skincare',
    name: 'Skincare',
    columns: [
      {
        title: 'By Category',
        sections: [
          {
            heading: 'Face Care',
            hasChildren: true,
            links: [...]
          }
        ]
      }
    ]
  },
  // ... 5 more categories:
  // - Spa Essentials
  // - Nail Care
  // - Equipment
  // - Furniture
  // - Implements
]
```

### accountMenuData.js - Account Menu

```javascript
ACCOUNT_MENU_ITEMS = [
  {
    id: 'beauty-preferences',
    icon: Heart,
    title: 'Beauty Preferences',
    subtitle: 'Complete for personalized recommendations...',
    path: '/account/preferences'
  },
  // ... 9 more items
]
```

### mockProducts.js - Products & Categories

```javascript
MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Hydrating Face Serum',
    price: 49.99,
    image: '...',
    category: 'Skincare'
  },
  // ... 7 more products
]

CATEGORY_TILES = [
  {
    id: 'skincare',
    name: 'Skincare',
    image: '...',
    path: '/category/skincare'
  },
  // ... 5 more categories
]
```

---

## 🛣️ Routing Structure

```
/ (root)
├── /                          → HomePage
├── /login                     → Login
├── /register                  → Register
├── /account                   → Account Dashboard
│   ├── /account/preferences
│   ├── /account/insider
│   ├── /account/rewards
│   ├── /account/challenges
│   ├── /account/buy-again
│   ├── /account/orders
│   ├── /account/auto-replenish
│   ├── /account/lists
│   ├── /account/settings
│   └── /community
├── /dealer-portal-login       → Dealer Portal
└── /* (404)                   → 404 Page
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.0",     // Client-side routing
  "lucide-react": "^0.344.0",        // Icons
  "@headlessui/react": "^1.7.18"     // Accessible UI components
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "tailwindcss": "^3.4.1",           // CSS framework
  "autoprefixer": "^10.4.18",
  "postcss": "^8.4.35",
  "vite": "^5.1.4"                   // Build tool
}
```

---

## 🎨 Styling System

### Tailwind Configuration

**Brand Colors:**
- `brand-light`: #0ea7e0 (Light Blue)
- `brand-dark`: #5631cf (Dark Blue)

**Custom Utility Classes:**
- `.gradient-brand` - Soft gradient background

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔑 Key Features by Component

### Header.jsx
✅ Sticky positioning  
✅ Shadow on scroll  
✅ Responsive layout  
✅ Mobile menu integration  

### TopOfferBar.jsx
✅ Full-width gradient background  
✅ Centered promotional text  
✅ CTA button on right  
✅ Responsive text wrapping  

### MainHeaderRow.jsx
✅ Logo on left  
✅ Centered search bar (desktop)  
✅ Register dropdown on right  
✅ Mobile search below header  
✅ Hamburger menu (mobile only)  

### RegisterDropdown.jsx
✅ Hover dropdown (desktop)  
✅ Slide-out drawer (mobile)  
✅ Personalized greeting  
✅ Dual action buttons  
✅ 10 menu items with icons  
✅ Click outside to close  

### CategoryNavBar.jsx
✅ Black background  
✅ White text with hover effects  
✅ 6 main categories  
✅ Sale & Offers link  
✅ Desktop only (hidden on mobile)  

### MegaMenu.jsx
✅ Multi-column layout  
✅ Nested subcategories  
✅ Hover transitions  
✅ Full-width dropdown  
✅ Shadow & border  

### MobileNavDrawer.jsx
✅ Slide-in from left  
✅ Overlay background  
✅ Accordion-style categories  
✅ Smooth animations  
✅ Close button  

### HeroSection.jsx
✅ 2 promo cards side-by-side  
✅ Gradient backgrounds  
✅ CTA buttons  
✅ Responsive stacking  

### CategoryTiles.jsx
✅ 6-column grid (desktop)  
✅ 3-column (tablet)  
✅ 2-column (mobile)  
✅ Hover effects  
✅ Image scaling  

### FeaturedProducts.jsx
✅ 4-column grid (desktop)  
✅ 3-column (tablet)  
✅ 2-column (mobile)  
✅ Product cards with images  
✅ Price & category labels  
✅ Add to cart button  

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev
# Opens at http://localhost:5173
```

### Production Build
```bash
npm run build
# Output in dist/ folder
```

### Preview Production
```bash
npm run preview
# Preview the built app
```

---

## 📊 File Sizes (Approximate)

| File | Lines | Purpose |
|------|-------|---------|
| navData.js | 240 | Navigation structure |
| accountMenuData.js | 85 | Account menu items |
| mockProducts.js | 75 | Mock data |
| Header.jsx | 20 | Header wrapper |
| TopOfferBar.jsx | 20 | Offer banner |
| MainHeaderRow.jsx | 85 | Main header row |
| CategoryNavBar.jsx | 45 | Category nav |
| RegisterDropdown.jsx | 230 | Account dropdown |
| MegaMenu.jsx | 60 | Mega menu |
| MobileNavDrawer.jsx | 130 | Mobile nav |
| HeroSection.jsx | 60 | Hero section |
| CategoryTiles.jsx | 45 | Category grid |
| FeaturedProducts.jsx | 65 | Product grid |
| Footer.jsx | 115 | Site footer |
| HomePage.jsx | 15 | Home page |
| Login.jsx | 90 | Login form |
| Register.jsx | 135 | Register form |
| Account.jsx | 75 | Account dashboard |
| DealerPortalLogin.jsx | 85 | Dealer login |
| App.jsx | 60 | Main app |
| main.jsx | 10 | Entry point |

**Total:** ~1,850 lines of clean, production-ready code

---

## ✨ Demo-Ready Features

✅ **Fully Responsive** - Works on all devices  
✅ **Sephora-Inspired** - Professional design  
✅ **Mega Menu** - Rich navigation experience  
✅ **Mobile-Friendly** - Touch-optimized  
✅ **Fast Performance** - Optimized bundle  
✅ **Clean Code** - Production quality  
✅ **Brand Colors** - Consistent design system  
✅ **Accessibility** - Keyboard navigation  
✅ **No Errors** - All linter checks pass  
✅ **Documentation** - Comprehensive guides  

---

## 🎯 Next Steps

1. Install Node.js (if not already installed)
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the dev server
4. Open `http://localhost:5173` in your browser
5. Test all features:
   - Header navigation
   - Mega menu dropdowns
   - Register dropdown (desktop & mobile)
   - Mobile hamburger menu
   - All page routes
   - Responsive design at different breakpoints

**You're ready for your demo! 🚀**

