
import React from 'react';
import { SITE_CONFIG } from '../constants';

const About: React.FC = () => {
  const { about } = SITE_CONFIG;

  return (
    <section className="py-32 lg:py-64 bg-background-light dark:bg-background-dark overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-7 relative z-10">
            <div className="image-reveal aspect-[4/5] lg:aspect-[3/4] overflow-hidden floating-element rounded-sm">
              <img 
                alt={about.title} 
                className="w-full h-full object-cover" 
                src={about.image} 
              />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:-ml-24 relative z-20 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-20 shadow-2xl dark:shadow-none border border-slate-50 dark:border-slate-800">
              <span className="text-secondary text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{about.badge}</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-10 leading-tight">{about.title} <br/>{about.subtitle}</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-loose font-light mb-12">
                {about.description}
              </p>
              <div className="space-y-6 border-t border-slate-100 dark:border-slate-800 pt-10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">fiber_manual_record</span>
                  <div>
                    <h4 className="font-bold text-xs tracking-widest uppercase mb-1">{about.feature.title}</h4>
                    <p className="text-sm text-slate-400">{about.feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
