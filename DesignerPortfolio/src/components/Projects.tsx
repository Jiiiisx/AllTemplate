import React from 'react';
import { siteData } from '../data/config';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-16">Selected Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {siteData.projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-accent rounded-[2rem] overflow-hidden mb-8 flex items-center justify-center p-12">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="text-black w-8 h-8" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black">{project.title}</h3>
                <p className="text-gray-500 max-w-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
