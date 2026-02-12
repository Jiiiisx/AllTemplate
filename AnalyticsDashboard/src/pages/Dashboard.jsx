import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';
import { statsHistory, chartDataHistory } from '../data/statsData';
import { contributorsData } from '../data/community';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import CodeHeatmap from '../components/CodeHeatmap';
import PrivateWidgets from '../components/PrivateWidgets';
import { Star, TrendingUp, Github, ExternalLink, ShieldAlert, Lock, Trophy } from 'lucide-react';

const Dashboard = ({ viewMode, isDarkMode }) => {
  const [timeframe, setTimeframe] = useState('7D');
  const topContributor = contributorsData[0];

  // Determine which stats to show
  const currentStats = viewMode === 'private' ? statsHistory['private'] : statsHistory[timeframe];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-12"
    >
      <header className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full flex items-center gap-2 ${viewMode === 'private' ? 'bg-red-500/10 text-red-500' : 'bg-accent/10 text-accent'}`}>
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${viewMode === 'private' ? 'bg-red-500' : 'bg-accent'}`}></div>
              {viewMode === 'private' ? 'Internal Management' : 'Project Pulse'}
            </span>
            <span className="text-zinc-300 text-[10px]">•</span>
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">v3.2-stable</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors flex items-center gap-4">
            {viewMode === 'private' ? 'Maintainer Dashboard' : 'Development Overview'}
            <a href="#" className="text-zinc-300 hover:text-accent transition-colors"><Github size={24} /></a>
          </h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">
            {viewMode === 'private' 
              ? 'Accessing private metrics, security logs, and internal system configurations.' 
              : 'Monitoring codebase health, commit velocity, and task completion.'}
          </p>
        </div>

        {viewMode === 'public' && (
          <div className="flex bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-colors">
            {['7D', '30D', '12M'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  timeframe === t 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : 'text-zinc-400 hover:text-accent'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* DASHBOARD TOP CONTENT */}
      {viewMode === 'public' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <CodeHeatmap isDarkMode={isDarkMode} />
          </div>
          
          {/* LEADER OF THE WEEK WIDGET */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden group transition-all hover:shadow-2xl hover:shadow-accent/5">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Trophy size={80} className="text-accent" />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">Leader of the Week</p>
              <div className="flex items-center gap-4 mb-6">
                <img src={topContributor.avatar} alt="" className="w-14 h-14 rounded-2xl border-2 border-accent/20" />
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white tracking-tight">{topContributor.name}</h3>
                  <p className="text-xs text-zinc-400 font-medium">{topContributor.role}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-sm font-bold text-zinc-800 dark:text-white">{topContributor.commits}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Commits</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-800 dark:text-white">{topContributor.tasksFixed}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Tasks</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-800 dark:text-white">{topContributor.points}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-12">
          <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-10 mb-8">
            <div className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-2xl shadow-red-500/40">
              <ShieldAlert size={40} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2 tracking-tight">Security Audit Required</h3>
              <p className="text-zinc-500 text-sm max-w-xl">We detected 3 high-severity vulnerabilities in 'core-api-node' dependencies. Immediate update recommended to prevent data leakage.</p>
            </div>
            <button className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 shrink-0">
              Fix Issues Now
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* BUILD LOGS TERMINAL */}
            <div className="bg-zinc-950 rounded-[2.5rem] p-8 border border-white/5 font-mono overflow-hidden relative group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                <span className="ml-2 text-[10px] text-zinc-500 uppercase font-black tracking-widest">Production Build Log</span>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-500 text-[11px]"><span className="text-emerald-500">✓</span> [12:45:01] Initializing build engine...</p>
                <p className="text-zinc-500 text-[11px]"><span className="text-emerald-500">✓</span> [12:45:04] Optimizing 142 assets...</p>
                <p className="text-zinc-300 text-[11px]"><span className="text-accent animate-pulse">●</span> [12:45:10] Running security checksum...</p>
                <p className="text-zinc-600 text-[11px] mt-4 italic font-sans">// Waiting for maintainer approval...</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ExternalLink size={100} className="text-white" />
              </div>
            </div>

            {/* SYSTEM VITALS */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-sm font-bold text-zinc-800 dark:text-white tracking-tight">System Infrastructure</h4>
                  <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Real-time vitals</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-[9px] font-black text-emerald-500 uppercase">Operational</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">Latency</p>
                  <p className="text-lg font-bold text-zinc-800 dark:text-white tracking-tighter">42ms</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">Uptime</p>
                  <p className="text-lg font-bold text-zinc-800 dark:text-white tracking-tighter">99.9%</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <p className="text-[9px] font-black text-zinc-400 uppercase mb-1">Errors</p>
                  <p className="text-lg font-bold text-red-500 tracking-tighter">0.02%</p>
                </div>
              </div>
            </div>
          </div>

          <PrivateWidgets />
        </div>
      )}

      {/* Baris kartu Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {currentStats.map((stat, i) => (
          <div key={`${viewMode}-${timeframe}-${stat.title}`}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* AI DOCS AUDITOR WIDGET */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-emerald-500 to-cyan-500 rounded-[2.5rem] blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
        <div className="relative backdrop-blur-2xl border p-10 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-10 transition-colors duration-500 bg-white/60 border-white dark:bg-zinc-900/60 dark:border-zinc-800">
          <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white shrink-0 shadow-2xl shadow-accent/40">
            <Star size={40} fill="white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">{siteConfig.aiInsight.badge}</span>
              <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{siteConfig.aiInsight.version}</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-3 transition-colors italic font-serif">
              {siteConfig.aiInsight.title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
              {siteConfig.aiInsight.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <button className="bg-zinc-900 text-white dark:bg-white dark:text-black px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all shadow-2xl shadow-zinc-200">
              Generate Tasks
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bagian Grafik */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[2.5rem] border shadow-sm p-10 mb-12 transition-colors duration-500 bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800"
      >
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-white transition-colors">
              {viewMode === 'private' ? 'Internal Traffic Metrics' : 'Development Velocity'}
            </h3>
            <p className="text-zinc-400 text-[10px] uppercase font-black tracking-[0.2em] mt-2">
              {viewMode === 'private' ? 'System response time & latency' : 'Commits merged vs tasks resolved'}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                {viewMode === 'private' ? 'Latency (ms)' : 'Commits'}
              </span>
            </div>
            {viewMode !== 'private' && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Tasks
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="h-[350px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${timeframe}-${viewMode}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <RevenueChart data={chartDataHistory[timeframe]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
