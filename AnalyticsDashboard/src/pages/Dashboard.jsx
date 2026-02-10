import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import { Activity, Star } from 'lucide-react';

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-12 overflow-y-auto no-scrollbar scroll-smooth flex-1"
    >
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">System Overview</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Welcome back, {siteConfig.adminName.split(' ')[0]}. Here's your performance update.</p>
        </div>
        <button className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
          Generate Report
        </button>
      </header>

      {/* Baris kartu Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {siteConfig.stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* AI INSIGHT WIDGET */}
      <div className="mb-12 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
        <div className="relative backdrop-blur-2xl border p-10 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-10 transition-colors duration-500 bg-white/60 border-white dark:bg-zinc-900/60 dark:border-zinc-800">
          <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white shrink-0 shadow-2xl shadow-accent/40">
            <Star size={40} fill="white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-accent text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">{siteConfig.aiInsight.badge}</span>
              <span className="text-zinc-300 text-[10px]">•</span>
              <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{siteConfig.aiInsight.version}</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-3 transition-colors">{siteConfig.aiInsight.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
              {siteConfig.aiInsight.description}
            </p>
          </div>
          <button className="bg-zinc-900 text-white dark:bg-white dark:text-black px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all shadow-2xl shadow-zinc-200 shrink-0">
            Apply Now
          </button>
        </div>
      </div>

      {/* Bagian Grafik */}
      <div className="rounded-[2.5rem] border shadow-sm p-10 mb-12 transition-colors duration-500 bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-white transition-colors">Traffic Performance</h3>
            <p className="text-zinc-400 text-[10px] uppercase font-black tracking-[0.2em] mt-2">Organic vs Referral Growth</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Revenue</span>
            </div>
            <select className="bg-zinc-50 dark:bg-zinc-800 dark:text-white border-none rounded-xl text-[10px] font-bold py-2.5 px-5 outline-none cursor-pointer">
              <option>Last 7 Days</option>
            </select>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <RevenueChart />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;