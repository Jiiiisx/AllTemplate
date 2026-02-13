import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah scroll 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPlanner = () => {
    document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          onClick={scrollToPlanner}
          className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-2xl bg-secondary px-6 py-4 font-bold text-white shadow-2xl shadow-secondary/40 md:hidden active:scale-95 transition-transform"
        >
          <Calendar size={18} />
          <span>Book Your Trip</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
