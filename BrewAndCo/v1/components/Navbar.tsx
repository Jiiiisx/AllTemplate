
import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, NAV_LINKS } from '../constants';

interface NavbarProps {
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode }) => {
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
    <header className={`fixed w-full z-[100] top-0 transition-all duration-500 ${isMenuOpen ? 'bg-white dark:bg-background-dark' : 'bg-white/50 dark:bg-black/50 nav-blur'} border-b border-slate-100/50 dark:border-slate-800/50`}>
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between relative z-[110]">
        <div className="flex items-center gap-3">
          <span className="font-display font-light text-xl md:text-2xl tracking-[0.3em] text-primary dark:text-white uppercase cursor-default">
            {SITE_CONFIG.name}
          </span>
        </div>
        
        <ul className="hidden lg:flex items-center gap-16 font-medium text-[11px] tracking-[0.4em] uppercase text-primary dark:text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="hover:text-secondary transition-colors" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-8">
          <a 
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Halo, saya ingin melakukan pemesanan online.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-[11px] tracking-[0.3em] font-bold border-b border-primary dark:border-white pb-1 text-primary dark:text-white hover:text-secondary hover:border-secondary transition-all"
          >
            ORDER ONLINE
          </a>
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-primary dark:text-white"
          >
            <span className="material-symbols-outlined !text-[20px] block dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined !text-[20px] hidden dark:block">light_mode</span>
          </button>
          
          <button 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-primary dark:text-white"
          >
            <span className="material-symbols-outlined !text-[28px] font-light">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Elegant Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-background-dark z-[105] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[20vw] font-display font-black text-slate-50 dark:text-white/[0.02] uppercase leading-none select-none">
            {SITE_CONFIG.name}
          </span>
        </div>

        <div className="relative h-full flex flex-col justify-between px-8 py-24 md:px-16 md:py-32">
          <div className="flex flex-col gap-12">
            <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-secondary">Navigation</span>
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => (
                <li 
                  key={link.href}
                  className={`transition-all duration-700 delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <a 
                    className="font-display text-5xl md:text-7xl font-light tracking-tighter hover:text-secondary transition-colors text-primary dark:text-white" 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`grid grid-cols-2 gap-10 border-t border-slate-100 dark:border-slate-800 pt-12 transition-all duration-1000 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-secondary">Connect</span>
              <ul className="flex flex-col gap-2 text-sm font-light text-slate-400">
                {SITE_CONFIG.footer.connect.map((link, i) => (
                  <li key={i}><a href={link.href} className="hover:text-primary dark:hover:text-white transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-secondary">Visit</span>
              <p className="text-sm font-light text-slate-400 leading-relaxed italic">
                {SITE_CONFIG.footer.description.split('.')[1] || 'Austin, Texas'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
