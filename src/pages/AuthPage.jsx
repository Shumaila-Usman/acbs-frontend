import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, XCircle } from 'lucide-react';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  
  // Determine initial panel based on route
  const [isLoginActive, setIsLoginActive] = useState(location.pathname === '/login');

  // Update panel when route changes
  useEffect(() => {
    setIsLoginActive(location.pathname === '/login');
  }, [location.pathname]);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Register form state
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [registerError, setRegisterError] = useState('');
  const [registerLoading, setRegisterLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Password validation checks
  const passwordChecks = {
    length: registerData.password.length >= 8,
    uppercase: /[A-Z]/.test(registerData.password),
    lowercase: /[a-z]/.test(registerData.password),
    number: /[0-9]/.test(registerData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(registerData.password)
  };

  const isPasswordStrong = Object.values(passwordChecks).every(check => check);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    setLoginError('');
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
    setRegisterError('');
  };

  const validatePassword = () => {
    if (registerData.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!passwordChecks.uppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!passwordChecks.lowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!passwordChecks.number) {
      return 'Password must contain at least one number';
    }
    if (!passwordChecks.special) {
      return 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)';
    }
    return null;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const result = await login(loginData.email, loginData.password);
      
      if (result.success) {
        navigate('/account');
      } else {
        setLoginError(result.message || 'Login failed');
      }
    } catch (err) {
      setLoginError('An error occurred during login');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');

    // Validate password strength
    const passwordError = validatePassword();
    if (passwordError) {
      setRegisterError(passwordError);
      return;
    }

    // Validate passwords match
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError('Passwords do not match');
      return;
    }

    // Validate phone format (basic)
    if (registerData.phone && !/^\+?[\d\s\-()]+$/.test(registerData.phone)) {
      setRegisterError('Please enter a valid phone number');
      return;
    }

    setRegisterLoading(true);

    try {
      const result = await register({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        phone: registerData.phone,
        password: registerData.password
      });

      if (result.success) {
        navigate('/account');
      } else {
        setRegisterError(result.message || 'Registration failed. Please ensure the backend server is running.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setRegisterError('Cannot connect to server. Please ensure the backend is running on http://localhost:5000');
    } finally {
      setRegisterLoading(false);
    }
  };

  const switchToRegister = () => {
    setIsLoginActive(false);
    navigate('/register', { replace: true });
  };

  const switchToLogin = () => {
    setIsLoginActive(true);
    navigate('/login', { replace: true });
  };

  // Mobile Login Form Component
  const MobileLoginForm = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
        Login
      </h2>
      <p className="text-center text-gray-600 mb-6">Sign in to your account</p>

      {loginError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
          {loginError}
        </div>
      )}

      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 rounded" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-[#0ea7e0] hover:text-[#5631cf] font-medium">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loginLoading}
          className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loginLoading ? 'Signing In...' : 'Login'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#0ea7e0] hover:text-[#5631cf] font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );

  // Mobile Register Form Component
  const MobileRegisterForm = () => (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
        Registration
      </h2>
      <p className="text-center text-gray-600 mb-6">Create your account</p>

      {registerError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
          {registerError}
        </div>
      )}

      <form onSubmit={handleRegisterSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="firstName"
            value={registerData.firstName}
            onChange={handleRegisterChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={registerData.lastName}
            onChange={handleRegisterChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
            placeholder="Last Name"
          />
        </div>

        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
          placeholder="Email"
        />

        <input
          type="tel"
          name="phone"
          value={registerData.phone}
          onChange={handleRegisterChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
          placeholder="Phone Number"
        />

        <div>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            onFocus={() => setPasswordFocused(true)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
            placeholder="Password"
          />
          
          {/* Password Strength Indicator */}
          {passwordFocused && registerData.password && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-xs space-y-1">
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  {passwordChecks.length ? (
                    <CheckCircle size={12} className="text-green-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                  <span className={passwordChecks.length ? 'text-green-700' : 'text-gray-600'}>
                    8+ characters
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.uppercase ? (
                    <CheckCircle size={12} className="text-green-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                  <span className={passwordChecks.uppercase ? 'text-green-700' : 'text-gray-600'}>
                    Uppercase (A-Z)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.lowercase ? (
                    <CheckCircle size={12} className="text-green-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                  <span className={passwordChecks.lowercase ? 'text-green-700' : 'text-gray-600'}>
                    Lowercase (a-z)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.number ? (
                    <CheckCircle size={12} className="text-green-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                  <span className={passwordChecks.number ? 'text-green-700' : 'text-gray-600'}>
                    Number (0-9)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {passwordChecks.special ? (
                    <CheckCircle size={12} className="text-green-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                  <span className={passwordChecks.special ? 'text-green-700' : 'text-gray-600'}>
                    Special character (!@#$%^&*)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <input
          type="password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          disabled={registerLoading}
          className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {registerLoading ? 'Creating Account...' : 'Register'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#0ea7e0] hover:text-[#5631cf] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Mobile View - Simple Forms */}
      <div className="lg:hidden w-full">
        {isLoginActive ? <MobileLoginForm /> : <MobileRegisterForm />}
      </div>

      {/* Desktop View - Sliding Panel Design */}
      <div className="hidden lg:block relative w-full max-w-4xl min-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Forms Container */}
        <div className="flex h-full min-h-[600px]">
          {/* Login Form - Left Side */}
          <div className={`w-1/2 p-8 flex flex-col justify-center transition-all duration-700 ${isLoginActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="max-w-sm mx-auto w-full">
              <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                Login
              </h2>
              <p className="text-center text-gray-600 mb-6">Sign in to your account</p>

              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                    placeholder="Password"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-[#0ea7e0] hover:text-[#5631cf] font-medium">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loginLoading ? 'Signing In...' : 'Login'}
                </button>
              </form>
            </div>
          </div>

          {/* Register Form - Right Side */}
          <div className={`w-1/2 p-8 flex flex-col justify-center transition-all duration-700 ${!isLoginActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="max-w-sm mx-auto w-full">
              <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                Registration
              </h2>
              <p className="text-center text-gray-600 mb-6">Create your account</p>

              {registerError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                  {registerError}
                </div>
              )}

              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                  placeholder="Email"
                />

                <input
                  type="tel"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                  placeholder="Phone Number"
                />

                <div>
                  <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    onFocus={() => setPasswordFocused(true)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                    placeholder="Password"
                  />
                  
                  {/* Password Strength Indicator */}
                  {passwordFocused && registerData.password && (
                    <div className="mt-2 p-2 bg-gray-50 rounded-lg text-xs space-y-1">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="flex items-center gap-1">
                          {passwordChecks.length ? (
                            <CheckCircle size={12} className="text-green-500" />
                          ) : (
                            <XCircle size={12} className="text-red-500" />
                          )}
                          <span className={passwordChecks.length ? 'text-green-700' : 'text-gray-600'}>
                            8+ characters
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {passwordChecks.uppercase ? (
                            <CheckCircle size={12} className="text-green-500" />
                          ) : (
                            <XCircle size={12} className="text-red-500" />
                          )}
                          <span className={passwordChecks.uppercase ? 'text-green-700' : 'text-gray-600'}>
                            Uppercase (A-Z)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {passwordChecks.lowercase ? (
                            <CheckCircle size={12} className="text-green-500" />
                          ) : (
                            <XCircle size={12} className="text-red-500" />
                          )}
                          <span className={passwordChecks.lowercase ? 'text-green-700' : 'text-gray-600'}>
                            Lowercase (a-z)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {passwordChecks.number ? (
                            <CheckCircle size={12} className="text-green-500" />
                          ) : (
                            <XCircle size={12} className="text-red-500" />
                          )}
                          <span className={passwordChecks.number ? 'text-green-700' : 'text-gray-600'}>
                            Number (0-9)
                          </span>
                        </div>
                        <div className="flex items-center gap-1 col-span-2">
                          {passwordChecks.special ? (
                            <CheckCircle size={12} className="text-green-500" />
                          ) : (
                            <XCircle size={12} className="text-red-500" />
                          )}
                          <span className={passwordChecks.special ? 'text-green-700' : 'text-gray-600'}>
                            Special character (!@#$%^&*)
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                  placeholder="Confirm Password"
                />

                <button
                  type="submit"
                  disabled={registerLoading}
                  className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {registerLoading ? 'Creating Account...' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sliding Overlay Panel */}
        <div 
          className={`absolute top-0 w-1/2 h-full gradient-brand transition-transform duration-700 ease-in-out flex items-center justify-center ${
            isLoginActive ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className="text-center text-white px-8">
            {isLoginActive ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Hello, Welcome!</h2>
                <p className="mb-8 text-white/90">Don't have an account?</p>
                <button
                  onClick={switchToRegister}
                  className="px-12 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-[#0ea7e0] transition-all duration-300"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                <p className="mb-8 text-white/90">Already have an account?</p>
                <button
                  onClick={switchToLogin}
                  className="px-12 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-[#0ea7e0] transition-all duration-300"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
