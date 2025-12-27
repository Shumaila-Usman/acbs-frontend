import React, { useState } from 'react';
import TopOfferBar from './TopOfferBar';
import MainHeaderRow from './MainHeaderRow';
import CategoryNavBar from './CategoryNavBar';
import MobileNavDrawer from './MobileNavDrawer';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <TopOfferBar />
        <MainHeaderRow onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
        <CategoryNavBar />
      </header>
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;

