import React, { useState } from 'react';
import { siteData } from '../constants/siteData';
import ScrollAnimation from './ui/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = siteData.menu.items.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  const handleWhatsAppOrder = (itemName: string) => {
    toast.success(`Opening WhatsApp for ${itemName}...`, {
      style: {
        borderRadius: '16px',
        background: '#1a1a1a',
        color: '#fff',
      },
    });
    const message = encodeURIComponent(`${siteData.contact.whatsappMessage}${itemName}`);
    setTimeout(() => {
      window.open(`https://wa.me/${siteData.contact.whatsappNumber}?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <section className="py-32 bg-white dark:bg-secondary transition-colors duration-300 min-h-screen" id="store">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Back Button */}
        <div className="absolute top-0 left-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-secondary/60 dark:text-white/60 hover:text-primary dark:hover:text-primary font-bold transition-all group"
          >
            <div className="w-10 h-10 rounded-full border border-secondary/10 dark:border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
            <span className="hidden md:block">BACK TO HOME</span>
          </Link>
        </div>

        <ScrollAnimation direction="up">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-secondary dark:text-white">
            {siteData.menu.title}
          </h2>
        </ScrollAnimation>

        {/* Category Tabs */}
        <ScrollAnimation direction="up" delay={0.2} className="flex flex-wrap justify-center gap-4 mb-16">
          {siteData.menu.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                : 'bg-cream dark:bg-white/5 text-secondary dark:text-white/60 hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-cream dark:bg-white/5 rounded-[40px] p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-8 rounded-[32px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-secondary/90 backdrop-blur-md px-4 py-2 rounded-2xl font-black text-primary">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">{item.title}</h3>
                  <p className="text-secondary/60 dark:text-white/60 text-sm mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* WhatsApp Order Button */}
                <button 
                  onClick={() => handleWhatsAppOrder(item.title)}
                  className="w-full bg-secondary dark:bg-primary text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-primary dark:hover:bg-white dark:hover:text-primary transition-all group/btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  ORDER VIA WHATSAPP
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
