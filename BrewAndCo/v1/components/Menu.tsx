import React from 'react';
import { SITE_CONFIG } from '../constants';

const Menu: React.FC = () => {
  const { menu } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-48 bg-white dark:bg-black" id="menu">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <span className="text-secondary text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{menu.badge}</span>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-none tracking-tighter mb-8">
              {menu.title} <br/>
              <span className="italic font-extralight opacity-50">{menu.subtitle}</span>
            </h2>
            <p className="text-slate-400 text-sm leading-loose max-w-xs mb-12">
              Every bean is roasted to highlight its terroir. Our menu rotates seasonally to ensure peak extraction.
            </p>
            <a 
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              className="inline-block px-10 py-4 border border-primary dark:border-white text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Order via WhatsApp
            </a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {menu.categories.map((cat, idx) => (
              <div key={idx}>
                <h4 className="text-[10px] tracking-[0.5em] font-black uppercase text-secondary mb-12 pb-4 border-b border-slate-100 dark:border-slate-800">
                  {cat.name}
                </h4>
                <div className="space-y-12">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h5 className="font-display text-xl md:text-2xl font-light group-hover:text-secondary transition-colors">{item.name}</h5>
                        <span className="text-sm font-bold text-secondary">{item.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-light tracking-wide">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
