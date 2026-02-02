
import React from 'react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <header className="fixed w-full z-[100] top-0 bg-cream/80 nav-blur border-b border-espresso/5">
      <nav class="max-w-[1600px] mx-auto px-10 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display font-light text-2xl tracking-[0.3em] text-espresso uppercase cursor-pointer">
            Brew & Co
          </span>
        </div>
        <ul className="hidden lg:flex items-center gap-16 font-medium text-[11px] tracking-[0.4em] uppercase">
          <li><a className="hover:text-clay transition-colors" href="#hero">Home</a></li>
          <li><a className="hover:text-clay transition-colors" href="#shop">Collections</a></li>
          <li><a className="hover:text-clay transition-colors" href="#about">Our Story</a></li>
          <li><a className="hover:text-clay transition-colors" href="#testimonials">Community</a></li>
        </ul>
        <div className="flex items-center gap-8">
          <button className="hidden sm:block text-[11px] tracking-[0.3em] font-bold border-b border-espresso pb-1 hover:text-clay hover:border-clay transition-all uppercase">
            Shop Now
          </button>
          <div className="relative cursor-pointer group">
            <span className="material-symbols-outlined !text-[24px] group-hover:text-clay transition-colors">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-clay text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
