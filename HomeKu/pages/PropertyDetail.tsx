
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { properties } from '../data/properties';
import PropertyAssistant from '../components/PropertyAssistant';
import { siteConfig } from '../data/config';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [property]);

  if (!property) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Property Not Found</h1>
          <Link to="/" className="text-brand-gold hover:underline">Return Home</Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-24 px-8 relative"
    >
      <Helmet>
        <title>{`${property.title} | HomeKu Luxury Real Estate`}</title>
        <meta name="description" content={property.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold uppercase text-secondary hover:text-brand-gold transition-colors mb-12 group"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Collection
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8"
        >
          <div>
            <p className="text-brand-gold text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{property.location}</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-2 text-primary">{property.title}</h1>
            <p className="text-secondary tracking-[0.2em] uppercase text-xs">
              {property.beds} BEDS • {property.baths} BATHS • {property.sqft} SQFT
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-serif text-brand-gold mb-2">{property.price}</p>
            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Halo ${siteConfig.name}, saya tertarik dengan properti "${property.title}"...`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary text-background px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-black transition-colors text-center"
            >
              INQUIRE NOW
            </a>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="aspect-[21/9] overflow-hidden mb-12 bg-card"
        >
          <img 
            src={property.mainImage} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-sm tracking-[0.3em] font-bold uppercase text-zinc-500 mb-8">Description</h2>
            <p className="text-xl leading-relaxed font-light text-secondary">
              {property.description}
            </p>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-sm tracking-[0.3em] font-bold uppercase text-zinc-500 mb-8">Amenities</h2>
            <ul className="space-y-4">
              {property.amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] font-bold uppercase text-zinc-500 mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {property.gallery.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden bg-card">
                <img src={img} alt={`${property.title} ${index}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* THE AI ASSISTANT */}
      <PropertyAssistant property={property} />
    </motion.div>
  );
};


export default PropertyDetail;