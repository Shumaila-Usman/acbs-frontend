import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About ACBS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/affiliates" className="hover:text-white transition-colors">Affiliates</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account/orders" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/account/rewards" className="hover:text-white transition-colors">Rewards Program</Link></li>
              <li><Link to="/dealer-portal-login" className="hover:text-white transition-colors">Dealer Portal</Link></li>
              <li><Link to="/sale" className="hover:text-white transition-colors">Sale & Offers</Link></li>
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
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2025 ACBS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

