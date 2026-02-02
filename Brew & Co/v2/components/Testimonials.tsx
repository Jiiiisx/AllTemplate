
import React from 'react';

const TestimonialCard: React.FC<{ 
  quote: string; 
  name: string; 
  role: string; 
  img: string; 
  offset?: string 
}> = ({ quote, name, role, img, offset = "" }) => (
  <div className={`bg-white/5 p-16 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors cursor-default border border-white/5 ${offset}`}>
    <p className="text-2xl font-light leading-snug mb-20 italic">"{quote}"</p>
    <div className="flex items-center gap-6">
      <img alt={name} className="w-16 h-16 rounded-full grayscale object-cover" src={img} />
      <div>
        <h5 className="font-bold tracking-widest text-xs uppercase text-clay">{name}</h5>
        <p className="text-[10px] tracking-widest text-cream/40 uppercase mt-1">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-48 bg-espresso text-cream" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-24 items-end mb-40">
          <h2 className="font-display text-7xl font-extralight tracking-tighter">Voice of the <br/><span className="italic text-clay">Regulars.</span></h2>
          <p className="max-w-sm text-cream/40 text-lg leading-loose uppercase tracking-[0.2em] font-bold text-[10px]">A sanctuary for the city's modern creatives.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <TestimonialCard 
            quote="The clarity of flavor in their pour-overs is unmatched. A masterclass in minimalism."
            name="Elena R."
            role="Architect"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAB4Tl9ihyJuox21AyitqkF1xD5bcdwyhQdlIbNSpXGTbTcZb_ti6zRZT27gzkCs2Qh4AlXdUUn3Bx2eH-mx_KZZvMfJL6mql6HYScs8Hob2RWVPNVtSaiUzN6eTP11l1FtUPAQ4W2YLlCap1Y5xKBXkve5n66FzaRyOiu2ssoHV-E-e8gdizprpyyChCJDJQzEuKjr_vjNHxYSqiGDZzbg1z3QdMflXzQPQ0CHnGBtTtJpnXquBk5pW0_bH7T7JeL7xMfb7SucJJ6X"
          />
          <TestimonialCard 
            quote="An architectural gem. Every corner is designed for deep thought and better coffee."
            name="Marcus T."
            role="Engineer"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuATVqHhXSMCxhmdQx_UmFUHAJVtBoyzROgiPZvbbdojPMxtVuHAcsEXNit4AXmBsUdqg5iVZz_0ZeBVuORA0QbMCPbnRwPw6PQrk3ow3gyShneYslH802I2ZTX30PVpccNs4oF9F7jgC1zdiAQxtswP72i1HdPcZqY898tZpHTT-GTHTKD_7YJHpKHXmIo6PfbNB20SroK6DlsErEznLI2EEQxkijmt8Jg6xAjHv348P67_EcY1jUnN5leAGI4tslTV__YC4c6TooK1"
            offset="lg:mt-12"
          />
          <TestimonialCard 
            quote="Consistent, scientific, yet soulful. Brew & Co is the only place that understands the ritual."
            name="Jordan S."
            role="UX Lead"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m_aB04PD836n9gv4b6gLN-KL0i3ABDs7vuSVP5O7_Jml0XtNscV-VPHK1pzOFE6HsEypjpF2dhDcvSzIwY1l-lt9oV1n5VsT5c05rjPzoknIq_7Z__7sAfWS8pw-QP5rXkbxKGvuORNbTvTbutzHl_YOTidn3wY-1HS6UUISkwUm7S-afvXwfMT48F7mtgalZ7d1LgAx14LbEr3rjF3YQFfE9Mvv_Qy_YrsQsqKKk6-LYCkfLssjtsqfmiZvSFSxRiWjI9dz41Pm"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
