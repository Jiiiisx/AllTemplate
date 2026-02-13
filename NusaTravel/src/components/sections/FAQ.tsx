import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/config';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-8 py-32">
      <div className="mb-16 text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-secondary">Common Questions</p>
        <h2 className="text-5xl font-black leading-tight">Frequent Answers</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`overflow-hidden rounded-[32px] border transition-all duration-500 ${
              openIndex === i ? 'border-secondary bg-surface shadow-xl shadow-secondary/5' : 'border-secondary/10 bg-white hover:border-secondary/30'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-8 text-left"
            >
              <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-secondary' : 'text-secondary/70'}`}>
                {faq.question}
              </span>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                openIndex === i ? 'bg-secondary text-white rotate-180' : 'bg-secondary/5 text-secondary'
              }`}>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-8 pb-8 pt-0 text-slate-500 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
