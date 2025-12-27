import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

const DealerPortalLogin = () => {
  const [dealerId, setDealerId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dealer Login:', { dealerId, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-brand rounded-full mb-4">
              <Briefcase size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dealer Portal
            </h1>
            <p className="text-gray-600">Access your dealer dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="dealerId" className="block text-sm font-medium text-gray-700 mb-2">
                Dealer ID
              </label>
              <input
                type="text"
                id="dealerId"
                value={dealerId}
                onChange={(e) => setDealerId(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="Enter your dealer ID"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Access Portal
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need dealer access?{' '}
              <a href="#" className="text-brand-light hover:text-brand-dark font-semibold">
                Contact Sales
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerPortalLogin;

