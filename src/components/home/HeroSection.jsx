import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Promo Card 1 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="aspect-[16/10] gradient-brand flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  EXTRA 20% OFF
                </h2>
                <p className="text-xl md:text-2xl mb-6">SALE ITEMS</p>
                <p className="text-lg mb-6">Use code: <span className="font-bold">BONUS20</span></p>
                <Link
                  to="/sale"
                  className="inline-block px-8 py-3 bg-white text-brand-dark font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Shop Sale
                </Link>
              </div>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="aspect-[16/10] bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  NEW ARRIVALS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Featured Brands
                </h2>
                <p className="text-lg mb-6">Discover the latest in beauty & spa</p>
                <Link
                  to="/new-arrivals"
                  className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

