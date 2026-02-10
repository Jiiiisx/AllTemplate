import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const miniData = [
  { v: 30 }, { v: 40 }, { v: 35 }, { v: 50 }, { v: 45 }, { v: 60 }, { v: 55 }
];

export default function StatCard({ title, value, trend, icon: Icon }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-500 rounded-[2rem] blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
      
      <div className="relative p-7 rounded-[2rem] border transition-all duration-500 group-hover:-translate-y-1 shadow-sm bg-white border-zinc-100/80 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <div className="h-10 w-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={miniData}>
                <Area type="monotone" dataKey="v" stroke="#6366F1" fill="#6366F1" fillOpacity={0.1} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-zinc-800 dark:text-white tracking-tight transition-colors">{value}</h3>
            <span className="text-[9px] text-green-500 font-black bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">
              {trend}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}