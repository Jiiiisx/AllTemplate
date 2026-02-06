import React from 'react';
import { siteData } from '../data/config';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonial = siteData.testimonials[0];

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex justify-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-accent"
          />
        </div>

        <div className="relative">
          <h3 className="text-3xl md:text-5xl font-medium text-white italic leading-tight">
            "{testimonial.content}"
          </h3>
          <p className="mt-8 text-xl text-gray-400">
            — {testimonial.name}, {testimonial.role}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-accent' : 'bg-gray-700'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
