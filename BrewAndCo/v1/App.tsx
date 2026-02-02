
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import About from './components/About';
import FeatureStats from './components/FeatureStats';
import Menu from './components/Menu';
import TracingPath from './components/TracingPath';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <FeaturedIn />
        <About />
        <FeatureStats />
        <Menu />
        <TracingPath />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
