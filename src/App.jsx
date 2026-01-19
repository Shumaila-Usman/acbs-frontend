import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/header/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Account from './pages/Account';
import DealerPortalLogin from './pages/DealerPortalLogin';
import DealerRegister from './pages/DealerRegister';
import DealerPortal from './pages/DealerPortal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import ComingSoon from './pages/ComingSoon';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/register" element={<AuthPage />} />
              <Route path="/account/*" element={<Account />} />
              <Route path="/dealer-portal-login" element={<DealerPortalLogin />} />
              <Route path="/dealer-login" element={<DealerPortalLogin />} />
              <Route path="/dealer-register" element={<DealerRegister />} />
              <Route path="/dealer-portal" element={<DealerPortal />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Product Pages */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:categoryId" element={<ProductsPage />} />
              <Route path="/products/:categoryId/:subcategoryId" element={<ProductsPage />} />
              <Route path="/category/:categoryId" element={<ProductsPage />} />
              <Route path="/category/:categoryId/:subcategoryId" element={<ProductsPage />} />
              
              {/* Placeholder pages - Coming Soon */}
              <Route path="/careers" element={<ComingSoon pageName="Careers" />} />
              <Route path="/press" element={<ComingSoon pageName="Press" />} />
              <Route path="/affiliates" element={<ComingSoon pageName="Affiliates" />} />
              <Route path="/shipping" element={<ComingSoon pageName="Shipping & Delivery" />} />
              <Route path="/returns" element={<ComingSoon pageName="Returns & Exchanges" />} />
              <Route path="/sale" element={<ComingSoon pageName="Sale & Offers" />} />
              <Route path="/privacy" element={<ComingSoon pageName="Privacy Policy" />} />
              <Route path="/terms" element={<ComingSoon pageName="Terms of Service" />} />
              <Route path="/accessibility" element={<ComingSoon pageName="Accessibility" />} />
              
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

