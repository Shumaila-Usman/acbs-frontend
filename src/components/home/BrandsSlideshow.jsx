import React from 'react';
import { BRANDS } from '../../data/brandData';

const BrandsSlideshow = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Slideshow container */}
          <div className="flex overflow-hidden">
            {/* First set of brands */}
            <div className="flex animate-scroll-infinite">
              {BRANDS.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll-infinite">
              {BRANDS.map((brand) => (
                <div
                  key={`duplicate-${brand.id}`}
                  className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlideshow;

