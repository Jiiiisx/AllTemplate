import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Services', href: '#services' },
    { label: 'Tour', href: '#tour' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 ${
          isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm border-b border-secondary/5' 
          : 'py-8 bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div 
            className={`text-xl font-black tracking-tighter cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            {siteConfig.name.toUpperCase()}
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden items-center gap-1 rounded-full p-1 transition-all duration-300 md:flex ${
            isScrolled ? 'bg-secondary/5 border border-secondary/10' : 'bg-white/10 backdrop-blur-md'
          }`}>
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
                  isScrolled 
                  ? 'text-secondary/60 hover:text-secondary hover:bg-secondary/5' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
              className={`hidden md:block rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-500 shadow-lg ${
                isScrolled 
                ? 'bg-secondary text-white hover:bg-accent shadow-secondary/20' 
                : 'bg-white text-secondary hover:bg-white/90 shadow-black/10'
              }`}
            >
              Book Now
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors md:hidden ${
                isScrolled ? 'text-secondary bg-secondary/5' : 'text-white bg-white/10'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-secondary p-8 text-white flex flex-col"
          >
            <div className="flex items-center justify-between mb-20">
              <span className="text-xl font-black tracking-tighter">
                {siteConfig.name.toUpperCase()}
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white/10 text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="text-4xl font-black tracking-tight flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-6 bg-white text-secondary font-black rounded-[32px] text-xl"
              >
                BOOK NOW
              </button>
              <p className="mt-8 text-center text-white/40 text-sm">© 2024 NusaTravel Explore Indonesia</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
