import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, Sun, MapPin } from 'lucide-react';
import { destinations } from '../../data/config';
import { OptimizedImage } from '../ui/OptimizedImage';

const BentoItem = ({ item, index }: { item: any, index: number }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[40px] bg-surface ${item.size} min-h-[350px] md:min-h-0`}
    >
      <div className="absolute inset-0 h-[120%] w-full -top-[10%]">
        <motion.div style={{ y }} className="h-full w-full">
          <OptimizedImage 
            src={item.image} 
            alt={item.title} 
            className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110" 
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="absolute top-6 right-6 flex items-center gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-md border border-white/20">
        <item.icon className="h-4 w-4 text-accent" />
        <span className="text-xs font-bold text-white">{item.weather}</span>
      </div>

      <div className="absolute bottom-10 left-10">
        <div className="flex items-center gap-2 text-white/70 mb-2">
          <MapPin className="h-3 w-3" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.location}</span>
        </div>
        <h3 className="text-3xl font-black text-white tracking-tight">{item.title}</h3>
      </div>
    </motion.div>
  );
};

export const DestinationBento = () => {
  const bentoItems = destinations.map((item, i) => ({
    ...item,
    size: i === 0 ? "md:col-span-2 md:row-span-2" : i === 1 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1",
    icon: i % 2 === 0 ? Sun : Cloud
  }));

  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-20">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-accent">Discover Wonders</p>
        <h2 className="text-6xl font-black tracking-tighter text-secondary">Natural Treasures</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:h-[750px]">
        {bentoItems.map((item, i) => (
          <BentoItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};
