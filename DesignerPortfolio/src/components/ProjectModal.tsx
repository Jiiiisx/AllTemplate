import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Globe } from 'lucide-react';
import Magnetic from './Magnetic';
import Aurora from './Aurora';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="relative w-full max-w-7xl h-full max-h-[90vh] bg-secondary rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 flex flex-col shadow-2xl"
          >
            {/* Modal Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <Aurora />
            </div>

            {/* Header Content */}
            <div className="relative z-10 flex flex-col md:flex-row h-full">
              
              {/* Left Side: Visuals (Scrollable) */}
              <div className="flex-1 overflow-y-auto bg-black/40 p-4 md:p-8 space-y-6 md:space-y-10 scrollbar-hide border-b md:border-b-0 md:border-r border-white/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-auto rounded-3xl object-cover shadow-2xl" />
                </motion.div>
                
                {project.gallery?.map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <img src={img} alt={`${project.title} gallery`} className="w-full h-auto rounded-3xl object-cover border border-white/5" />
                  </motion.div>
                ))}
              </div>

              {/* Right Side: Information */}
              <div className="md:w-[400px] lg:w-[450px] p-8 md:p-12 lg:p-16 overflow-y-auto bg-secondary relative z-20 flex flex-col justify-between">
                <div>
                  {/* Close Button Mobile (Integrated) */}
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] font-bold">{project.category}</span>
                    <button 
                      onClick={onClose}
                      className="w-10 h-10 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">{project.title}</h2>
                  
                  <div className="space-y-6 mb-12">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t: string) => (
                        <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-12">
                  <Magnetic strength={0.2}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-accent text-black px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(191,255,0,0.1)]"
                    >
                      Explore Project
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;