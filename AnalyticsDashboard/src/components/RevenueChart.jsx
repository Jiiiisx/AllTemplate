import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--accent-hex)" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="var(--accent-hex)" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.2} />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{fontSize: 10, fill: '#9CA3AF', fontWeight: 'bold'}}
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{fontSize: 10, fill: '#9CA3AF', fontWeight: 'bold'}}
        />
        <Tooltip 
          contentStyle={{ 
            borderRadius: '20px', 
            border: 'none', 
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '12px'
          }} 
          itemStyle={{ padding: '2px 0' }}
        />
        <Area 
          type="monotone" 
          dataKey="commits" 
          stroke="var(--accent-hex)" 
          strokeWidth={4}
          fillOpacity={1} 
          fill="url(#colorCommits)" 
          animationDuration={1500}
          name="Commits"
        />
        <Area 
          type="monotone" 
          dataKey="tasks" 
          stroke="#10b981" 
          strokeWidth={4}
          fillOpacity={1} 
          fill="url(#colorTasks)" 
          animationDuration={1500}
          name="Tasks Completed"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
