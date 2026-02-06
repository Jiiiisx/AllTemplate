import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = theme === 'light';

  const menuLinks = [
    { name: 'Collection', path: '#collection' },
    { name: 'Journal', path: '#featured' },
    { name: 'About', path: '#newsletter' },
    { name: 'Contact', path: `mailto:${siteConfig.email}` },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 bg-background/80 backdrop-blur-sm border-b border-theme">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter transition-colors text-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {siteConfig.name.toUpperCase()}
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-4 group cursor-pointer bg-transparent border-none outline-none"
          >
            <span className="nav-link text-primary">MENU</span>
            <div className="flex flex-col gap-1 w-6">
              <div className="h-[1px] w-full transition-colors bg-primary group-hover:bg-brand-gold"></div>
              <div className="h-[1px] w-full transition-colors bg-primary group-hover:bg-brand-gold"></div>
            </div>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full transition-colors bg-primary/5 text-primary hover:bg-primary/10"
          >
            <span className="material-symbols-outlined text-sm">
              {isLight ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>

        <a 
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Halo " + siteConfig.name + ", saya ingin menjadwalkan kunjungan pribadi...")}`}
          target="_blank"
          rel="noreferrer"
          className="bg-brand-gold text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all text-center"
        >
          BOOK A TOUR
        </a>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 text-primary hover:text-brand-gold transition-colors"
            >
              <span className="material-symbols-outlined text-4xl font-light">close</span>
            </button>

            <div className="flex flex-col items-center gap-8">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.path}
                    className="text-5xl md:text-7xl font-serif hover:text-brand-gold transition-colors italic"
                    onClick={(e) => handleLinkClick(e, link.path)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-20 flex gap-8">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold transition-colors">INSTAGRAM</a>
              <a href="#" className="text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold transition-colors">TWITTER</a>
              <a href="#" className="text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold transition-colors">LINKEDIN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}