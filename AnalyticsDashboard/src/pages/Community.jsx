
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Trophy, Medal, Github, MoreHorizontal, UserPlus, GitCommit, GitPullRequest } from 'lucide-react';
import { contributorsData } from '../data/community';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredContributors = contributorsData.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-12"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Contributor Leaderboard</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Top contributors based on commits, merged PRs, and community points.</p>
        </div>
        <button className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
          <UserPlus size={14} /> Invite Contributor
        </button>
      </header>

      {/* TOP 3 HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contributorsData.slice(0, 3).map((c, i) => (
          <div key={c.id} className={`relative p-8 rounded-[2.5rem] border overflow-hidden transition-all hover:scale-105 ${
            i === 0 ? 'bg-accent text-white border-accent shadow-2xl shadow-accent/30' : 
            'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'
          }`}>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20">
                <img src={c.avatar} alt={c.name} />
              </div>
              {i === 0 ? <Trophy size={24} className="text-white/50" /> : <Medal size={24} className="text-zinc-200" />}
            </div>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${i === 0 ? 'text-white/60' : 'text-zinc-400'}`}>Rank #{i + 1}</p>
            <h3 className="text-xl font-bold tracking-tight mb-4">{c.name}</h3>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-lg font-bold leading-none">{c.commits}</p>
                <p className={`text-[8px] font-black uppercase mt-1 ${i === 0 ? 'text-white/50' : 'text-zinc-400'}`}>Commits</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold leading-none">{c.prs}</p>
                <p className={`text-[8px] font-black uppercase mt-1 ${i === 0 ? 'text-white/50' : 'text-zinc-400'}`}>PRs</p>
              </div>
              <div className="text-center ml-auto">
                <p className="text-lg font-bold leading-none">{c.points}</p>
                <p className={`text-[8px] font-black uppercase mt-1 ${i === 0 ? 'text-white/50' : 'text-zinc-400'}`}>Points</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ALL CONTRIBUTORS TABLE */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search contributors..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-sm transition-colors duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">Contributor</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Stats</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Points</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <AnimatePresence>
                {filteredContributors.map((c) => (
                  <motion.tr 
                    key={c.id} 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img src={c.avatar} alt="" className="w-10 h-10 rounded-xl border border-zinc-100 dark:border-zinc-800" />
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-900 ${c.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-300'}`}></div>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors">{c.name}</p>
                          <p className="text-[11px] text-zinc-400 font-medium">{c.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center gap-1.5">
                          <GitCommit size={14} className="text-zinc-300" />
                          <span className="text-xs font-bold text-zinc-500">{c.commits}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitPullRequest size={14} className="text-zinc-300" />
                          <span className="text-xs font-bold text-zinc-500">{c.prs}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="text-sm font-black text-accent">{c.points.toLocaleString()}</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-zinc-400 hover:text-accent transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;
