
import React, { ChangeEvent, SyntheticEvent } from 'react';

interface HeroProps {
  location: string;
  setLocation: (val: string) => void;
  priceRange: string;
  setPriceRange: (val: string) => void;
}

export default function Hero({ location, setLocation, priceRange, setPriceRange }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-12 px-8 flex flex-col bg-background text-primary transition-colors duration-500">
      {/* Headline Section */}
      <div className="relative z-20 mt-12">
        <h1 
          className="text-[12vw] md:text-[8vw] leading-[0.85] font-serif font-medium tracking-tighter"
        >
          Modern
          <br />
          <span className="text-brand-gold font-heritage italic">Heritage</span> Living
        </h1>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 -mt-12 md:-mt-24 w-full md:w-[85%] mx-auto h-[45vh] md:h-[60vh] overflow-hidden bg-surface shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-80"
          onLoad={(e: SyntheticEvent<HTMLImageElement>) => (e.currentTarget.style.opacity = "1")}
        />
      </div>

      {/* Bottom Search/Filters */}
      <div className="relative z-20 w-full border-t border-theme pt-8 pb-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-24">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Location</span>
          <select 
            value={location}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}
            className="bg-transparent text-xl font-medium outline-none cursor-pointer hover:text-brand-gold transition-colors appearance-none"
          >
            <option className="bg-card text-primary" value="Global">Global</option>
            <option className="bg-card text-primary" value="Switzerland">Switzerland</option>
            <option className="bg-card text-primary" value="Canada">Canada</option>
            <option className="bg-card text-primary" value="Greece">Greece</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 md:border-l border-theme md:pl-8">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Price Range</span>
          <select 
            value={priceRange}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value)}
            className="bg-transparent text-xl font-medium outline-none cursor-pointer hover:text-brand-gold transition-colors appearance-none"
          >
            <option className="bg-card text-primary" value="All Prices">All Prices</option>
            <option className="bg-card text-primary" value="< $1.5M">&lt; $1.5M</option>
            <option className="bg-card text-primary" value="$1.5M+">$1.5M+</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 md:border-l border-theme md:pl-8">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Eco-Rating</span>
          <div className="flex items-center justify-between group cursor-not-allowed">
            <span className="text-xl font-medium">A+ Class</span>
            <span className="material-symbols-outlined text-zinc-500">lock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
