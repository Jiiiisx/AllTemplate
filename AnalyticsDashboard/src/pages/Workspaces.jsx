import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Settings, ArrowRight, Users, CheckSquare } from 'lucide-react';
import { workspacesData } from '../data/workspaces';

const Workspaces = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F8F9FB] dark:bg-zinc-950 p-8 lg:p-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter">My Workspaces</h1>
            <p className="text-zinc-400 mt-2 font-medium">Select a community to manage or create a new one.</p>
          </motion.div>
          <button className="w-12 h-12 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-accent transition-all shadow-sm">
            <Settings size={20} />
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspacesData.map((ws) => (
            <motion.div
              key={ws.id}
              layoutId={`card-${ws.id}`}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => navigate('/')}
            >
              <div className="flex justify-between items-start mb-8">
                <motion.img 
                  layoutId={`logo-${ws.id}`}
                  src={ws.logo} 
                  alt={ws.name} 
                  className="w-14 h-14 rounded-2xl shadow-lg shadow-accent/5" 
                />
                <span className="bg-zinc-50 dark:bg-zinc-800 text-zinc-400 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-100 dark:border-zinc-800">
                  {ws.role}
                </span>
              </div>

              <motion.h3 
                layoutId={`title-${ws.id}`}
                className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors mb-2"
              >
                {ws.name}
              </motion.h3>
              
              <p className="text-zinc-400 text-xs leading-relaxed mb-8 line-clamp-2">{ws.description}</p>

              <div className="flex items-center gap-6 pt-6 border-t border-zinc-50 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-accent" />
                  <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{ws.activeTasks} Tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-zinc-400" />
                  <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{ws.members}</span>
                </div>
                <div className="ml-auto text-emerald-500 text-[10px] font-black">{ws.health}%</div>
              </div>

              <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                <ArrowRight size={20} className="text-accent" />
              </div>
            </motion.div>
          ))}

          {/* CREATE NEW WORKSPACE CARD */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group cursor-pointer hover:border-accent transition-all"
          >
            <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-300 group-hover:text-accent group-hover:bg-accent/10 transition-all mb-4">
              <Plus size={24} />
            </div>
            <h3 className="text-sm font-bold text-zinc-400 group-hover:text-accent transition-colors">Create New Community</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Workspaces;