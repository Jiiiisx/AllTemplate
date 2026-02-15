import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-vicce-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight text-vicce-charcoal">
            {SITE_DATA.name}
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-vicce-charcoal/70 hover:text-vicce-charcoal transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-vicce-charcoal hover:bg-vicce-muted rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="hidden md:block btn-primary"
            onClick={onBookClick}
          >
            Book Now
          </button>
          <button 
            className="md:hidden p-2 text-vicce-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-vicce-cream border-t border-vicce-muted p-6 flex flex-col gap-4 shadow-xl">
          {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-vicce-charcoal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="btn-primary w-full mt-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookClick();
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
