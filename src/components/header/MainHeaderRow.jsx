import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Heart, ShoppingBasket, X, Menu as MenuIcon, User, Trash2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import RegisterDropdown from './RegisterDropdown';

const MainHeaderRow = ({ onMobileMenuToggle }) => {
  const { user, isAuthenticated, isDealer } = useAuth();
  const { cartItems, wishlistItems, getCartCount, getWishlistCount, getCartTotal, removeFromCart, removeFromWishlist } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMobileWishlistDrawer, setIsMobileWishlistDrawer] = useState(false);
  const [isMobileBasketDrawer, setIsMobileBasketDrawer] = useState(false);
  const [isMobileWishlistHover, setIsMobileWishlistHover] = useState(false);
  const [isMobileBasketHover, setIsMobileBasketHover] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const wishlistRef = useRef(null);
  const basketRef = useRef(null);
  const pagesMenuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        setIsWishlistOpen(false);
      }
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        setIsBasketOpen(false);
      }
      if (pagesMenuRef.current && !pagesMenuRef.current.contains(event.target)) {
        setIsPagesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-[50px] py-2">
        <div className="flex items-center justify-between gap-4 relative">
          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo - Centered on mobile, hover effect only on desktop */}
          <Link 
            to="/" 
            className="flex items-center lg:flex-none absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <img 
              src="/logo.jpg" 
              alt="ACBS - Allied Concept Beauty Supply" 
              className={`h-14 md:h-20 w-auto object-contain transition-transform duration-300 lg:hover:scale-110`}
            />
          </Link>

          {/* Search Bar with Heart & Basket */}
          <div className="flex-1 max-w-xl mx-4 hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-6 gradient-brand text-white rounded-r-full hover:opacity-90 transition-opacity"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Wishlist/Heart Icon - Only for Dealers */}
            {isDealer && (
              <div ref={wishlistRef} className="relative">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors group relative"
                  onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                >
                  <Heart 
                    size={24} 
                    className={`transition-all ${isWishlistOpen ? 'fill-brand-light text-brand-light' : 'text-gray-700'}`}
                  />
                  {getWishlistCount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {getWishlistCount()}
                    </span>
                  )}
                </button>

                {/* Desktop Dropdown */}
                {isWishlistOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">My Wishlist ({getWishlistCount()})</h3>
                      {wishlistItems.length > 0 ? (
                        <>
                          <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                            {wishlistItems.map(item => (
                              <div key={item.productId || item._id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded flex items-center justify-center flex-shrink-0">
                                  <ShoppingBasket size={16} className="text-[#0ea7e0]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                  <p className="text-sm text-[#0ea7e0] font-semibold">${item.price.toFixed(2)}</p>
                                </div>
                                <button 
                                  onClick={() => removeFromWishlist(item.productId || item._id)}
                                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                          <Link
                            to="/products"
                            className="block py-2 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => setIsWishlistOpen(false)}
                          >
                            Continue Shopping
                          </Link>
                        </>
                      ) : (
                        <div className="text-center py-6">
                          <Heart size={40} className="mx-auto text-gray-300 mb-3" />
                          <p className="text-gray-600 mb-4">Your wishlist is empty</p>
                          <Link
                            to="/products"
                            className="inline-block py-2 px-4 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => setIsWishlistOpen(false)}
                          >
                            Browse Products
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Basket/Cart Icon - Only for Dealers */}
            {isDealer && (
              <div ref={basketRef} className="relative">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors group relative"
                  onClick={() => setIsBasketOpen(!isBasketOpen)}
                >
                  <ShoppingBasket 
                    size={24} 
                    className={`transition-all ${isBasketOpen ? 'fill-brand-dark text-brand-dark' : 'text-gray-700'}`}
                  />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 gradient-brand text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </button>

                {/* Desktop Dropdown */}
                {isBasketOpen && (
                  <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Shopping Cart ({getCartCount()})</h3>
                      {cartItems.length > 0 ? (
                        <>
                          <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                            {cartItems.map(item => (
                              <div key={item.productId || item._id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded flex items-center justify-center flex-shrink-0">
                                  <ShoppingBasket size={20} className="text-[#0ea7e0]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                  <p className="text-sm text-[#0ea7e0] font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button 
                                  onClick={() => removeFromCart(item.productId || item._id)}
                                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-gray-200 pt-3 mb-3">
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-semibold text-gray-900">Total:</span>
                              <span className="text-xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                                ${getCartTotal().toFixed(2)}
                              </span>
                            </div>
                            <Link
                              to="/checkout"
                              className="w-full py-3 px-4 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity block text-center"
                              onClick={() => setIsBasketOpen(false)}
                            >
                              Checkout
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-6">
                          <ShoppingBasket size={40} className="mx-auto text-gray-300 mb-3" />
                          <p className="text-gray-600 mb-4">Your cart is empty</p>
                          <Link
                            to="/products"
                            className="inline-block py-2 px-4 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                            onClick={() => setIsBasketOpen(false)}
                          >
                            Start Shopping
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Hamburger Pages Menu */}
            <div ref={pagesMenuRef} className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                onClick={() => setIsPagesMenuOpen(!isPagesMenuOpen)}
              >
                <MenuIcon 
                  size={24} 
                  className={`transition-all ${isPagesMenuOpen ? 'text-brand-light' : 'text-gray-700'}`}
                />
              </button>

              {/* Pages Dropdown */}
              {isPagesMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="py-2">
                    <Link
                      to="/about"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-light transition-colors font-medium"
                      onClick={() => setIsPagesMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-light transition-colors font-medium"
                      onClick={() => setIsPagesMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/faq"
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-light transition-colors font-medium"
                      onClick={() => setIsPagesMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link
                      to="/sale"
                      className="block px-6 py-3 text-red-500 hover:bg-red-50 transition-colors font-semibold"
                      onClick={() => setIsPagesMenuOpen(false)}
                    >
                      🔥 Sale & Offers
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Register Dropdown */}
          <div className="hidden md:block">
            <RegisterDropdown />
          </div>

          {/* Mobile Register Icon Only */}
          <div className="flex lg:hidden items-center flex-shrink-0">
            <RegisterDropdown />
          </div>
        </div>

        {/* Mobile Search Bar with Heart & Basket on Left (Dealers Only) */}
        <div className="mt-2 md:hidden flex items-center gap-2">
          {/* Heart Icon - Only for Dealers */}
          {isDealer && (
            <button 
              onClick={() => setIsMobileWishlistDrawer(true)}
              onTouchStart={() => setIsMobileWishlistHover(true)}
              onTouchEnd={() => setIsMobileWishlistHover(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 relative"
            >
              <Heart 
                size={20} 
                className={`transition-all ${isMobileWishlistHover ? 'fill-brand-light text-brand-light' : 'text-gray-700'}`}
              />
              {getWishlistCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {getWishlistCount()}
                </span>
              )}
            </button>
          )}

          {/* Basket Icon - Only for Dealers */}
          {isDealer && (
            <button 
              onClick={() => setIsMobileBasketDrawer(true)}
              onTouchStart={() => setIsMobileBasketHover(true)}
              onTouchEnd={() => setIsMobileBasketHover(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 relative"
            >
              <ShoppingBasket 
                size={20} 
                className={`transition-all ${isMobileBasketHover ? 'fill-brand-dark text-brand-dark' : 'text-gray-700'}`}
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 gradient-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          )}

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 gradient-brand text-white rounded-r-full hover:opacity-90 transition-opacity"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Wishlist Drawer - Only for Dealers */}
      {isDealer && (
        <>
          {isMobileWishlistDrawer && (
            <div 
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMobileWishlistDrawer(false)}
            />
          )}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${isMobileWishlistDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">My Wishlist ({getWishlistCount()})</h3>
                <button 
                  onClick={() => setIsMobileWishlistDrawer(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              
              {wishlistItems.length > 0 ? (
                <>
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {wishlistItems.map(item => (
                      <div key={item.productId || item._id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded flex items-center justify-center flex-shrink-0">
                          <ShoppingBasket size={16} className="text-[#0ea7e0]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                          <p className="text-sm text-[#0ea7e0] font-semibold">${item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => removeFromWishlist(item.productId || item._id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    className="block py-3 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsMobileWishlistDrawer(false)}
                  >
                    Continue Shopping
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4">Your wishlist is empty</p>
                  <Link
                    to="/products"
                    className="inline-block py-3 px-6 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsMobileWishlistDrawer(false)}
                  >
                    Browse Products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Mobile Basket Drawer - Only for Dealers */}
      {isDealer && (
        <>
          {isMobileBasketDrawer && (
            <div 
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMobileBasketDrawer(false)}
            />
          )}
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${isMobileBasketDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Shopping Cart ({getCartCount()})</h3>
                <button 
                  onClick={() => setIsMobileBasketDrawer(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              
              {cartItems.length > 0 ? (
                <>
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {cartItems.map(item => (
                      <div key={item.productId || item._id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded flex items-center justify-center flex-shrink-0">
                          <ShoppingBasket size={16} className="text-[#0ea7e0]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm text-[#0ea7e0] font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.productId || item._id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                    <Link
                      to="/checkout"
                      className="w-full py-3 px-4 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity block text-center"
                      onClick={() => setIsMobileBasketDrawer(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <ShoppingBasket size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link
                    to="/products"
                    className="inline-block py-3 px-6 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsMobileBasketDrawer(false)}
                  >
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainHeaderRow;

