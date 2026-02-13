import { motion } from 'framer-motion';

export const FeaturedIn = () => {
  const logos = ["Garuda Indonesia", "Pesona Indonesia", "Traveloka", "Tiket.com", "Airbnb", "Klook"];
  
  return (
    <section className="py-12 border-b border-secondary/5 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-secondary/30 mb-8">Official Partners & Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 transition-all duration-500">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-black tracking-tighter text-secondary">
              {logo.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
