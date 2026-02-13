import { motion } from 'framer-motion';
import { Calendar, Users, Wallet } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={siteConfig.hero.backgroundImage}
          className="h-full w-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 py-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-5xl font-extrabold tracking-tight md:text-8xl text-white"
        >
          Extraordinary natural and <br className="hidden md:block" /> cultural charm
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-16 max-w-2xl text-lg font-medium text-white/80"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        {/* Improved Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto flex w-full max-w-4xl items-center gap-2 rounded-[32px] bg-white/20 p-3 backdrop-blur-2xl"
        >
          <div className="flex flex-1 items-center gap-4 border-r border-white/20 px-6 py-2 text-left">
            <Calendar className="h-5 w-5 text-white/60" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Date</p>
              <p className="whitespace-nowrap text-sm font-bold text-white">Select Date</p>
            </div>
          </div>
          
          <div className="flex flex-1 items-center gap-4 border-r border-white/20 px-6 py-2 text-left">
            <Wallet className="h-5 w-5 text-white/60" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Budget</p>
              <p className="whitespace-nowrap text-sm font-bold text-white">Set Budget</p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-4 px-6 py-2 text-left">
            <Users className="h-5 w-5 text-white/60" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Guest</p>
              <p className="whitespace-nowrap text-sm font-bold text-white">Add Guests</p>
            </div>
          </div>

          <button className="flex h-14 items-center justify-center rounded-[24px] bg-secondary px-10 font-bold text-white transition hover:bg-accent">
            Search
          </button>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 gap-8 md:flex md:items-center md:justify-center md:gap-24 text-white">
          {[
            { label: 'Total Customers', value: '10M+' },
            { label: 'Years Experience', value: '09+' },
            { label: 'Total Destinations', value: '12K' },
            { label: 'Average Rating', value: '5.0' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="group cursor-default"
            >
              <p className="mb-1 text-3xl font-black md:text-4xl">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
