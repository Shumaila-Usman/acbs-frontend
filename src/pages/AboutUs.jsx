import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Users, Grid3x3, Headset, Mail, Phone } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutUs = () => {
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
      <section className="relative gradient-brand text-white py-24 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About Allied PRO Beauty Supply
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            Everything you need to run the beauty game: top-tier gear, expert coaching, and real support
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-dark px-12 py-5 text-xl rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Born from Passion & Supporting Your Success - Side by Side */}
      <ScrollAnimation animation="up">
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Born from Passion */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Born from Passion, Built for Professionals
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Allied PRO Beauty Supply was created by beauty professionals, for beauty professionals. With years of hands-on experience in the industry, we understand the importance of reliable products, up-to-date training, and ongoing support to help beauty businesses thrive. Our mission is to supply beauty pros with everything they need — from premium lash and brow tools to skincare essentials and expert education.
              </p>
            </div>

            {/* Supporting Your Success */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Supporting Your Success at Every Stage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're just starting your beauty career or running a busy salon, we're here to support your journey. Our goal is to empower beauty professionals with high-quality products, cutting-edge training, and the tools to grow successful businesses. We believe that when beauty pros succeed, the whole industry shines brighter.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Why Beauty Pros Choose Allied PRO */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            Why Beauty Pros Choose Allied PRO
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Allied PRO is the ultimate destination for salon-grade products, professional tools, and dedicated business support—all under one roof.
          </p>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Pro-Grade Products */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="/about/card1-pro-grade-products.jpg"
                  alt="Pro-Grade Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Package className="w-8 h-8 text-brand-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Pro-Grade Products
                </h3>
                <p className="text-gray-600 text-center">
                  Allied PRO offers high-quality, salon-tested tools and supplies that deliver consistent, flawless results.
                </p>
              </div>
            </div>

            {/* Card 2 - Trusted Industry Experts */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="/about/card2-trusted-experts.jpg"
                  alt="Trusted Industry Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-brand-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Trusted Industry Experts
                </h3>
                <p className="text-gray-600 text-center">
                  Backed by years of experience, our products are chosen by seasoned estheticians, makeup artists, and educators.
                </p>
              </div>
            </div>

            {/* Card 3 - Wide Selection */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="/about/card3-wide-selection.jpg"
                  alt="Wide Selection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Grid3x3 className="w-8 h-8 text-brand-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Wide Selection
                </h3>
                <p className="text-gray-600 text-center">
                  From waxing and skincare to brows and lashes, Allied PRO carries the essentials pros need—under one roof.
                </p>
              </div>
            </div>

            {/* Card 4 - Business Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="/about/card4-business-support.jpg"
                  alt="Business Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Headset className="w-8 h-8 text-brand-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Business Support
                </h3>
                <p className="text-gray-600 text-center">
                  Our team understands the beauty industry and provides expert guidance, fast shipping, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Quality You Can See and Feel */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            Quality You Can See and Feel
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            As a leading wholesale beauty distributor, Allied PRO provides the salon-grade products, expert-trusted tools, and reliable business support you need to thrive, all in one place.
          </p>
        </div>
      </section>
      </ScrollAnimation>

      {/* Our Mission & Our Vision - Side by Side */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-light to-brand-dark rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent text-center">
                Our mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To equip every beauty professional with industry-leading tools and premium wholesale supplies. At Allied PRO, we are committed to inspiring your creativity and supporting your business growth with reliable, high-performance products that deliver lasting success for your salon.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-dark to-brand-light rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent text-center">
                Our vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the premier destination for wholesale beauty innovation, where every professional has the tools and support to redefine industry standards. We envision a global community of empowered stylists and artists growing their businesses with confidence. By curating the finest salon-grade solutions, we aim to be the lifelong partner that helps beauty experts transform their passion into lasting success.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Salon/Workspace Image Section */}
      <ScrollAnimation animation="scale" delay={100}>
      <section className="py-0 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <img
              src="/about/salon-workspace.jpg"
              alt="Professional Beauty Salon Workspace"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Samira Farooq - Founder */}
      <ScrollAnimation animation="left" delay={100}>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl text-brand-light font-bold mb-2">
                Founder & CEO: Samira Farooq
              </h3>
              <h4 className="text-xl text-gray-600 font-semibold mb-6">
                30+ Years of Excellence in Aesthetics & Beauty
              </h4>
              
              <div className="bg-blue-50 border-l-4 border-brand-light p-6 rounded-lg mb-6 italic">
                <p className="text-lg text-gray-800 leading-relaxed">
                  "My mission is to provide beauty pros with the high-performance tools I wish I had when I started my career."
                </p>
                <p className="text-right text-gray-700 font-semibold mt-2">— Samira Farooq</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With over three decades of hands-on experience, Samira Farooq has transitioned from a master aesthetician to a leading wholesale distributor. Her journey is defined by a deep commitment to elevating industry standards through education and premium product sourcing.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Expert Sourcing</h5>
                    <p className="text-gray-700">Leveraging 30 years of insight to curate a catalog of top-tier, salon-tested products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Education Focused</h5>
                    <p className="text-gray-700">Dedicated to mentoring the next generation of beauty professionals through advanced training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Professional Partnership</h5>
                    <p className="text-gray-700">Building Allied PRO into a cornerstone resource for practitioners who demand excellence.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/about/samira-farooq.jpg"
                  alt="Samira Farooq - Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Meet the Experts Section */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            Meet the Experts Behind Allied PRO
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Behind every product and training session is a team of passionate beauty professionals who are dedicated to helping you succeed. We've walked in your shoes, faced the same challenges, and found ways to grow — and now, we're here to share that knowledge with you.
          </p>

          {/* Natasha Kowalski */}
          <div className="mb-16 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="h-full bg-gray-200 flex items-center justify-center p-8">
                  <img
                    src="/about/natasha-kowalski.jpg"
                    alt="Natasha Kowalski"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Natasha Kowalski
                </h3>
                <p className="text-lg text-brand-light font-semibold mb-6">
                  Aesthetician & Operations Manager
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 15 years of industry experience, Natasha bridges the gap between clinical aesthetics and operational excellence. Having spent a decade as a master aesthetician, she now oversees the seamless delivery of products and support to Allied PRO clients.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">Expert Logistics</h5>
                      <p className="text-gray-700">Ensures reliable, professional service for every partner.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">Pro Perspective</h5>
                      <p className="text-gray-700">Uses her hands-on background to select the best tools for the trade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">Team Growth</h5>
                      <p className="text-gray-700">Dedicated to building a collaborative, empowering environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ammara Ferwa */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="h-full bg-gray-200 flex items-center justify-center p-8">
                  <img
                    src="/about/ammara-ferwa.jpg"
                    alt="Ammara Ferwa"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 p-8 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Ammara Ferwa
                </h3>
                <p className="text-lg text-brand-light font-semibold mb-6">
                  Sales Specialist & Skincare Expert | BSc Biology
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a Bachelor of Science in Biology, Ammara combines the science of skincare with top-tier customer service. She leverages seven years of experience to provide professionals with technical, science-backed product recommendations.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">Scientific Insight</h5>
                      <p className="text-gray-700">Uses her biology background to explain how products interact with the skin at a cellular level.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">Expert Consulting</h5>
                      <p className="text-gray-700">Seven years of experience in delivering personalized, data-driven skincare solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-light rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-gray-900">B2B Relationship Builder</h5>
                      <p className="text-gray-700">Focused on driving sales through informed, confident client partnerships and ongoing support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block px-12 py-5 text-xl gradient-brand text-white font-bold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              Speak with an Expert Today
            </Link>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Get in Touch with Form */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Get in touch
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have questions about our beauty courses, professional products, or upcoming trainings — we're here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-brand-light" />
                  <a href="tel:+14379554480" className="text-lg text-gray-700 hover:text-brand-light transition-colors">
                    +1 (437) 955-4480
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-brand-light" />
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=info@alliedpro.ca&tf=cm" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-brand-light transition-colors">
                    info@alliedpro.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
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
                  className="w-full py-5 text-xl gradient-brand text-white font-bold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
                >
                  Submit Your Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* We're Stronger Together */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
            We're Stronger Together
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Allied PRO is more than a supplier — we're a community of beauty professionals dedicated to lifting each other up. Follow us for industry insights, product tips, and inspiration to help you thrive in your beauty career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Now
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-brand-light transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
};

export default AboutUs;

