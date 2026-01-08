import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ACCOUNT_MENU_ITEMS } from '../data/accountMenuData';
import { LogOut, User } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Account = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-light mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="up">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 gradient-brand rounded-full text-white">
                  <User size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                    {user ? `Welcome, ${user.name}!` : 'My Account'}
                  </h1>
                  {user && (
                    <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-600">Manage your account settings and preferences.</p>
              {user?.company && (
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Company:</span> {user.company}
                </p>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
        </ScrollAnimation>

        <ScrollAnimation animation="up" delay={100}>
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
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Account;

