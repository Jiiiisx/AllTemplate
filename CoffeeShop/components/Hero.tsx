import React, { useRef } from 'react';
import { siteData } from '../constants/siteData';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40; // Max move 40px
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={siteData.hero.backgroundImage} 
          alt={siteData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-6xl md:text-9xl font-black tracking-tight leading-[0.9] mb-8 uppercase"
        >
          {siteData.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteData.hero.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link 
            to="/menu" 
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center"
          >
            {siteData.hero.primaryCTA}
          </Link>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white hover:text-secondary transition-all">
            {siteData.hero.secondaryCTA}
          </button>
        </motion.div>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-[20%] left-[10%] w-12 h-12 bg-primary/20 blur-xl rounded-full"
        ></motion.div>
        <motion.div 
          style={{ x: useSpring(useTransform(mouseX, (v) => -v * 1.5)), y: useSpring(useTransform(mouseY, (v) => -v * 1.5)) }}
          className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-primary/10 blur-2xl rounded-full"
        ></motion.div>
        
        {/* Coffee Beans with Parallax */}
        <motion.div 
          style={{ x: smoothX, y: smoothY, rotate: 45 }}
          className="absolute top-[15%] right-[15%] w-8 h-10 bg-[#2B1B17] dark:bg-primary/40 rounded-full opacity-40 hidden md:block"
        ></motion.div>
        <motion.div 
          style={{ x: useSpring(useTransform(mouseX, (v) => -v * 0.5)), y: useSpring(useTransform(mouseY, (v) => -v * 0.5)), rotate: -12 }}
          className="absolute bottom-[25%] left-[15%] w-6 h-8 bg-[#2B1B17] dark:bg-primary/20 rounded-full opacity-30 hidden md:block"
        ></motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-32 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden md:block"></div>
    </section>
  );
};

export default Hero;