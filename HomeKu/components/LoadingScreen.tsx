
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [counter, setCounter] = useState(0);

  // Smooth counter animation to give feedback
  useEffect(() => {
    if (!isLoading) {
      setCounter(100);
      return;
    }
    
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < 90) return prev + Math.random() * 10;
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif tracking-tighter italic"
            >
              Home<span className="text-brand-gold">Ku</span>
            </motion.h1>
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold opacity-50"
            />
          </div>

          <div className="mt-8 overflow-hidden h-px w-48 bg-border-theme relative">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-brand-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${counter}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-[8px] tracking-[0.5em] text-zinc-500 uppercase font-bold"
          >
            Curating Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
