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
    <section className="px-12 py-24 bg-slate-50/50">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
        <div className="relative aspect-square overflow-hidden rounded-[40px]">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" className="h-full w-full object-cover" alt="Traveler" />
          <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl text-white">
            <p className="text-sm italic opacity-90">"Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way."</p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-slate-500 uppercase tracking-widest">How it works</p>
          <h2 className="mb-12 text-5xl font-bold leading-tight">One click for you</h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm transition group-hover:bg-black group-hover:text-white group-hover:scale-110">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
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
