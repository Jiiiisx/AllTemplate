import React from 'react';
import { siteData } from '../constants/siteData';
import ScrollAnimation from './ui/ScrollAnimation';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-cream dark:bg-darkRoast transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation direction="up" className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold max-w-xl text-secondary dark:text-white leading-tight">
            We Offer a Wide Range Of Unique Services
          </h2>
          <p className="text-secondary/60 dark:text-white/60 max-sm md:text-right">
            From carefully sourced beans to expertly crafted cups, we deliver more than coffee — we create experiences worth savoring.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {siteData.menu.items.slice(0, 3).map((service, index) => (
            <ScrollAnimation 
              key={index} 
              direction="up" 
              delay={index * 0.2}
              className="h-full"
            >
              <div className="bg-white dark:bg-secondary rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/5 flex flex-col h-full group hover:shadow-[0_20px_50px_rgba(255,77,0,0.1)] transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">{service.title}</h3>
                <p className="text-secondary/60 dark:text-white/60 text-sm mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="relative mt-auto">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                     <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full border-[6px] border-white shadow-lg"></div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* New CTA Button */}
        <ScrollAnimation direction="up" className="flex justify-center">
          <Link 
            to="/menu" 
            className="group relative inline-flex items-center gap-4 bg-secondary dark:bg-white text-white dark:text-secondary px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Explore Our Full Menu
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
