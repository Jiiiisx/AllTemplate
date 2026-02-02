
import React from 'react';

const FeatureStats: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-clay !text-3xl">verified</span>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase mb-4">100% Arabica</h4>
            <p className="text-espresso/60 font-light text-sm leading-relaxed max-w-[250px]">Carefully selected premium beans from single-origin high-altitude farms.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-clay !text-3xl">eco</span>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase mb-4">Sustainably Sourced</h4>
            <p className="text-espresso/60 font-light text-sm leading-relaxed max-w-[250px]">Directly traded relationships that empower growers and protect the soil.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-clay !text-3xl">local_fire_department</span>
            </div>
            <h4 className="font-display text-lg tracking-widest uppercase mb-4">Artisanal Roast</h4>
            <p className="text-espresso/60 font-light text-sm leading-relaxed max-w-[250px]">Small-batch roasted in Austin to unlock complex, nuanced profiles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
