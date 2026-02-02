
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section className="py-48 bg-tan/20" id="about">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2">
            <div className="organic-shape bg-clay p-4 relative">
              <img 
                alt="Founder Portrait" 
                className="w-full aspect-square object-cover organic-shape grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m_aB04PD836n9gv4b6gLN-KL0i3ABDs7vuSVP5O7_Jml0XtNscV-VPHK1pzOFE6HsEypjpF2dhDcvSzIwY1l-lt9oV1n5VsT5c05rjPzoknIq_7Z__7sAfWS8pw-QP5rXkbxKGvuORNbTvTbutzHl_YOTidn3wY-1HS6UUISkwUm7S-afvXwfMT48F7mtgalZ7d1LgAx14LbEr3rjF3YQFfE9Mvv_Qy_YrsQsqKKk6-LYCkfLssjtsqfmiZvSFSxRiWjI9dz41Pm"
              />
              <span className="material-symbols-outlined drifting-bean !text-[80px] -top-10 -right-10 text-clay opacity-30">filter_vintage</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-8">Our Story</span>
            <h2 className="font-display text-6xl font-light mb-10 leading-tight">Rooted in <br/><span className="font-serif italic">Dedication.</span></h2>
            <p className="text-espresso/80 text-xl font-light leading-relaxed italic mb-8">
              "Brew & Co was born from a simple obsession: why can't home-brewed coffee taste as vibrant as a professional pour-over?"
            </p>
            <p className="text-espresso/60 text-lg leading-relaxed font-light mb-12">
              What started as a garage experiment in roasting became a mission to democratize specialty coffee. We travel to origin, meet the farmers, and bring back more than just beans—we bring back stories that deserve to be told in every cup.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-clay"></div>
              <span className="font-serif italic text-2xl">The Founders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
