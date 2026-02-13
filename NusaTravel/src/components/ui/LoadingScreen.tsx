import { motion } from 'framer-motion';
import { siteConfig } from '../../data/config';
import { Compass } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Compass Circle */}
        <div className="relative mb-12 flex h-24 w-24 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/20"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white shadow-xl shadow-secondary/20"
          >
            <Compass size={32} />
          </motion.div>
        </div>

        {/* Text Animation - Staggered Letters */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl font-black tracking-[-0.05em] text-secondary"
          >
            {siteConfig.name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-[10px] font-bold uppercase tracking-[0.5em] text-secondary/40"
        >
          Mapping your route...
        </motion.p>
      </div>

      {/* Decorative Panels for Exit Animation */}
      <motion.div 
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-[-1] origin-bottom bg-secondary"
      />
    </motion.div>
  );
};
