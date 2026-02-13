import { motion } from 'framer-motion';
import { Map, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-12 flex h-48 w-48 items-center justify-center rounded-[60px] bg-primary-light"
      >
        <div className="absolute inset-0 animate-pulse rounded-[60px] bg-secondary/5" />
        <Map size={80} className="text-secondary" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-8xl font-black tracking-tighter text-secondary"
      >
        404
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 text-3xl font-bold"
      >
        You've wandered off the map!
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mb-12 max-w-md text-slate-500 text-lg"
      >
        It seems the destination you're looking for has been hidden by the tropical mist. Let's get you back to safety.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="group flex items-center gap-3 rounded-full bg-secondary px-10 py-5 text-sm font-bold text-white shadow-2xl shadow-secondary/20 transition hover:bg-accent"
      >
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        Back to Expedition
      </motion.button>

      {/* Decorative text background */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-[0.02]">
        <span className="text-[30vw] font-black text-secondary">LOST</span>
      </div>
    </div>
  );
};
