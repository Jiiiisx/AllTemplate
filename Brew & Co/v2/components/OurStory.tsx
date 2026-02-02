
import React from 'react';
import { SITE_CONFIG } from '../constants';

const OurStory: React.FC = () => {
  const { story } = SITE_CONFIG;

  return (
    <section className="py-48 bg-tan/20" id="about">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2">
            <div className="organic-shape bg-clay p-4 relative">
              <img 
                alt={story.title} 
                className="w-full aspect-square object-cover organic-shape grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
                src={story.image}
              />
              <span className="material-symbols-outlined drifting-bean !text-[80px] -top-10 -right-10 text-clay opacity-30">filter_vintage</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">{story.badge}</span>
            <h2 className="font-display text-6xl font-light mb-10 leading-tight">{story.title.split(' ')[0]} <br/><span className="font-serif italic">{story.title.split(' ').slice(1).join(' ')}</span></h2>
            <p className="text-espresso/80 text-xl font-light leading-relaxed italic mb-8">
              "{story.quote}"
            </p>
            <p className="text-espresso/60 text-lg leading-relaxed font-light mb-12">
              {story.description}
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-clay"></div>
              <span className="font-serif italic text-2xl">{story.signature}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
