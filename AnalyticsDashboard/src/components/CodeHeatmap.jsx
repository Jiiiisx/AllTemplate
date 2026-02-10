import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Award } from 'lucide-react';

const CodeHeatmap = ({ isDarkMode }) => {
  // Menampilkan 48 minggu agar lebih penuh secara horizontal
  const weeks = Array.from({ length: 48 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  const getIntensity = () => {
    const r = Math.random();
    if (r > 0.85) return 'bg-accent';
    if (r > 0.6) return 'bg-accent/60';
    if (r > 0.3) return 'bg-accent/20';
    return isDarkMode ? 'bg-zinc-800' : 'bg-zinc-100';
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm transition-all duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: THE ACTUAL HEATMAP */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-800 dark:text-white transition-colors">Documentation Activity</h3>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Activity over the last 12 months</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-sm bg-zinc-100 dark:bg-zinc-800"></div>
                <div className="w-2 h-2 rounded-sm bg-accent/20"></div>
                <div className="w-2 h-2 rounded-sm bg-accent/60"></div>
                <div className="w-2 h-2 rounded-sm bg-accent"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto no-scrollbar pb-2 mask-fade-right">
            {weeks.map((w) => (
              <div key={w} className="flex flex-col gap-1 shrink-0">
                {days.map((d) => (
                  <motion.div
                    key={`${w}-${d}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (w * 0.01) + (d * 0.005) }}
                    className={`w-3 h-3 rounded-[2px] transition-all hover:ring-2 hover:ring-accent/50 cursor-pointer ${getIntensity()}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: MINI STATS SUMMARY TABLE */}
        <div className="w-full lg:w-64 flex flex-col gap-4 border-l border-zinc-100 dark:border-zinc-800 lg:pl-12 justify-center">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Current Streak</p>
              <p className="text-sm font-bold text-zinc-800 dark:text-white">12 Days</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <Target size={18} />
            </div>
            <div>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Total Updates</p>
              <p className="text-sm font-bold text-zinc-800 dark:text-white">1,204</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/5 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <Award size={18} />
            </div>
            <div>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Best Week</p>
              <p className="text-sm font-bold text-zinc-800 dark:text-white">Oct 12-18</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CodeHeatmap;