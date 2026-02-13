
import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, ChevronRight, Activity, Calendar } from "lucide-react";
import { siteConfig } from "../../data/config";

const RightSidebar = ({ isDarkMode }) => {
  return (
    <aside className={`w-[400px] border-l p-10 h-full overflow-y-auto no-scrollbar shrink-0 hidden xl:block transition-all duration-500 ${isDarkMode ? 'bg-zinc-950/20 border-zinc-800 backdrop-blur-2xl' : 'bg-white/30 backdrop-blur-2xl border-zinc-100'}`}>
      
      {/* SECTION: SCHEDULE */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className={`text-lg font-bold tracking-tight flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
            <Calendar size={18} className="text-accent" /> Upcoming Schedule
          </h3>
          <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/5 px-2 py-1 rounded-lg">4 Events</span>
        </div>
        
        <div className="space-y-4">
          {siteConfig.schedule.map((task, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-[2rem] border group cursor-pointer transition-all duration-300 relative overflow-hidden ${
                isDarkMode 
                ? 'bg-zinc-900/50 border-zinc-800 hover:border-accent/30 hover:bg-zinc-900' 
                : 'bg-white border-zinc-100 hover:border-accent/20 hover:shadow-xl hover:shadow-zinc-200/40'
              }`}
            >
              <div className="flex items-center gap-5 relative z-10">
                <div className={`w-1 h-10 ${task.color} rounded-full`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className={`text-xs font-bold group-hover:text-accent transition-colors ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{task.title}</p>
                    {i === 0 && (
                      <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-full text-[8px] font-black uppercase animate-pulse">
                        Now
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock size={10} className="text-zinc-400" />
                    <p className="text-[10px] text-zinc-400 font-medium">{task.date}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${task.color.replace('bg-', 'bg-')}/5`} style={{ filter: 'blur(40px)' }}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION: RECENT ACTIVITY */}
      <div className="mb-12 pt-12 border-t border-zinc-100/10">
        <div className="flex justify-between items-center mb-8">
          <h3 className={`text-lg font-bold tracking-tight flex items-center gap-2 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
            <Activity size={18} className="text-accent" /> Recent Activity
          </h3>
          <button className="text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-accent transition-colors">View All</button>
        </div>
        
        <div className="space-y-8 relative before:absolute before:left-[21px] before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-100 dark:before:bg-zinc-800">
          {siteConfig.activities.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 group cursor-pointer relative z-10"
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs transition-all border-4 ${
                isDarkMode 
                ? 'bg-zinc-900 text-zinc-400 border-zinc-950 group-hover:text-accent group-hover:bg-accent/10' 
                : 'bg-zinc-50 text-zinc-400 border-[#F8F9FB] group-hover:text-accent group-hover:bg-accent/10'
              }`}>
                {item.name[0]}
              </div>
              <div className="flex-1 pt-1">
                <p className={`text-xs font-bold leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-200 group-hover:text-accent' : 'text-zinc-800 group-hover:text-accent'}`}>
                  {item.name} <span className="font-medium text-zinc-400">{item.action}</span>
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className={`px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${item.color || 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'}`}>
                    {item.name === 'Bot' ? 'System' : 'Update'}
                  </div>
                  <span className="text-zinc-300 text-[8px]">•</span>
                  <p className="text-[9px] text-zinc-500 font-medium">{item.time} ago</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SYSTEM HEALTH WIDGET (REFINED) */}
      <div className="bg-zinc-950 p-8 rounded-[2.5rem] shadow-2xl shadow-zinc-200 dark:shadow-none border border-white/5 relative overflow-hidden group">
        <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-accent/20 blur-3xl rounded-full pointer-events-none group-hover:bg-accent/30 transition-all duration-700"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
              <Activity size={14} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Network Status</span>
          </div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <div className="w-1.5 h-1.5 bg-emerald-500/20 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-5 relative z-10">
          <div>
            <div className="flex justify-between text-[10px] font-black text-white/60 mb-2 uppercase tracking-widest">
              <span>API Latency</span>
              <span className="text-accent">99.9% Reliable</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '99.9%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-accent shadow-[0_0_15px_rgba(99,102,241,0.6)]"
              ></motion.div>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-4 px-5 rounded-2xl bg-white/5 border border-white/5">
            <div>
              <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Server Uptime</p>
              <p className="text-xs font-bold text-white mt-0.5">365 Days 4h</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Global Reach</p>
              <p className="text-xs font-bold text-white mt-0.5">14 Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* UPGRADE PRO BANNER (POLISHED) */}
      <div className="mt-10 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-[2.5rem] blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
        <div className="relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] overflow-hidden group shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-accent/20 transition-all duration-700"></div>
          <div className="relative z-10 text-center">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10 shadow-2xl shadow-accent/40 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Zap size={24} fill="white" />
            </div>
            <p className="text-zinc-800 dark:text-white text-lg font-bold mb-1 tracking-tight">Level Up Your DevHub</p>
            <p className="text-zinc-400 text-xs mb-6 leading-relaxed font-medium">Get advanced repository metrics and unlimited AI documentation audits.</p>
            <button className="w-full py-4 bg-zinc-900 dark:bg-accent hover:bg-accent dark:hover:bg-white text-white dark:hover:text-zinc-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 shadow-xl shadow-accent/20 active:scale-95">
              Unlock All Features
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
