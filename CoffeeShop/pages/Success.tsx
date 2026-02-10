import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../constants/siteData';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-darkRoast flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-secondary rounded-[40px] p-12 text-center shadow-2xl border border-white/10"
      >
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-black text-secondary dark:text-white mb-4 uppercase">Thank You!</h1>
        <p className="text-secondary/60 dark:text-white/60 mb-10 leading-relaxed">
          Your request has been received. Our team will get back to you shortly. Grab a cup of coffee while you wait!
        </p>
        
        <Link 
          to="/" 
          className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-darkRoast dark:hover:bg-white dark:hover:text-darkRoast transition-all uppercase tracking-widest text-sm"
        >
          Back to Home
        </Link>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5">
            <p className="text-xs text-secondary/40 uppercase font-bold tracking-widest">© {new Date().getFullYear()} {siteData.name}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;