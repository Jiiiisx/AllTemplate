
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
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
import NotFound from './components/NotFound';
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
  const location = useLocation();

  useEffect(() => {
    // Smooth Scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dynamic SEO update
    document.title = SITE_CONFIG.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SITE_CONFIG.seo.description);
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

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const isNotFound = !['/'].includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!isNotFound && <Navbar toggleDarkMode={toggleDarkMode} />}
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <Footer />}
      {!isNotFound && <AIAssistant />}
    </div>
  );
};

export default App;
