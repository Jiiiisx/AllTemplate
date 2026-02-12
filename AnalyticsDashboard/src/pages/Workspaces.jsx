
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Settings, 
  ArrowRight, 
  Users, 
  CheckSquare, 
  Search,
  Bell,
  Star,
  Activity
} from 'lucide-react';
import { workspacesData } from '../data/workspaces';
import { siteConfig } from '../data/config';

const Workspaces = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkspaces = workspacesData.filter(ws => 
    ws.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-[#F8F9FB] dark:bg-zinc-950 p-8 lg:p-12 transition-colors duration-500 relative overflow-y-auto no-scrollbar"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* TOP HUB NAV */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div>
            <h1 className="text-5xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">
              Workspace Hub
            </h1>
            <p className="text-zinc-400 mt-2 font-medium">Switch between your developer communities or start a new project.</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Find a workspace..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 py-4 pl-12 pr-4 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all dark:text-white shadow-sm"
              />
            </div>
            
            {/* USER PROFILE CORNER */}
            <div className="hidden sm:flex items-center gap-4 bg-white dark:bg-zinc-900 p-2 pr-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-colors">
              <img src={siteConfig.avatar} alt="Me" className="w-10 h-10 rounded-xl object-cover" />
              <div className="text-left">
                <p className="text-xs font-black text-zinc-800 dark:text-white uppercase tracking-tight">{siteConfig.adminName}</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase">{siteConfig.adminRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredWorkspaces.map((ws, i) => (
              <motion.div
                key={ws.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all cursor-pointer overflow-hidden"
                onClick={() => navigate('/')}
              >
                {/* ACTIVE INDICATOR */}
                {ws.id === 1 && (
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                )}

                <div className="flex justify-between items-start mb-10">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <img 
                      src={ws.logo} 
                      alt={ws.name} 
                      className="relative w-16 h-16 rounded-[1.5rem] shadow-xl shadow-accent/5 object-cover" 
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2 relative">
                    <span className="bg-zinc-50 dark:bg-zinc-800 text-zinc-400 text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-xl border border-zinc-100 dark:border-zinc-800 group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                      {ws.role}
                    </span>
                    {ws.id === 1 && <span className="text-[8px] font-black text-accent uppercase tracking-widest flex items-center gap-1 group-hover:opacity-0 transition-all duration-300"><div className="w-1 h-1 rounded-full bg-accent animate-pulse"></div> Active Now</span>}
                    
                    {/* QUICK ACTIONS ON HOVER - SWAP POSITION */}
                    <div className="absolute top-0 right-0 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-9 h-9 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl flex items-center justify-center text-zinc-400 hover:text-accent transition-colors shadow-sm">
                        <Star size={16} />
                      </button>
                      <button className="w-9 h-9 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-accent transition-colors shadow-sm">
                        <Settings size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors mb-3 tracking-tight">
                  {ws.name}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-10 line-clamp-2 font-medium italic">"{ws.description}"</p>

                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-zinc-50 dark:border-zinc-800">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <CheckSquare size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Tasks</span>
                    </div>
                    <span className="text-lg font-bold text-zinc-800 dark:text-white">{ws.activeTasks}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Activity size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Health</span>
                    </div>
                    <span className="text-lg font-bold text-emerald-500">{ws.health}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* CREATE NEW WORKSPACE CARD */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="border-4 border-dashed border-zinc-100 dark:border-zinc-900 p-10 rounded-[3rem] flex flex-col items-center justify-center text-center group cursor-pointer hover:border-accent/30 hover:bg-accent/5 transition-all"
          >
            <div className="w-20 h-20 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] flex items-center justify-center text-zinc-300 group-hover:text-accent group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-6 shadow-sm">
              <Plus size={32} />
            </div>
            <h3 className="text-lg font-bold text-zinc-400 group-hover:text-accent transition-colors tracking-tight">Create New Workspace</h3>
            <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mt-2">Start a new project</p>
          </motion.div>
        </div>

        {/* BOTTOM HUB STATUS */}
        <footer className="mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-black text-zinc-800 dark:text-white">12</p>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Total Projects</p>
            </div>
            <div className="w-[1px] h-8 bg-zinc-100 dark:bg-zinc-800"></div>
            <div className="text-center">
              <p className="text-2xl font-black text-zinc-800 dark:text-white">458</p>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Commits This Week</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl shadow-zinc-200 dark:shadow-none">
            System Documentation
          </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default Workspaces;
