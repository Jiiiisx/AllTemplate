
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-8 font-sans">
      <div className="max-w-md w-full border-l border-black pl-8 py-12">
        <h1 className="text-[120px] font-light leading-none tracking-tighter mb-4">
          404
        </h1>
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-4 text-neutral-400">
            Error Report — 0xNotFound
          </p>
          <h2 className="text-2xl font-light tracking-tight mb-6">
            The requested extraction point could not be located.
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            The link you followed may be broken, or the page may have been moved to a different coordinate in our system.
          </p>
        </div>
        
        <Link 
          to="/"
          className="inline-flex items-center text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all duration-300"
        >
          Return to Origin
        </Link>
      </div>
      
      {/* Subtle scientific grid background element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default NotFound;
