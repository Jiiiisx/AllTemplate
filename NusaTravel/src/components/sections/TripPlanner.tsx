import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Camera, Coffee, Waves } from 'lucide-react';

const moods = [
  { id: 'relax', label: 'Relaxing', icon: Coffee, color: 'bg-blue-500', 
    dest: { title: "Ubud Spiritual Retreat", desc: "Healing in the heart of Bali's jungle." } },
  { id: 'adventure', label: 'Adventure', icon: Compass, color: 'bg-orange-500', 
    dest: { title: "Mount Bromo Trekking", desc: "Experience the majestic sunrise." } },
  { id: 'culture', label: 'Cultural', icon: Camera, color: 'bg-emerald-600', 
    dest: { title: "Borobudur Heritage", desc: "Ancient wisdom in every stone." } },
  { id: 'beach', label: 'Beachside', icon: Waves, color: 'bg-cyan-500', 
    dest: { title: "Gili Trawangan", desc: "Crystal clear water & no cars." } },
];

export const TripPlanner = () => {
  const [activeMood, setActiveMood] = useState(moods[0]);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-32">
      <div className="bg-secondary rounded-[40px] md:rounded-[64px] p-8 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-secondary/20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 hidden md:block" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">How do you want <br /> to feel today?</h2>
            <p className="text-white/60 mb-10 text-base md:text-lg">Pick a mood, and we'll suggest the perfect getaway.</p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setActiveMood(mood)}
                  className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                    activeMood.id === mood.id 
                    ? 'bg-white text-secondary border-white scale-105' 
                    : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <mood.icon className={`h-5 w-5 md:h-6 md:h-6 ${activeMood.id === mood.id ? 'text-secondary' : 'text-white'}`} />
                  <span className="font-bold text-xs md:text-sm">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[350px] md:min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMood.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="w-full bg-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-white/10 shadow-2xl"
              >
                <div className={`w-12 h-12 rounded-2xl ${activeMood.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <activeMood.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{activeMood.dest.title}</h3>
                <p className="text-white/70 mb-8 text-sm md:text-base leading-relaxed">{activeMood.dest.desc}</p>
                <button className="w-full py-4 bg-white text-secondary font-bold rounded-xl md:rounded-2xl hover:bg-accent hover:text-white transition-colors duration-300">
                  Plan This Trip
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
