import React from "react";
import { Zap } from "lucide-react";
import { siteConfig } from "../../data/config";

const RightSidebar = ({ isDarkMode }) => {
  return (
    <aside className={`w-[400px] border-l p-10 h-full overflow-y-auto no-scrollbar shrink-0 hidden xl:block transition-colors duration-500 ${isDarkMode ? 'bg-zinc-900/30 border-zinc-800 backdrop-blur-sm' : 'bg-white/30 backdrop-blur-sm border-zinc-100'}`}>
      <div className="mb-10">
        <h3 className={`text-lg font-bold mb-6 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Upcoming Schedule</h3>
        <div className="space-y-4">
          {siteConfig.schedule.map((task, i) => (
            <div key={i} className={`p-6 rounded-3xl border flex gap-4 items-center group cursor-pointer hover:border-accent/20 transition-all shadow-sm ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100/50'}`}>
              <div className={`w-1.5 h-10 ${task.color} rounded-full`}></div>
              <div>
                <p className={`text-xs font-bold group-hover:text-accent transition-colors ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{task.title}</p>
                <p className="text-[10px] text-zinc-400 mt-1 font-medium">{task.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 pt-10 border-t border-zinc-100/10">
        <h3 className={`text-lg font-bold mb-6 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Recent Activity</h3>
        <div className="space-y-6">
          {siteConfig.activities.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-pointer">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs transition-all ${isDarkMode ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-400'} group-hover:bg-accent/10 group-hover:text-accent`}>
                {item.name[0]}
              </div>
              <div>
                <p className={`text-xs font-bold transition-colors ${isDarkMode ? 'text-zinc-200 group-hover:text-accent' : 'text-zinc-800 group-hover:text-accent'}`}>
                  {item.name} <span className="font-medium text-zinc-400">{item.action}</span>
                </p>
                <p className="text-[10px] text-zinc-500 mt-1 font-medium">{item.time} ago</p>
              </div>
            </div>
          ))}
        </div>
        <button className={`w-full mt-10 py-4 border text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all ${isDarkMode ? 'border-zinc-800 text-zinc-500 hover:bg-zinc-900' : 'border-zinc-100 text-zinc-400 hover:bg-zinc-50'}`}>
          View All Activity
        </button>
      </div>

      {/* SYSTEM HEALTH */}
      <div className="bg-zinc-900 p-8 rounded-[2.5rem] shadow-2xl shadow-zinc-200">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent">System Health</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-50"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs font-bold text-white mb-3">
          <span>API Response</span>
          <span className="text-accent">99.9%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="w-[99.9%] h-full bg-accent shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
        </div>
        <p className="text-[9px] text-zinc-500 mt-4 leading-relaxed font-medium">All systems operational.</p>
      </div>

      {/* UPGRADE PRO BANNER */}
      <div className="mt-10 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-[2.5rem] blur opacity-20 transition duration-1000"></div>
        <div className="relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] overflow-hidden group shadow-sm transition-colors duration-500">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-accent/20 transition-all duration-700"></div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 border border-accent/10 shadow-inner">
              <Zap size={18} fill="currentColor" className="opacity-80" />
            </div>
            <p className="text-zinc-800 dark:text-white text-sm font-bold mb-1 tracking-tight">Upgrade to Pro</p>
            <p className="text-zinc-400 text-[10px] mb-5 leading-relaxed font-medium">Get unlimited AI documentation audits and advanced repo metrics.</p>
            <button className="w-full py-3 bg-accent hover:bg-zinc-900 dark:hover:bg-white text-white dark:hover:text-zinc-900 text-[10px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 active:scale-95">
              Explore Plans
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;