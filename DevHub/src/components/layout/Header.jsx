import React, { useState, useRef, useEffect } from "react";
import { Moon, Sun, Bell, Menu, ShieldCheck, Globe, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { siteConfig } from "../../data/config";
import { notificationsData } from "../../data/notifications";
import { useApp } from "../../context/AppContext";
import GlobalSearch from "./GlobalSearch";

const Header = ({ setIsSidebarOpen }) => {
  const { isDarkMode, toggleDarkMode, viewMode, setViewMode } = useApp();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`h-20 flex items-center justify-between px-6 lg:px-12 shrink-0 backdrop-blur-md z-40 border-b transition-colors duration-500 ${isDarkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-[#F8F9FB]/80 border-zinc-100/50'}`}>
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className={`lg:hidden w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-400'}`}
        >
          <Menu size={20} />
        </button>
        
        <GlobalSearch />
      </div>

      <div className="flex items-center gap-4">
        {/* VIEW MODE TOGGLE */}
        <div className="hidden md:flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 mr-2">
          <button 
            onClick={() => setViewMode('public')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'public' ? 'bg-white dark:bg-zinc-800 text-accent shadow-sm' : 'text-zinc-400'}`}
          >
            <Globe size={14} /> Global
          </button>
          <button 
            onClick={() => setViewMode('private')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'private' ? 'bg-white dark:bg-zinc-800 text-accent shadow-sm' : 'text-zinc-400'}`}
          >
            <ShieldCheck size={14} /> Private
          </button>
        </div>

        <button 
          onClick={toggleDarkMode}
          className={`w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-yellow-400 hover:text-yellow-200' : 'bg-white border-zinc-100 text-zinc-400 hover:text-accent'}`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        {/* NOTIFICATION TRIGGER & DROPDOWN */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className={`relative w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isNotifOpen ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' : isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-accent' : 'bg-white border-zinc-100 text-zinc-400 hover:text-accent'}`}
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-zinc-950 rounded-full"></span>
          </button>

          <AnimatePresence>
            {isNotifOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`absolute top-full mt-4 right-0 w-96 rounded-[2rem] border shadow-2xl overflow-hidden z-[100] ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'}`}
              >
                <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-sm dark:text-white">Notifications</h4>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">2 New Alerts</p>
                  </div>
                  <button className="text-[10px] font-black uppercase text-accent hover:underline">Mark all read</button>
                </div>

                <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                  {notificationsData.map((notif) => (
                    <button 
                      key={notif.id}
                      onClick={() => {
                        setIsNotifOpen(false);
                        navigate('/notifications');
                      }}
                      className={`w-full flex items-start gap-4 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all text-left border-b border-zinc-50 dark:border-zinc-800/50 last:border-none`}
                    >
                      <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${notif.color}`}>
                        <notif.icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-xs font-bold dark:text-zinc-200 truncate pr-2">{notif.title}</p>
                          <span className="text-[9px] text-zinc-400 font-medium whitespace-nowrap">{notif.time}</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">{notif.message}</p>
                      </div>
                      {notif.unread && <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>}
                    </button>
                  ))}
                </div>

                <Link 
                  to="/notifications" 
                  onClick={() => setIsNotifOpen(false)}
                  className="block w-full py-4 bg-zinc-50 dark:bg-zinc-800/50 text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-accent transition-colors"
                >
                  View Full History
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-zinc-100/10">
          <div className="text-right hidden md:block">
            <p className={`text-xs font-bold leading-none transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>{siteConfig.adminName}</p>
            <p className="text-[10px] text-zinc-500 mt-1.5 leading-none">
              {viewMode === 'private' ? 'Maintainer' : 'Guest Mode'}
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer">
            <img src={siteConfig.avatar} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;