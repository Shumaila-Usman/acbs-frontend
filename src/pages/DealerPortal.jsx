import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, Package, User, Mail, LogOut } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORY_TILES } from '../data/mockProducts';
import ScrollAnimation from '../components/ScrollAnimation';

const DealerPortal = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
  const productsPerPage = 10;

  useEffect(() => {
    // Check if user is a dealer
    if (!loading && (!user || user.accountType !== 'dealer')) {
      navigate('/dealer-login');
    }
  }, [user, loading, navigate]);

  // Initialize quantities for all products
  useEffect(() => {
    const initialQuantities = {};
    MOCK_PRODUCTS.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  // Filter products based on category and search term
  useEffect(() => {
    let filtered = MOCK_PRODUCTS;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchTerm]);

  const handleLogout = async () => {
    await logout();
    navigate('/dealer-login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter logic is already handled in useEffect
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-light mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.accountType !== 'dealer') {
    return null;
  }

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleQuantityChange = (productId, value) => {
    const quantity = parseInt(value) || 1;
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    alert(`Added ${quantity} x ${product.name} to cart`);
    // Here you would implement actual cart functionality
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Dealer Information Section */}
        <ScrollAnimation animation="up">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent mb-4">
                  Welcome, {user.name}!
                </h1>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User size={20} className="text-brand-light" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Person</p>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail size={20} className="text-brand-light" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Product Catalog Section */}
        <ScrollAnimation animation="up" delay={100}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-brand-light to-brand-dark p-6">
              <div className="flex items-center gap-3 text-white">
                <Package size={28} />
                <h2 className="text-2xl font-bold">Product Catalog & Ordering</h2>
              </div>
              <p className="text-white/90 mt-2">Browse our complete inventory with real-time stock levels and preferred partner pricing.</p>
            </div>

            {/* Filter Section */}
            <div className="bg-gray-800 p-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Collection</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light"
                    >
                      <option value="">All Products</option>
                      {CATEGORY_TILES.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Product Search</label>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="e.g. Serum or Hair Dryer"
                      className="w-full px-4 py-2.5 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="px-6 py-2.5 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors border border-red-600"
                  >
                    Clear Filters
                  </button>
                </div>
              </form>
            </div>

            {/* Product Table */}
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center">
                <Package size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Product Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Stock</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">MSRP</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Dealer Price</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase">Quantity</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase">Add to Cart</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentProducts.map((product, index) => {
                    const dealerPrice = (product.price * 0.65).toFixed(2); // 35% discount
                    const stock = Math.floor(Math.random() * 50) + 10; // Random stock for demo
                    
                    return (
                      <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">SKU: AP-{product.id.toString().padStart(4, '0')}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-brand-light/10 to-brand-dark/10 text-brand-dark">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${stock > 20 ? 'bg-green-500' : stock > 10 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                            <span className="font-semibold text-gray-900">{stock}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-500 line-through">${product.price.toFixed(2)}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-xl font-bold text-green-600">${dealerPrice}</p>
                          <p className="text-xs text-gray-500">Save {((product.price - parseFloat(dealerPrice)) / product.price * 100).toFixed(0)}%</p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <input
                            type="number"
                            min="1"
                            value={quantities[product.id] || 1}
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                            className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-brand-light"
                          />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="inline-flex items-center gap-2 px-6 py-2 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <ShoppingCart size={18} />
                            Add
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded-lg font-semibold transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 border rounded-lg font-semibold transition-colors ${
                        currentPage === index + 1
                          ? 'gradient-brand text-white border-transparent'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded-lg font-semibold transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default DealerPortal;

