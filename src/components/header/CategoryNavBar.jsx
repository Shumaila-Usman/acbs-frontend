import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_DATA } from '../../data/navData';
import MegaMenu from './MegaMenu';

const CategoryNavBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <nav className="bg-black text-white sticky top-0 z-40 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          {NAV_DATA.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button className="py-4 text-sm font-medium hover:text-brand-light transition-colors">
                {category.name}
              </button>
              {activeCategory === category.id && (
                <MegaMenu category={category} />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavBar;

