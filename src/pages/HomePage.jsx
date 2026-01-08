import React from 'react';
import Carousel from '../components/home/Carousel';
import HeroSection from '../components/home/HeroSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandsSlideshow from '../components/home/BrandsSlideshow';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ScrollAnimation from '../components/ScrollAnimation';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Carousel />
      <ScrollAnimation animation="fade">
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation animation="up" delay={100}>
        <CategoryTiles />
      </ScrollAnimation>
      <ScrollAnimation animation="fade" delay={200}>
        <BrandsSlideshow />
      </ScrollAnimation>
      <ScrollAnimation animation="up" delay={100}>
        <FeaturedProducts />
      </ScrollAnimation>
    </main>
  );
};

export default HomePage;

