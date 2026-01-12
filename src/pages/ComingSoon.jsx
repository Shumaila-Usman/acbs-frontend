import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const ComingSoon = ({ pageName = 'This page' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 gradient-brand rounded-full flex items-center justify-center">
            <Construction size={48} className="text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent mb-4">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          {pageName} is under construction
        </p>
        <p className="text-gray-500 mb-8">
          We're working hard to bring you this feature. Check back soon!
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;


