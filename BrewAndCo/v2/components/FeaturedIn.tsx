
import React from 'react';
import { SITE_CONFIG } from '../constants';

const FeaturedIn: React.FC = () => {
  return (
    <div className="bg-tan/30 py-16 border-y border-espresso/5">
      <div className="max-w-[1400px] mx-auto px-10">
        <p className="text-center text-[10px] tracking-[0.4em] uppercase font-bold text-espresso/40 mb-10">Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale">
          {SITE_CONFIG.featuredIn.map((item, index) => (
            <span key={index} className="font-serif text-2xl font-bold italic">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
