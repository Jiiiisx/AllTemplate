import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme & UI States
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState('public');
  
  // Accent Color States
  const [accentColor, setAccentColor] = useState(localStorage.getItem('accentColor') || '99 102 241');
  const [accentHex, setAccentHex] = useState(localStorage.getItem('accentHex') || '#6366F1');

  // Toast State
  const [toasts, setToasts] = useState([]);

  // Apply Theme & Accent
  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty('--accent-hex', accentHex);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    localStorage.setItem('accentColor', accentColor);
    localStorage.setItem('accentHex', accentHex);
  }, [isDarkMode, accentColor, accentHex]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const showToast = (title, message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const updateAccentColor = (rgb, hex) => {
    setAccentColor(rgb);
    setAccentHex(hex);
  };

  return (
    <AppContext.Provider value={{
      isDarkMode, toggleDarkMode,
      isCollapsed, setIsCollapsed,
      viewMode, setViewMode,
      accentColor, accentHex, updateAccentColor,
      showToast
    }}>
      {children}
      
      {/* TOAST CONTAINER */}
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <div className={`w-80 p-5 rounded-3xl shadow-2xl border backdrop-blur-xl flex gap-4 ${
                isDarkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white/90 border-zinc-100'
              }`}>
                <div className={`w-10 h-10 rounded-2xl shrink-0 flex items-center justify-center ${
                  toast.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' :
                  toast.type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                }`}>
                  {toast.type === 'success' && <CheckCircle2 size={20} />}
                  {toast.type === 'error' && <AlertCircle size={20} />}
                  {toast.type === 'info' && <Info size={20} />}
                </div>
                <div className="flex-1">
                  <h5 className={`text-xs font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>
                    {toast.title}
                  </h5>
                  <p className="text-[11px] text-zinc-500 font-medium mt-1 leading-relaxed">
                    {toast.message}
                  </p>
                </div>
                <button onClick={() => removeToast(toast.id)} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
