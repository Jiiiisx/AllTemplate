
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
  MoreVertical
} from 'lucide-react';
import { initialTasks } from '../data/tasks';

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'All' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          task.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return 'text-red-500 bg-red-500/10';
      case 'High': return 'text-orange-500 bg-orange-500/10';
      case 'Medium': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-zinc-500 bg-zinc-500/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Done': return <CheckCircle2 className="text-emerald-500" size={18} />;
      case 'In Progress': return <Clock className="text-blue-500" size={18} />;
      default: return <Circle className="text-zinc-300" size={18} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Community Tasks</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Manage issues, documentation goals, and community contributions.</p>
        </div>
        <button className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0">
          <Plus size={16} /> New Task
        </button>
      </header>

      {/* TOOLBAR */}
      <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 w-full lg:w-auto overflow-x-auto no-scrollbar">
          {['All', 'To Do', 'In Progress', 'Done'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                filter === s ? 'bg-zinc-100 dark:bg-zinc-800 text-accent' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search tasks or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white"
          />
        </div>
      </div>

      {/* TASK LIST */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1 w-full">
                <div className="shrink-0">
                  {getStatusIcon(task.status)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{task.id}</span>
                    <span className="text-zinc-300 text-[10px]">•</span>
                    <span className="text-[10px] font-bold text-accent flex items-center gap-1">
                      <Github size={12} /> {task.repo}
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold transition-colors ${task.status === 'Done' ? 'text-zinc-400 line-through' : 'text-zinc-800 dark:text-white group-hover:text-accent'}`}>
                    {task.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                
                <div className="flex items-center -space-x-2">
                  <img src={task.assignee} alt="assignee" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900" />
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[8px] font-bold text-zinc-400">
                    +2
                  </div>
                </div>

                <button className="text-zinc-300 hover:text-zinc-500 transition-colors">
                  <MoreVertical size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredTasks.length === 0 && (
          <div className="py-20 text-center">
            <AlertCircle size={40} className="mx-auto text-zinc-200 mb-4" />
            <p className="text-zinc-400 font-medium">No tasks found matching your criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Tasks;
