import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Trash2, Plus, Minus, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ScrollAnimation from '../components/ScrollAnimation';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user, isDealer } = useAuth();
  const [step, setStep] = useState(1); // 1: Cart Review, 2: Shipping, 3: Payment, 4: Confirmation
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    notes: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    billingAddress: 'same'
  });

  // Redirect non-dealers
  if (!isDealer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart size={40} className="text-[#0ea7e0]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Dealer Access Required</h1>
          <p className="text-gray-600 mb-6">
            Checkout is only available for registered dealers. Please register as a dealer to access pricing and place orders.
          </p>
          <Link
            to="/dealer-register"
            className="inline-block px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Become a Dealer
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart size={40} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">
            Add some products to your cart before proceeding to checkout.
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Generate order ID
    const newOrderId = 'ORD-' + Date.now().toString(36).toUpperCase();
    setOrderId(newOrderId);
    setOrderPlaced(true);
    setStep(4);
    clearCart();
  };

  const steps = [
    { number: 1, title: 'Cart Review' },
    { number: 2, title: 'Shipping' },
    { number: 3, title: 'Payment' },
    { number: 4, title: 'Confirmation' }
  ];

  // Order Confirmation Screen
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimation animation="scale">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
              <p className="text-gray-600 mb-2">Thank you for your order.</p>
              <p className="text-gray-600 mb-6">A confirmation email has been sent to <strong>{shippingInfo.email}</strong></p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-500 mb-2">Order Number</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                  {orderId}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dealer-portal"
                  className="px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Go to Dealer Portal
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#0ea7e0] hover:text-[#0ea7e0] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-white">Checkout</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Checkout</h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, index) => (
            <React.Fragment key={s.number}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s.number 
                    ? 'gradient-brand text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s.number ? <CheckCircle size={20} /> : s.number}
                </div>
                <span className={`text-sm mt-2 hidden sm:block ${
                  step >= s.number ? 'text-[#0ea7e0] font-medium' : 'text-gray-500'
                }`}>
                  {s.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded ${
                  step > s.number ? 'gradient-brand' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Step 1: Cart Review */}
            {step === 1 && (
              <ScrollAnimation animation="fade">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Cart</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={item.productId || item._id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0ea7e0]/20 to-[#5631cf]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ShoppingCart className="text-[#0ea7e0]" size={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.subcategory}</p>
                          <p className="text-[#0ea7e0] font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.productId || item._id, Math.max(1, item.quantity - 1))}
                            className="p-2 border border-gray-300 rounded-lg hover:border-[#0ea7e0] transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.productId || item._id, item.quantity + 1)}
                            className="p-2 border border-gray-300 rounded-lg hover:border-[#0ea7e0] transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => removeFromCart(item.productId || item._id)}
                            className="text-red-500 hover:text-red-600 mt-1"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            )}

            {/* Step 2: Shipping */}
            {step === 2 && (
              <ScrollAnimation animation="fade">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                      <select
                        name="province"
                        value={shippingInfo.province}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      >
                        <option value="">Select Province</option>
                        <option value="ON">Ontario</option>
                        <option value="QC">Quebec</option>
                        <option value="BC">British Columbia</option>
                        <option value="AB">Alberta</option>
                        <option value="MB">Manitoba</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="PE">Prince Edward Island</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleShippingChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={shippingInfo.notes}
                        onChange={handleShippingChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#0ea7e0] hover:text-[#0ea7e0] transition-colors"
                    >
                      Back to Cart
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <ScrollAnimation animation="fade">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={paymentInfo.cardName}
                        onChange={handlePaymentChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                          required
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={paymentInfo.expiry}
                          onChange={handlePaymentChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea7e0] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                      <Shield className="text-green-600" size={24} />
                      <p className="text-sm text-green-700">
                        Your payment information is secure and encrypted
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#0ea7e0] hover:text-[#0ea7e0] transition-colors"
                    >
                      Back to Shipping
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      <CreditCard size={20} />
                      Place Order - ${getCartTotal().toFixed(2)}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step < 4 && (
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.productId || item._id} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate max-w-[200px]">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (13%)</span>
                    <span className="font-medium">${(getCartTotal() * 0.13).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#0ea7e0] to-[#5631cf] bg-clip-text text-transparent">
                      ${(getCartTotal() * 1.13).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck size={18} className="text-[#0ea7e0]" />
                    <span>Free shipping on all orders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Shield size={18} className="text-[#0ea7e0]" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

