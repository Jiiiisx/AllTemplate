import { motion } from 'framer-motion';
import { Cloud, Sun, MapPin } from 'lucide-react';
import { destinations } from '../../data/config';
import { OptimizedImage } from '../ui/OptimizedImage';

const bentoItems = destinations.map((item, i) => ({
  ...item,
  size: i === 0 ? "md:col-span-2 md:row-span-2" : i === 1 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1",
  icon: i % 2 === 0 ? Sun : Cloud
}));

export const DestinationBento = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-secondary">Discover Wonders</p>
        <h2 className="text-5xl font-black tracking-tight text-secondary">Natural Treasures</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {bentoItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-[32px] ${item.size}`}
          >
            <OptimizedImage 
              src={item.image} 
              alt={item.title} 
              className="h-full w-full transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute top-6 right-6 flex items-center gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-xs font-bold text-white">{item.weather}</span>
            </div>

            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-2 text-white/70 mb-1">
                <MapPin className="h-3 w-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
