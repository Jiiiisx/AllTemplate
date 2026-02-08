import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/config';

const words = ["DESIGN", "STRATEGY", "CREATIVE", "DIGITAL", "PURPOSE", siteData.name];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Word rotation logic
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, index === 0 ? 1000 : 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    // Progress bar logic
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="relative flex flex-col items-center w-full max-w-sm px-10">
        {/* Rapid Word Cycle - Gives a "Processing" feel */}
        <div className="h-10 mb-8 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-white text-sm uppercase tracking-[0.5em] font-medium"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* The Luxury Progress Line */}
        <div className="relative w-full h-[1px] bg-white/10 mb-6">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_15px_rgba(191,255,0,0.5)]"
          />
        </div>

        {/* Counter & Name */}
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Index</span>
            <span className="text-white font-mono text-2xl tabular-nums leading-none">
              {progress.toString().padStart(3, '0')}
            </span>
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">System</span>
            <span className="text-white font-bold text-2xl leading-none">
              V.1.0
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Text */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 flex items-center gap-3"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.4em]">
          Loading Experience
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;