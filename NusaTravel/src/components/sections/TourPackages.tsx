import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { packages } from '../../data/config';
import { OptimizedImage } from '../ui/OptimizedImage';

export const TourPackages = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-secondary">Tour packages</p>
          <h2 className="text-5xl font-black leading-tight">Our tourist destination</h2>
        </div>
        <p className="max-w-md text-slate-500 text-lg">
          Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] overflow-hidden rounded-[48px] bg-surface"
          >
            <OptimizedImage 
              src={pkg.image} 
              alt={pkg.title} 
              className="h-full w-full transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute top-8 left-8 rounded-full bg-white/20 px-5 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/20">
              {pkg.duration}
            </div>
            
            <div className="absolute top-8 right-8 flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/20">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>{pkg.rating}</span>
            </div>

            <div className="absolute bottom-10 left-8 right-8">
              <div className="glass p-6 rounded-[28px] flex items-center justify-between border-white/10 shadow-xl">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">{pkg.date}</p>
                  <p className="text-xl font-bold text-white leading-tight">{pkg.title}</p>
                </div>
                <div className="text-2xl font-black text-white">{pkg.price}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <button className="group flex items-center gap-3 rounded-full bg-secondary px-12 py-6 text-sm font-bold text-white transition hover:bg-accent hover:scale-105 shadow-2xl shadow-secondary/20">
          Explore all packages
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
        </button>
      </div>
    </section>
  );
};
