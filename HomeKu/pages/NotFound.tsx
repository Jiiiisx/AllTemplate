
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full" />
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-heritage text-6xl md:text-8xl block mb-4">404</span>
          <h1 className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase mb-6">
            Page Not Found
          </h1>
          <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-8" />
          <p className="text-secondary max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed tracking-wide">
            The sanctuary you are looking for does not exist or has been moved to a new location.
          </p>
          
          <Link 
            to="/"
            className="inline-block px-10 py-4 border border-brand-gold text-brand-gold text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-gold hover:text-black transition-all duration-500"
          >
            Back to Collection
          </Link>
        </motion.div>
      </div>

      {/* Aesthetic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default NotFound;
