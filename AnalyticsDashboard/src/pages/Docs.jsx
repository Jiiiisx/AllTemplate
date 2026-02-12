
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ArrowUpRight, 
  FileText, 
  CheckCircle2, 
  CircleDashed,
  LayoutGrid,
  List,
  Plus,
  X,
  Type,
  Tag,
  AlignLeft
} from 'lucide-react';
import { docsData } from '../data/docs';

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDocs = docsData.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'text-emerald-500 bg-emerald-500/10';
      case 'In Progress': return 'text-blue-500 bg-blue-500/10';
      case 'Review': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-zinc-500 bg-zinc-500/10';
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
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Documentation Hub</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Collaborative technical documentation and project knowledge base.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
        >
          <Plus size={16} /> Create Page
        </button>
      </header>

      {/* MODAL FORM: CREATE DOC PAGE */}
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
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white tracking-tight">New Doc Page</h2>
                  <p className="text-zinc-400 text-xs font-medium mt-1 uppercase tracking-widest">Share knowledge with the community</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-red-500 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Page Title</label>
                  <div className="relative group">
                    <Type className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-accent transition-colors" size={18} />
                    <input type="text" placeholder="e.g. Authentication Flow" className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-14 pr-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Category</label>
                  <div className="relative group">
                    <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-accent transition-colors" size={18} />
                    <select className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-14 pr-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold appearance-none">
                      <option>Guides</option>
                      <option>API Reference</option>
                      <option>Architecture</option>
                      <option>Development</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Description</label>
                  <div className="relative group">
                    <AlignLeft className="absolute left-5 top-6 text-zinc-300 group-focus-within:text-accent transition-colors" size={18} />
                    <textarea rows="4" placeholder="What is this page about?" className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-[2rem] py-5 pl-14 pr-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-medium resize-none"></textarea>
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
                <button className="flex-[2] py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <Plus size={14} /> Publish Page
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
            placeholder="Search documentation by title or content..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white"
          />
        </div>

        <div className="flex bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800">
           <button className="p-2 text-accent bg-zinc-50 dark:bg-zinc-800 rounded-xl"><LayoutGrid size={18} /></button>
           <button className="p-2 text-zinc-400 hover:text-zinc-600 rounded-xl"><List size={18} /></button>
        </div>
      </div>

      {/* DOCS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredDocs.map((doc) => (
            <motion.div
              key={doc.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all cursor-pointer relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  doc.progress === 100 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-accent'
                }`}>
                  {doc.progress === 100 ? <CheckCircle2 size={24} /> : <FileText size={24} />}
                </div>
                <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${getStatusStyle(doc.status)}`}>
                  {doc.status}
                </span>
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2">{doc.category}</p>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors tracking-tight mb-3">
                {doc.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">
                {doc.description}
              </p>

              <div className="mt-auto">
                <div className="flex justify-between items-end mb-2">
                   <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Progress</p>
                   <p className="text-xs font-black text-zinc-800 dark:text-zinc-200">{doc.progress}%</p>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${doc.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${doc.progress === 100 ? 'bg-emerald-500' : 'bg-accent shadow-[0_0_10px_rgba(99,102,241,0.5)]'}`}
                  ></motion.div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {doc.contributors.map((avatar, idx) => (
                      <img key={idx} src={avatar} alt="contributor" className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
                    <Clock size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{doc.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredDocs.length === 0 && (
        <div className="py-20 text-center">
          <CircleDashed size={48} className="mx-auto text-zinc-200 mb-4 animate-spin" />
          <p className="text-zinc-400 font-medium">No documentation found matching your search.</p>
        </div>
      )}
    </motion.div>
  );
};

export default Docs;
