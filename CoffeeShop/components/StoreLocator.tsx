import React from 'react';

const StoreLocator: React.FC = () => {
  const hours = [
    { day: "Monday - Friday", time: "08:00 AM - 10:00 PM" },
    { day: "Saturday", time: "09:00 AM - 11:00 PM" },
    { day: "Sunday", time: "09:00 AM - 09:00 PM" }
  ];

  return (
    <section className="py-24 bg-darkRoast text-white overflow-hidden" id="maps">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Map Visualization */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-[#1a1a1a] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              {/* Simulated Map Background */}
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
                alt="Store Location Map" 
                loading="lazy"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Map Marker Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary animate-ping rounded-full opacity-75"></div>
                  <div className="relative w-8 h-8 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Location Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                <h4 className="font-bold text-xl mb-1">Downtown Sanctuary</h4>
                <p className="text-white/60 text-sm">123 Coffee Avenue, Roastery District, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Right: Info & Hours */}
          <div className="flex flex-col">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Visit Us</span>
            <h2 className="text-5xl font-black mb-8 leading-tight">Find Your Way To Better Coffee</h2>
            
            <div className="space-y-10">
              {/* Contact Info */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.63 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.63A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-white/60">+1 (555) 000-8888</p>
                </div>
              </div>

              {/* Hours Info */}
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Opening Hours
                </h4>
                <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 space-y-4">
                  {hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <span className="text-white/80 font-medium">{item.day}</span>
                      <span className="text-primary font-bold text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full md:w-max bg-white text-darkRoast px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
