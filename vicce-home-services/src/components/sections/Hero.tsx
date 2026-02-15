import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';
import RevealText from '../ui/RevealText';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-vicce-cream">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-vicce-muted shadow-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-vicce-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-vicce-charcoal/60 uppercase">
              {SITE_DATA.hero.tagline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.2] text-vicce-charcoal mb-8 flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <RevealText text={SITE_DATA.hero.titlePrimary} delay={0.2} />
            <RevealText text={SITE_DATA.hero.titleItalic} className="italic text-vicce-accent" delay={0.4} />
          </h1>

          <p className="text-base md:text-xl text-vicce-charcoal/70 mb-10 leading-relaxed max-w-lg">
            {SITE_DATA.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button 
              className="btn-primary px-10 py-4 text-lg w-full sm:w-auto"
              onClick={onBookClick}
            >
              {SITE_DATA.hero.ctaPrimary}
            </button>
            <button className="px-10 py-4 text-lg font-medium border border-vicce-charcoal/10 rounded-full hover:bg-vicce-muted transition-colors w-full sm:w-auto">
              {SITE_DATA.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[500px] lg:max-w-none mx-auto"
        >
          <div className="relative rounded-[40px] overflow-hidden bg-[#7A8C85] aspect-[4/5] sm:aspect-video lg:aspect-[4/5] shadow-2xl">
            <motion.img 
              style={{ y: imgY }}
              src={SITE_DATA.hero.image} 
              alt="Professional Technician"
              className="w-full h-full object-cover scale-110 mix-blend-multiply opacity-90"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-vicce-accent/10 rounded-full flex items-center justify-center text-vicce-accent">
                <Star fill="currentColor" size={20} />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-vicce-charcoal">{SITE_DATA.hero.rating}</div>
                <div className="text-[10px] font-bold text-vicce-charcoal/40 tracking-wider uppercase">{SITE_DATA.hero.ratingText}</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements - Hidden on small mobile to avoid clutter */}
          <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-vicce-accent/10 rounded-full blur-2xl" />
          <div className="hidden sm:block absolute -bottom-10 -left-10 w-40 h-40 bg-vicce-charcoal/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
