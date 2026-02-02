
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-32 px-8 border-t border-white/10 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Get Exclusive Access</h2>
        <p className="text-zinc-400 font-light mb-12">Be the first to secure off-market sustainable luxury assets.</p>
        
        <div className="relative border-b border-white/30 pb-4 flex items-center">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="bg-transparent w-full outline-none text-[10px] tracking-[0.2em] font-bold uppercase placeholder:text-zinc-600"
          />
          <button className="bg-white text-black p-4 ml-4 hover:bg-brand-gold transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <p className="text-[10px] italic text-zinc-600 mt-6">You will receive our exclusive off-market catalog within 24 hours.</p>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 bg-black border-t border-white/5 text-center">
      <div className="flex justify-center gap-12 mb-16">
        <a href="#" className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold">INSTAGRAM</a>
        <a href="#" className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold">JOURNAL</a>
        <a href="#" className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold">CONTACT</a>
      </div>
      
      <div className="space-y-4 opacity-30">
        <p className="text-[10px] tracking-[0.3em] uppercase">© 2024 HOMEKU COLLECTIVE</p>
        <p className="text-[9px] tracking-[0.5em] uppercase">ARCHITECTURE FOR THE ANTHROPOCENE</p>
      </div>
    </footer>
  );
};

export { Newsletter, Footer };
