import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 3H5.5C3.567 3 2 4.567 2 6.5V17.5C2 19.433 3.567 21 5.5 21H18.5C20.433 21 22 19.433 22 17.5V6.5C22 4.567 20.433 3 18.5 3ZM20 17.5C20 18.328 19.328 19 18.5 19H5.5C4.672 19 4 18.328 4 17.5V6.5C4 5.672 4.672 5 5.5 5H18.5C19.328 5 20 5.672 20 6.5V17.5Z" />
               </svg>
            </div>
          </div>

          {/* Links */}
          <div className={`hidden md:flex items-center gap-12 font-medium ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            <a href="#discount" className="hover:text-primary transition-colors">Discount</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#store" className="hover:text-primary transition-colors">Store</a>
            <a href="#maps" className="hover:text-primary transition-colors">Maps</a>
          </div>

          {/* Booking Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4d2c1e] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-wider hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            BOOKING
          </button>
        </div>
      </nav>

      {/* Simple Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-darkRoast/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white rounded-[32px] p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <button onClick={() => setIsModalOpen(false)} className="text-secondary/20 hover:text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-3xl font-black text-secondary mb-2">Book a Table</h3>
            <p className="text-secondary/60 mb-8">Secure your spot for the ultimate coffee experience.</p>
            
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none" />
                <input type="time" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-darkRoast transition-colors">
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
