
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 lg:py-64 bg-background-light dark:bg-background-dark overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-7 relative z-10">
            <div className="image-reveal aspect-[4/5] lg:aspect-[3/4] overflow-hidden floating-element rounded-sm">
              <img 
                alt="Barista at work" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4SDD_OD-N6hvagzhk_akh9aE7IX9_rnq2Sa2cZb_laycWA9mGS2NIKqS_jSqGwyxNe85lN8uj3pdN8RkxQjLDOaEQv_eruKlgGuhKEaBtptWpZcPKz1sQeWTMzW0pdhJAJIWa3eHMD00I3otomwR2cbAxOiY9-_tL0dE5bseEcBNuvF511nf0u5IrVwX9__ljLlplvmMJ-2z9n18EMOHrFj_sXEgI5QoIT829mS6EBsUZZ6no4fqLegVa4WCLJTYngVXzzZ4tDeD" 
              />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:-ml-24 relative z-20 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-20 shadow-2xl dark:shadow-none border border-slate-50 dark:border-slate-800">
              <span className="text-secondary text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-10 leading-tight">Minimalist <br/>Complexity.</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-loose font-light mb-12">
                We strip away the noise to focus on the essential. Every roast profile is a study in precision, and every space we build is a canvas for your creative focus.
              </p>
              <div className="space-y-6 border-t border-slate-100 dark:border-slate-800 pt-10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">fiber_manual_record</span>
                  <div>
                    <h4 className="font-bold text-xs tracking-widest uppercase mb-1">Single Origin</h4>
                    <p className="text-sm text-slate-400">Directly traded, seasonally harvested beans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
