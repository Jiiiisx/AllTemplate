import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Sparkles, Paintbrush, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';
import RevealText from '../ui/RevealText';

const iconMap: any = {
  Droplets: Droplets,
  Zap: Zap,
  Sparkles: Sparkles,
  Paintbrush: Paintbrush,
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-vicce-charcoal text-white rounded-[60px] mx-4 md:mx-8 my-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <RevealText 
              text={SITE_DATA.services.title} 
              className="text-4xl md:text-5xl font-serif mb-6"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 leading-relaxed"
          >
            {SITE_DATA.services.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-vicce-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-vicce-accent/10 flex items-center justify-center text-vicce-accent mb-8 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-vicce-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#all-services" className="inline-flex items-center gap-2 text-white/40 hover:text-vicce-accent transition-colors">
            <span>View all services</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
