import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';
import { statsHistory, chartDataHistory } from '../data/statsData';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import { Star, TrendingUp, Github, ExternalLink } from 'lucide-react';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('7D');

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
            <span className="bg-accent/10 text-accent text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              Community Pulse
            </span>
            <span className="text-zinc-300 text-[10px]">•</span>
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Main Repository: v3.2-stable</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors flex items-center gap-4">
            Project Overview 
            <a href="#" className="text-zinc-300 hover:text-accent transition-colors"><Github size={24} /></a>
          </h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Monitoring documentation coverage and community tasks velocity.</p>
        </div>

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
      </header>

      {/* Baris kartu Stats dengan Animasi Transisi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <AnimatePresence mode="wait">
          {statsHistory[timeframe].map((stat, i) => (
            <motion.div
              key={`${timeframe}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* AI DOCS AUDITOR WIDGET */}
      <div className="mb-12 relative group">
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
            <button className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors flex items-center justify-center gap-2">
              View Code <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Grafik Documentation Velocity */}
      <div className="rounded-[2.5rem] border shadow-sm p-10 mb-12 transition-colors duration-500 bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-white transition-colors">Documentation Velocity</h3>
            <p className="text-zinc-400 text-[10px] uppercase font-black tracking-[0.2em] mt-2">Coverage growth vs merged commits</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Coverage %</span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={timeframe}
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
      </div>
    </motion.div>
  );
};

export default Dashboard;