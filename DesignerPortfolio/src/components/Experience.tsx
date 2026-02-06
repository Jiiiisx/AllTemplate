import React from 'react';
import { siteData } from '../data/config';

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-16">Experience</h2>
        
        <div className="space-y-12">
          {siteData.experience.map((exp, index) => (
            <div key={index} className="flex gap-8 md:gap-24 items-start border-l border-gray-200 pl-8 relative">
              <div className="absolute left-[-5px] top-2 w-2 h-2 bg-black rounded-full"></div>
              
              <div className="w-32 flex-shrink-0 text-gray-500 font-medium">
                {exp.period}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-black">{exp.role}</h3>
                <p className="text-gray-600 text-lg">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
