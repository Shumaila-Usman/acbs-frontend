import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Heart, ShoppingBasket, X } from 'lucide-react';
import RegisterDropdown from './RegisterDropdown';

const MainHeaderRow = ({ onMobileMenuToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMobileWishlistDrawer, setIsMobileWishlistDrawer] = useState(false);
  const [isMobileBasketDrawer, setIsMobileBasketDrawer] = useState(false);
  const [isMobileWishlistHover, setIsMobileWishlistHover] = useState(false);
  const [isMobileBasketHover, setIsMobileBasketHover] = useState(false);
  const wishlistRef = useRef(null);
  const basketRef = useRef(null);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className={`max-w-7xl mx-auto px-4 md:px-[50px] transition-all duration-300 ${isLogoHovered ? 'py-1' : 'py-2'}`}>
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <img 
              src="/logo.jpg" 
              alt="ACBS - Allied Concept Beauty Supply" 
              className={`h-16 md:h-20 w-auto object-contain transition-transform duration-300 ${isLogoHovered ? 'scale-110' : 'scale-100'}`}
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

            {/* Wishlist/Heart Icon */}
            <div ref={wishlistRef} className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                onMouseEnter={() => setIsWishlistOpen(true)}
                onMouseLeave={() => setIsWishlistOpen(false)}
              >
                <Heart 
                  size={24} 
                  className={`transition-all ${isWishlistOpen ? 'fill-brand-light text-brand-light' : 'text-gray-700'}`}
                />
              </button>

              {/* Desktop Dropdown */}
              {isWishlistOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">My Lists</h3>
                    <p className="text-gray-600 mb-6">Sign in to organize and share your saved products.</p>
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/login"
                        className="py-3 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                        onClick={() => setIsWishlistOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="py-3 px-4 text-center font-semibold border-2 border-transparent hover:border-brand-light text-gray-900 rounded-lg transition-colors"
                        onClick={() => setIsWishlistOpen(false)}
                      >
                        Create Account
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Basket Icon */}
            <div ref={basketRef} className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                onMouseEnter={() => setIsBasketOpen(true)}
                onMouseLeave={() => setIsBasketOpen(false)}
              >
                <ShoppingBasket 
                  size={24} 
                  className={`transition-all ${isBasketOpen ? 'fill-brand-dark text-brand-dark' : 'text-gray-700'}`}
                />
              </button>

              {/* Desktop Dropdown */}
              {isBasketOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Basket</h3>
                    <p className="text-center text-gray-900 font-medium mb-6">Sign in to see items you may have added previously.</p>
                    <div className="flex flex-col gap-3 mb-4">
                      <Link
                        to="/login"
                        className="py-3 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                        onClick={() => setIsBasketOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="py-3 px-4 text-center font-semibold border-2 border-transparent hover:border-brand-light text-gray-900 rounded-lg transition-colors"
                        onClick={() => setIsBasketOpen(false)}
                      >
                        Create Account
                      </Link>
                    </div>
                    <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600">
                      <ShoppingBasket size={18} />
                      <span>See samples, rewards, and promos in <Link to="/basket" className="text-brand-light hover:underline">basket</Link>.</span>
                    </div>
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
          <div className="flex md:hidden items-center">
            <RegisterDropdown />
          </div>
        </div>

        {/* Mobile Search Bar with Heart & Basket on Left */}
        <div className="mt-2 md:hidden flex items-center gap-2">
          {/* Heart Icon */}
          <button 
            onClick={() => setIsMobileWishlistDrawer(true)}
            onTouchStart={() => setIsMobileWishlistHover(true)}
            onTouchEnd={() => setIsMobileWishlistHover(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <Heart 
              size={20} 
              className={`transition-all ${isMobileWishlistHover ? 'fill-brand-light text-brand-light' : 'text-gray-700'}`}
            />
          </button>

          {/* Basket Icon */}
          <button 
            onClick={() => setIsMobileBasketDrawer(true)}
            onTouchStart={() => setIsMobileBasketHover(true)}
            onTouchEnd={() => setIsMobileBasketHover(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <ShoppingBasket 
              size={20} 
              className={`transition-all ${isMobileBasketHover ? 'fill-brand-dark text-brand-dark' : 'text-gray-700'}`}
            />
          </button>

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

      {/* Mobile Wishlist Drawer */}
      <>
        {isMobileWishlistDrawer && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileWishlistDrawer(false)}
          />
        )}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${isMobileWishlistDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">My Lists</h3>
              <button 
                onClick={() => setIsMobileWishlistDrawer(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">Sign in to organize and share your saved products.</p>
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="py-3 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileWishlistDrawer(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-3 px-4 text-center font-semibold border-2 border-transparent hover:border-brand-light text-gray-900 rounded-lg transition-colors"
                onClick={() => setIsMobileWishlistDrawer(false)}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </>

      {/* Mobile Basket Drawer */}
      <>
        {isMobileBasketDrawer && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileBasketDrawer(false)}
          />
        )}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${isMobileBasketDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Basket</h3>
              <button 
                onClick={() => setIsMobileBasketDrawer(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-center text-gray-900 font-medium mb-6">Sign in to see items you may have added previously.</p>
            <div className="flex flex-col gap-3 mb-4">
              <Link
                to="/login"
                className="py-3 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileBasketDrawer(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-3 px-4 text-center font-semibold border-2 border-transparent hover:border-brand-light text-gray-900 rounded-lg transition-colors"
                onClick={() => setIsMobileBasketDrawer(false)}
              >
                Create Account
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-600">
              <ShoppingBasket size={18} />
              <span>See samples, rewards, and promos in <Link to="/basket" className="text-brand-light hover:underline">basket</Link>.</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MainHeaderRow;

