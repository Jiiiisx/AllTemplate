
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Slow pour coffee" 
          className="w-full h-full object-cover scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9LgEvQjzVLK2bW57TVokL8RgzMq08ZgXcRFPuPGcOHMynMPOD19VeCiYul5MHUPoiK_0XLUIAYRgGICmn-4D1nkph9fafQqea7G_vf4UT2MbDujcT1aNsvuts9ci9PHO-aYBORRfpwUnx_vHc4k7AVSGzxvCNuLsnooyr8HxwqUYPOoRYDcMTg85nV-CL0xABIUUkM4CWyUiCkoRpWSzxBgc0yHLUWi5elPmanPVQsaVJZIX6pZRkJwCqu6qDClXWSYGnvVpQJKX" 
        />
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
      </div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-10 w-full text-center">
        <span className="inline-block text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-8 md:mb-12 text-white drop-shadow-md">
          Since 2024 — Origin Focused
        </span>
        <h1 className="font-display text-huge font-light text-white mb-12 md:mb-16 tracking-tighter drop-shadow-2xl">
          Pure <br/> <span className="italic font-extralight opacity-90">Extraction.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="group relative px-12 py-5 bg-white text-primary text-[11px] tracking-[0.4em] font-bold uppercase overflow-hidden transition-all hover:pr-16">
            <span className="relative z-10">Explore Menu</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-white font-extralight text-3xl">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
