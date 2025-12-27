import React from 'react';

const TopOfferBar = () => {
  return (
    <div className="gradient-brand text-white py-1.5 px-4 relative overflow-hidden">
      {/* Decorative elements for more attractiveness */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wide">
             Extra 20% off Sale Items. Use code <span className="font-bold text-yellow-300">BONUS20</span>. *Terms apply. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopOfferBar;

