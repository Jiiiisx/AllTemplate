
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Footer } from '../FooterSections';
import LoadingScreen from '../LoadingScreen';

interface MainLayoutProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isLoading: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, theme, toggleTheme, isLoading }) => {
  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-500 selection:bg-brand-gold selection:text-black">
      <LoadingScreen isLoading={isLoading} />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {children}

      <Footer />
      
      {/* Decorative grain overlay for editorial feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default MainLayout;
