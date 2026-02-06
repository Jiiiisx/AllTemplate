
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/FooterSections';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
  );
  const location = useLocation();

  useEffect(() => {
    // Apply theme class to document
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Functional Loading Logic
    const handleLoad = () => {
      // Small timeout to ensure everything is rendered smoothly
      setTimeout(() => setIsLoading(false), 1500);
    };

    // Check if everything is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-500 selection:bg-brand-gold selection:text-black">
      <LoadingScreen isLoading={isLoading} />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>

      <Footer />
      
      {/* Decorative grain overlay for editorial feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
