import React from 'react';
import { siteData } from '../data/config';
import * as Icons from 'lucide-react';

const Offerings = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-16">What I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.offerings.map((offering, index) => {
            const IconComponent = (Icons as any)[offering.icon];
            
            return (
              <div key={index} className="bg-secondary p-10 rounded-3xl space-y-6 group hover:bg-black transition-colors duration-300">
                <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-xl">
                  {IconComponent && <IconComponent className="text-black w-8 h-8" />}
                </div>
                
                <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
