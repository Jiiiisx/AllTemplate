import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import StoreLocator from '../components/StoreLocator';
import InstagramGallery from '../components/InstagramGallery';

const Home: React.FC = () => {
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

export default Home;