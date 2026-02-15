import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Clock } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';
import RevealText from '../ui/RevealText';

const iconMap: any = {
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  Briefcase: Briefcase,
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-vicce-cream relative overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-[#F3F0E8] rounded-[60px] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif text-vicce-charcoal mb-8">
              <RevealText text={SITE_DATA.about.title} />
              <RevealText text={SITE_DATA.about.titleItalic} className="italic" />
            </h2>
            <p className="text-xl text-vicce-charcoal/70 mb-12 leading-relaxed">
              {SITE_DATA.about.description}
            </p>
            <button className="btn-primary px-12 py-5 text-lg">
              {SITE_DATA.about.cta}
            </button>
          </div>
          
          <div className="lg:w-1/2 grid gap-8">
            {SITE_DATA.about.features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 bg-white/50 rounded-3xl border border-white"
                >
                  <div className="text-vicce-accent shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{f.title}</h4>
                    <p className="text-vicce-charcoal/60 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Decorative Icon */}
      <Briefcase className="absolute -bottom-20 -right-20 w-80 h-80 text-vicce-charcoal/[0.03] rotate-12" />
    </section>
  );
};

export default About;
