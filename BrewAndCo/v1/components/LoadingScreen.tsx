import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="overflow-hidden mb-8">
        <h1 className="font-display text-2xl tracking-[0.6em] uppercase animate-pulse">
          Brew & Co
        </h1>
      </div>
      <div className="w-48 h-[1px] bg-slate-100 dark:bg-slate-800 relative">
        <div 
          className="absolute top-0 left-0 h-full bg-primary dark:bg-white transition-all duration-300 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="mt-4 text-[10px] tracking-[0.3em] uppercase text-slate-400 font-bold">
        Refining Extraction {width}%
      </span>
    </div>
  );
};

export default LoadingScreen;
