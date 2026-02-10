import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/layout/MainLayout';
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

  return (
    <Routes>
      <Route path="/" element={
        <MainLayout toggleDarkMode={toggleDarkMode}>
          <Home />
        </MainLayout>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;