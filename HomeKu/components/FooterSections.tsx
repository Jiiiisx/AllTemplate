
import React, { useState } from 'react';
import { siteConfig } from '../data/config';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-32 px-8 border-t border-theme">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Get Exclusive Access</h2>
        <p className="text-secondary font-light mb-12">Be the first to secure off-market sustainable luxury assets.</p>
        
        {status === 'success' ? (
          <div className="py-4 animate-in fade-in zoom-in duration-500">
            <p className="text-brand-gold font-serif italic text-2xl">Thank you for joining our inner circle.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-[8px] tracking-[0.2em] text-zinc-600 hover:text-primary transition-colors uppercase font-bold"
            >
              Join again with another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative border-b border-theme pb-4 flex items-center">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent w-full outline-none text-[10px] tracking-[0.2em] font-bold uppercase placeholder:text-zinc-600"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary text-secondary p-4 ml-4 hover:bg-brand-gold transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined">
                {status === 'loading' ? 'sync' : 'arrow_forward'}
              </span>
            </button>
          </form>
        )}
        <p className="text-[10px] italic text-zinc-600 mt-6">You will receive our exclusive off-market catalog within 24 hours.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-theme text-center">
      <div className="flex justify-center gap-12 mb-16">
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold transition-colors">INSTAGRAM</a>
        <a href="#" className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold transition-colors">JOURNAL</a>
        <a href={`mailto:${siteConfig.email}`} className="text-[10px] tracking-[0.2em] font-bold uppercase hover:text-brand-gold transition-colors">CONTACT</a>
      </div>
      
      <div className="space-y-4 opacity-30">
        <p className="text-[10px] tracking-[0.3em] uppercase">{siteConfig.footerCopyright}</p>
        <p className="text-[9px] tracking-[0.5em] uppercase">{siteConfig.footerSubtext}</p>
      </div>
    </footer>
  );
}
