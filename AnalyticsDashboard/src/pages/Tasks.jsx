import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Circle, 
  Clock, 
  AlertCircle,
  Github,
  MoreVertical,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
import { initialTasks } from '../data/tasks';

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Kolom Kanban
  const columns = [
    { id: 'To Do', label: 'Backlog', color: 'bg-zinc-400' },
    { id: 'In Progress', label: 'In Development', color: 'bg-accent' },
    { id: 'Done', label: 'Completed', color: 'bg-emerald-500' }
  ];

  const getFilteredTasks = (status) => {
    return tasks.filter(task => 
      task.status === status && 
      (task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'text-red-500 bg-red-500/10';
      case 'High': return 'text-orange-500 bg-orange-500/10';
      case 'Medium': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-zinc-500 bg-zinc-500/10';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12 min-h-screen"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Issue Board</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Manage and track development tasks across your repositories.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center gap-2">
            <Filter size={16} /> Filters
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
          >
            <Plus size={16} /> New Issue
          </button>
        </div>
      </header>

      {/* MODAL FORM: NEW ISSUE */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white tracking-tight">Create New Issue</h2>
                  <p className="text-zinc-400 text-xs font-medium mt-1 uppercase tracking-widest">Track a bug, feature or improvement</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-red-500 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Issue Title</label>
                  <input type="text" placeholder="e.g. Fix sidebar mobile glitch" className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Target Repository</label>
                    <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold appearance-none">
                      <option>DEVHUB-CORE</option>
                      <option>UI-KIT</option>
                      <option>PYTHON-API</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Priority</label>
                    <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold appearance-none">
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Initial Status</label>
                  <div className="flex gap-2 bg-zinc-50 dark:bg-zinc-800 p-1.5 rounded-2xl">
                    {columns.map(c => (
                      <button key={c.id} className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase transition-all ${c.id === 'To Do' ? 'bg-white dark:bg-zinc-700 shadow-sm text-accent' : 'text-zinc-400 hover:text-zinc-600'}`}>
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 border border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  Discard
                </button>
                <button className="flex-[2] py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <CheckCircle2 size={14} /> Open Issue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SEARCH TOOLBAR */}
      <div className="mb-10">
        <div className="relative w-full max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search issues, repos, or tags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white shadow-sm"
          />
        </div>
      </div>

      {/* KANBAN BOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {columns.map((col) => {
          const columnTasks = getFilteredTasks(col.id);
          return (
            <div key={col.id} className="flex flex-col min-h-[500px]">
              {/* COLUMN HEADER */}
              <div className="flex items-center justify-between mb-6 px-2">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${col.color}`}></div>
                  <h3 className="text-sm font-black text-zinc-800 dark:text-white uppercase tracking-widest">{col.label}</h3>
                  <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {columnTasks.length}
                  </span>
                </div>
                <button className="text-zinc-400 hover:text-accent transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              {/* CARDS CONTAINER */}
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {columnTasks.map((task) => (
                    <motion.div
                      key={task.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -4 }}
                      className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all cursor-grab active:cursor-grabbing border-b-4"
                      style={{ borderBottomColor: col.id === 'To Do' ? '#e4e4e7' : col.id === 'In Progress' ? '#6366f1' : '#10b981' }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{task.id}</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-accent">
                          <MoreVertical size={14} />
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-zinc-800 dark:text-white mb-4 leading-snug group-hover:text-accent transition-colors">
                        {task.title}
                      </h4>

                      <div className="flex items-center gap-2 mb-6">
                        <Github size={12} className="text-zinc-400" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{task.repo}</span>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50 dark:border-zinc-800/50">
                        <span className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 overflow-hidden shadow-sm">
                            <img src={task.assignee} alt="avatar" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[7px] font-black text-zinc-500">
                            +2
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {columnTasks.length === 0 && (
                  <div className="py-12 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] flex flex-col items-center justify-center text-zinc-400">
                    <p className="text-[10px] font-black uppercase tracking-widest">No issues here</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Tasks;