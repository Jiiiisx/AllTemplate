import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkRoast flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8"
      >
        <span className="text-[150px] md:text-[200px] font-black text-primary/10 select-none">404</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl md:text-8xl">☕</div>
        </div>
      </motion.div>
      
      <h1 className="text-3xl md:text-4xl font-black text-secondary dark:text-white mb-4 uppercase">
        Oops! Kopinya Tumpah.
      </h1>
      <p className="text-secondary/60 dark:text-white/60 mb-12 max-w-md mx-auto leading-relaxed">
        Halaman yang Anda cari sudah habis disruput atau mungkin tidak pernah ada di daftar menu kami.
      </p>
      
      <Link 
        to="/" 
        className="bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-darkRoast dark:hover:bg-white dark:hover:text-darkRoast transition-all shadow-xl hover:scale-105 active:scale-95"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
