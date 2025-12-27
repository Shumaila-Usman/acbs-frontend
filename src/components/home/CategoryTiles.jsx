import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_TILES } from '../../data/mockProducts';

const CategoryTiles = () => {
  return (
    <section className="py-12 px-5 md:px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {CATEGORY_TILES.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-light transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

