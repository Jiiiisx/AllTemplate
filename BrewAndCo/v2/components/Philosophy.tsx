
import React from 'react';
import { SITE_CONFIG } from '../constants';

const Philosophy: React.FC = () => {
  const { philosophy } = SITE_CONFIG;

  return (
    <section className="py-48 bg-cream" id="about-philosophy">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="magazine-grid items-center">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="image-reveal aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img 
                alt={philosophy.title} 
                className="w-full h-full object-cover" 
                src={philosophy.image}
              />
            </div>
            <span className="material-symbols-outlined drifting-bean !text-[60px] -bottom-10 -left-10 text-clay">spa</span>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div className="lg:pl-20">
              <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{philosophy.badge}</span>
              <h2 className="font-display text-6xl font-light mb-10 leading-[1.1]">{philosophy.title} <br/><span className="font-serif italic">{philosophy.subtitle}</span></h2>
              <p className="text-espresso/70 text-lg leading-loose font-light mb-12">
                {philosophy.description}
              </p>
              <div className="pt-10 border-t border-espresso/10">
                <button className="text-espresso text-[11px] tracking-[0.4em] font-bold uppercase border-b-2 border-clay pb-2 hover:text-clay transition-all">{philosophy.cta}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
