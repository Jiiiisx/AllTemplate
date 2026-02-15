import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

const ServiceArea = () => {
  return (
    <section className="section-padding bg-vicce-charcoal text-white relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-vicce-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              {SITE_DATA.serviceArea.title} <span className="italic text-vicce-accent">{SITE_DATA.serviceArea.titleItalic}</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 leading-relaxed">
              {SITE_DATA.serviceArea.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SITE_DATA.serviceArea.areas.map((area, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-vicce-accent group-hover:bg-vicce-accent group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <span className="text-lg font-medium text-white/80">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square md:aspect-[4/3] bg-white/5 rounded-[60px] border border-white/10 p-4 md:p-8 flex items-center justify-center overflow-hidden">
              {/* Abstract Map UI */}
              <div className="relative w-full h-full opacity-40">
                <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M100 200C150 150 250 180 300 250C350 320 450 350 500 300C550 250 650 280 700 350" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="150" cy="180" r="10" fill="currentColor" className="text-vicce-accent animate-ping" />
                  <circle cx="150" cy="180" r="4" fill="currentColor" className="text-vicce-accent" />
                  
                  <circle cx="450" cy="340" r="10" fill="currentColor" className="text-vicce-accent animate-ping" />
                  <circle cx="450" cy="340" r="4" fill="currentColor" className="text-vicce-accent" />
                  
                  <circle cx="680" cy="320" r="10" fill="currentColor" className="text-vicce-accent animate-ping" />
                  <circle cx="680" cy="320" r="4" fill="currentColor" className="text-vicce-accent" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-vicce-accent flex items-center justify-center text-white mb-6 shadow-2xl shadow-vicce-accent/40">
                  <MapPin size={32} />
                </div>
                <h4 className="text-2xl font-serif mb-2">Coverage Ready</h4>
                <p className="text-white/40 text-sm">Professional technicians are available in your area today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
