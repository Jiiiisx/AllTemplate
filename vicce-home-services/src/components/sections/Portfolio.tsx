import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-vicce-cream">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Professional care for your home</h2>
          </div>
          <div className="hidden md:flex gap-4 mb-2">
            <button className="w-12 h-12 rounded-full border border-vicce-charcoal/10 flex items-center justify-center hover:bg-vicce-charcoal hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-vicce-charcoal text-white flex items-center justify-center hover:bg-vicce-accent transition-all shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Large Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-[40px] aspect-[16/10] md:aspect-auto md:h-[600px]"
          >
            <img 
              src={SITE_DATA.portfolio[0].image} 
              alt={SITE_DATA.portfolio[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vicce-charcoal/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-[10px] font-bold tracking-[0.2em] text-vicce-accent uppercase mb-3 block">
                {SITE_DATA.portfolio[0].category}
              </span>
              <h3 className="text-3xl font-serif">{SITE_DATA.portfolio[0].title}</h3>
            </div>
          </motion.div>

          {/* Side Column with 2 Smaller Items */}
          <div className="grid grid-cols-1 gap-6">
            {SITE_DATA.portfolio.slice(1).map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-[40px] aspect-square"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-vicce-charcoal/20 group-hover:bg-vicce-charcoal/40 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-vicce-accent uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
