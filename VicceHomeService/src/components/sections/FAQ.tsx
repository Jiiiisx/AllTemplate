import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-vicce-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-vicce-charcoal mb-4">
            {SITE_DATA.faqs.title} <span className="italic">{SITE_DATA.faqs.titleItalic}</span>
          </h2>
          <p className="text-vicce-charcoal/60">{SITE_DATA.faqs.description}</p>
        </div>

        <div className="space-y-4">
          {SITE_DATA.faqs.items.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-vicce-muted overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-serif text-vicce-charcoal">{faq.question}</span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={20} className="text-vicce-accent" /> : <Plus size={20} className="text-vicce-charcoal/30" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-vicce-charcoal/60 leading-relaxed border-t border-vicce-muted/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
