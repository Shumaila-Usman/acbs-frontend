import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, X, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ACCOUNT_MENU_ITEMS } from '../../data/accountMenuData';

const RegisterDropdown = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    setIsMobileDrawerOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const MenuItem = ({ item, onClose }) => {
    const Icon = item.icon;
    return (
      <Link
        to={item.path}
        onClick={onClose}
        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
      >
        <Icon size={20} className="text-gray-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{item.title}</span>
            {item.badge && (
              <span className="text-xs font-bold px-2 py-0.5 bg-brand-light text-white rounded">
                {item.badge}
              </span>
            )}
            {item.rightText && (
              <span className="ml-auto text-sm text-gray-500">{item.rightText}</span>
            )}
          </div>
          {item.subtitle && (
            <p className="text-sm text-gray-600 mt-0.5">{item.subtitle}</p>
          )}
        </div>
      </Link>
    );
  };

  // Desktop Dropdown
  const DesktopDropdown = () => (
    <div
      ref={dropdownRef}
      className="hidden md:block relative"
    >
      <button 
        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User size={20} />
        <span className="font-medium">{isAuthenticated && user ? user.name.split(' ')[0] : 'Register'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
          {/* Greeting */}
          <div className="px-4 py-4 bg-gradient-to-r from-brand-light/10 to-brand-dark/10">
            <p className="text-lg font-semibold text-gray-900">
              {isAuthenticated && user ? `Welcome, ${user.name}! 👋` : 'Happy Friday, Beautiful. 🎉'}
            </p>
            {isAuthenticated && user && (
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
            )}
          </div>

          {/* Sign In & Create Account Buttons OR Logout */}
          {isAuthenticated ? (
            <div className="px-4 py-4 border-b border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full py-2.5 px-4 flex items-center justify-center gap-2 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          ) : (
            <div className="px-4 py-4 flex gap-3 border-b border-gray-200">
              <Link
                to="/login"
                className="flex-1 py-2.5 px-4 text-center font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex-1 py-2.5 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Create Account
              </Link>
            </div>
          )}

          {/* Menu Items */}
          <div className="py-2 max-h-96 overflow-y-auto">
            {ACCOUNT_MENU_ITEMS.map((item, index) => (
              <React.Fragment key={item.id}>
                <MenuItem item={item} onClose={() => setIsOpen(false)} />
                {index < ACCOUNT_MENU_ITEMS.length - 1 && (
                  <div className="border-b border-gray-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Mobile Drawer
  const MobileDrawer = () => (
    <div className="md:hidden">
      <button
        onClick={() => setIsMobileDrawerOpen(true)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <User size={20} />
        <span className="font-medium text-sm">{isAuthenticated && user ? user.name.split(' ')[0] : 'Register'}</span>
      </button>

      {/* Overlay */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsMobileDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto transform transition-transform duration-300 ${isMobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Account</h2>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 py-4">
              {/* Greeting */}
              <div className="mb-4 p-4 bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg">
                <p className="text-base font-semibold text-gray-900">
                  {isAuthenticated && user ? `Welcome, ${user.name}! 👋` : 'Happy Friday, Beautiful. 🎉'}
                </p>
                {isAuthenticated && user && (
                  <p className="text-xs text-gray-600 mt-1">{user.email}</p>
                )}
              </div>

              {/* Buttons */}
              {isAuthenticated ? (
                <div className="mb-4">
                  <button
                    onClick={handleLogout}
                    className="w-full py-2.5 px-4 flex items-center justify-center gap-2 font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 mb-4">
                  <Link
                    to="/login"
                    className="py-2.5 px-4 text-center font-semibold border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
                    onClick={() => setIsMobileDrawerOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="py-2.5 px-4 text-center font-semibold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setIsMobileDrawerOpen(false)}
                  >
                    Create Account
                  </Link>
                </div>
              )}

              {/* Menu Items */}
              <div className="border-t border-gray-200 pt-2">
                {ACCOUNT_MENU_ITEMS.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <MenuItem item={item} onClose={() => setIsMobileDrawerOpen(false)} />
                    {index < ACCOUNT_MENU_ITEMS.length - 1 && (
                      <div className="border-b border-gray-100" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
    </div>
  );

  return (
    <>
      <DesktopDropdown />
      <MobileDrawer />
    </>
  );
};

export default RegisterDropdown;

