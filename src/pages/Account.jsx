import React from 'react';
import { Link } from 'react-router-dom';
import { ACCOUNT_MENU_ITEMS } from '../data/accountMenuData';

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            My Account
          </h1>
          <p className="text-gray-600">Welcome back! Manage your account settings and preferences.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCOUNT_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 gradient-brand rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-light transition-colors">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-xs font-bold px-2 py-0.5 bg-brand-light text-white rounded">
                          {item.badge}
                        </span>
                      )}
                      {item.rightText && (
                        <span className="text-sm text-gray-500 ml-auto">{item.rightText}</span>
                      )}
                    </div>
                    {item.subtitle && (
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;

