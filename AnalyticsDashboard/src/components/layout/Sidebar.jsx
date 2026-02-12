
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  LogOut, 
  X, 
  LayoutGrid, 
  ChevronRight,
  ChevronLeft,
  Database,
  Cloud,
  PanelLeftClose,
  PanelLeft
} from "lucide-react";
import { siteConfig } from "../../data/config";

const Sidebar = ({ isDarkMode, isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 100 : 320 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`
          fixed lg:static inset-y-0 left-0 border-r flex flex-col h-full shrink-0 z-[70] 
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-100'}
          overflow-hidden
        `}
      >
        {/* LOGO AREA & TOGGLE */}
        <div className={`flex flex-col items-center ${isCollapsed ? 'gap-6' : 'lg:flex-row lg:justify-between'} mt-10 mb-12 px-6`}>
          <div 
            onClick={() => isCollapsed && setIsCollapsed(false)}
            className={`flex items-center gap-4 group min-w-0 ${isCollapsed ? 'cursor-pointer' : ''}`}
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <motion.div 
                layoutId="logo-ws-1"
                className="relative w-11 h-11 bg-accent rounded-2xl flex items-center justify-center text-white shadow-xl shadow-accent/30"
              >
                <img src={siteConfig.avatar} alt="" className="w-full h-full rounded-2xl object-cover" />
              </motion.div>
            </div>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col min-w-0"
              >
                <motion.span 
                  layoutId="title-ws-1"
                  className={`font-black text-xl tracking-tighter transition-colors truncate ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}
                >
                  {siteConfig.name}
                </motion.span>
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] truncate">DevEngine v3.2</span>
              </motion.div>
            )}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex text-zinc-300 hover:text-accent transition-colors p-2 hover:bg-accent/5 rounded-xl"
          >
            {isCollapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
          </button>
        </div>

        {/* NAVIGATION AREA */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar px-4">
          {!isCollapsed && (
            <p className="px-4 text-[9px] font-black text-zinc-400 uppercase tracking-[0.25em] mb-4">Main Navigation</p>
          )}
          
          {siteConfig.navigation.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            // Hover Animations
            let hoverAnimation = "group-hover:scale-110";
            if (item.name === "Settings") hoverAnimation = "group-hover:rotate-180";
            if (item.name === "Tasks & Todo") hoverAnimation = "group-hover:-translate-y-1 group-hover:scale-110";
            if (item.name === "Repositories") hoverAnimation = "group-hover:-rotate-12 group-hover:scale-110";
            if (item.name === "Project Pulse") hoverAnimation = "group-hover:scale-125";

            return (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`group relative w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-4 py-4 rounded-[1.25rem] text-sm font-bold transition-all duration-300 ${
                  isActive 
                  ? 'bg-accent text-white shadow-2xl shadow-accent/30 scale-[1.02]' 
                  : `hover:bg-accent/5 ${isDarkMode ? 'text-zinc-500 hover:text-accent' : 'text-zinc-400 hover:text-accent'}`
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon size={20} className={`transition-all duration-500 shrink-0 ${isActive ? 'text-white' : 'group-hover:text-accent'} ${hoverAnimation}`} /> 
                  {!isCollapsed && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="tracking-tight whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </div>
                {!isCollapsed && isActive && (
                  <motion.div layoutId="active-indicator">
                    <ChevronRight size={14} className="text-white/50" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOTTOM AREA */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
          {!isCollapsed ? (
            <>
              <div className={`p-5 rounded-[1.5rem] mb-4 ${isDarkMode ? 'bg-zinc-900/50' : 'bg-zinc-50'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Cloud size={16} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Cloud Status</p>
                    <p className="text-[8px] text-zinc-500 font-medium">Syncing 12 repos</p>
                  </div>
                </div>
                <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    className="h-full bg-emerald-500"
                  ></motion.div>
                </div>
              </div>

              <Link 
                to="/workspaces"
                className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-accent rounded-xl text-xs font-bold transition-all group"
              >
                <LayoutGrid size={18} className="group-hover:rotate-90 transition-transform duration-500 shrink-0" /> 
                <span className="whitespace-nowrap">Switch Workspace</span>
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-500 rounded-xl text-xs font-bold transition-all group">
                <LogOut size={18} className="group-hover:-translate-x-1 transition-transform shrink-0" /> 
                <span className="whitespace-nowrap">Logout</span>
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-4">
              <Link 
                to="/workspaces"
                className="p-3 text-zinc-400 bg-zinc-50 dark:bg-zinc-900 rounded-2xl hover:text-accent hover:bg-accent/5 transition-all group"
                title="Switch Workspace"
              >
                <LayoutGrid size={20} className="group-hover:rotate-90 transition-transform duration-500" />
              </Link>
              <button className="p-3 text-zinc-400 hover:text-red-500 transition-colors" title="Logout">
                <LogOut size={20} />
              </button>
            </div>
          )}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
