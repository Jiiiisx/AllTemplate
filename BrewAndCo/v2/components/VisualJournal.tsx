
import React from 'react';
import { SITE_CONFIG } from '../constants';

const VisualJournal: React.FC = () => {
  const { journal } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-48 bg-white" id="gallery">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <h2 className="font-display text-4xl md:text-7xl font-light tracking-tighter">{journal.title} <span className="font-serif italic">{journal.subtitle}</span></h2>
          <p className="max-w-xs text-espresso/40 text-[10px] tracking-[0.4em] uppercase font-bold text-left md:text-right hidden lg:block">{journal.badge}</p>
        </div>
        <div className="grid grid-cols-12 gap-6 lg:gap-16">
          {journal.items.map((item, index) => (
            <div key={index} className={`col-span-12 ${item.span} image-reveal ${item.height} rounded-3xl ${item.mt || ""}`}>
              <img alt={item.alt} className="w-full h-full object-cover" src={item.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualJournal;
