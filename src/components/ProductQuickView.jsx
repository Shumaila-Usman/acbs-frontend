import React, { useState, useEffect } from 'react';
import { X, Heart, Share2, ShoppingCart, ChevronLeft, ChevronRight, Star, Plus, Minus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, addToWishlist, isInWishlist, toggleWishlist } = useCart();
  const { isDealer } = useAuth();

  const isWishlisted = product ? isInWishlist(product.productId || product._id) : false;

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  if (!isOpen || !product) return null;

  // Generate multiple images for demo (in real app, these would come from the product)
  const images = [
    product.image || '/products/placeholder.jpg',
    product.image || '/products/placeholder.jpg',
    product.image || '/products/placeholder.jpg',
    product.image || '/products/placeholder.jpg',
  ];

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Images */}
          <div className="lg:w-1/2 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Social Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Heart size={16} className="text-red-400" /> {Math.floor(Math.random() * 50) + 10}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-gray-400">💬</span> {Math.floor(Math.random() * 20) + 5}
              </span>
              <span className="flex items-center gap-1">
                <Share2 size={16} /> {Math.floor(Math.random() * 30) + 5}
              </span>
            </div>

            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#0ea7e0]/20 to-[#0369a1]/20 rounded-2xl flex items-center justify-center mb-4">
                  <ShoppingCart className="text-[#0ea7e0]" size={64} />
                </div>
                <span className="text-gray-400">Product Image</span>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setActiveImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImageIndex(prev => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === index 
                      ? 'border-[#0ea7e0] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <ShoppingCart className="text-gray-400" size={16} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="lg:w-1/2 p-8 overflow-y-auto max-h-[80vh]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="hover:text-[#0ea7e0] cursor-pointer">{product.category}</span>
              <ChevronRight size={14} />
              <span>{product.subcategory}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm">Reviews ({Math.floor(Math.random() * 50) + 5})</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-6 text-sm">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#0ea7e0] transition-colors">
                <Share2 size={16} />
                SHARE
              </button>
              {isDealer && (
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`flex items-center gap-2 transition-colors ${
                    isWishlisted ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart size={16} className={isWishlisted ? 'fill-red-500' : ''} />
                  {isWishlisted ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
                </button>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Professional-grade quality designed for beauty professionals. This product is carefully crafted to meet the high standards of salons and spas, ensuring exceptional results with every use.
              </p>
            </div>

            {/* Price - Only for Dealers */}
            {isDealer ? (
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#0369a1] bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                {product.price > 50 && (
                  <span className="text-lg text-gray-400 line-through">
                    ${(product.price * 1.3).toFixed(2)}
                  </span>
                )}
              </div>
            ) : (
              <div className="mb-6 p-4 bg-gradient-to-r from-[#0ea7e0]/10 to-[#0369a1]/10 rounded-lg">
                <p className="text-gray-700 font-medium">💼 Dealer Pricing Available</p>
                <p className="text-sm text-gray-500">Register as a dealer to see prices and place orders</p>
              </div>
            )}

            {/* Quantity & Add to Cart - Only for Dealers */}
            {isDealer && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">QTY</span>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    addToCart(product, quantity);
                    setAddedToCart(true);
                  }}
                  className={`flex-1 py-3 px-6 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg ${
                    addedToCart 
                      ? 'bg-green-500 text-white' 
                      : 'gradient-brand text-white hover:opacity-90'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      ADDED TO CART!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      ADD TO CART
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">SKU:</span>
                <span>{product.productId || product._id}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">Category:</span>
                <span className="text-[#0ea7e0]">{product.category}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">Subcategory:</span>
                <span className="text-[#0ea7e0]">{product.subcategory}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-600">Availability:</span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Professional</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Salon Grade</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;

