
import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Product } from '../types';

interface ShopProps {
}

const ProductCard: React.FC<{ 
  product: Product;
}> = ({ product }) => {
  const waLink = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello, I would like to order: ${product.title}`;
  
  return (
    <div className={`group cursor-pointer ${product.offset || ""}`}>
      <div className="aspect-[4/5] bg-cream mb-8 overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl transition-all duration-500">
        <img alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.img} />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-all duration-300"></div>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-espresso text-[10px] tracking-widest font-bold px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase hover:bg-espresso hover:text-white text-center"
        >
          Order on WhatsApp
        </a>
      </div>
      <h3 className="font-display text-xl tracking-wide text-espresso text-center">{product.title}</h3>
      <p className="text-clay font-bold text-center mt-2">{product.price}</p>
    </div>
  );
};

const Shop: React.FC<ShopProps> = () => {
  const { shop } = SITE_CONFIG;

  return (
    <section className="py-24 lg:py-48 bg-white" id="shop">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16 lg:mb-32">
          <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-6">{shop.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">{shop.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shop.products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className="mt-32 text-center">
          <a 
            href="#full-menu"
            className="inline-block px-12 py-5 border border-espresso/20 text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-espresso hover:text-white transition-all"
          >
            {shop.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
