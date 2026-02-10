import React from 'react';
import Hero from './Hero';
import Menu from './Menu';
import Services from './Services';
import Testimonials from './Testimonials';
import StoreLocator from './StoreLocator';
import InstagramGallery from './InstagramGallery';

const Landing: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <StoreLocator />
      <InstagramGallery />
    </main>
  );
};

export default Landing;
