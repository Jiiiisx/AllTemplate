import React from 'react';

const Menu: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="store">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-secondary/60">Menu</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-16 text-secondary">
          What are you craving of?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Card: Today's Promo */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[40px] bg-primary aspect-[4/5] p-12 flex flex-col justify-between text-white text-left">
             <div className="relative z-10">
                <h3 className="text-4xl font-bold leading-tight">Today's<br />Promo</h3>
             </div>
             
             {/* Main Image (Matcha/Green) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
                <img 
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80" 
                  alt="Matcha Latte"
                  className="w-full drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                />
             </div>

             {/* Small food items at bottom */}
             <div className="flex gap-4 relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" alt="Salad" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80" alt="Food" className="w-full h-full object-cover" />
                </div>
             </div>

             {/* Decorative circles from screenshot */}
             <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
             <div className="absolute bottom-20 right-[-20px] w-40 h-40 border border-white/20 rounded-full"></div>
          </div>

          {/* Divider 'X' */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-20">
             <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100 flex flex-col items-center">
                <span className="text-4xl font-black text-primary">X</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mt-1 whitespace-nowrap">Perfect Pairing</span>
             </div>
          </div>

          {/* Right Card: Iced Coffee Milk */}
          <div className="relative group cursor-pointer overflow-hidden rounded-[40px] bg-[#ff8a5c] aspect-[4/5] p-12 flex flex-col items-center justify-center text-white transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
             {/* Decorative stacked cards effect */}
             <div className="absolute inset-0 bg-primary/20 rotate-3 translate-x-4 translate-y-4 rounded-[40px] -z-10"></div>
             
             {/* Main Image (Iced Coffee) */}
             <div className="w-2/3 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80" 
                  alt="Iced Coffee"
                  className="w-full drop-shadow-2xl transform group-hover:rotate-6 transition-transform duration-500"
                />
             </div>

             <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">Iced Coffee Milk</h3>
                <p className="text-white/80 text-sm mb-8">Smooth, bold, and no drama.</p>
                <div className="flex flex-col items-center">
                    <span className="text-sm font-black tracking-widest mb-4">SWIPE</span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    </div>
                </div>
             </div>

             {/* Coffee Beans floating (simulated with icons or small images) */}
             <div className="absolute inset-0 pointer-events-none opacity-40">
                {/* Randomly placed bean-like shapes */}
                <div className="absolute top-10 left-10 w-8 h-10 bg-[#4d2c1e] rounded-full rotate-45"></div>
                <div className="absolute top-20 right-20 w-6 h-8 bg-[#4d2c1e] rounded-full -rotate-12"></div>
                <div className="absolute bottom-40 left-20 w-7 h-9 bg-[#4d2c1e] rounded-full rotate-[120deg]"></div>
                <div className="absolute top-1/2 right-10 w-9 h-11 bg-[#4d2c1e] rounded-full -rotate-45"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
