
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark py-20 lg:py-40 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 lg:mb-32">
          <div className="space-y-12">
            <span className="font-display font-light text-2xl tracking-[0.3em] text-primary dark:text-white uppercase">Brew & Co</span>
            <p className="text-slate-400 text-sm leading-loose max-w-xs font-light">
              Redefining the coffee ritual through minimalist aesthetics and scientific precision. Austin, Texas.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-secondary">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Journal</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Wholesale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-secondary">Hours</h4>
            <ul className="space-y-4 text-sm font-light text-slate-500 uppercase tracking-widest">
              <li className="flex justify-between"><span>Mon — Fri</span> <span>07 — 20</span></li>
              <li className="flex justify-between"><span>Sat — Sun</span> <span>08 — 21</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-secondary">Briefing</h4>
            <div className="relative group">
              <input 
                className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 pr-10 focus:outline-none focus:border-secondary transition-colors text-sm font-light" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined !text-[20px]">east</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-slate-50 dark:border-slate-900 text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300">
          <p>© 2024 Brew & Co. Coffee Roasters</p>
          <div className="flex gap-12">
            <a className="hover:text-secondary transition-colors" href="#">Privacy</a>
            <a className="hover:text-secondary transition-colors" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
