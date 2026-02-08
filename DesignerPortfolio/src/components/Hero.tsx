import React from 'react';
import { siteData } from '../data/config';
import Aurora from './Aurora';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 px-6 bg-primary overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={siteData.theme.auroraColors}
          blend={0.5}
          amplitude={1.2}
          speed={2.5}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="relative min-h-[400px] md:h-[600px] flex flex-col justify-center order-2 lg:order-1">
          <div className="relative z-10 space-y-6 md:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]"
            >
              {siteData.heroTitle}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-300 text-lg md:text-xl max-w-md font-medium leading-relaxed"
            >
              {siteData.about}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4"
            >
              <Magnetic strength={0.3}>
                <button className="bg-accent text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(191,255,0,0.3)]">
                  Explore Work
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Profile Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-[350px] md:h-[500px] lg:h-[600px] order-1 lg:order-2 mt-12 lg:mt-0"
        >
          <div className="relative z-10 w-full max-w-[280px] md:max-w-md aspect-[4/5] bg-secondary/30 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 backdrop-blur-md shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
              alt={siteData.fullName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
            />
          </div>
          
          {/* Decorative element for mobile */}
          <div className="absolute -z-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] lg:hidden"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;