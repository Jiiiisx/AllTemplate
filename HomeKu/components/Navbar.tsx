
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-sm">
      <div className="text-2xl font-serif font-bold tracking-tighter">
        HOMEKU
      </div>
      
      <div className="hidden md:flex gap-12">
        <a href="#" className="nav-link">MENU</a>
      </div>

      <button className="bg-brand-gold text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all">
        BOOK A TOUR
      </button>
    </nav>
  );
};

export default Navbar;
