import { siteConfig } from '../../data/config';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12">
      <div className="text-xl font-black tracking-tighter text-white">
        {siteConfig.name.toUpperCase()}
      </div>
      
      <div className="hidden items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur-md md:flex">
        {['About', 'Services', 'Tour', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="rounded-full px-5 py-2 text-xs font-medium text-white/90 transition hover:bg-white/20 hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 rounded-full bg-white/10 p-1 text-[10px] font-bold text-white backdrop-blur-md">
          <span className="rounded-full bg-white/20 px-2 py-1">DE</span>
          <span className="px-2 py-1 opacity-40">EN</span>
        </div>
        <button className="rounded-full bg-secondary px-6 py-2.5 text-xs font-bold text-white transition hover:bg-accent hover:scale-105 active:scale-95">
          Login
        </button>
      </div>
    </nav>
  );
};
