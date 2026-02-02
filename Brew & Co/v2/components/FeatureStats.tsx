
import React from 'react';
import { SITE_CONFIG } from '../constants';

const FeatureStats: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {SITE_CONFIG.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-clay !text-3xl">{stat.icon}</span>
              </div>
              <h4 className="font-display text-lg tracking-widest uppercase mb-4">{stat.title}</h4>
              <p className="text-espresso/60 font-light text-sm leading-relaxed max-w-[250px]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
