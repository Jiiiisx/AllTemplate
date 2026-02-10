import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import NotFound from './pages/NotFound';
import MainLayout from './components/layout/MainLayout';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );

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

    // Apply theme class to document
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);

    return () => {
      lenis.destroy();
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <FavoritesProvider>
      <MainLayout theme={theme} toggleTheme={toggleTheme} isLoading={isLoading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </FavoritesProvider>
  );
}