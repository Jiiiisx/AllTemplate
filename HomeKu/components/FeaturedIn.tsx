
import React from 'react';

const FeaturedIn: React.FC = () => {
  const logos = ["FORBES", "ARCHI", "DWELL", "VOGUE"];
  
  return (
    <section className="py-20 border-t border-white/10 bg-black">
      <div className="container mx-auto px-8">
        <p className="text-[10px] text-zinc-500 tracking-[0.4em] font-bold uppercase text-center mb-12">
          AS SEEN ON
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-serif tracking-widest font-bold">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
