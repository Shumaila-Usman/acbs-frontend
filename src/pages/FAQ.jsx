import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Users, Package, Truck, Award } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Allied PRO?",
      answer: "Allied Pro is a trusted supplier of high-quality beauty products and professional training services, dedicated to empowering beauty professionals with the tools and knowledge they need to succeed.",
      icon: HelpCircle
    },
    {
      question: "Who can shop at Allied Concept Beauty Supply?",
      answer: "We serve licensed beauty professionals, salon/spa owners, and students. While some retail items are open to the public, professional-grade products require a verified account.",
      icon: Users
    },
    {
      question: "How does your product/service work?",
      answer: "We provide high-quality beauty products and professional training to help beauty professionals succeed. Our process is simple, efficient, and tailored to meet your needs.",
      icon: Package
    },
    {
      question: "Do You Sell at Wholesale?",
      answer: "Yes, we offer wholesale pricing for beauty professionals and businesses. Contact us for more details on bulk orders and customized pricing tailored to your needs.",
      icon: Award
    },
    {
      question: "Is there a minimum order quantity (MOQ) for wholesale?",
      answer: "We do not have a site-wide minimum, but specific brands may require a minimum opening order to maintain authorized dealer status.",
      icon: Package
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Please check our shipping policy or contact us for more details on international orders.",
      icon: Truck
    },
    {
      question: "What happens if my equipment arrives damaged?",
      answer: "You must inspect all freight deliveries before signing the BOL (Bill of Lading). If the packaging is damaged, note it on the form and contact us within 24 hours.",
      icon: Shield
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us by +1(437) 955-4480 and by email at info@alliedpro.ca or visit our website www.alliedpro.ca. We are always happy to answer your questions.",
      icon: HelpCircle
    },
    {
      question: "Do you offer training programs?",
      answer: "Yes, we offer a range of professional training programs in beauty services, including brow sculpting, microblading, lash extensions, and more. Visit our \"Training\" page for detailed course information and upcoming schedules!",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative gradient-brand text-white py-24 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm">
            <span className="text-white font-semibold">Got Questions? We've Got Answers!</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, and policies
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <ScrollAnimation animation="up">
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our most commonly asked questions below
            </p>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <ScrollAnimation key={index} animation="left" delay={index * 50}>
                  <div
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      openFaq === index 
                        ? 'border-brand-light ring-4 ring-brand-light/20' 
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-6 flex items-center gap-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
                    >
                      {/* Icon Badge */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openFaq === index 
                          ? 'bg-gradient-to-r from-brand-light to-brand-dark shadow-lg' 
                          : 'bg-gradient-to-br from-purple-100 to-blue-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          openFaq === index ? 'text-white' : 'text-brand-dark'
                        }`} />
                      </div>
                      
                      {/* Question */}
                      <span className="flex-1 text-lg font-bold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      
                      {/* Toggle Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === index 
                          ? 'bg-brand-light rotate-180' 
                          : 'bg-gray-100'
                      }`}>
                        <ChevronDown className={`w-6 h-6 ${
                          openFaq === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                    </button>
                    
                    {/* Answer with smooth animation */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-16 pr-4">
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-brand-light">
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Contact CTA */}
      <ScrollAnimation animation="scale" delay={100}>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative gradient-brand rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10 text-center py-16 px-8">
              <div className="inline-block mb-6 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Can't find the answer you're looking for? Our expert team is here to help you with any inquiries you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block px-10 py-5 text-xl bg-white text-brand-dark font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Contact Us Now
                </a>
                <a
                  href="tel:+14379554480"
                  className="inline-block px-10 py-5 text-xl bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/30"
                >
                  Call +1 (437) 955-4480
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
};

export default FAQ;


