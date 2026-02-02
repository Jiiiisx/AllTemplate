
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-48 bg-cream" id="about-philosophy">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="magazine-grid items-center">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="image-reveal aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img 
                alt="Barista at work" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4SDD_OD-N6hvagzhk_akh9aE7IX9_rnq2Sa2cZb_laycWA9mGS2NIKqS_jSqGwyxNe85lN8uj3pdN8RkxQjLDOaEQv_eruKlgGuhKEaBtptWpZcPKz1sQeWTMzW0pdhJAJIWa3eHMD00I3otomwR2cbAxOiY9-_tL0dE5bseEcBNuvF511nf0u5IrVwX9__ljLlplvmMJ-2z9n18EMOHrFj_sXEgI5QoIT829mS6EBsUZZ6no4fqLegVa4WCLJTYngVXzzZ4tDeD"
              />
            </div>
            <span className="material-symbols-outlined drifting-bean !text-[60px] -bottom-10 -left-10 text-clay">spa</span>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div className="lg:pl-20">
              <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">Our Philosophy</span>
              <h2 className="font-display text-6xl font-light mb-10 leading-[1.1]">Minimalist <br/><span className="font-serif italic">Complexity.</span></h2>
              <p className="text-espresso/70 text-lg leading-loose font-light mb-12">
                We strip away the noise to focus on the essential. Every roast profile is a study in precision, and every space we build is a canvas for your creative focus.
              </p>
              <div className="pt-10 border-t border-espresso/10">
                <button className="text-espresso text-[11px] tracking-[0.4em] font-bold uppercase border-b-2 border-clay pb-2 hover:text-clay transition-all">Read our Manifesto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
