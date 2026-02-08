import React from 'react';
import { siteData } from '../data/config';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe, Award } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6">
          
          {/* Main About Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-secondary border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Award className="text-black w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Passionately creating products that matter.
              </h3>
            </div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-8 md:mt-0">
              Based in {siteData.bento.location}, I work with global clients to solve complex problems through design and technology.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-accent rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-row md:flex-row items-center justify-around text-black"
          >
            {siteData.bento.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-black">{stat.value}</div>
                <div className="text-[10px] md:text-sm font-bold uppercase tracking-wider opacity-60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-secondary border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8"
          >
            <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm md:text-base">
              <Globe className="w-4 h-4 text-accent" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {siteData.bento.skills.map((skill) => (
                <span key={skill} className="text-[10px] md:text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location/Time Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between border border-white/5"
          >
            <div className="space-y-4 mb-8 md:mb-0">
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Location</span>
              </div>
              <div className="text-white font-bold text-sm md:text-base">{siteData.bento.location}</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Timezone</span>
              </div>
              <div className="text-white font-bold text-sm md:text-base">{siteData.bento.timezone}</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;