import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import ScrollAnimation from '../components/ScrollAnimation';

const DealerPortalLogin = () => {
  const navigate = useNavigate();
  const [dealerId, setDealerId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login-dealer', {
        dealerId,
        password
      });

      if (response.data.success) {
        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dealer-portal');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Dealer login error:', err);
      setError(err.response?.data?.message || 'Invalid dealer ID or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <ScrollAnimation animation="scale">
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

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="dealerId" className="block text-sm font-medium text-gray-700 mb-2">
                Dealer ID *
              </label>
              <input
                type="text"
                id="dealerId"
                value={dealerId}
                onChange={(e) => {
                  setDealerId(e.target.value);
                  setError('');
                }}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="DLR123456"
              />
              <p className="mt-1 text-xs text-gray-500">
                Enter the dealer ID provided during registration
              </p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Accessing...' : 'Access Portal'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have a dealer account?{' '}
              <a href="/dealer-register" className="text-brand-light hover:text-brand-dark font-semibold">
                Register as Dealer
              </a>
            </p>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default DealerPortalLogin;

