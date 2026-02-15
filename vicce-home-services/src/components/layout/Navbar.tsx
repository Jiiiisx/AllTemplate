import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY.current;
    
    // Close mobile menu on scroll
    if (isMobileMenuOpen && Math.abs(direction) > 5) {
      setIsMobileMenuOpen(false);
    }

    // Scrolled state
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Smart Hide Logic
    if (latest > 100) {
      if (direction > 0 && !isHidden && !isMobileMenuOpen) {
        setIsHidden(true);
      } else if (direction < 0 && isHidden) {
        setIsHidden(false);
      }
    } else {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  return (
    <>
      {/* Backdrop for mobile menu - Clicking outside closes the menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-vicce-charcoal/20 backdrop-blur-sm z-[45] md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-vicce-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-vicce-charcoal">
              {SITE_DATA.name}
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {SITE_DATA.navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-vicce-charcoal/70 hover:text-vicce-charcoal transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

                  <div className="flex items-center gap-2 md:gap-4">
                    <button 
                      className="hidden md:block btn-primary"
                      onClick={onBookClick}
                    >
                      Book Now
                    </button>            
            {/* Hamburger Button */}
            <button 
              className="md:hidden p-2 text-vicce-charcoal relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="md:hidden absolute top-full left-0 right-0 bg-vicce-cream border-t border-vicce-muted overflow-hidden shadow-2xl"
            >
              <div className="p-8 flex flex-col gap-6">
                {SITE_DATA.navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl font-serif text-vicce-charcoal"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="btn-primary w-full py-4 text-lg mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
