import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_DATA } from '../../data/navData';

const MobileNavDrawer = ({ isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  const toggleCategory = (e, categoryId) => {
    e.stopPropagation();
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleSection = (categoryId, columnIndex, sectionIndex) => {
    const key = `${categoryId}-${columnIndex}-${sectionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto lg:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="py-2">
          {NAV_DATA.map((category) => (
            <div key={category.id} className="border-b border-gray-200">
              {/* Category Row - Link + Expand Button */}
              <div className="flex items-center hover:bg-gray-50 transition-colors">
                <Link
                  to={`/products/${category.id}`}
                  onClick={onClose}
                  className="flex-1 px-4 py-3 font-semibold text-gray-900"
                >
                  {category.name}
                </Link>
                <button
                  onClick={(e) => toggleCategory(e, category.id)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  aria-label={expandedCategories[category.id] ? 'Collapse' : 'Expand'}
                >
                  {expandedCategories[category.id] ? (
                    <ChevronDown size={20} className="text-gray-600" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-600" />
                  )}
                </button>
              </div>

              {/* Expanded Subcategories */}
              {expandedCategories[category.id] && (
                <div className="bg-gray-50 pb-2">
                  {category.columns.map((column, colIndex) => (
                    <div key={colIndex} className="px-4 py-2">
                      <Link
                        to={`/products/${category.id}`}
                        onClick={onClose}
                        className="text-xs font-bold text-brand-light uppercase tracking-wide mb-2 block hover:underline"
                      >
                        {column.title}
                      </Link>
                      {column.sections.map((section, secIndex) => (
                        <div key={secIndex} className="mb-3">
                          {section.heading ? (
                            <>
                              <button
                                onClick={() => toggleSection(category.id, colIndex, secIndex)}
                                className="w-full flex items-center justify-between py-1.5 text-sm font-medium text-gray-700"
                              >
                                <span>{section.heading}</span>
                                {expandedSections[`${category.id}-${colIndex}-${secIndex}`] ? (
                                  <ChevronDown size={16} />
                                ) : (
                                  <ChevronRight size={16} />
                                )}
                              </button>
                              {expandedSections[`${category.id}-${colIndex}-${secIndex}`] && (
                                <ul className="ml-3 mt-1 space-y-1.5">
                                  {section.links?.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <Link
                                        to={link.path}
                                        onClick={onClose}
                                        className="block py-1 text-sm text-gray-600 hover:text-brand-light"
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <ul className="space-y-1.5">
                              {section.links?.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    to={link.path}
                                    onClick={onClose}
                                    className="block py-1 text-sm text-gray-600 hover:text-brand-light"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-300 my-2"></div>

          {/* Sale & Offers */}
          <Link
            to="/sale"
            onClick={onClose}
            className="block px-4 py-3 font-semibold text-red-500 hover:bg-gray-50 transition-colors"
          >
            🔥 Sale & Offers
          </Link>

          {/* About */}
          <Link
            to="/about"
            onClick={onClose}
            className="block px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            About Us
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            onClick={onClose}
            className="block px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Contact
          </Link>

          {/* FAQ */}
          <Link
            to="/faq"
            onClick={onClose}
            className="block px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            FAQ
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavDrawer;
