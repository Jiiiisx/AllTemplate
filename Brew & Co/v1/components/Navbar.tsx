
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode }) => {
  return (
    <header className="fixed w-full z-[100] top-0 bg-white/50 dark:bg-black/50 nav-blur border-b border-slate-100/50 dark:border-slate-800/50">
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display font-light text-xl md:text-2xl tracking-[0.3em] text-primary dark:text-white uppercase cursor-default">
            Brew & Co
          </span>
        </div>
        
        <ul className="hidden lg:flex items-center gap-16 font-medium text-[11px] tracking-[0.4em] uppercase">
          <li><a className="hover:text-secondary transition-colors" href="#hero">Home</a></li>
          <li><a className="hover:text-secondary transition-colors" href="#about">Philosophy</a></li>
          <li><a className="hover:text-secondary transition-colors" href="#gallery">Visuals</a></li>
          <li><a className="hover:text-secondary transition-colors" href="#testimonials">Community</a></li>
        </ul>

        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden sm:block text-[11px] tracking-[0.3em] font-bold border-b border-primary dark:border-white pb-1 hover:text-secondary hover:border-secondary transition-all">
            ORDER ONLINE
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <span className="material-symbols-outlined !text-[20px] block dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined !text-[20px] hidden dark:block">light_mode</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
