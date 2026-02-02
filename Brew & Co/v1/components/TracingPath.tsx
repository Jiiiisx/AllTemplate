
import React from 'react';
import { STEPS } from '../constants';

const TracingPath: React.FC = () => {
  return (
    <section className="py-32 lg:py-64 bg-accent dark:bg-slate-950/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 lg:mb-32 gap-12">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter max-w-xl">
            Tracing the <span className="text-secondary">Path.</span>
          </h2>
          <p className="max-w-md text-slate-500 dark:text-slate-400 text-lg leading-relaxed pt-6">
            The transition from high-altitude farms to our precision roasting facility is a journey of respect for the producer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
          {STEPS.map((step) => (
            <div key={step.id} className={`space-y-10 group ${step.mt}`}>
              <span className="text-7xl md:text-8xl font-display font-thin text-secondary/20 block group-hover:text-secondary/40 transition-colors">
                {step.id}
              </span>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">
                {step.title}
              </h3>
              <p className="text-slate-500 font-light leading-loose">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracingPath;
