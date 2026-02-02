
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-12 px-8 flex flex-col justify-between">
      {/* Headline Section */}
      <div className="relative z-10 mt-12">
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-serif font-medium tracking-tighter">
          Modern
          <br />
          <span className="text-brand-gold font-heritage italic">Heritage</span> Living
        </h1>
      </div>

      {/* Main Image Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[85%] h-[55vh] overflow-hidden bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-80"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      </div>

      {/* Bottom Search/Filters */}
      <div className="relative z-10 w-full border-t border-white/10 pt-8 pb-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-72">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Location</span>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-xl font-medium">Global</span>
            <span className="material-symbols-outlined text-zinc-500 group-hover:text-brand-gold transition-colors">expand_more</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:border-l md:border-white/10 md:pl-8">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Price Range</span>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-xl font-medium">$1.2M+</span>
            <span className="material-symbols-outlined text-zinc-500 group-hover:text-brand-gold transition-colors">expand_more</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:border-l md:border-white/10 md:pl-8">
          <span className="text-[10px] text-zinc-500 tracking-[0.2em] font-bold uppercase">Eco-Rating</span>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-xl font-medium">A+ Class</span>
            <span className="material-symbols-outlined text-zinc-500 group-hover:text-brand-gold transition-colors">expand_more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
