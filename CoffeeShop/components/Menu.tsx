import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  const stackedItems = [
    {
      title: "Iced Coffee Milk",
      desc: "Smooth, bold, and no drama.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#ff8a5c]"
    },
    {
      title: "Caramel Macchiato",
      desc: "Sweet, buttery, and intense.",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#d4a373]"
    },
    {
      title: "Double Espresso",
      desc: "Pure energy in every sip.",
      image: "https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?auto=format&fit=crop&w=800&q=80",
      color: "bg-[#4d2c1e]"
    }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % stackedItems.length);
  };

  return (
    <section className="py-24 bg-white" id="store">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-secondary/60">Menu</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-16 text-secondary">
          What are you craving of?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Left Card: Today's Promo */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[40px] bg-primary aspect-[4/5] p-12 flex flex-col justify-between text-white text-left shadow-2xl">
             <div className="relative z-10">
                <h3 className="text-4xl font-bold leading-tight">Today's<br />Promo</h3>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
                <img 
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Matcha Latte"
                  loading="lazy"
                  className="w-full rounded-[40px] shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                />
             </div>

             <div className="flex gap-4 relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80" alt="Salad" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=200&q=80" alt="Food" loading="lazy" className="w-full h-full object-cover" />
                </div>
             </div>

             <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
             <div className="absolute bottom-20 right-[-20px] w-40 h-40 border border-white/20 rounded-full"></div>
          </div>

          {/* Divider 'X' */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-30">
             <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100 flex flex-col items-center">
                <span className="text-4xl font-black text-primary">X</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mt-1 whitespace-nowrap">Perfect Pairing</span>
             </div>
          </div>

          {/* Right: Stacked Slider */}
          <div className="relative h-full aspect-[4/5] perspective-1000">
            {stackedItems.map((item, index) => {
              // Calculate position in stack
              const isTop = index === activeCard;
              const position = (index - activeCard + stackedItems.length) % stackedItems.length;
              
              return (
                <div 
                  key={index}
                  onClick={nextCard}
                  className={`absolute inset-0 rounded-[40px] ${item.color} p-12 flex flex-col items-center justify-center text-white transition-all duration-700 cursor-pointer select-none
                    ${position === 0 ? 'z-20 translate-x-0 translate-y-0 scale-100 opacity-100 shadow-2xl' : ''}
                    ${position === 1 ? 'z-10 translate-x-4 translate-y-4 scale-95 opacity-80' : ''}
                    ${position >= 2 ? 'z-0 translate-x-8 translate-y-8 scale-90 opacity-40' : ''}
                  `}
                  style={{
                    transform: `translate(${position * 15}px, ${position * 15}px) scale(${1 - position * 0.05})`,
                  }}
                >
                  <div className="w-2/3 mb-8">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full rounded-[32px] shadow-2xl transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-8">{item.desc}</p>
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-black tracking-widest mb-4">CLICK TO SWIPE</span>
                        <div className="flex gap-1.5">
                            {stackedItems.map((_, dotIndex) => (
                              <div 
                                key={dotIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCard === dotIndex ? 'bg-white w-6' : 'bg-white/40'}`}
                              ></div>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Coffee Beans Decorative */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-10 left-10 w-8 h-10 bg-black rounded-full rotate-45"></div>
                    <div className="absolute bottom-20 right-10 w-6 h-8 bg-black rounded-full -rotate-12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
