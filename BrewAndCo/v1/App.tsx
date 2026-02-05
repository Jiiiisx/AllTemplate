
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
import AIAssistant from './components/AIAssistant';
import { SITE_CONFIG } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamic SEO update
    document.title = SITE_CONFIG.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SITE_CONFIG.seo.description);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', SITE_CONFIG.seo.keywords);
    }

    // Artificial delay to show loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
      <AIAssistant />
    </div>
  );
};

export default App;
