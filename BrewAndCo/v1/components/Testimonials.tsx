
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-64 bg-primary text-white overflow-hidden" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-end mb-16 lg:mb-40">
          <h2 className="font-display text-4xl md:text-7xl font-extralight tracking-tighter">
            Voice of the <br/><span className="italic text-secondary">Regulars.</span>
          </h2>
          <p className="max-w-sm text-slate-400 text-lg leading-loose uppercase tracking-[0.2em] font-bold text-[10px]">
            A sanctuary for the city's modern creatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className={`bg-primary p-10 md:p-16 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-default ${idx === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <p className="text-xl md:text-3xl font-light leading-snug mb-12 md:mb-20 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-6">
                <img 
                  alt={t.author} 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full grayscale object-cover" 
                  src={t.avatar} 
                />
                <div>
                  <h5 className="font-bold tracking-widest text-xs uppercase">{t.author}</h5>
                  <p className="text-[10px] tracking-widest text-secondary uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
