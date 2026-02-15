import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-vicce-cream">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-vicce-muted shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-vicce-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-vicce-charcoal/60 uppercase">
              {SITE_DATA.stats.trustedBy}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-vicce-charcoal mb-6">
            Guarding your <br />
            <span className="italic text-vicce-accent">peace of mind</span>
          </h1>

          <p className="text-lg md:text-xl text-vicce-charcoal/70 mb-10 leading-relaxed max-w-lg">
            {SITE_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-primary px-10 py-4 text-lg"
              onClick={onBookClick}
            >
              Book a Service
            </button>
            <button className="px-10 py-4 text-lg font-medium border border-vicce-charcoal/10 rounded-full hover:bg-vicce-muted transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden bg-[#7A8C85] aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Technician"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-vicce-accent/10 rounded-full flex items-center justify-center text-vicce-accent">
                <Star fill="currentColor" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-vicce-charcoal">{SITE_DATA.stats.rating}</div>
                <div className="text-xs font-bold text-vicce-charcoal/40 tracking-wider uppercase">Average Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-vicce-accent/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-vicce-charcoal/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
