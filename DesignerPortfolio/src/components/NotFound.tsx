import React from 'react';
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import Magnetic from './Magnetic';

const NotFound = () => {
  return (
    <div className="fixed inset-0 z-[100000] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Aurora for the Void look */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Aurora
          colorStops={['#BFFF00', '#000000', '#BFFF00']}
          blend={0.8}
          amplitude={2}
          speed={3}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glitchy 404 Text */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[15rem] md:text-[25rem] font-black text-white/5 tracking-tighter leading-none select-none"
          >
            404
          </motion.h1>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <motion.div
               animate={{ 
                 x: [-2, 2, -2, 0],
                 y: [1, -1, 1, 0],
                 opacity: [0.8, 1, 0.8]
               }}
               transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
               className="text-white text-3xl md:text-5xl font-black uppercase tracking-[0.3em]"
             >
               Lost in Space
             </motion.div>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 max-w-md text-sm md:text-base uppercase tracking-widest leading-relaxed mt-10 mb-12"
        >
          The page you are looking for has been swallowed by the digital void or never existed in this reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Magnetic strength={0.3}>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-accent text-black px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(191,255,0,0.3)]"
            >
              Return to Orbit
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Decorative scanning lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>
    </div>
  );
};

export default NotFound;
