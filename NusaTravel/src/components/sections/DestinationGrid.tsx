import { motion } from 'framer-motion';
import { destinations } from '../../data/config';

export const DestinationGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-slate-400">Best Location</p>
          <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">Indonesian tourism</h2>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-lg font-medium leading-relaxed text-slate-400">
            Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {destinations.map((dest, i) => {
          const isLarge = i === 0 || i === 3;
          return (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
              className={`group relative overflow-hidden rounded-[48px] ${
                isLarge ? 'md:col-span-2 h-[480px]' : 'h-[480px]'
              }`}
            >
              <img 
                src={dest.image} 
                className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                alt={dest.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest opacity-60">{dest.location}</p>
                <p className="text-3xl font-bold tracking-tight">{dest.title}</p>
              </div>
              
              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <span className="text-white text-sm font-bold">View</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
