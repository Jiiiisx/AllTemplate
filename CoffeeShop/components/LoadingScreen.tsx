import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Memberikan sedikit delay agar transisi tidak terlalu kaget
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShow(false), 500); // Waktu untuk animasi fade out
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-darkRoast transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        {/* Coffee Cup Container - Adjusted for visual balance */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-12">
          {/* Steam animation - Positioned relative to cup body */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
            <div className="w-1 md:w-1.5 h-6 md:h-8 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1 md:w-1.5 h-10 md:h-12 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
            <div className="w-1 md:w-1.5 h-6 md:h-8 bg-primary/40 rounded-full animate-bounce"></div>
          </div>
          
          {/* Cup Body - Pure centering */}
          <div className="absolute inset-0 bg-white rounded-b-[32px] md:rounded-b-[40px] rounded-t-lg border-b-4 md:border-b-8 border-primary shadow-2xl"></div>
          
          {/* Cup Handle - Moved to ensure body stays centered */}
          <div className="absolute top-4 -right-5 md:-right-6 w-6 md:w-8 h-10 md:h-12 border-4 border-white rounded-r-xl md:rounded-r-2xl"></div>
        </div>

        {/* Loading Text & Bar */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-white font-black tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase">Brewing Your Coffee</h2>
          <div className="w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 70%; transform: translateX(50%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
