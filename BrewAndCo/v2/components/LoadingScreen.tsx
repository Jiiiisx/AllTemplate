import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-cream flex flex-col items-center justify-center">
      <div className="relative mb-12">
        <span className="material-symbols-outlined !text-6xl text-clay animate-bounce">
          spa
        </span>
        <div className="absolute -inset-4 border border-clay/20 rounded-full animate-ping"></div>
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="font-serif italic text-3xl text-espresso tracking-tight">
          Roasting the stories...
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-clay/30"></div>
          <span className="font-display text-xs tracking-[0.4em] uppercase text-clay font-bold">
            {count}%
          </span>
          <div className="h-px w-12 bg-clay/30"></div>
        </div>
      </div>

      <div className="absolute bottom-12 text-[10px] tracking-[0.5em] uppercase text-espresso/30 font-bold">
        Artisanal Experience
      </div>
    </div>
  );
};

export default LoadingScreen;
