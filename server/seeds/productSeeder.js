const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const Product = require('../models/Product');

const products = [
  // SKINCARE - Face Masks
  { productId: 'sk-001', name: 'Hyaluronic Acid Gel Mask 30ml', price: 24.99, description: 'Promotes healthier and supple skin', image: '/products/skincare/face-mask-1.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-002', name: 'Hyaluronic Acid Gel Mask 500ml', price: 89.99, description: 'Promotes healthier and supple skin - Professional size', image: '/products/skincare/face-mask-1.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-003', name: 'Golden Firming Gel Mask 30ml', price: 29.99, description: 'Improves skin tone and adds radiance', image: '/products/skincare/face-mask-2.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-004', name: 'Golden Firming Gel Mask 500ml', price: 99.99, description: 'Improves skin tone and adds radiance - Professional size', image: '/products/skincare/face-mask-2.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-005', name: 'Compressed Dry Sheet Masks', price: 15.99, description: 'Individually packed; great for travel', image: '/products/skincare/sheet-mask.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-006', name: 'Nonwoven Dry Sheet Mask - White', price: 12.99, description: 'Available for multi-use applications', image: '/products/skincare/sheet-mask-white.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  { productId: 'sk-007', name: 'Nonwoven Dry Sheet Mask - Black', price: 12.99, description: 'Available for multi-use applications', image: '/products/skincare/sheet-mask-black.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Face Masks', subcategoryId: 'face-masks' },
  
  // SKINCARE - Eye Care
  { productId: 'sk-008', name: 'Nonwoven Dry Under Eye Pad', price: 18.99, description: 'For multi-use eye treatments', image: '/products/skincare/eye-pad.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Eye Care', subcategoryId: 'eye-care' },
  { productId: 'sk-009', name: 'Under-Eye Press Electric Jade', price: 45.99, description: 'Specifically for de-puffing the eye area', image: '/products/skincare/eye-press.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Eye Care', subcategoryId: 'eye-care' },
  { productId: 'sk-010', name: 'Under-Eye Disc Electric Jade', price: 42.99, description: 'Specifically for de-puffing the eye area', image: '/products/skincare/eye-disc.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Eye Care', subcategoryId: 'eye-care' },
  
  // SKINCARE - Tools & Accessories
  { productId: 'sk-011', name: 'Cellulose Sponge', price: 8.99, description: 'Lightly exfoliates; suitable for all skin types', image: '/products/skincare/sponge.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  { productId: 'sk-012', name: 'Facial Brush - Synthetic', price: 14.99, description: 'Used for gentle exfoliation', image: '/products/skincare/brush-synthetic.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  { productId: 'sk-013', name: 'Facial Brush - Natural', price: 19.99, description: 'Used for natural exfoliation', image: '/products/skincare/brush-natural.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  { productId: 'sk-014', name: 'Ice Globes', price: 34.99, description: 'Calms skin and stimulates circulation', image: '/products/skincare/ice-globes.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  { productId: 'sk-015', name: 'Disposable Headbands', price: 12.99, description: 'Professional/Treatment use - Pack of 100', image: '/products/skincare/headbands.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  { productId: 'sk-016', name: 'Mixing Bowl Set', price: 16.99, description: 'For mask preparation', image: '/products/skincare/mixing-bowl.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Tools & Accessories', subcategoryId: 'skincare-tools' },
  
  // SKINCARE - Massage & Contouring
  { productId: 'sk-017', name: 'Gua Sha Stone - Dolphin', price: 24.99, description: 'For contouring jawlines and cheekbones', image: '/products/skincare/gua-sha-dolphin.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-018', name: 'Gua Sha Stone - Concave', price: 22.99, description: 'Multi-purpose (nose, fingers, toes)', image: '/products/skincare/gua-sha-concave.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-019', name: 'Gua Sha Stone - S Shaped', price: 26.99, description: 'Multi-purpose (hands, feet, back, neck)', image: '/products/skincare/gua-sha-s.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-020', name: 'Jade Roller - Green', price: 28.99, description: 'Toning and lifting effect', image: '/products/skincare/jade-roller-green.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-021', name: 'Jade Roller - Rose Quartz', price: 32.99, description: 'Toning and lifting effect', image: '/products/skincare/jade-roller-rose.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-022', name: 'Jade Roller - White', price: 28.99, description: 'Toning and lifting effect', image: '/products/skincare/jade-roller-white.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-023', name: '2-in-1 Electric Jade Roller', price: 49.99, description: 'Vibrating roller for circulation with 2 attachment heads', image: '/products/skincare/electric-jade-2in1.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },
  { productId: 'sk-024', name: 'T/U Electric Jade Roller', price: 54.99, description: 'For lymphatic drainage on forehead, cheeks, and jaw', image: '/products/skincare/electric-jade-tu.jpg', category: 'Skincare', categoryId: 'skincare', subcategory: 'Massage & Contouring', subcategoryId: 'massage-contouring' },

  // SPA PRODUCTS - Waxing & Paraffin
  { productId: 'sp-001', name: 'SilkRoma Depilatory Honey Wax', price: 34.99, description: 'Soft wax for coarse/curly hair', image: '/products/spa/honey-wax.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-002', name: 'SilkRoma Depilatory Cream Wax', price: 32.99, description: 'Low heat; best for sensitive skin', image: '/products/spa/cream-wax.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-003', name: 'SilkRoma Depilatory Zinc Wax', price: 36.99, description: 'Soothing; for fine to medium hair', image: '/products/spa/zinc-wax.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-004', name: 'Roma Azulene Wax', price: 38.99, description: 'Reduces redness and inflammation', image: '/products/spa/azulene-wax.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-005', name: 'Roll-on Wax - Pink', price: 14.99, description: 'Water-soluble roll-on application', image: '/products/spa/roll-on-pink.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-006', name: 'Roll-on Wax - Honey', price: 14.99, description: 'Water-soluble roll-on application', image: '/products/spa/roll-on-honey.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-007', name: 'Roll-on Wax - Azulene', price: 15.99, description: 'Water-soluble roll-on application', image: '/products/spa/roll-on-azulene.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-008', name: 'Roll-on Wax - Banana', price: 14.99, description: 'Water-soluble roll-on application', image: '/products/spa/roll-on-banana.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-009', name: 'Epilating Cotton Roll - Hard', price: 24.99, description: 'Premium quality fabric', image: '/products/spa/cotton-roll.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-010', name: 'Epilating Cotton Roll - Soft', price: 22.99, description: 'Premium quality fabric', image: '/products/spa/cotton-roll.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-011', name: 'Epilating Cotton Roll - Medium', price: 23.99, description: 'Premium quality fabric', image: '/products/spa/cotton-roll.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-012', name: 'Pre-Cut Waxing Strips', price: 18.99, description: 'High-quality nonwoven material', image: '/products/spa/waxing-strips.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-013', name: 'Paraffin Hand & Foot Liners', price: 12.99, description: 'Plastic disposable liners', image: '/products/spa/paraffin-liners.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-014', name: 'Terry Booties', price: 19.99, description: 'Insulated for paraffin wax therapy', image: '/products/spa/terry-booties.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-015', name: 'Terry Mitts', price: 17.99, description: 'Insulated for paraffin wax therapy', image: '/products/spa/terry-mitts.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },
  { productId: 'sp-016', name: 'Paraffin Brush', price: 8.99, description: 'Reusable; for block or pellet paraffin', image: '/products/spa/paraffin-brush.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Treatment Products (Waxing & Paraffin)', subcategoryId: 'waxing-paraffin' },

  // SPA PRODUCTS - Body Wraps & Spa Creams
  { productId: 'sp-017', name: 'Body Shrink Roll', price: 29.99, description: 'Used for body treatments', image: '/products/spa/body-shrink-roll.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Body Wraps & Spa Creams', subcategoryId: 'body-wraps-creams' },
  { productId: 'sp-018', name: 'Thermal Foil Sheet Blanket', price: 34.99, description: 'Heat reflective for treatments', image: '/products/spa/thermal-blanket.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Body Wraps & Spa Creams', subcategoryId: 'body-wraps-creams' },
  { productId: 'sp-019', name: 'Body Brush - Large', price: 18.99, description: 'For dry brushing and exfoliating', image: '/products/spa/body-brush.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Body Wraps & Spa Creams', subcategoryId: 'body-wraps-creams' },
  { productId: 'sp-020', name: 'Body Brush - Small', price: 14.99, description: 'For dry brushing and exfoliating', image: '/products/spa/body-brush.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Body Wraps & Spa Creams', subcategoryId: 'body-wraps-creams' },
  { productId: 'sp-021', name: 'Exfoliating Gloves', price: 9.99, description: 'Excellent for skin exfoliation', image: '/products/spa/exfoliating-gloves.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Body Wraps & Spa Creams', subcategoryId: 'body-wraps-creams' },

  // SPA PRODUCTS - Hot Stones
  { productId: 'sp-022', name: 'Hot Stones Set', price: 64.99, description: 'Basalt stones, smooth and flat', image: '/products/spa/hot-stones.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Hot Stones', subcategoryId: 'hot-stones' },

  // SPA PRODUCTS - Towels, Robes & Linens
  { productId: 'sp-023', name: 'Spa Towels Set', price: 44.99, description: 'Various sizes, high quality', image: '/products/spa/towels.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-024', name: 'Pedicure Disposable Towels', price: 24.99, description: 'High quality and disposable', image: '/products/spa/pedi-towels.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-025', name: 'Terry Gown Wrap', price: 39.99, description: 'Absorbent with Velcro strap', image: '/products/spa/gown-wrap.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-026', name: 'Terry Headbands', price: 14.99, description: 'Soft and thick with Velcro', image: '/products/spa/terry-headbands.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-027', name: 'Cotton Flat Sheets', price: 29.99, description: 'Breathable fabric', image: '/products/spa/cotton-sheets.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-028', name: 'Terry Fitted Bed Sheet', price: 34.99, description: 'Available with face hole', image: '/products/spa/terry-bed-sheet.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-029', name: 'Jersey Fitted Bed Sheet', price: 32.99, description: 'Light and comfortable', image: '/products/spa/jersey-bed-sheet.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-030', name: 'Soft Cotton Thermal Weave Blanket', price: 54.99, description: 'Denser, hypoallergenic feel', image: '/products/spa/thermal-blanket-cotton.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },
  { productId: 'sp-031', name: 'Waffle Blanket', price: 49.99, description: 'Great for client use', image: '/products/spa/waffle-blanket.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Towels, Robes & Linens', subcategoryId: 'towels-robes-linens' },

  // SPA PRODUCTS - Slippers & Disposables
  { productId: 'sp-032', name: 'Disposable Bouffant Cap', price: 12.99, description: 'For product protection - Pack of 100', image: '/products/spa/bouffant-cap.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-033', name: 'Disposable Shower Cap', price: 11.99, description: 'For product protection - Pack of 100', image: '/products/spa/shower-cap.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-034', name: 'G-String Panties', price: 14.99, description: 'Skin-friendly and hygienic - Pack of 50', image: '/products/spa/g-string.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-035', name: 'Nonwoven Shorts', price: 16.99, description: 'Skin-friendly and hygienic - Pack of 50', image: '/products/spa/nonwoven-shorts.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-036', name: 'Nonwoven Disposable Gown', price: 22.99, description: 'Soft and hygienic - Pack of 10', image: '/products/spa/disposable-gown.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-037', name: 'Nonwoven Disposable Bra', price: 14.99, description: 'Soft and hygienic - Pack of 50', image: '/products/spa/disposable-bra.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-038', name: 'Nonwoven Body Sheet Roll', price: 34.99, description: 'For salon/spa beds', image: '/products/spa/body-sheet-roll.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },
  { productId: 'sp-039', name: 'Washable Cotton Fitted Face Cover', price: 18.99, description: 'For massage tables', image: '/products/spa/face-cover.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Slippers & Disposables', subcategoryId: 'slippers-disposables' },

  // SPA PRODUCTS - Small Tools & Sundries
  { productId: 'sp-040', name: 'Plastic Spatulas', price: 6.99, description: 'For product application', image: '/products/spa/spatula.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-041', name: 'Wooden Spatulas', price: 5.99, description: 'Disposable - Pack of 100', image: '/products/spa/wooden-spatula.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-042', name: 'Stainless Steel Spatula', price: 12.99, description: 'Professional reusable', image: '/products/spa/steel-spatula.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-043', name: 'Fan Brush', price: 9.99, description: 'For mask application', image: '/products/spa/fan-brush.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-044', name: 'Glass Dappen Dish', price: 8.99, description: 'For mixing substances', image: '/products/spa/dappen-dish.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-045', name: 'Mixing Palette', price: 11.99, description: 'For blending colors', image: '/products/spa/mixing-palette.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-046', name: 'Mascara Wands', price: 8.99, description: 'Disposable - Pack of 50', image: '/products/spa/mascara-wands.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },
  { productId: 'sp-047', name: 'Cotton Swabs', price: 4.99, description: 'Professional quality - Pack of 500', image: '/products/spa/cotton-swabs.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Small Tools & Disposable Sundries', subcategoryId: 'small-tools-sundries' },

  // SPA PRODUCTS - Warmers & Hot Towel Cabinets
  { productId: 'sp-048', name: 'Double Metal Wax Heater', price: 89.99, description: 'Quick heating with lid/pot', image: '/products/spa/wax-heater-double.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Warmers & Hot Towel Cabinets', subcategoryId: 'warmers-towel-cabinets' },
  { productId: 'sp-049', name: 'Single Metal Wax Heater', price: 59.99, description: 'Quick heating with lid/pot', image: '/products/spa/wax-heater-single.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Warmers & Hot Towel Cabinets', subcategoryId: 'warmers-towel-cabinets' },
  { productId: 'sp-050', name: 'Paraffin Heater', price: 79.99, description: 'Designed for melting paraffin wax', image: '/products/spa/paraffin-heater.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Warmers & Hot Towel Cabinets', subcategoryId: 'warmers-towel-cabinets' },
  { productId: 'sp-051', name: 'Hot Stone Heater 18q', price: 129.99, description: 'Large with adjustable temperature', image: '/products/spa/stone-heater-large.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Warmers & Hot Towel Cabinets', subcategoryId: 'warmers-towel-cabinets' },
  { productId: 'sp-052', name: 'Hot Stone Heater 6q', price: 89.99, description: 'Small with adjustable temperature', image: '/products/spa/stone-heater-small.jpg', category: 'Spa Products', categoryId: 'spa-products', subcategory: 'Warmers & Hot Towel Cabinets', subcategoryId: 'warmers-towel-cabinets' },

  // NAIL PRODUCTS - Cuticle & Treatments
  { productId: 'np-001', name: 'Argan Oil Hand Mask', price: 14.99, description: '1 pair of gloves for moisturizing', image: '/products/nails/hand-mask.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },
  { productId: 'np-002', name: 'Honey & Almond Hand Mask', price: 14.99, description: '1 pair of gloves for moisturizing', image: '/products/nails/hand-mask.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },
  { productId: 'np-003', name: 'Teatree Exfoliating Foot Mask', price: 16.99, description: 'Anti-inflammatory and antibacterial booties', image: '/products/nails/foot-mask.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },
  { productId: 'np-004', name: 'Lavender Exfoliating Foot Mask', price: 15.99, description: 'Moisturizing booties', image: '/products/nails/foot-mask.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },
  { productId: 'np-005', name: 'Hindu Stone', price: 12.99, description: 'Specifically for cuticle care', image: '/products/nails/hindu-stone.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },
  { productId: 'np-006', name: 'Wooden Manicure Stick', price: 5.99, description: 'Disposable - Pack of 100', image: '/products/nails/manicure-stick.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Care (Cuticle & Treatments)', subcategoryId: 'cuticle-treatments' },

  // NAIL PRODUCTS - Files & Buffers
  { productId: 'np-007', name: 'Nail Files Assorted Pack', price: 12.99, description: 'Various kinds and grits', image: '/products/nails/nail-files.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },
  { productId: 'np-008', name: 'Zebra Files - Straight 100/180', price: 8.99, description: 'Professional grit combination', image: '/products/nails/zebra-files.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },
  { productId: 'np-009', name: 'Zebra Files - Curved 100/180', price: 9.99, description: 'Professional grit combination', image: '/products/nails/zebra-files.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },
  { productId: 'np-010', name: 'Nail Buffer - Blue', price: 6.99, description: 'Professional quality', image: '/products/nails/buffer.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },
  { productId: 'np-011', name: '4-Way Nail Buffer', price: 8.99, description: 'Multi-sided for various finishes', image: '/products/nails/4-way-buffer.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },
  { productId: 'np-012', name: 'Glass Nail File - Large', price: 11.99, description: 'High-quality glass in various colors', image: '/products/nails/glass-file.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Files & Buffers', subcategoryId: 'files-buffers' },

  // NAIL PRODUCTS - Nail Art
  { productId: 'np-013', name: 'Nail Art Tool - Dotting', price: 7.99, description: 'Double-sided dotting tool', image: '/products/nails/dotting-tool.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Art', subcategoryId: 'nail-art' },
  { productId: 'np-014', name: 'Nail Art Tip Display - 18 Tips', price: 14.99, description: 'For displaying nail designs', image: '/products/nails/tip-display.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Art', subcategoryId: 'nail-art' },
  { productId: 'np-015', name: 'Nail-Tip Wheel', price: 6.99, description: 'For displaying designs', image: '/products/nails/tip-wheel.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Nail Art', subcategoryId: 'nail-art' },

  // NAIL PRODUCTS - Pedicure Tools
  { productId: 'np-016', name: '2-Sided Callus Remover Foot File', price: 14.99, description: 'Fine and coarse sand finishes', image: '/products/nails/callus-remover.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Pedicure Tools (Exfoliation & Care)', subcategoryId: 'pedicure-tools' },
  { productId: 'np-017', name: 'SilkB Micro-plane Colossal Foot File', price: 24.99, description: 'Professional grade for callused skin', image: '/products/nails/micro-plane.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Pedicure Tools (Exfoliation & Care)', subcategoryId: 'pedicure-tools' },
  { productId: 'np-018', name: 'Stainless Steel Pedicure Foot File', price: 19.99, description: 'Professional quality; easy to sanitize', image: '/products/nails/steel-foot-file.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Pedicure Tools (Exfoliation & Care)', subcategoryId: 'pedicure-tools' },
  { productId: 'np-019', name: 'Pumice Stone', price: 5.99, description: 'Abrasive stone for exfoliating heels', image: '/products/nails/pumice-stone.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Pedicure Tools (Exfoliation & Care)', subcategoryId: 'pedicure-tools' },

  // NAIL PRODUCTS - Stations & Storage
  { productId: 'np-020', name: 'Nail Polish Table Rack', price: 49.99, description: 'High-quality storage for bottles', image: '/products/nails/table-rack.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Stations & Storage', subcategoryId: 'stations-storage' },
  { productId: 'np-021', name: 'Nail Bit Holder - 48 holes', price: 19.99, description: 'Storage for drill bits', image: '/products/nails/bit-holder.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Stations & Storage', subcategoryId: 'stations-storage' },
  { productId: 'np-022', name: 'Manicure Hand Rest', price: 24.99, description: 'Portable support for manicures', image: '/products/nails/hand-rest.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Stations & Storage', subcategoryId: 'stations-storage' },
  { productId: 'np-023', name: 'Practice Hand', price: 29.99, description: 'High-quality tool for training', image: '/products/nails/practice-hand.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Stations & Storage', subcategoryId: 'stations-storage' },

  // NAIL PRODUCTS - Manicure & Pedicure Accessories
  { productId: 'np-024', name: 'Manicure Bowl - 5-Finger', price: 12.99, description: 'Well molded design', image: '/products/nails/mani-bowl.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Manicure & Pedicure Accessories', subcategoryId: 'mani-pedi-accessories' },
  { productId: 'np-025', name: 'Stainless Steel Pedicure Bowl', price: 44.99, description: 'Professional and easy to clean', image: '/products/nails/pedi-bowl.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Manicure & Pedicure Accessories', subcategoryId: 'mani-pedi-accessories' },
  { productId: 'np-026', name: 'Toe Separators', price: 6.99, description: 'Lightweight and firm - Pack of 12', image: '/products/nails/toe-separators.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Manicure & Pedicure Accessories', subcategoryId: 'mani-pedi-accessories' },
  { productId: 'np-027', name: 'Pump Bottle 4oz', price: 4.99, description: 'For dispensing liquids', image: '/products/nails/pump-bottle.jpg', category: 'Nail Products', categoryId: 'nail-products', subcategory: 'Manicure & Pedicure Accessories', subcategoryId: 'mani-pedi-accessories' },

  // EQUIPMENT - Facial Equipment
  { productId: 'eq-001', name: 'Ionic Facial Steamer', price: 189.99, description: 'Features ozone function with adjustable height', image: '/products/equipment/ionic-steamer.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Facial Equipment', subcategoryId: 'facial' },
  { productId: 'eq-002', name: 'Portable Facial Steamer', price: 79.99, description: 'Table-top design for face treatments', image: '/products/equipment/portable-steamer.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Facial Equipment', subcategoryId: 'facial' },
  { productId: 'eq-003', name: 'Magnifying Lamp 3D - Tabletop', price: 129.99, description: 'Tabletop clamp with modifiable spring arm', image: '/products/equipment/mag-lamp.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Facial Equipment', subcategoryId: 'facial' },
  { productId: 'eq-004', name: 'Magnifying Lamp 5D - Tabletop', price: 149.99, description: 'Tabletop clamp with modifiable spring arm', image: '/products/equipment/mag-lamp.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Facial Equipment', subcategoryId: 'facial' },
  { productId: 'eq-005', name: '2-in-1 Portable Steamer', price: 119.99, description: 'Table-top unit for both Hair and Face steaming', image: '/products/equipment/2in1-steamer.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Facial Equipment', subcategoryId: 'facial' },

  // EQUIPMENT - Styling Equipment
  { productId: 'eq-006', name: '2-in-1 Portable Hair & Face Steamer', price: 119.99, description: 'Dual-purpose steamer for salon use', image: '/products/equipment/2in1-steamer.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Styling Equipment', subcategoryId: 'styling' },

  // EQUIPMENT - Trolleys & Carts
  { productId: 'eq-007', name: 'Professional Salon Trolley HST-145', price: 149.99, description: 'Aluminum instrument tray with adjustable top', image: '/products/equipment/trolley.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Salon Equipment (Trolleys & Carts)', subcategoryId: 'trolleys-carts' },
  { productId: 'eq-008', name: 'Economical Hair Salon Trolley', price: 89.99, description: 'Includes 5 removable trays and wheels', image: '/products/equipment/trolley.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Salon Equipment (Trolleys & Carts)', subcategoryId: 'trolleys-carts' },
  { productId: 'eq-009', name: 'Metal and Glass Trolley', price: 199.99, description: 'Professional aesthetic, great for spa', image: '/products/equipment/glass-trolley.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Salon Equipment (Trolleys & Carts)', subcategoryId: 'trolleys-carts' },

  // EQUIPMENT - Accessories
  { productId: 'eq-010', name: 'Magnifying Lamp Stand 4WH', price: 59.99, description: 'Sturdy 4-wheel floor stand', image: '/products/equipment/lamp-stand.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Equipment Accessories (Stands & Bulbs)', subcategoryId: 'accessories' },
  { productId: 'eq-011', name: 'Bulb T4', price: 12.99, description: 'Replacement bulb for professional equipment', image: '/products/equipment/bulb.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Equipment Accessories (Stands & Bulbs)', subcategoryId: 'accessories' },
  { productId: 'eq-012', name: 'UV Bulb', price: 19.99, description: 'Replacement UV bulb', image: '/products/equipment/bulb.jpg', category: 'Equipment', categoryId: 'equipment', subcategory: 'Equipment Accessories (Stands & Bulbs)', subcategoryId: 'accessories' },

  // IMPLEMENTS - Hair Tools
  { productId: 'im-001', name: 'Professional Barber Scissors', price: 49.99, description: 'Includes a leather kit', image: '/products/implements/barber-scissors.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Hair Tools', subcategoryId: 'hair-tools' },
  { productId: 'im-002', name: 'Safety Scissors', price: 19.99, description: 'General-purpose professional use', image: '/products/implements/safety-scissors.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Hair Tools', subcategoryId: 'hair-tools' },

  // IMPLEMENTS - Scissors & Shears
  { productId: 'im-003', name: 'Cuticle Scissors - Curved', price: 14.99, description: 'For precision grooming', image: '/products/implements/cuticle-scissors.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Scissors & Shears (Nail & Cuticle)', subcategoryId: 'scissors-shears' },
  { productId: 'im-004', name: 'Cuticle Cutter', price: 12.99, description: 'For professional cuticle maintenance', image: '/products/implements/cuticle-cutter.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Scissors & Shears (Nail & Cuticle)', subcategoryId: 'scissors-shears' },
  { productId: 'im-005', name: 'Ingrown Nail Cutter', price: 16.99, description: 'Specifically designed for ingrown treatments', image: '/products/implements/ingrown-cutter.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Scissors & Shears (Nail & Cuticle)', subcategoryId: 'scissors-shears' },
  { productId: 'im-006', name: 'Toe-nail Cutter - Heavy', price: 14.99, description: 'For thick toenails', image: '/products/implements/toenail-cutter.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Scissors & Shears (Nail & Cuticle)', subcategoryId: 'scissors-shears' },

  // IMPLEMENTS - Skin Tools
  { productId: 'im-007', name: 'Tweezers - Slant Tip', price: 9.99, description: 'Professional quality', image: '/products/implements/tweezers.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Skin Tools (Tweezers & Extraction)', subcategoryId: 'skin-tools' },
  { productId: 'im-008', name: 'Waxing Tweezers', price: 11.99, description: 'For post-wax cleanup', image: '/products/implements/tweezers.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Skin Tools (Tweezers & Extraction)', subcategoryId: 'skin-tools' },
  { productId: 'im-009', name: 'Eyelash Tweezers', price: 14.99, description: 'For lash application', image: '/products/implements/eyelash-tweezers.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Skin Tools (Tweezers & Extraction)', subcategoryId: 'skin-tools' },

  // IMPLEMENTS - Nail Pushers
  { productId: 'im-010', name: 'Nail Pusher - Flat/Arrow', price: 7.99, description: 'Dual-ended design', image: '/products/implements/nail-pusher.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Nail Pushers & Implements', subcategoryId: 'nail-pushers' },
  { productId: 'im-011', name: 'Instrument Picker', price: 6.99, description: 'For safe handling of tools', image: '/products/implements/picker.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Nail Pushers & Implements', subcategoryId: 'nail-pushers' },

  // IMPLEMENTS - Sterilization
  { productId: 'im-012', name: 'Sterilization Box IBA - Round', price: 24.99, description: 'Stainless steel with lid', image: '/products/implements/sterilization-box.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Sterilization & Safety', subcategoryId: 'sterilization' },
  { productId: 'im-013', name: 'Sterilization Tray - Stainless', price: 19.99, description: 'Professional grade with cover', image: '/products/implements/sterilization-tray.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Sterilization & Safety', subcategoryId: 'sterilization' },
  { productId: 'im-014', name: 'Sharps Container - Small', price: 9.99, description: 'For safe disposal', image: '/products/implements/sharps-container.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Sterilization & Safety', subcategoryId: 'sterilization' },

  // IMPLEMENTS - Bowls & Disposables
  { productId: 'im-015', name: 'Stainless Steel Kidney Bowl', price: 12.99, description: 'Professional-grade 4x8" bowl', image: '/products/implements/kidney-bowl.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Bowls', subcategoryId: 'bowls' },
  { productId: 'im-016', name: 'Cotton Crepe Bandages', price: 8.99, description: '9" width, 5m length', image: '/products/implements/bandages.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Medical & Treatment Disposables', subcategoryId: 'medical-treatment' },
  { productId: 'im-017', name: 'Elastic Bandages', price: 9.99, description: '9" width, 5m length', image: '/products/implements/bandages.jpg', category: 'Implements', categoryId: 'implements', subcategory: 'Medical & Treatment Disposables', subcategoryId: 'medical-treatment' },

  // FURNITURE
  { productId: 'fu-001', name: 'FMB2 Facial Massage Bed', price: 599.99, description: 'Professional multipurpose facial massage bed', image: '/products/furniture/facial-bed.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Facial Bed Multipurpose', subcategoryId: 'facial-bed-multipurpose' },
  { productId: 'fu-002', name: 'Facial Massage Bed - White', price: 549.99, description: 'Professional grade facial massage bed in white', image: '/products/furniture/massage-bed-white.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Facial Massage Bed', subcategoryId: 'facial-massage-bed' },
  { productId: 'fu-003', name: 'Facial Massage Bed - Black', price: 549.99, description: 'Professional grade facial massage bed in black', image: '/products/furniture/massage-bed-black.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Facial Massage Bed', subcategoryId: 'facial-massage-bed' },
  { productId: 'fu-004', name: 'PMB Portable Massage Bed', price: 349.99, description: 'Lightweight and portable massage bed', image: '/products/furniture/portable-bed.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Facial Massage Bed', subcategoryId: 'facial-massage-bed' },
  { productId: 'fu-005', name: 'BT-02 Wooden Trolley with 2 Draws', price: 179.99, description: 'Classic wooden design with storage', image: '/products/furniture/wooden-trolley.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart' },
  { productId: 'fu-006', name: 'BT-021 Spa Salon Metal Trolley', price: 149.99, description: 'Durable metal construction', image: '/products/furniture/metal-trolley.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart' },
  { productId: 'fu-007', name: 'BT-018 Facial Beauty Spa Glass Trolley', price: 199.99, description: 'Glass trolley with 4 shelves', image: '/products/furniture/glass-trolley.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart' },
  { productId: 'fu-008', name: 'Salon Spa Color Rolling Tray Cart', price: 169.99, description: 'Rolling tray with accessories holder', image: '/products/furniture/rolling-cart.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart' },
  { productId: 'fu-009', name: 'HST-11 Multi Use Spa Salon Trolley', price: 159.99, description: 'Versatile multi-use design', image: '/products/furniture/hst11-trolley.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart' },
  { productId: 'fu-010', name: 'HST-35 Salon Trolley with Draws', price: 219.99, description: '#1 Seller - With draws & accessories holder', image: '/products/furniture/hst35-trolley.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Trolleys & Carts', subcategoryId: 'rolling-tray-cart', badge: 'Best Seller' },
  { productId: 'fu-011', name: 'PMT Portable Manicure Table', price: 249.99, description: 'Foldable legs for easy transport', image: '/products/furniture/manicure-table.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Tables & Stations', subcategoryId: 'tables-stations' },
  { productId: 'fu-012', name: 'BS-01 Spa Salon Adjustable Stool - White', price: 89.99, description: 'Height adjustable professional stool', image: '/products/furniture/stool-white.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Stools & Seating', subcategoryId: 'stools-seating' },
  { productId: 'fu-013', name: 'BS-01 Spa Salon Adjustable Stool - Black', price: 89.99, description: 'Height adjustable professional stool', image: '/products/furniture/stool-black.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Stools & Seating', subcategoryId: 'stools-seating' },
  { productId: 'fu-014', name: 'BS-02 Spa Salon Adjustable Stool - White', price: 99.99, description: 'Premium height adjustable stool', image: '/products/furniture/stool-premium-white.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Stools & Seating', subcategoryId: 'stools-seating' },
  { productId: 'fu-015', name: 'BS-02 Spa Salon Adjustable Stool - Black', price: 99.99, description: 'Premium height adjustable stool', image: '/products/furniture/stool-premium-black.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Stools & Seating', subcategoryId: 'stools-seating' },
  { productId: 'fu-016', name: 'MP-01 Pedicure Foot Rest', price: 79.99, description: 'Adjustable height pedicure foot rest', image: '/products/furniture/foot-rest.jpg', category: 'Furniture', categoryId: 'furniture', subcategory: 'Pedicure Accessories', subcategoryId: 'pedicure-accessories' },
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alliedpro', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    await Product.insertMany(products);
    console.log(`Successfully seeded ${products.length} products`);
    
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();





