
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-sm">
      <div className="text-2xl font-serif font-bold tracking-tighter">
        HOMEKU
      </div>
      
      <div className="hidden md:flex items-center gap-4 group cursor-pointer">
        <span className="nav-link">MENU</span>
        <div className="flex flex-col gap-1 w-6">
          <div className="h-[1px] w-full bg-white group-hover:bg-brand-gold transition-colors"></div>
          <div className="h-[1px] w-full bg-white group-hover:bg-brand-gold transition-colors"></div>
        </div>
      </div>

      <button className="bg-brand-gold text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all">
        BOOK A TOUR
      </button>
    </nav>
  );
};

export default Navbar;
