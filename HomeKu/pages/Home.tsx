
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import CuratedAssets from '../components/CuratedAssets';
import { Newsletter } from '../components/FooterSections';
import { properties } from '../data/properties';

export default function Home() {
  const [locationFilter, setLocationFilter] = useState('Global');
  const [priceFilter, setPriceFilter] = useState('All Prices');

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchLocation = locationFilter === 'Global' || p.location.includes(locationFilter.toUpperCase());
      
      let matchPrice = true;
      if (priceFilter === '.5M+') {
        const priceNum = parseInt(p.price.replace(/[^0-9]/g, ''));
        matchPrice = priceNum >= 1500000;
      } else if (priceFilter === '< .5M') {
        const priceNum = parseInt(p.price.replace(/[^0-9]/g, ''));
        matchPrice = priceNum < 1500000;
      }

      return matchLocation && matchPrice;
    });
  }, [locationFilter, priceFilter]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>HomeKu | Premium Real Estate & Modern Heritage Living</title>
        <meta name="description" content="Discover curated luxury assets and modern heritage living with HomeKu. AI-powered real estate concierge for the discerning collector." />
      </Helmet>

      <Hero 
        id="hero"
        location={locationFilter} 
        setLocation={setLocationFilter}
        priceRange={priceFilter}
        setPriceRange={setPriceFilter}
      />
      <div id="featured">
        <FeaturedIn />
      </div>
      
      <motion.div
        id="collection"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CuratedAssets properties={filteredProperties} />
      </motion.div>
      
      <div id="newsletter">
        <Newsletter />
      </div>
    </motion.main>
  );
}