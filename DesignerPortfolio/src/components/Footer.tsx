import React from 'react';
import { siteData } from '../data/config';
import { Facebook, Twitter, Instagram, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tighter text-white">
              {siteData.name}
            </div>
            <p className="text-gray-500 max-w-xs text-lg">
              Creating digital experiences that matter and designs that speak.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-accent transition-colors">Hero</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Socials</h4>
              <div className="flex gap-4">
                <a href={siteData.socials.facebook} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={siteData.socials.instagram} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={siteData.socials.x} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-16 h-16 rounded-2xl bg-accent text-black flex items-center justify-center hover:bg-accent-dark transition-all group"
          >
            <ArrowUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} {siteData.fullName}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="flex items-center gap-2">
            Designed with <span className="text-accent">❤</span> for Gumroad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
