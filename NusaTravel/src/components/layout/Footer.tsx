import { Instagram, Facebook, Youtube, Twitter, ArrowUp, Mail } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 bg-secondary pt-24 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-8 text-3xl font-black tracking-tighter text-white">
              {siteConfig.name.toUpperCase()}
            </div>
            <p className="mb-10 max-w-sm text-lg leading-relaxed text-white/60">
              Preserving the beauty of Indonesia while providing you with unforgettable adventures.
            </p>
            <div className="relative overflow-hidden rounded-[32px] bg-white/5 p-8 border border-white/10">
              <h4 className="mb-4 text-xl font-bold text-white">Join our newsletter</h4>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 rounded-2xl bg-white/10 px-6 py-4 text-sm focus:outline-none border border-white/10"
                />
                <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-secondary transition hover:bg-accent hover:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
            {['Discover', 'Support', 'Company'].map((title) => (
              <div key={title}>
                <h5 className="mb-8 text-sm font-black uppercase tracking-widest text-accent">{title}</h5>
                <ul className="space-y-4 text-sm font-medium text-white/50">
                  <li className="hover:text-white transition cursor-pointer">Link Item 1</li>
                  <li className="hover:text-white transition cursor-pointer">Link Item 2</li>
                  <li className="hover:text-white transition cursor-pointer">Link Item 3</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-12 md:flex-row">
          <p className="text-sm text-white/30">© 2024 {siteConfig.name}. Crafted for explorers.</p>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white hover:text-secondary">
                <Icon size={18} />
              </a>
            ))}
            <button onClick={scrollToTop} className="ml-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
