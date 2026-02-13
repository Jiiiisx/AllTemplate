
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FB] dark:bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden transition-colors duration-500">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 VISUAL */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] font-black text-zinc-100 dark:text-zinc-900 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-accent rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-accent/40 rotate-12 animate-bounce">
                <AlertCircle size={48} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white tracking-tighter mb-4">
            Endpoint Not Found
          </h2>
          <p className="text-zinc-400 text-sm font-medium mb-12 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* CODE SNIPPET STYLE BOX */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-6 mb-12 text-left font-mono shadow-sm">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-400 text-[11px]"><span className="text-purple-500">const</span> <span className="text-blue-500">error</span> = <span className="text-amber-500">'PAGE_NOT_FOUND'</span>;</p>
              <p className="text-zinc-400 text-[11px]"><span className="text-purple-500">if</span> (page === <span className="text-zinc-300">undefined</span>) {'{'}</p>
              <p className="text-zinc-400 text-[11px] ml-4 text-red-500 animate-pulse">throw new Error('Lost in space');</p>
              <p className="text-zinc-400 text-[11px]">{'}'}</p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14} /> Go Back
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Home size={14} /> Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
