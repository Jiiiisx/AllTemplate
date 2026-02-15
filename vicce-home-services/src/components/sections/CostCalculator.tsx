import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Info } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';
import RevealText from '../ui/RevealText';

const CostCalculator = () => {
  const [service, setService] = useState<keyof typeof SITE_DATA.pricing.rates>('plumbing');
  const [hours, setHours] = useState(2);

  const total = useMemo(() => {
    return SITE_DATA.pricing.rates[service] * hours;
  }, [service, hours]);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-vicce-charcoal mb-6">
              <RevealText text={SITE_DATA.pricing.title} />
              <RevealText text={SITE_DATA.pricing.titleItalic} className="italic" />
            </h2>
            <p className="text-lg text-vicce-charcoal/60 mb-8 max-w-lg">
              {SITE_DATA.pricing.description}
            </p>
            <div className="flex items-start gap-4 p-4 bg-vicce-accent/5 rounded-2xl border border-vicce-accent/10">
              <Info className="text-vicce-accent shrink-0 mt-1" size={20} />
              <p className="text-sm text-vicce-charcoal/50">
                {SITE_DATA.pricing.disclaimer}
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-xl bg-vicce-charcoal p-8 md:p-12 rounded-[40px] shadow-2xl text-white relative"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 text-vicce-accent">
                <Calculator size={24} />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Cost Estimator</span>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Service Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(SITE_DATA.pricing.rates).map((key) => (
                      <button
                        key={key}
                        onClick={() => setService(key as any)}
                        className={`py-3 px-4 rounded-xl border text-sm transition-all capitalize ${
                          service === key 
                          ? 'bg-vicce-accent border-vicce-accent text-white shadow-lg' 
                          : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/40">Duration (Hours)</label>
                    <span className="text-vicce-accent font-bold">{hours}h</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full accent-vicce-accent"
                  />
                </div>

                <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <span className="block text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Estimated Total</span>
                    <div className="text-4xl md:text-5xl font-serif text-vicce-accent">${total}</div>
                  </div>
                  <button className="bg-white text-vicce-charcoal px-8 py-4 rounded-full font-bold text-sm hover:bg-vicce-accent hover:text-white transition-all uppercase tracking-widest">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
