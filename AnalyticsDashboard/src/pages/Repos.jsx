
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Github, 
  Star, 
  GitFork, 
  AlertCircle, 
  Plus, 
  Filter,
  ExternalLink,
  Code2,
  Clock,
  X,
  Globe,
  Lock
} from 'lucide-react';
import { reposData } from '../data/repos';

const Repos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLang, setFilterLang] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRepos = reposData.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          repo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLang = filterLang === 'All' || repo.language === filterLang;
    return matchesSearch && matchesLang;
  });

  const getLanguageColor = (lang) => {
    switch (lang) {
      case 'TypeScript': return 'bg-blue-500';
      case 'JavaScript': return 'bg-yellow-400';
      case 'Astro': return 'bg-orange-500';
      default: return 'bg-zinc-400';
    }
  };

  const getHealthColor = (score) => {
    if (score >= 90) return 'text-emerald-500';
    if (score >= 80) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Repositories</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Monitoring codebase health, activity, and community engagement across all projects.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
        >
          <Plus size={16} /> New Repository
        </button>
      </header>

      {/* MODAL FORM: NEW REPOSITORY */}
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
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden"
            >
              {/* Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Github size={120} />
              </div>

              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white tracking-tight">Create Repository</h2>
                  <p className="text-zinc-400 text-xs font-medium mt-1 uppercase tracking-widest">Setup your new codebase environment</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-red-500 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Repository Name</label>
                  <input type="text" placeholder="e.g. devhub-core-api" className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Description</label>
                  <textarea rows="3" placeholder="Briefly describe your project..." className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-medium resize-none"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Main Language</label>
                    <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold appearance-none">
                      <option>TypeScript</option>
                      <option>JavaScript</option>
                      <option>Python</option>
                      <option>Go</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Visibility</label>
                    <div className="flex gap-2 bg-zinc-50 dark:bg-zinc-800 p-1.5 rounded-2xl">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white dark:bg-zinc-700 shadow-sm rounded-xl text-[10px] font-black uppercase text-accent">
                        <Globe size={12} /> Public
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-black uppercase text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-all">
                        <Lock size={12} /> Private
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 border border-zinc-100 dark:border-zinc-800 text-zinc-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  Cancel
                </button>
                <button className="flex-[2] py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                  Initialize Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOOLBAR */}
      <div className="mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-[450px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search projects by name or description..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white"
          />
        </div>

        <div className="flex gap-2 bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 w-full lg:w-auto overflow-x-auto no-scrollbar">
          {['All', 'TypeScript', 'JavaScript', 'Astro'].map((l) => (
            <button
              key={l}
              onClick={() => setFilterLang(l)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                filterLang === l ? 'bg-zinc-100 dark:bg-zinc-800 text-accent' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* REPO GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredRepos.map((repo) => (
            <motion.div
              key={repo.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-accent transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors tracking-tight">{repo.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{repo.language}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-black leading-none ${getHealthColor(repo.health)}`}>{repo.health}%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mt-2">Health Score</p>
                </div>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-2">
                {repo.description}
              </p>

              <div className="mt-auto pt-6 border-t border-zinc-50 dark:border-zinc-800/50 flex flex-wrap items-center justify-between gap-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-amber-400" />
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{repo.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork size={14} className="text-zinc-400" />
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{repo.forks}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-red-400" />
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{repo.openIssues} Issues</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{repo.updatedAt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredRepos.length === 0 && (
        <div className="py-20 text-center">
          <Code2 size={48} className="mx-auto text-zinc-200 mb-4" />
          <p className="text-zinc-400 font-medium">No repositories found in the community portal.</p>
        </div>
      )}
    </motion.div>
  );
};

export default Repos;
