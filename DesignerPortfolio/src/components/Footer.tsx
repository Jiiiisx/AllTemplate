import React from 'react';
import { siteData } from '../data/config';
import Aurora from './Aurora';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Send, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#050505] pt-32 pb-10 px-6 overflow-hidden">
      {/* Background Aurora at the bottom */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Aurora
          colorStops={siteData.theme.auroraColors}
          blend={0.5}
          amplitude={1.5}
          speed={1.5}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10">
              Have a project<br />in mind?
            </h2>
            <Magnetic strength={0.2}>
              <a 
                href={`mailto:hello@design.me`}
                className="inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-all group"
              >
                Let's Talk
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>

          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">Socials</p>
                <div className="flex flex-col gap-2">
                  {['Twitter', 'Instagram', 'Dribbble', 'Behance'].map((social) => (
                    <a key={social} href="#" className="text-white hover:text-accent transition-colors w-fit">{social}</a>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">Contact</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:hello@design.me" className="text-white hover:text-accent transition-colors w-fit">hello@design.me</a>
                  <span className="text-gray-400">+62 812 3456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The BIG Name Reveal */}
        <div className="relative border-t border-white/5 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] font-black text-white leading-none tracking-tighter select-none"
          >
            {siteData.fullName}
          </motion.div>
          
          {/* Copyright & Info */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6 text-gray-500 text-[10px] uppercase tracking-[0.3em]">
            <div className="flex items-center gap-8">
              <span>&copy; {currentYear} {siteData.fullName}</span>
              <span className="hidden md:block opacity-20">|</span>
              <span className="hidden md:block">Based in Jakarta</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;