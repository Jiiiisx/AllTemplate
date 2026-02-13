import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { packages } from '../../data/config';

export const TourPackages = () => {
  return (
    <section className="px-12 py-24">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-slate-500 uppercase tracking-widest">Tour packages</p>
          <h2 className="text-4xl font-bold">Our tourist destination</h2>
        </div>
        <p className="max-w-md text-slate-500">
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
            className="group relative h-[450px] overflow-hidden rounded-[40px]"
          >
            <img src={pkg.image} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" alt={pkg.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute top-6 left-6 rounded-full bg-white/20 px-4 py-1.5 text-xs text-white backdrop-blur-md">
              {pkg.duration}
            </div>
            
            <div className="absolute top-6 right-6 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-xs text-white backdrop-blur-md">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{pkg.rating}</span>
            </div>

            <div className="absolute bottom-10 left-8 right-8">
              <div className="glass p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase text-white/70 mb-1">{pkg.date}</p>
                  <p className="text-lg font-bold text-white">{pkg.title}</p>
                </div>
                <div className="text-2xl font-bold text-white">{pkg.price}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="rounded-full bg-black px-10 py-4 text-sm font-bold text-white transition hover:scale-105">
          View more
        </button>
      </div>
    </section>
  );
};
