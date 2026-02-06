import React from 'react';
import { siteData } from '../data/config';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl font-bold text-black">Let's Talk</h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                  <input type="text" placeholder="Your name" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                  <input type="email" placeholder="Email @youremail.com" className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea rows={4} placeholder="Message for hield..." className="w-full border-b border-gray-200 py-4 focus:border-black outline-none transition-colors resize-none"></textarea>
              </div>
              
              <button className="w-full bg-black text-white py-6 rounded-2xl font-bold text-xl hover:bg-accent hover:text-black transition-all flex items-center justify-center gap-3">
                Send Message
              </button>
            </form>

            <div className="flex gap-6">
               <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
               <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
               alt="Working" 
               className="w-full h-full object-cover rounded-3xl relative z-10 grayscale"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
