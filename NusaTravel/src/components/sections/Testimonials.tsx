import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Donald Sullivan",
    role: "Adventure Enthusiast",
    content: "This travel website is very informative and easy to use. I like how they present various destination options with clear details.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    content: "The Trip Planner feature is a game changer! It helped me find the perfect quiet retreat in Ubud that I wouldn't have found elsewhere.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Michael Chen",
    role: "Family Traveler",
    content: "Best experience booking a family tour. The emerald theme is so soothing and represents Indonesia perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

export const Testimonials = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-accent">Testimonials</p>
          <h2 className="text-5xl font-black leading-tight text-secondary">What our explorers say</h2>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed">Real stories from people who have explored the archipelago with NusaTravel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[48px] bg-surface border border-secondary/5 hover:bg-white hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 group"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg text-secondary/80 mb-10 font-medium leading-relaxed italic">"{item.content}"</p>
            
            <div className="flex items-center gap-4">
              <img src={item.avatar} className="h-14 w-14 rounded-2xl border-2 border-white shadow-sm" alt={item.name} />
              <div>
                <h4 className="font-black text-secondary">{item.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
