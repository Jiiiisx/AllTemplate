
import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../data/properties';

interface CuratedAssetsProps {
  properties: Property[];
}

export default function CuratedAssets({ properties }: CuratedAssetsProps) {
  return (
    <section className="py-24 px-8">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif mb-4">Curated Assets</h2>
        <div className="flex justify-between items-end">
          <p className="text-xs text-zinc-500 tracking-[0.3em] font-bold uppercase">SELECTION 2024 / VOL. 01</p>
          <p className="text-[10px] text-brand-gold tracking-[0.2em] font-bold uppercase">{properties.length} RESULTS FOUND</p>
        </div>
      </div>

      {properties.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-theme">
          <p className="text-zinc-500 font-serif text-2xl italic">No properties match your selection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <Link to={`/property/${property.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-card">
                  <img 
                    src={property.mainImage} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    onLoad={(e: SyntheticEvent<HTMLImageElement>) => (e.currentTarget.style.opacity = "1")}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[10px] tracking-[0.2em] font-bold uppercase mb-2 opacity-80">{property.location}</p>
                    <h3 className="text-3xl font-serif mb-1">{property.title}</h3>
                    <p className="text-[9px] tracking-[0.2em] font-bold text-zinc-400 mb-3">
                      {property.beds} BEDS • {property.baths} BATHS • {property.sqft} SQFT
                    </p>
                    <p className="text-brand-gold font-medium">{property.price}</p>
                  </div>
                </div>
              </Link>
              
              <Link to={`/property/${property.id}`} className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold transition-colors">
                VIEW DETAILS
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
