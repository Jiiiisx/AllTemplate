import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

const Testimonials = () => {
  return (
    <section className="py-24 bg-vicce-charcoal overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 italic">{SITE_DATA.testimonials.title}</h2>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...SITE_DATA.testimonials.items, ...SITE_DATA.testimonials.items].map((t, i) => (
            <div 
              key={i} 
              className="w-[400px] bg-white/5 border border-white/10 p-8 rounded-[40px] flex flex-col gap-6"
            >
              <div className="flex gap-1 text-vicce-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-white/70 italic leading-relaxed whitespace-normal">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-vicce-accent/30" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-white/40 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
