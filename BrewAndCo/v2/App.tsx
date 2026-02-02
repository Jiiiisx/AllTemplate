
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import FeatureStats from './components/FeatureStats';
import Philosophy from './components/Philosophy';
import Shop from './components/Shop';
import OurStory from './components/OurStory';
import VisualJournal from './components/VisualJournal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} />
      
      <main>
        <Hero />
        <FeaturedIn />
        <FeatureStats />
        <Philosophy />
        <Shop onAddToCart={addToCart} />
        <OurStory />
        <VisualJournal />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
