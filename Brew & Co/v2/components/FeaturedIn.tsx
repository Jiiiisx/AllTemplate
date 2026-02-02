
import React from 'react';

const FeaturedIn: React.FC = () => {
  return (
    <div className="bg-tan/30 py-16 border-y border-espresso/5">
      <div className="max-w-[1400px] mx-auto px-10">
        <p className="text-center text-[10px] tracking-[0.4em] uppercase font-bold text-espresso/40 mb-10">Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale">
          <span className="font-serif text-2xl font-bold italic">Vogue</span>
          <span className="font-serif text-3xl font-bold">GQ</span>
          <span className="font-serif text-2xl tracking-tighter font-black">BuzzFeed</span>
          <span className="font-serif text-2xl italic">LIFESTYLE</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
