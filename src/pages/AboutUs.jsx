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
      <section className="gradient-brand text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Allied PRO Beauty Supply
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Empowering Beauty Professionals with Premium Products, Expert Training & Ongoing Support
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
            Beauty pros choose Allied PRO for high-quality products, expert-trusted tools, a wide selection, and reliable support—all in one place.
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
            At Allied PRO Beauty Supply, quality isn't just a promise — it's our standard. Every product we offer is thoroughly tested to ensure it meets the high demands of working professionals. Whether it's lash adhesives, brow tools, or skincare essentials, we only carry products we'd trust in our own services.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Our mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Allied Pro Beauty Supply, our mission is to empower beauty professionals with the highest quality products, tools, and support they need to succeed. We strive to be a trusted partner, offering an extensive range of beauty supplies, from the latest industry innovations to reliable essentials, all tailored to meet the unique demands of our clients. Our commitment is to inspire, equip, and support every beauty professional to elevate their craft and build lasting success.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Our vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Allied Pro Beauty Supply, our vision is to create a world where every beauty professional has access to the highest quality products and support to achieve their best work. We envision a thriving community of empowered stylists, artists, and creators who can confidently pursue their passion with the finest tools and products at their fingertips. By continually innovating and curating exceptional beauty solutions, we aim to be the trusted partner that helps professionals inspire beauty in themselves and others.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
                Samira Farooq
              </h2>
              <h3 className="text-xl text-brand-light font-semibold mb-6">
                Founder & CEO
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The founder of the company has dedicated over 30 years to the aesthetics and beauty industry, building a career defined by passion, expertise, and a commitment to empowering others. Her journey began as a skilled aesthetician, where she quickly earned a reputation for mastering advanced skincare techniques and providing exceptional client care. Over the years, she expanded her expertise to include training and mentoring other beauty professionals, sharing her knowledge to elevate the standards of the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Her experience wasn't just limited to hands-on services. She developed a keen eye for sourcing high-quality products and tools that delivered exceptional results, gaining invaluable insight into the beauty supply market. This expertise, coupled with her passion for supporting beauty professionals, inspired her to take the leap and open a beauty supply store.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Today, her business stands as a trusted resource for beauty practitioners, offering top-tier products, expert advice, and a range of educational opportunities. Her dedication to excellence and her deep understanding of the industry continue to drive the store's success, making it a cornerstone for beauty professionals striving to elevate their craft.
              </p>
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
                <p className="text-gray-700 leading-relaxed">
                  Meet Natasha, a dedicated professional with over 15 years of experience in the beauty industry. Starting her career as an aesthetician, Natasha spent more than a decade perfecting her craft and helping clients feel confident and beautiful. Her expertise and passion for the industry have paved the way for her current role as Operations Manager at AlliedPro Beauty Supplies. In her leadership position, Natasha oversees day-to-day operations, ensuring the seamless delivery of products and services to clients. Her hands-on experience as an aesthetician gives her a unique perspective, enabling her to support beauty professionals with the tools and knowledge they need to succeed. Beyond her professional accomplishments, Natasha is passionate about empowering others in the beauty industry and fostering a collaborative environment at AlliedPro. Her journey from aesthetician to operations manager showcases her dedication, growth, and love for the field.
                </p>
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
                  Sales Specialist & Skincare Expert, Biology BSc
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ammara brings her passion for the science of skincare and exceptional customer service to her role as a Sales Specialist & Skincare Expert at AlliedPro Beauty Supplies. With a Bachelor of Science in Biology, she possesses a deep understanding of how skincare products interact with the skin, enabling her to provide clients with tailored, science-backed recommendations. Her seven years of customer service experience have honed her ability to connect with clients, deliver personalized advice, and create positive experiences. Ammara seamlessly combines her scientific expertise with her customer care skills to ensure clients feel informed and confident in their skincare choices. At AlliedPro, Ammara is dedicated to helping clients discover the best solutions for their skincare needs. Her unique blend of knowledge and experience allows her to foster strong customer relationships while driving sales and supporting the company's mission to empower beauty professionals.
                </p>
              </div>
            </div>
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
                  className="w-full py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
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

