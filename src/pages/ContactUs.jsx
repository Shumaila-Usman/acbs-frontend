import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-brand text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Predict the future by creating it
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Take control of your success by shaping the future you envision. Start today and build the path to your goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <ScrollAnimation animation="up">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            Contact Allied Pro Beauty Supply
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                      Your First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Your Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here"
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Submit Your Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="bg-blue-50 p-8 rounded-lg h-full flex flex-col justify-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Get in touch for inquiries about our extensive range of salon products and equipment available for beauty professionals in Markham, Ontario.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-brand-light flex-shrink-0" />
                      <a href="tel:+14379554480" className="text-lg text-gray-700 hover:text-brand-light transition-colors">
                        +1437-955-4480
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-brand-light flex-shrink-0" />
                      <a href="https://mail.google.com/mail/u/0/?fs=1&to=info@alliedpro.ca&tf=cm" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-brand-light transition-colors">
                        info@alliedpro.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Location Section */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            Our Location
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Visit Allied Pro Beauty Supply for top-quality salon products in Markham, Ontario, catering to beauty professionals and their needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Info - Left Side */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Address</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-brand-light flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      728 Gordan Baker Rd, Toronto ON M2H 3H7
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hours</h3>
                  <p className="text-lg text-gray-700">Mon-Sat: 9am</p>
                </div>
              </div>
            </div>

            {/* Map - Right Side */}
            <div className="h-96 lg:h-full min-h-[400px]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8641234567!2d-79.3456789!3d43.7789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3e9f9f9f9f9%3A0x1234567890abcdef!2s728%20Gordon%20Baker%20Rd%2C%20North%20York%2C%20ON%20M2H%203B4!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Allied Pro Beauty Supply Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

    </div>
  );
};

export default ContactUs;

