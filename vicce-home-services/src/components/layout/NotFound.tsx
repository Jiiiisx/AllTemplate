import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-vicce-cream flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background patterns from Hero */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[120px] md:text-[200px] font-serif font-bold text-vicce-charcoal/5 leading-none">
            404
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-vicce-charcoal mb-6">
            Something's <span className="italic text-vicce-accent">missing</span>
          </h1>
          <p className="text-lg text-vicce-charcoal/60 mb-12 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="btn-primary px-10 py-4 flex items-center justify-center gap-2 group"
            >
              <Home size={18} />
              Back to Home
            </a>
            <button 
              onClick={() => window.history.back()}
              className="px-10 py-4 text-vicce-charcoal font-medium border border-vicce-charcoal/10 rounded-full hover:bg-vicce-muted transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vicce-accent/5 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default NotFound;
