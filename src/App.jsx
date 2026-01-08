import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/header/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import DealerPortalLogin from './pages/DealerPortalLogin';
import DealerRegister from './pages/DealerRegister';
import DealerPortal from './pages/DealerPortal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account/*" element={<Account />} />
              <Route path="/dealer-portal-login" element={<DealerPortalLogin />} />
              <Route path="/dealer-login" element={<DealerPortalLogin />} />
              <Route path="/dealer-register" element={<DealerRegister />} />
              <Route path="/dealer-portal" element={<DealerPortal />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center px-4">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Page not found</p>
                    <a 
                      href="/" 
                      className="inline-block px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

