import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const FeaturedProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalizedProducts = async () => {
      if (user) {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`${API_URL}/auth/favourites`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (response.data.products && response.data.products.length > 0) {
            setProducts(response.data.products);
          } else {
            // Fallback to mock products if no personalized data
            setProducts(MOCK_PRODUCTS);
          }
        } catch (error) {
          // Fallback to mock products on error
          setProducts(MOCK_PRODUCTS);
        }
      } else {
        // Not logged in, show default products
        setProducts(MOCK_PRODUCTS);
      }
      setLoading(false);
    };

    fetchPersonalizedProducts();
  }, [user]);

  // Duplicate products for seamless scrolling
  const displayProducts = [...products, ...products];

  if (loading) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-light"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
            Your Favourites
          </h2>
          <Link
            to="/products"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-light hover:text-brand-dark font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>
        
        {/* Continuous scrolling row */}
        <div className="relative">
          <div className="flex overflow-hidden">
            {/* First set of products */}
            <div className="flex animate-scroll-slow">
              {products.map((product, index) => (
                <div
                  key={`first-${product.id}-${index}`}
                  className="flex-shrink-0 mx-3 w-72"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={product.hoverImage}
                        alt={`${product.name} alternate view`}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="p-2 gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll-slow">
              {products.map((product, index) => (
                <div
                  key={`second-${product.id}-${index}`}
                  className="flex-shrink-0 mx-3 w-72"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={product.hoverImage}
                        alt={`${product.name} alternate view`}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        <button className="p-2 gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
