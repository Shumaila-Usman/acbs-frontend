import React from 'react';
import Carousel from '../components/home/Carousel';
import HeroSection from '../components/home/HeroSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandsSlideshow from '../components/home/BrandsSlideshow';
import FeaturedProducts from '../components/home/FeaturedProducts';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Carousel />
      <HeroSection />
      <CategoryTiles />
      <BrandsSlideshow />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;

