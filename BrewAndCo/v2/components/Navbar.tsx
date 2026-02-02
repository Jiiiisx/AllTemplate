
import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, NAV_LINKS } from '../constants';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed w-full z-[100] top-0 transition-all duration-500 ${isMenuOpen ? 'bg-cream' : 'bg-cream/80 nav-blur'} border-b border-espresso/5`}>
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between relative z-[110]">
        <div className="flex items-center gap-3">
          <span className="font-display font-light text-xl md:text-2xl tracking-[0.3em] text-espresso uppercase cursor-pointer">
            {SITE_CONFIG.name}
          </span>
        </div>
        <ul className="hidden lg:flex items-center gap-16 font-medium text-[11px] tracking-[0.4em] uppercase">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="hover:text-clay transition-colors" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden sm:block text-[11px] tracking-[0.3em] font-bold border-b border-espresso pb-1 hover:text-clay hover:border-clay transition-all uppercase">
            Shop Now
          </button>
          <div className="relative cursor-pointer group">
            <span className="material-symbols-outlined !text-[24px] group-hover:text-clay transition-colors">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-clay text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </div>
          
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-espresso"
          >
            <span className="material-symbols-outlined !text-[28px] font-light">
              {isMenuOpen ? 'close' : 'menu_open'}
            </span>
          </button>
        </div>
      </nav>

      {/* Artisanal Mobile Menu */}
      <div className={`fixed inset-0 bg-cream z-[105] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="relative h-full flex flex-col px-8 py-24 md:px-16 md:py-32">
          {/* Decorative element */}
          <div className="absolute top-32 right-[-5%] pointer-events-none opacity-[0.03]">
            <span className="material-symbols-outlined !text-[60vw]">spa</span>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="space-y-16">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-clay block">The Collection</span>
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, idx) => (
                    <li 
                      key={link.href}
                      className={`transition-all duration-1000 delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                      <a 
                        className="font-display text-5xl md:text-7xl font-light tracking-tighter hover:text-clay transition-colors text-espresso flex items-baseline gap-4" 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-serif italic text-2xl md:text-3xl opacity-30">0{idx + 1}</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`transition-all duration-1000 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="px-10 py-4 bg-espresso text-cream text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-clay transition-all"
                >
                  Shop the Roast
                </button>
              </div>
            </div>

            <div className={`flex flex-col md:flex-row justify-between items-end gap-12 border-t border-espresso/10 pt-12 transition-all duration-1000 delay-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-clay">Inquiries</span>
                <p className="text-sm font-light text-espresso/60 font-serif italic">hello@brewandco.com</p>
              </div>
              <div className="text-right">
                <span className="font-serif italic text-2xl text-espresso/40 tracking-tighter block mb-2">Brew & Co.</span>
                <p className="text-[8px] tracking-[0.3em] uppercase text-espresso/30 font-bold max-w-[150px] leading-relaxed">
                  Crafting the perfect extraction since 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
