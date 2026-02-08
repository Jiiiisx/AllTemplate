import React, { useState, useEffect } from 'react';
import { siteData } from '../data/config';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteData.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-primary overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="space-y-12"
          >
            <div className="flex justify-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover border-2 border-accent shadow-[0_0_20px_rgba(191,255,0,0.2)]"
              />
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white italic leading-tight">
                "{testimonials[currentIndex].content}"
              </h3>
              <p className="mt-8 text-xl text-gray-400">
                — {testimonials[currentIndex].name}, <span className="text-accent/80">{testimonials[currentIndex].role}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-gray-800 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
