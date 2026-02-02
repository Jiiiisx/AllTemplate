import React from 'react';
import { SITE_CONFIG } from '../constants';

const Menu: React.FC = () => {
  const { menu, contact } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-48 bg-tan/10" id="full-menu">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24 lg:mb-32">
          <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{menu.badge}</span>
          <h2 className="font-display text-5xl md:text-7xl font-light text-espresso leading-tight">
            {menu.title} <span className="font-serif italic text-clay">{menu.subtitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {menu.categories.map((cat, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-8 top-0 text-clay/10 font-serif italic text-8xl md:text-9xl pointer-events-none select-none">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <h4 className="font-display text-2xl tracking-widest uppercase text-espresso border-b border-espresso/10 pb-6 mb-12">
                  {cat.name}
                </h4>
                <div className="space-y-12">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-3">
                        <h5 className="font-display text-xl md:text-2xl font-light text-espresso group-hover:text-clay transition-colors">
                          {item.name}
                        </h5>
                        <div className="flex-1 border-b border-dotted border-espresso/20 mx-4 h-1"></div>
                        <span className="font-bold text-clay">{item.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-espresso/50 font-light italic">{item.description}</p>
                        <a 
                          href={`https://wa.me/${contact.whatsapp}?text=Hi, I am interested in ${item.name}`}
                          className="opacity-0 group-hover:opacity-100 transition-all text-clay"
                        >
                          <span className="material-symbols-outlined !text-xl">add_shopping_cart</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-espresso rounded-3xl text-center relative overflow-hidden">
          <span className="material-symbols-outlined absolute top-[-20px] left-[-20px] !text-9xl text-white/5 rotate-12">local_cafe</span>
          <div className="relative z-10">
            <h3 className="font-display text-2xl text-cream mb-6 tracking-wide">Ready to start your ritual?</h3>
            <p className="text-cream/50 text-sm mb-10 max-w-md mx-auto font-light leading-relaxed">
              Order directly through WhatsApp for a personalized experience and same-day delivery within Austin area.
            </p>
            <a 
              href={`https://wa.me/${contact.whatsapp}`}
              className="inline-block px-12 py-5 bg-clay text-white text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-white hover:text-espresso transition-all rounded-full"
            >
              Contact Our Barista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
