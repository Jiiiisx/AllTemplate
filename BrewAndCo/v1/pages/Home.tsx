
import React from 'react';
import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import About from '../components/About';
import FeatureStats from '../components/FeatureStats';
import Menu from '../components/Menu';
import TracingPath from '../components/TracingPath';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <About />
      <FeatureStats />
      <Menu />
      <TracingPath />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
