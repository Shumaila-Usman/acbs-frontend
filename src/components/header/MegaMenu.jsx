import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const MegaMenu = ({ category }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen bg-white shadow-xl border-t border-gray-200 z-50 animate-fadeIn" style={{ top: '100%' }}>
      <div className="max-w-7xl mx-auto px-[50px] py-10">
        <div className="grid grid-cols-6 gap-x-10">
          {category.columns.map((column, colIndex) => (
            <div key={colIndex}>
              {/* Column Header with Arrow - like Sephora */}
              <div className="mb-4">
                <Link 
                  to={`/category/${category.id}`}
                  className="text-base font-bold text-black hover:underline inline-flex items-center"
                >
                  {column.title}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {column.sections.map((section, secIndex) => (
                  <div key={secIndex}>
                    {section.heading && (
                      <div className="mb-2">
                        <span className="text-sm font-bold text-black block">
                          {section.heading}
                        </span>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {section.links && section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            className="text-sm text-gray-700 hover:text-black block relative group w-fit"
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf]"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

