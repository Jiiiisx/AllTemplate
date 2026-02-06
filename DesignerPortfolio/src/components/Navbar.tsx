import React from 'react';
import { siteData } from '../data/config';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-primary/80 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <Menu className="w-6 h-6" />
          <span>{siteData.name}</span>
        </div>
      </div>
      
      <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-accent transition-colors">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
