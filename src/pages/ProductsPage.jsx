import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, ChevronRight, ShoppingCart, Heart, X, Eye, Check } from 'lucide-react';
import axios from 'axios';
import ScrollAnimation from '../components/ScrollAnimation';
import ProductQuickView from '../components/ProductQuickView';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

// Dynamically determine API URL based on current host
const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  const currentHost = window.location.hostname;
  return `http://${currentHost}:5000/api`;
};

const API_URL = getApiUrl();

const ProductCard = ({ product, viewMode, onQuickView, isDealer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, isInWishlist, toggleWishlist } = useCart();
  
  const isWishlisted = isInWishlist(product.productId || product._id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    onQuickView(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row">
        {/* Image - Full width on mobile, fixed width on desktop */}
        <div className="w-full sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group">
          <div className="text-center p-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded-lg flex items-center justify-center">
              <ShoppingCart className="text-[#0ea7e0]" size={28} />
            </div>
          </div>
          {/* Badge on image */}
          {product.badge && (
            <div className="absolute top-2 left-2">
              <span className="text-xs font-bold text-white bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] px-2 py-1 rounded-full shadow">
                {product.badge}
              </span>
            </div>
          )}
          {/* Quick View Button */}
          <button 
            onClick={handleQuickView}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <Eye className="text-white" size={28} />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-[#0ea7e0] uppercase tracking-wide">
              {product.subcategory}
            </span>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mt-1 mb-1 line-clamp-2">{product.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2 hidden sm:block">{product.description}</p>
          </div>
          
          {/* Price and Actions */}
          <div className="flex items-center justify-between mt-3 gap-2">
            {isDealer ? (
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
            ) : (
              <span className="text-sm text-gray-500 italic">Login as dealer to see price</span>
            )}
            <div className="flex gap-1 sm:gap-2">
              {isDealer && (
                <button 
                  onClick={handleWishlist}
                  className={`p-2 border rounded-lg transition-colors ${
                    isWishlisted 
                      ? 'border-red-500 text-red-500 bg-red-50' 
                      : 'border-gray-200 hover:border-[#0ea7e0] hover:text-[#0ea7e0]'
                  }`}
                >
                  <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
                </button>
              )}
              <button 
                onClick={handleQuickView}
                className="p-2 border border-gray-200 rounded-lg hover:border-[#0ea7e0] hover:text-[#0ea7e0] transition-colors"
              >
                <Eye size={18} />
              </button>
              {isDealer && (
                <button 
                  onClick={handleAddToCart}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                    addedToCart 
                      ? 'bg-green-500 text-white' 
                      : 'gradient-brand text-white hover:opacity-90'
                  }`}
                >
                  {addedToCart ? <Check size={16} /> : <ShoppingCart size={16} />}
                  <span className="hidden sm:inline">{addedToCart ? 'Added!' : 'Add to Cart'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="text-[#0ea7e0]" size={40} />
            </div>
            <span className="text-xs text-gray-500">Product Image</span>
          </div>
        </div>
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-bold text-white bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] px-3 py-1 rounded-full shadow-lg">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Quick Action Icons - Vertical on right side */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          {/* Wishlist/Heart - Only for Dealers */}
          {isDealer && (
            <button 
              onClick={handleWishlist}
              className={`p-2.5 rounded-full shadow-lg transition-all duration-200 ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white hover:bg-[#0ea7e0] hover:text-white'
              }`}
            >
              <Heart size={18} className={isWishlisted ? 'fill-white' : ''} />
            </button>
          )}
          
          {/* Add to Cart/Basket - Only for Dealers */}
          {isDealer && (
            <button 
              onClick={handleAddToCart}
              className="p-2.5 bg-white rounded-full shadow-lg hover:bg-[#0ea7e0] hover:text-white transition-all duration-200"
            >
              <ShoppingCart size={18} />
            </button>
          )}
          
          {/* Quick View/Eye */}
          <button 
            onClick={handleQuickView}
            className="p-2.5 bg-white rounded-full shadow-lg hover:bg-[#0ea7e0] hover:text-white transition-all duration-200"
          >
            <Eye size={18} />
          </button>
        </div>
        
        {/* Add to Cart Button at Bottom - Only for Dealers */}
        {isDealer && (
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={handleAddToCart}
              className={`w-full py-3 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg ${
                addedToCart 
                  ? 'bg-green-500 text-white' 
                  : 'gradient-brand text-white hover:opacity-90'
              }`}
            >
              {addedToCart ? <Check size={18} /> : <ShoppingCart size={18} />}
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <span className="text-xs font-semibold text-[#0ea7e0] uppercase tracking-wide">
          {product.subcategory}
        </span>
        <h3 className="font-bold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-[#0ea7e0] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          {isDealer ? (
            <span className="text-xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          ) : (
            <span className="text-sm text-gray-500 italic">Login as dealer for pricing</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const { categoryId, subcategoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { isDealer } = useAuth();
  
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);
  
  // Quick View Modal State
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/categories`);
        if (response.data.success) {
          setCategories(response.data.categories);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      
      try {
        let url = `${API_URL}/products?`;
        const params = new URLSearchParams();
        
        if (categoryId) params.append('category', categoryId);
        if (subcategoryId) params.append('subcategory', subcategoryId);
        if (sortBy) params.append('sort', sortBy);
        if (priceRange[0] > 0) params.append('minPrice', priceRange[0]);
        if (priceRange[1] < 1000) params.append('maxPrice', priceRange[1]);
        
        // Handle search
        if (searchQuery) {
          const searchResponse = await axios.get(`${API_URL}/products/search/${encodeURIComponent(searchQuery)}`);
          if (searchResponse.data.success) {
            setProducts(searchResponse.data.products);
          }
        } else {
          const response = await axios.get(`${API_URL}/products?${params.toString()}`);
          if (response.data.success) {
            setProducts(response.data.products);
          }
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [categoryId, subcategoryId, searchQuery, sortBy, priceRange]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchParams({ search: localSearch.trim() });
    }
  };

  const clearSearch = () => {
    setLocalSearch('');
    setSearchParams({});
  };

  const getCategoryName = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (subcategoryId) {
      const cat = categories.find(c => c.categoryId === categoryId);
      if (cat) {
        const sub = cat.subcategories.find(s => s.subcategoryId === subcategoryId);
        return sub ? sub.subcategory : 'Products';
      }
    }
    if (categoryId) {
      const cat = categories.find(c => c.categoryId === categoryId);
      return cat ? cat.category : 'Products';
    }
    return 'All Products';
  };

  const getSubcategories = () => {
    if (!categoryId) return [];
    const cat = categories.find(c => c.categoryId === categoryId);
    return cat ? cat.subcategories : [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade">
            <nav className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} />
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              {categoryId && (
                <>
                  <ChevronRight size={16} />
                  <Link to={`/products/${categoryId}`} className="hover:text-white transition-colors">
                    {categories.find(c => c.categoryId === categoryId)?.category}
                  </Link>
                </>
              )}
              {subcategoryId && (
                <>
                  <ChevronRight size={16} />
                  <span className="text-white">{getSubcategories().find(s => s.subcategoryId === subcategoryId)?.subcategory}</span>
                </>
              )}
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{getCategoryName()}</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Discover our professional-grade beauty supplies, equipment, and accessories for your salon or spa.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button 
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="mt-2 text-sm text-[#0ea7e0] hover:text-[#5631cf]"
                  >
                    Clear search
                  </button>
                )}
              </form>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  <Link
                    to="/products"
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      !categoryId ? 'bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </Link>
                  {categories.map(cat => (
                    <Link
                      key={cat.categoryId}
                      to={`/products/${cat.categoryId}`}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        categoryId === cat.categoryId ? 'bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] text-white' : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat.category} ({cat.count})
                    </Link>
                  ))}
                </div>
              </div>

              {/* Subcategories */}
              {getSubcategories().length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Subcategories</h4>
                  <div className="space-y-2">
                    {getSubcategories().map(sub => (
                      <Link
                        key={sub.subcategoryId}
                        to={`/products/${categoryId}/${sub.subcategoryId}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          subcategoryId === sub.subcategoryId ? 'bg-[#0ea7e0]/10 text-[#0ea7e0] font-medium' : 'hover:bg-gray-100'
                        }`}
                      >
                        {sub.subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#0ea7e0] transition-colors"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter size={18} />
                  Filters
                </button>
                <span className="text-gray-600">
                  {products.length} product{products.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0]"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] text-white' : 'hover:bg-gray-100'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] text-white' : 'hover:bg-gray-100'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ea7e0] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading products...</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-red-500 mb-4">{error}</div>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Products Grid */}
            {!loading && !error && products.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="text-gray-400" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <Link
                  to="/products"
                  className="inline-block px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  View All Products
                </Link>
              </div>
            )}
            
            {!loading && !error && products.length > 0 && (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {products.map((product, index) => (
                  <ScrollAnimation key={product.productId || product._id} animation="fade" delay={index * 50}>
                    <ProductCard 
                      product={product} 
                      viewMode={viewMode} 
                      onQuickView={handleQuickView}
                      isDealer={isDealer}
                    />
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Quick View Modal */}
      <ProductQuickView 
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default ProductsPage;
