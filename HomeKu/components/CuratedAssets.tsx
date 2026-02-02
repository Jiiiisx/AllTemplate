
import React from 'react';

const properties = [
  {
    id: 1,
    title: "The Zenith Atrium",
    location: "ZURICH, SWITZERLAND",
    price: "$1,450,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Ember Forest Lodge",
    location: "BRITISH COLUMBIA, CA",
    price: "$890,000",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200"
  }
];

const CuratedAssets: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-black">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif mb-4">Curated Assets</h2>
        <p className="text-xs text-zinc-500 tracking-[0.3em] font-bold uppercase">SELECTION 2024 / VOL. 01</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-2 opacity-80">{property.location}</p>
                <h3 className="text-3xl font-serif mb-2">{property.title}</h3>
                <p className="text-brand-gold font-medium">{property.price}</p>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold transition-colors">
              VIEW DETAILS
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedAssets;
