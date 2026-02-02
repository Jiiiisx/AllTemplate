
import React from 'react';
import { SITE_CONFIG } from '../constants';

const Footer: React.FC = () => {
  const { footer, name } = SITE_CONFIG;

  return (
    <footer className="bg-espresso text-cream py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 lg:mb-32">
          <div className="space-y-12">
            <span className="font-display font-light text-2xl tracking-[0.3em] text-white uppercase">{name}</span>
            <p className="text-cream/50 text-sm leading-loose max-w-xs font-light">
              {footer.description}
            </p>
            <div className="flex gap-6">
              {footer.socials.map((social, index) => (
                <a key={index} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-clay hover:border-clay transition-all" href={social.href}>
                  <span className="material-symbols-outlined !text-[18px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-clay">Sitemap</h4>
            <ul className="space-y-4 text-sm font-light text-cream/60">
              {SITE_CONFIG.footer.sitemap.map((link, index) => (
                <li key={index}><a className="hover:text-clay transition-colors" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-clay">Customer Care</h4>
            <ul className="space-y-4 text-sm font-light text-cream/60 uppercase tracking-widest">
              {SITE_CONFIG.footer.customerCare.map((link, index) => (
                <li key={index}><a className="hover:text-clay transition-colors" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-clay">{footer.newsletter.title}</h4>
            <p className="text-[11px] text-cream/40 mb-6 font-light">{footer.newsletter.description}</p>
            <div className="relative group">
              <input className="w-full bg-white/5 border-b border-white/20 py-4 px-4 focus:outline-none focus:border-clay transition-colors text-sm font-light text-white" placeholder="Email Address" type="email" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 group-hover:text-clay transition-colors">
                <span className="material-symbols-outlined !text-[20px]">east</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase text-cream/20">
          <p>{footer.copyright}</p>
          <div className="flex gap-12">
            <a className="hover:text-clay transition-colors" href="#">Privacy</a>
            <a className="hover:text-clay transition-colors" href="#">Terms</a>
            <a className="hover:text-clay transition-colors" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
