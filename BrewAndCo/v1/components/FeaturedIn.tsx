import React from 'react';
import { SITE_CONFIG } from '../constants';

const FeaturedIn: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark py-12 border-b border-slate-50 dark:border-slate-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-slate-300 dark:text-slate-700">As seen in</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale dark:invert">
            {SITE_CONFIG.featuredIn.map((item, idx) => (
              <span key={idx} className="font-display text-xl md:text-2xl font-light tracking-widest">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
