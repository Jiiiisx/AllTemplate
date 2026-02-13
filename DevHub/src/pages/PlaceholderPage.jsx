
import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-12 flex flex-col items-center justify-center h-full text-center"
    >
      <div className="w-24 h-24 bg-accent/5 rounded-[2rem] flex items-center justify-center text-accent mb-8">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h1 className="text-4xl font-bold text-zinc-800 tracking-tighter mb-4">{title}</h1>
      <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
        This section is ready for your custom implementation. 
        You can easily add your tables, forms, or data views here following the project's design system.
      </p>
    </motion.div>
  );
};

export default PlaceholderPage;
