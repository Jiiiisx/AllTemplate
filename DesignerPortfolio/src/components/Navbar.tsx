import React, { useState, useEffect } from 'react';
import { siteData } from '../data/config';
import { Twitter, Instagram, Facebook, Send, X } from 'lucide-react';
import Magnetic from './Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Work", href: "#work" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="text-white flex items-center gap-3 group"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-4 h-0.5 bg-accent" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] hidden md:block">Menu</span>
          </button>
          <span className="text-xl font-bold tracking-tighter text-white ml-2">
            {siteData.name}
          </span>
        </div>
        
        <Magnetic strength={0.2}>
          <button className="bg-accent text-black px-6 py-2 rounded-xl font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(191,255,0,0.2)]">
            Hire Me
          </button>
        </Magnetic>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#080808] overflow-y-auto scrollbar-hide"
          >
            {/* Header: Simplified for better alignment */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-10 md:py-12">
               <button 
                onClick={() => setIsOpen(false)}
                className="text-white flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <X className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Close Menu</span>
              </button>
              <span className="text-xl font-bold tracking-tighter text-white/20 uppercase">{siteData.name}</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 px-6 pb-20">
              
              {/* LEFT: NAVIGATION */}
              <div className="flex flex-col border-t border-white/5 pt-12">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent/40 text-[10px] uppercase tracking-[0.8em] mb-12 font-bold"
                >
                  Navigation
                </motion.p>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.08) }}
                    >
                      <a 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-7xl lg:text-[90px] font-black text-white hover:text-accent transition-all duration-500 block w-fit hover:translate-x-4"
                      >
                        {link.title}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT: INFO & SOCIALS */}
              <div className="flex flex-col lg:pl-20 border-t border-white/5 pt-12">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/20 text-[10px] uppercase tracking-[0.8em] mb-12 font-bold"
                >
                  Get in touch
                </motion.p>
                
                <div className="space-y-16">
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <a href="mailto:hello@design.me" className="text-2xl md:text-3xl lg:text-4xl text-white hover:text-accent font-bold transition-colors block">
                      hello@design.me
                    </a>
                    <p className="text-gray-500 mt-4 font-mono">+62 812 3456 7890</p>
                  </motion.div>
                  
                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-white/10 text-[10px] uppercase tracking-[0.4em] mb-6">Socials</p>
                    <div className="flex gap-8">
                      {[Twitter, Instagram, Facebook, Send].map((Icon, i) => (
                        <motion.a 
                          key={i} 
                          href="#" 
                          whileHover={{ y: -5, color: "#BFFF00" }}
                          className="text-white/40 transition-all"
                        >
                          <Icon className="w-6 h-6" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Office Info */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.8 }}
                     className="pt-10 border-t border-white/5"
                  >
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] leading-loose">
                      Based in Jakarta, Indonesia<br />
                      Working Worldwide<br />
                      &copy; 2026 {siteData.fullName}
                    </p>
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
