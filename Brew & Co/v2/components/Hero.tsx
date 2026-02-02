
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Slow pour coffee" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9LgEvQjzVLK2bW57TVokL8RgzMq08ZgXcRFPuPGcOHMynMPOD19VeCiYul5MHUPoiK_0XLUIAYRgGICmn-4D1nkph9fafQqea7G_vf4UT2MbDujcT1aNsvuts9ci9PHO-aYBORRfpwUnx_vHc4k7AVSGzxvCNuLsnooyr8HxwqUYPOoRYDcMTg85nV-CL0xABIUUkM4CWyUiCkoRpWSzxBgc0yHLUWi5elPmanPVQsaVJZIX6pZRkJwCqu6qDClXWSYGnvVpQJKX"
        />
        <div className="absolute inset-0 bg-espresso/30"></div>
      </div>
      <div className="relative z-10 max-w-[1600px] mx-auto px-10 w-full text-center">
        <span className="inline-block text-[12px] font-bold tracking-[0.6em] uppercase mb-12 text-white/90">
          Small Batch • Artisanal Roast
        </span>
        <h1 className="font-display text-huge font-light text-white mb-16 tracking-tighter">
          Purely <br/> <span className="font-serif italic font-extralight">Artisanal.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="group relative px-16 py-6 bg-clay text-white text-[12px] tracking-[0.4em] font-bold uppercase overflow-hidden transition-all hover:bg-espresso shadow-2xl">
            <span className="relative z-10">Shop Collections</span>
          </button>
        </div>
      </div>
      <span className="material-symbols-outlined drifting-bean !text-[40px] top-1/4 left-1/4 rotate-12 text-white">spa</span>
      <span className="material-symbols-outlined drifting-bean !text-[30px] bottom-1/4 right-1/4 -rotate-12 text-white">spa</span>
    </section>
  );
};

export default Hero;
