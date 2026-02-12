
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Search, 
  Trash2, 
  CheckCircle2, 
  Filter,
  ArrowLeft,
  Settings,
  MoreHorizontal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { notificationsData } from '../data/notifications';

const Notifications = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Security', 'GitHub', 'Community', 'System'];

  const filteredNotifs = notificationsData.filter(notif => 
    activeFilter === 'All' || notif.type.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12 max-w-5xl mx-auto"
    >
      {/* HEADER PAGE */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Dashboard</span>
          </button>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter">Notifications</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Keep track of your project activity and security alerts.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-zinc-400 hover:text-accent transition-all shadow-sm">
            <Settings size={20} />
          </button>
          <button className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 transition-all">
            Mark all as read
          </button>
        </div>
      </header>

      {/* FILTER TOOLBAR */}
      <div className="mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-100 dark:border-zinc-800 w-full lg:w-auto overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeFilter === f 
                ? 'bg-zinc-100 dark:bg-zinc-800 text-accent shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search alerts..." 
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3.5 pl-12 pr-4 text-xs outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white shadow-sm"
          />
        </div>
      </div>

      {/* NOTIFICATION LIST */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredNotifs.length > 0 ? (
            filteredNotifs.map((notif) => (
              <motion.div
                key={notif.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className={`group bg-white dark:bg-zinc-900 border p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all relative ${notif.unread ? 'border-accent/20 border-l-4 border-l-accent' : 'border-zinc-100 dark:border-zinc-800'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${notif.color}`}>
                  <notif.icon size={24} />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-white tracking-tight">{notif.title}</h3>
                    {notif.unread && <span className="bg-accent text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md inline-block w-fit mx-auto md:mx-0">New</span>}
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">{notif.message}</p>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end border-t md:border-t-0 border-zinc-50 dark:border-zinc-800 pt-6 md:pt-0">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">{notif.time}</p>
                  <div className="flex gap-2">
                    <button className="p-3 text-zinc-300 hover:text-accent transition-colors">
                      <CheckCircle2 size={18} />
                    </button>
                    <button className="p-3 text-zinc-300 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-32 text-center">
              <Bell size={48} className="mx-auto text-zinc-100 dark:text-zinc-800 mb-6" />
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">No notifications found</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Notifications;
