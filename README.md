# ACBS - Beauty & Spa Supplies eCommerce

A modern, responsive eCommerce homepage built with React, Vite, and Tailwind CSS. Inspired by Sephora's clean design and user experience.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Sephora-Inspired Header**:
  - Top offer bar with promotional messaging
  - Main header with logo, search bar, and register dropdown
  - Category navigation with mega-menu dropdowns
  - Mobile-friendly hamburger menu
- **Register Dropdown**: Mimics Sephora's account menu with personalized greeting and quick links
- **Mega Menu**: Multi-column dropdown menus for categories with nested subcategories
- **Homepage Sections**:
  - Hero section with promotional cards
  - Category quick tiles
  - Featured products grid
- **Additional Pages**: Login, Register, Account, and Dealer Portal Login

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Headless UI** - Unstyled accessible UI components

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx              # Main header component
│   │   ├── TopOfferBar.jsx         # Promotional top bar
│   │   ├── MainHeaderRow.jsx       # Logo, search, register
│   │   ├── CategoryNavBar.jsx      # Category navigation
│   │   ├── RegisterDropdown.jsx    # Account dropdown menu
│   │   ├── MegaMenu.jsx            # Category mega menu
│   │   └── MobileNavDrawer.jsx     # Mobile navigation drawer
│   └── home/
│       ├── HeroSection.jsx         # Homepage hero with promos
│       ├── CategoryTiles.jsx       # Category grid
│       └── FeaturedProducts.jsx    # Product cards
├── data/
│   ├── navData.js                  # Navigation menu data
│   ├── accountMenuData.js          # Account menu items
│   └── mockProducts.js             # Mock product data
├── pages/
│   ├── HomePage.jsx                # Main homepage
│   ├── Login.jsx                   # Login page
│   ├── Register.jsx                # Registration page
│   ├── Account.jsx                 # Account dashboard
│   └── DealerPortalLogin.jsx       # Dealer portal
├── App.jsx                         # Main app with routing
├── main.jsx                        # App entry point
└── index.css                       # Global styles & Tailwind

## Brand Colors

- Light Blue: `#0ea7e0`
- Dark Blue: `#5631cf`

Used as a soft gradient: `linear-gradient(90deg, rgba(14,167,224,0.85), rgba(86,49,207,0.85))`

## Key Features

### Header Behavior

1. **Top Offer Bar**: Displays promotional messages and CTAs
2. **Main Header**: Contains logo, search functionality, and register dropdown
3. **Category Nav**: Black navigation bar with hover mega-menus
4. **Sticky Header**: Header stays visible while scrolling

### Register Dropdown

- Desktop: Hover to reveal dropdown with greeting, action buttons, and menu items
- Mobile: Click to open slide-out drawer with the same content
- Includes icons, titles, subtitles, and badges for each menu item

### Mega Menu

- Multi-column layout for organized category browsing
- Nested subcategories with visual hierarchy
- Smooth hover transitions

### Responsive Design

- Mobile-first approach
- Hamburger menu for mobile navigation
- Collapsible category accordion on mobile
- Responsive grid layouts for products and categories

## Customization

- Modify brand colors in `tailwind.config.js`
- Update navigation structure in `src/data/navData.js`
- Add/remove account menu items in `src/data/accountMenuData.js`
- Customize product data in `src/data/mockProducts.js`

## Notes

This is a **frontend-only** demonstration. No backend or API integration is included. All data is mocked and stored in local data files.

## License

This project is for demonstration purposes only.

