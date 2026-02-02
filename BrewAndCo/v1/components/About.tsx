
import React from 'react';
import { SITE_CONFIG } from '../constants';

const About: React.FC = () => {
  const { about } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-64 bg-background-light dark:bg-background-dark overflow-hidden relative" id="about">
      {/* Background Decorative Element */}
      <div className="absolute top-40 right-[-5%] text-[30vw] font-display font-black text-slate-50 dark:text-white/[0.02] leading-none select-none pointer-events-none">
        01
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="image-reveal aspect-[4/5] lg:aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
              <img 
                alt={about.title} 
                className="w-full h-full object-cover" 
                src={about.image} 
              />
            </div>
            {/* Secondary Floating Image for Depth */}
            <div className="hidden lg:block absolute -bottom-20 -right-20 w-1/2 aspect-square image-reveal shadow-2xl border-[15px] border-white dark:border-slate-900">
               <img 
                alt="Detail" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCegTcew92QhqPwYLOtSyjHI_vX5385CWK_s4RtyC-VC5q4JZgzQwWN99QuZw359SwQzrFW_RyucH6qbSYVPQsPqZBaSUtGAzjw9mFaAGQ0qS7I10AN0M751r-Iy1jUAXvHOABLQfHre4DZrJFXDh-__vyD1TnQ_eEnKgVY6P5UNpyuBCyy2POiNHIuiaYbwMOh-_WvfXm6UAwBmTyfFwn7GaiaR77yYw1G-EtbSbaPqYXgzUNcBgO4-wj1HwOvlo6wQyEidxVLzcj" 
              />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 relative z-20 mt-12 lg:mt-0 lg:pl-10">
            <span className="text-secondary text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{about.badge}</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-10 leading-[0.9] tracking-tighter">
              {about.title} <br/>
              <span className="italic font-extralight opacity-40">{about.subtitle}</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-loose font-light mb-12 max-w-md">
              {about.description}
            </p>
            <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex items-center gap-8 group cursor-default">
              <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary !text-sm animate-pulse">science</span>
              </div>
              <div>
                <h4 className="font-bold text-[10px] tracking-[0.3em] uppercase mb-1">{about.feature.title}</h4>
                <p className="text-xs text-slate-400 font-light">{about.feature.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
