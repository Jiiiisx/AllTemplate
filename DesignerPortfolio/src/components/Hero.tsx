import React from 'react';
import { siteData } from '../data/config';
import FloatingShape from './FloatingShape';
import Aurora from './Aurora';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-primary overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#BFFF00", "#000000", "#BFFF00"]}
          blend={0.5}
          amplitude={1.2}
          speed={2.5}
        />
        {/* Subtle Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        {/* Left Side: Content WITH 3D Background */}
        <div className="relative h-[600px] flex flex-col justify-center">
          <div className="absolute inset-0 z-0 opacity-80 scale-110">
             <FloatingShape />
          </div>

          <div className="relative z-10 space-y-8 pointer-events-none">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Hello, I'm <br />
              <span className="text-white">{siteData.fullName}.</span>
            </h1>
            
            <p className="text-gray-400 text-xl max-w-md font-medium">
              {siteData.role}
            </p>

            <div className="pointer-events-auto inline-block">
              <button className="bg-accent text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-accent-dark transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(191,255,0,0.4)]">
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Visual */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px]">
          <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-secondary/30 rounded-[2.5rem] overflow-hidden border border-white/10 backdrop-blur-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
              alt={siteData.fullName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
