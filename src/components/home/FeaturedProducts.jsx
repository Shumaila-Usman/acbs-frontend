import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';

const FeaturedProducts = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-light hover:text-brand-dark font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

