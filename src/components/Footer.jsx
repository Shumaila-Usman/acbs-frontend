import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const { isDealer, user } = useAuth();
  const dealerPortalLink = (isDealer || (user && (user.role === 'dealer' || user.isDealer || user.dealerId || user.dealerID))) ? '/dealer-portal' : '/dealer-register';
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About ACBS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="relative inline-block hover:text-white transition-colors group">
                <span>About Us</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/careers" className="relative inline-block hover:text-white transition-colors group">
                <span>Careers</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/press" className="relative inline-block hover:text-white transition-colors group">
                <span>Press</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/affiliates" className="relative inline-block hover:text-white transition-colors group">
                <span>Affiliates</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="relative inline-block hover:text-white transition-colors group">
                <span>Contact Us</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/shipping" className="relative inline-block hover:text-white transition-colors group">
                <span>Shipping & Delivery</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/returns" className="relative inline-block hover:text-white transition-colors group">
                <span>Returns & Exchanges</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/faq" className="relative inline-block hover:text-white transition-colors group">
                <span>FAQ</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account/orders" className="relative inline-block hover:text-white transition-colors group">
                <span>Track Order</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/account/rewards" className="relative inline-block hover:text-white transition-colors group">
                <span>Rewards Program</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to={dealerPortalLink} className="relative inline-block hover:text-white transition-colors group">
                <span>Dealer Portal</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/sale" className="relative inline-block hover:text-white transition-colors group">
                <span>Sale & Offers</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-light"
              />
              <button
                type="submit"
                className="px-4 py-2 gradient-brand text-white rounded font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Join
              </button>
            </form>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/alliedprobeautysupply/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110 transform" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/alliedpro_beautysupply/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110 transform" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@alliedprobeautysupply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-all hover:scale-110 transform" 
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2025 ACBS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="relative inline-block hover:text-white transition-colors group">
              <span>Privacy Policy</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/terms" className="relative inline-block hover:text-white transition-colors group">
              <span>Terms of Service</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/accessibility" className="relative inline-block hover:text-white transition-colors group">
              <span>Accessibility</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

