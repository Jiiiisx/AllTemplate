import React, { useState, useEffect } from 'react';
import { siteData } from '../constants/siteData';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background based on page and scroll status
  const navBg = !isHomePage || isScrolled 
    ? 'bg-white/80 dark:bg-darkRoast/80 backdrop-blur-md py-4 shadow-sm' 
    : 'bg-transparent py-6';

  const textColor = !isHomePage || isScrolled
    ? 'text-secondary dark:text-white'
    : 'text-white';

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 3H5.5C3.567 3 2 4.567 2 6.5V17.5C2 19.433 3.567 21 5.5 21H18.5C20.433 21 22 19.433 22 17.5V6.5C22 4.567 20.433 3 18.5 3ZM20 17.5C20 18.328 19.328 19 18.5 19H5.5C4.672 19 4 18.328 4 17.5V6.5C4 5.672 4.672 5 5.5 5H18.5C19.328 5 20 5.672 20 6.5V17.5Z" />
               </svg>
            </div>
            <span className={`font-black tracking-tighter text-xl ${textColor}`}>{siteData.name}</span>
          </Link>

          {/* Links & Controls */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className={`hidden md:flex items-center gap-12 font-medium ${textColor}`}>
              {siteData.navigation.map((link) => {
                const isAnchor = link.href.startsWith('#');
                const finalHref = isAnchor && !isHomePage ? `/${link.href}` : link.href;
                
                return isAnchor && isHomePage ? (
                  <a key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                ) : (
                  <Link key={link.label} to={finalHref} className="hover:text-primary transition-colors">{link.label}</Link>
                );
              })}
            </div>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
            >
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>

            {/* Booking Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4d2c1e] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wider hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-lg hidden sm:block"
            >
              BOOKING
            </button>
          </div>
        </div>
      </nav>

      {/* Simple Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-darkRoast/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-[#1a1a1a] rounded-[32px] p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <button onClick={() => setIsModalOpen(false)} className="text-secondary/20 hover:text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-3xl font-black text-secondary dark:text-white mb-2">Book a Table</h3>
            <p className="text-secondary/60 dark:text-white/60 mb-8">Secure your spot for the ultimate coffee experience.</p>
            
            <form action={siteData.forms.bookingAction} method="POST" className="space-y-4">
              <input type="text" name="name" required placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/20 outline-none text-secondary dark:text-white" />
              <input type="email" name="email" required placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/20 outline-none text-secondary dark:text-white" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/20 outline-none text-secondary dark:text-white" />
                <input type="time" name="time" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary/20 outline-none text-secondary dark:text-white" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-darkRoast transition-colors">
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
