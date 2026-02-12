import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  RotateCcw, 
  Key, 
  ShieldCheck, 
  GitPullRequest, 
  AlertCircle,
  Database,
  ChevronRight
} from 'lucide-react';

// Sub-component untuk Circular Gauge
const ResourceGauge = ({ label, value, color }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56" cy="56" r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className="text-zinc-100 dark:text-zinc-800"
          />
          <motion.circle
            cx="56" cy="56" r={radius}
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-black text-zinc-800 dark:text-white">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{label}</span>
    </div>
  );
};

const PrivateWidgets = () => {
  const quickActions = [
    { label: "Flush Cache", icon: Zap, color: "text-amber-500 bg-amber-500/10" },
    { label: "Restart Nodes", icon: RotateCcw, color: "text-blue-500 bg-blue-500/10" },
    { label: "Rotate Keys", icon: Key, color: "text-emerald-500 bg-emerald-500/10" },
    { label: "Maintenance", icon: ShieldCheck, color: "text-purple-500 bg-purple-500/10" },
  ];

  const prBacklog = [
    { id: "#1204", title: "Refactor Auth Middleware with JWT Shield", repo: "core-api-v2", status: "Conflict Detected", color: "text-red-500", time: "2h ago" },
    { id: "#1198", title: "Implement Redis Caching for Global Search", repo: "infra-service", status: "Build Failed", color: "text-amber-500", time: "5h ago" },
    { id: "#1195", title: "Scale Up Kubernetes Clusters for V3 Launch", repo: "ops-engine", status: "Approval Needed", color: "text-blue-500", time: "1d ago" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
      
      {/* 1. RESOURCE MONITOR (2/2 layout) */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-[2.5rem] flex flex-col shadow-sm">
        <div className="mb-10">
          <h4 className="text-sm font-bold text-zinc-800 dark:text-white tracking-tight flex items-center gap-2">
            <Database size={18} className="text-accent" /> Resource Monitoring
          </h4>
          <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Real-time hardware allocation</p>
        </div>
        <div className="flex justify-around items-center flex-1">
          <ResourceGauge label="CPU Usage" value={42} color="#6366F1" />
          <ResourceGauge label="Memory" value={68} color="#10b981" />
          <ResourceGauge label="Disk I/O" value={15} color="#ec4899" />
        </div>
      </div>

      {/* 2. QUICK ACTIONS (2/2 layout) */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-[2.5rem] flex flex-col shadow-sm">
        <div className="mb-10">
          <h4 className="text-sm font-bold text-zinc-800 dark:text-white tracking-tight flex items-center gap-2">
            <Zap size={18} className="text-accent" /> Command Shortcuts
          </h4>
          <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Execute system-wide tasks</p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {quickActions.map((action) => (
            <button 
              key={action.label}
              className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-50 dark:border-zinc-800/50 hover:border-accent/20 hover:bg-accent/5 transition-all group text-left"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shrink-0 ${action.color}`}>
                <action.icon size={20} />
              </div>
              <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-accent uppercase tracking-widest leading-tight">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. PR REVIEW BACKLOG (FULL WIDTH) */}
      <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-10 rounded-[2.5rem] shadow-sm">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h4 className="text-sm font-bold text-zinc-800 dark:text-white tracking-tight flex items-center gap-2">
              <GitPullRequest size={18} className="text-accent" /> Maintainer Action Required
            </h4>
            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Pending reviews and infrastructure updates</p>
          </div>
          <button className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">View all backlog</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prBacklog.map((pr) => (
            <div key={pr.id} className="flex flex-col p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 group cursor-pointer hover:bg-white dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{pr.id}</span>
                <div className={`flex items-center gap-1 ${pr.color}`}>
                  <AlertCircle size={10} />
                  <span className="text-[8px] font-black uppercase tracking-widest">{pr.status}</span>
                </div>
              </div>
              <h5 className="text-sm font-bold text-zinc-800 dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                {pr.title}
              </h5>
              <div className="mt-auto pt-4 flex justify-between items-center border-t border-zinc-100 dark:border-zinc-700/50">
                <span className="text-[10px] font-bold text-accent uppercase">{pr.repo}</span>
                <span className="text-[10px] text-zinc-400">{pr.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PrivateWidgets;