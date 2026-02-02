
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 lg:py-64" id="gallery">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {GALLERY_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`col-span-12 ${item.span} image-reveal ${item.height} ${item.mt} floating-element rounded-sm`}
            >
              <img 
                alt={item.alt} 
                className="w-full h-full object-cover" 
                src={item.url} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
