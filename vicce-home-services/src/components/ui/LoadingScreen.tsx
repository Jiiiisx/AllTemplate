import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../../constants/siteData';

const words = ["PRECISION", "EXCELLENCE", "TRUST", "QUALITY", "VICCE"];

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      window.addEventListener('load', () => setIsReady(true));
    }

    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= words.length - 1) {
          if (isReady) {
            clearInterval(wordInterval);
            setTimeout(() => setLoading(false), 800);
            return prev;
          }
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      window.removeEventListener('load', () => setIsReady(true));
      clearInterval(wordInterval);
    };
  }, [isReady]);

  const columnVariants = {
    initial: { y: 0 },
    exit: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
          {/* Background Columns */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={columnVariants}
              initial="initial"
              exit="exit"
              className="relative h-full w-full bg-vicce-charcoal border-r border-white/5 last:border-r-0"
            />
          ))}

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Paksa container memiliki lebar penuh agar posisi absolute di dalamnya bisa center sempurna */}
            <div className="relative w-full h-12 md:h-20 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.76, 0, 0.24, 1] 
                  }}
                  // Gunakan w-full dan text-center untuk menjaga teks tetap di tengah secara absolut
                  className="absolute inset-0 w-full flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-serif text-white tracking-[0.3em] font-bold"
                >
                  {words[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Branding */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex items-center gap-4"
          >
            <div className="w-2 h-2 rounded-full bg-vicce-accent animate-pulse" />
            <span className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              System Initializing
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
