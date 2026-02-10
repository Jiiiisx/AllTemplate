
import React from "react";
import { Moon, Sun, Bell, Menu, ShieldCheck, Globe } from "lucide-react";
import { siteConfig } from "../../data/config";
import GlobalSearch from "./GlobalSearch";

const Header = ({ isDarkMode, setIsDarkMode, setIsSidebarOpen, viewMode, setViewMode }) => {
  return (
    <header className={`h-20 flex items-center justify-between px-6 lg:px-12 shrink-0 backdrop-blur-md z-40 border-b transition-colors duration-500 ${isDarkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-[#F8F9FB]/80 border-zinc-100/50'}`}>
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className={`lg:hidden w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-400'}`}
        >
          <Menu size={20} />
        </button>
        
        <GlobalSearch isDarkMode={isDarkMode} />
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
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-yellow-400 hover:text-yellow-200' : 'bg-white border-zinc-100 text-zinc-400 hover:text-accent'}`}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <button className={`relative w-10 h-10 border flex items-center justify-center rounded-xl transition-all ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-accent' : 'bg-white border-zinc-100 text-zinc-400 hover:text-accent'}`}>
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

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
