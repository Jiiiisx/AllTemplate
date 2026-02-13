import { motion } from 'framer-motion';
import { Search, Ticket, CreditCard, Map } from 'lucide-react';

const steps = [
  { icon: Search, title: "Find your destination", desc: "Embark on a journey to discover your dream destination, where adventure and relaxation await." },
  { icon: Ticket, title: "Book a ticket", desc: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform." },
  { icon: CreditCard, title: "Make payment", desc: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process." },
  { icon: Map, title: "Explore destination", desc: "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets." },
];

export const HowItWorks = () => {
  return (
    <section className="px-8 md:px-12 py-32 bg-surface">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        <div className="relative aspect-square overflow-hidden rounded-[48px] shadow-2xl shadow-secondary/5">
          <img src="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-full w-full object-cover" alt="Traveler" />
          <div className="absolute inset-0 bg-secondary/10" />
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-secondary">How it works</p>
          <h2 className="mb-12 text-5xl font-black leading-tight text-secondary">One click for you</h2>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-white border border-secondary/5 shadow-sm transition group-hover:bg-secondary group-hover:text-white">
                  <step.icon className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-black text-secondary">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
