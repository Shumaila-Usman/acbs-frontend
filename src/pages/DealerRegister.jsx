import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Briefcase } from 'lucide-react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';
import ScrollAnimation from '../components/ScrollAnimation';

const DealerRegister = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    // Business Details
    companyName: '',
    businessType: '',
    businessAddress: '',
    city: '',
    province: '',
    
    // Supplier Information
    hasTireSupplier: false,
    currentSupplierName: '',
    
    // Contact & Login
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [dealerId, setDealerId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Canadian Provinces
  const canadianProvinces = [
    { value: '', label: 'Select Province' },
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' }
  ];

  // Major Canadian Cities by Province
  const canadianCitiesByProvince = {
    'AB': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray'],
    'BC': ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond', 'Kelowna'],
    'MB': ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson'],
    'NB': ['Moncton', 'Saint John', 'Fredericton', 'Dieppe'],
    'NL': ['St. John\'s', 'Mount Pearl', 'Corner Brook', 'Conception Bay South'],
    'NS': ['Halifax', 'Dartmouth', 'Sydney', 'Truro'],
    'NT': ['Yellowknife', 'Hay River', 'Inuvik'],
    'NU': ['Iqaluit', 'Rankin Inlet', 'Arviat'],
    'ON': ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor', 'Waterloo'],
    'PE': ['Charlottetown', 'Summerside', 'Stratford'],
    'QC': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke'],
    'SK': ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw'],
    'YT': ['Whitehorse', 'Dawson City', 'Watson Lake']
  };

  const availableCities = formData.province ? canadianCitiesByProvince[formData.province] || [] : [];

  // Password validation checks
  const passwordChecks = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  };

  const isPasswordStrong = Object.values(passwordChecks).every(check => check);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    if (!isPasswordStrong) {
      setError('Password does not meet all requirements');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/auth/register-dealer', {
        companyName: formData.companyName,
        businessType: formData.businessType,
        businessAddress: formData.businessAddress,
        city: formData.city,
        province: formData.province,
        hasTireSupplier: formData.hasTireSupplier,
        currentSupplierName: formData.currentSupplierName,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        setDealerId(response.data.dealerId);
        setShowSuccess(true);
        
        // Automatically log in the dealer
        try {
          await login(formData.email, formData.password);
          
          // Auto-redirect after 3 seconds
          setTimeout(() => {
            navigate('/dealer-portal');
          }, 3000);
        } catch (loginError) {
          console.error('Auto-login failed:', loginError);
          // If auto-login fails, redirect to login page
          setTimeout(() => {
            navigate('/dealer-login');
          }, 3000);
        }
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Dealer registration error:', err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center px-4 py-12">
        <ScrollAnimation animation="scale">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 gradient-brand rounded-full mb-6">
              <CheckCircle size={48} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Your dealer account has been created successfully and you're being logged in automatically.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Your Dealer ID:</p>
              <p className="text-2xl font-bold text-brand-light mb-2">{dealerId}</p>
              <p className="text-sm text-gray-500">
                This ID has been saved to your account. You can find it in your profile.
              </p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              An email has been sent to <strong>{formData.email}</strong> with your dealer ID and login instructions.
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-brand-light rounded-full animate-pulse"></span>
              Redirecting to dealer portal...
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollAnimation animation="up">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-brand rounded-full mb-4">
                <Briefcase size={32} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Dealer Registration
              </h1>
              <p className="text-gray-600">Create your dealer account</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-light">
                  1. Business Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Business *
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="e.g., Beauty Salon, Spa, Retail Store"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Address *
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="Street Address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                        Province *
                      </label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={(e) => {
                          handleChange(e);
                          // Reset city when province changes
                          setFormData(prev => ({ ...prev, city: '' }));
                        }}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent bg-white"
                      >
                        {canadianProvinces.map(province => (
                          <option key={province.value} value={province.value}>
                            {province.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        disabled={!formData.province}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select City</option>
                        {availableCities.map(city => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      {!formData.province && (
                        <p className="mt-1 text-xs text-gray-500">
                          Please select a province first
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Supplier Information Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-light">
                  2. Supplier Information (Optional)
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="hasTireSupplier"
                      name="hasTireSupplier"
                      checked={formData.hasTireSupplier}
                      onChange={handleChange}
                      className="w-5 h-5 text-brand-light focus:ring-brand-light border-gray-300 rounded"
                    />
                    <label htmlFor="hasTireSupplier" className="text-sm font-medium text-gray-700">
                      Do you currently have a tire supplier?
                    </label>
                  </div>

                  {formData.hasTireSupplier && (
                    <div>
                      <label htmlFor="currentSupplierName" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Supplier Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="currentSupplierName"
                        name="currentSupplierName"
                        value={formData.currentSupplierName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                        placeholder="Current Supplier Name"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Contact & Login Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-light">
                  3. Contact & Login Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setPasswordFocused(true)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="Create a strong password"
                    />
                    
                    {passwordFocused && (
                      <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Password Requirements:</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            {passwordChecks.length ? (
                              <CheckCircle size={16} className="text-green-500" />
                            ) : (
                              <XCircle size={16} className="text-gray-400" />
                            )}
                            <span className={passwordChecks.length ? 'text-green-700' : 'text-gray-600'}>
                              At least 8 characters
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            {passwordChecks.uppercase ? (
                              <CheckCircle size={16} className="text-green-500" />
                            ) : (
                              <XCircle size={16} className="text-gray-400" />
                            )}
                            <span className={passwordChecks.uppercase ? 'text-green-700' : 'text-gray-600'}>
                              One uppercase letter
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            {passwordChecks.lowercase ? (
                              <CheckCircle size={16} className="text-green-500" />
                            ) : (
                              <XCircle size={16} className="text-gray-400" />
                            )}
                            <span className={passwordChecks.lowercase ? 'text-green-700' : 'text-gray-600'}>
                              One lowercase letter
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            {passwordChecks.number ? (
                              <CheckCircle size={16} className="text-green-500" />
                            ) : (
                              <XCircle size={16} className="text-gray-400" />
                            )}
                            <span className={passwordChecks.number ? 'text-green-700' : 'text-gray-600'}>
                              One number
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            {passwordChecks.special ? (
                              <CheckCircle size={16} className="text-green-500" />
                            ) : (
                              <XCircle size={16} className="text-gray-400" />
                            )}
                            <span className={passwordChecks.special ? 'text-green-700' : 'text-gray-600'}>
                              One special character (!@#$%^&*...)
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Register as Dealer'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have a dealer account?{' '}
                <a href="/dealer-login" className="text-brand-light hover:text-brand-dark font-semibold">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default DealerRegister;

