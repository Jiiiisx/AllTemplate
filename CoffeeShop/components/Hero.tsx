import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Coffee Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-6xl md:text-9xl font-black tracking-tight leading-[0.9] mb-8">
          NAME OF <br className="hidden md:block" /> COFFEE SHOP
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting every drop with precision and passion. Experience the art of modern brewing in the heart of the city.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-xl">
            EXPLORE MENU
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
            OUR STORY
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div className="absolute top-[20%] left-[10%] w-12 h-12 bg-primary/20 blur-xl rounded-full animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-primary/10 blur-2xl rounded-full animate-float-delayed"></div>
        
        {/* Simulated Coffee Beans */}
        <div className="absolute top-[15%] right-[15%] w-8 h-10 bg-[#2B1B17] rounded-full rotate-45 opacity-40 animate-float hidden md:block"></div>
        <div className="absolute bottom-[25%] left-[15%] w-6 h-8 bg-[#2B1B17] rounded-full -rotate-12 opacity-30 animate-float-delayed hidden md:block"></div>
      </div>

      {/* Glass Block Element simulation (optional aesthetic detail from screenshot) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-32 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden md:block"></div>
    </section>
  );
};

export default Hero;
