
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ 
  item: Testimonial;
}> = ({ item }) => (
  <div className={`bg-white/5 p-16 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-default border border-white/5 ${item.offset || ""}`}>
    <p className="text-2xl font-light leading-snug mb-20 italic">"{item.quote}"</p>
    <div className="flex items-center gap-6">
      <img alt={item.name} className="w-16 h-16 rounded-full grayscale object-cover" src={item.img} />
      <div>
        <h5 className="font-bold tracking-widest text-xs uppercase text-clay">{item.name}</h5>
        <p className="text-[10px] tracking-widest text-cream/40 uppercase mt-1">{item.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const { testimonials } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-48 bg-espresso text-cream" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-end mb-16 lg:mb-40">
          <h2 className="font-display text-4xl md:text-7xl font-extralight tracking-tighter">{testimonials.title} <br/><span className="italic text-clay">{testimonials.subtitle}</span></h2>
          <p className="max-w-sm text-cream/40 text-lg leading-loose uppercase tracking-[0.2em] font-bold text-[10px]">{testimonials.badge}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.items.map((item, index) => (
            <TestimonialCard 
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
