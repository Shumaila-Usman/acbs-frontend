import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Allied PRO?",
      answer: "Allied Pro is a trusted supplier of high-quality beauty products and professional training services, dedicated to empowering beauty professionals with the tools and knowledge they need to succeed."
    },
    {
      question: "How does your product/service work?",
      answer: "We provide high-quality beauty products and professional training to help beauty professionals succeed. Our process is simple, efficient, and tailored to meet your needs."
    },
    {
      question: "Do You Sell at Wholesale?",
      answer: "Yes, we offer wholesale pricing for beauty professionals and businesses. Contact us for more details on bulk orders and customized pricing tailored to your needs."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Please check our shipping policy or contact us for more details on international orders."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us by +1(437) 955-4480 and by email at info@alliedpro.ca or visit our website www.alliedpro.ca. We are always happy to answer your questions."
    },
    {
      question: "Do you offer training programs?",
      answer: "Yes, we offer a range of professional training programs in beauty services, including brow sculpting, microblading, lash extensions, and more. Visit our \"Training\" page for detailed course information and upcoming schedules!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-brand text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and policies
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <ScrollAnimation animation="up">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-brand-light flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Contact CTA */}
      <ScrollAnimation animation="up" delay={100}>
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
      </ScrollAnimation>
    </div>
  );
};

export default FAQ;


