import React, { useState } from 'react';
import { siteData } from '../data/config';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onClick={onClick}
      className="group cursor-pointer perspective-1000"
    >
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative aspect-[4/3] bg-[#111] rounded-[2rem] overflow-hidden mb-8 flex items-center justify-center p-8 md:p-12 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
      >
        <motion.img 
          src={project.image} 
          alt={project.title} 
          style={{ transform: "translateZ(30px)" }}
          className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div 
            style={{ transform: "translateZ(80px)" }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
          >
            <ArrowUpRight className="text-black w-8 h-8" />
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="space-y-3 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-black group-hover:text-accent transition-colors">{project.title}</h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none">
            Selected<br /><span className="text-gray-200">Archive.</span>
          </h2>
          <p className="text-gray-500 max-w-xs text-lg font-medium border-l-2 border-accent pl-6 py-2">
            A curated selection of works that push boundaries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
          {siteData.projects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => { setSelectedProject(project); setIsModalOpen(true); }} 
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        project={selectedProject} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Projects;
