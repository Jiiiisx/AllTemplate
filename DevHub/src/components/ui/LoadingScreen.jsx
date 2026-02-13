
import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/config';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Outer Rotating Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-4 border-zinc-100 dark:border-zinc-900 border-t-accent rounded-full"
        />
        
        {/* Inner Pulsing Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20"
          >
            <img src={siteConfig.avatar} alt="Logo" className="w-full h-full rounded-2xl object-cover" />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <h2 className="text-lg font-bold text-zinc-800 dark:text-white tracking-tighter">
          Initializing {siteConfig.name}
        </h2>
        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
          Loading developer environment...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
