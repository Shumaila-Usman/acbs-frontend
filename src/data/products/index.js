import { SKINCARE_PRODUCTS } from './skincareProducts';
import { SPA_PRODUCTS } from './spaProducts';
import { NAIL_PRODUCTS } from './nailProducts';
import { EQUIPMENT_PRODUCTS, IMPLEMENTS_PRODUCTS } from './equipmentProducts';
import { FURNITURE_PRODUCTS } from './furnitureProducts';

export const ALL_CATEGORIES = [
  { id: 'skincare', name: 'Skincare', data: SKINCARE_PRODUCTS },
  { id: 'spa-products', name: 'Spa Products', data: SPA_PRODUCTS },
  { id: 'nail-products', name: 'Nail Products', data: NAIL_PRODUCTS },
  { id: 'equipment', name: 'Equipment', data: EQUIPMENT_PRODUCTS },
  { id: 'implements', name: 'Implements', data: IMPLEMENTS_PRODUCTS },
  { id: 'furniture', name: 'Furniture', data: FURNITURE_PRODUCTS },
];

// Get all products as a flat array
export const getAllProducts = () => {
  const products = [];
  ALL_CATEGORIES.forEach(category => {
    category.data.subcategories.forEach(subcategory => {
      subcategory.products.forEach(product => {
        products.push({
          ...product,
          category: category.name,
          categoryId: category.id,
          subcategory: subcategory.name,
          subcategoryId: subcategory.id,
        });
      });
    });
  });
  return products;
};

// Get products by category
export const getProductsByCategory = (categoryId) => {
  const category = ALL_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return [];
  
  const products = [];
  category.data.subcategories.forEach(subcategory => {
    subcategory.products.forEach(product => {
      products.push({
        ...product,
        category: category.name,
        categoryId: category.id,
        subcategory: subcategory.name,
        subcategoryId: subcategory.id,
      });
    });
  });
  return products;
};

// Get products by subcategory
export const getProductsBySubcategory = (categoryId, subcategoryId) => {
  const category = ALL_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return [];
  
  const subcategory = category.data.subcategories.find(s => s.id === subcategoryId);
  if (!subcategory) return [];
  
  return subcategory.products.map(product => ({
    ...product,
    category: category.name,
    categoryId: category.id,
    subcategory: subcategory.name,
    subcategoryId: subcategory.id,
  }));
};

// Get subcategories for a category
export const getSubcategories = (categoryId) => {
  const category = ALL_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return [];
  return category.data.subcategories;
};

// Search products
export const searchProducts = (query) => {
  const allProducts = getAllProducts();
  const lowerQuery = query.toLowerCase();
  
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.subcategory.toLowerCase().includes(lowerQuery)
  );
};

export { SKINCARE_PRODUCTS, SPA_PRODUCTS, NAIL_PRODUCTS, EQUIPMENT_PRODUCTS, IMPLEMENTS_PRODUCTS, FURNITURE_PRODUCTS };





