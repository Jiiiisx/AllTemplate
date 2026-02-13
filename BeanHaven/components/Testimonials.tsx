import React, { useState } from 'react';
import { siteData } from '../constants/siteData';
import ScrollAnimation from './ui/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % siteData.testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + siteData.testimonials.length) % siteData.testimonials.length);

  return (
    <section className="py-24 bg-cream dark:bg-darkRoast transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollAnimation direction="up" className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">
            What Our Customers Say
          </h2>
        </ScrollAnimation>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-secondary rounded-[40px] p-8 md:p-16 shadow-2xl relative border border-transparent dark:border-white/5"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 text-primary/10">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3L10.017 3V15C10.017 18.3137 7.33068 21 4.01697 21H3.01697Z" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <img 
                  src={siteData.testimonials[index].avatar} 
                  alt={siteData.testimonials[index].name}
                  className="w-24 h-24 rounded-full border-4 border-primary/10 mb-8 object-cover"
                />
                <p className="text-xl md:text-2xl font-medium text-secondary/80 dark:text-white/80 italic mb-8 leading-relaxed">
                  "{siteData.testimonials[index].content}"
                </p>
                <div>
                  <h4 className="font-black text-secondary dark:text-white text-lg uppercase tracking-wider">{siteData.testimonials[index].name}</h4>
                  <p className="text-primary font-bold text-sm uppercase">{siteData.testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border-2 border-secondary/10 dark:border-white/10 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border-2 border-secondary/10 dark:border-white/10 flex items-center justify-center text-secondary dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
