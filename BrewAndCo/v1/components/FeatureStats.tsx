import React from 'react';
import { SITE_CONFIG } from '../constants';

const FeatureStats: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 2 ? 'md:border-r md:border-white/10' : ''}`}>
              <span className="text-[10px] tracking-[0.5em] font-bold uppercase text-secondary mb-6">{stat.label}</span>
              <h3 className="font-display text-5xl md:text-7xl font-light tracking-tighter mb-4">{stat.value}</h3>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
