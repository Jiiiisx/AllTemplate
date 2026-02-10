import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, Zap, LogOut, X, LayoutGrid } from "lucide-react";
import { siteConfig } from "../../data/config";

const Sidebar = ({ isDarkMode, isOpen, setIsOpen }) => {
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

      <aside className={`
        fixed lg:static inset-y-0 left-0 w-72 border-r flex flex-col p-8 h-full shrink-0 z-[70] transition-all duration-500
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isDarkMode ? 'bg-zinc-900/90 border-zinc-800 backdrop-blur-xl' : 'bg-white/90 border-zinc-100 backdrop-blur-xl'}
      `}>
        <div className="flex items-center justify-between mb-12 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
              <Activity size={22} />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
              {siteConfig.name}
            </span>
          </div>
          <button 
            className="lg:hidden text-zinc-400 hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {siteConfig.navigation.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  isActive 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : `hover:bg-accent/5 hover:text-accent ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`
                }`}
              >
                <Icon size={18} /> {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-zinc-100/10 space-y-2">
          <Link 
            to="/workspaces"
            className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-accent rounded-2xl text-sm font-medium transition-colors"
          >
            <LayoutGrid size={18} /> Switch Workspace
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-red-500 rounded-2xl text-sm font-medium transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;