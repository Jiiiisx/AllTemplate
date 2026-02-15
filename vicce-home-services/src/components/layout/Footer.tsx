import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

const Footer = () => {
  return (
    <footer className="bg-vicce-cream border-t border-vicce-muted pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <a href="/" className="text-3xl font-serif font-bold tracking-tight text-vicce-charcoal mb-8 block">
              {SITE_DATA.name}
            </a>
            <p className="text-xl text-vicce-charcoal/60 leading-relaxed mb-10 max-w-md">
              Redefining home maintenance with professional excellence and unwavering trust.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-vicce-charcoal/10 flex items-center justify-center hover:bg-vicce-charcoal hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-vicce-charcoal mb-8">Services</h4>
              <ul className="space-y-4">
                {SITE_DATA.services.map(s => (
                  <li key={s.id}>
                    <a href="#" className="text-vicce-charcoal/60 hover:text-vicce-accent transition-colors flex items-center gap-1 group">
                      {s.title}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-vicce-charcoal mb-8">Company</h4>
              <ul className="space-y-4">
                {['Our Story', 'Contact', 'Careers', 'Privacy'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-vicce-charcoal/60 hover:text-vicce-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-bold tracking-widest uppercase text-vicce-charcoal mb-8">Office</h4>
              <p className="text-vicce-charcoal/60 leading-loose">
                {SITE_DATA.contact.address}<br />
                {SITE_DATA.contact.email}<br />
                {SITE_DATA.contact.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-vicce-charcoal/5 gap-6">
          <p className="text-sm text-vicce-charcoal/40">
            © 2026 {SITE_DATA.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-vicce-charcoal/40 hover:text-vicce-charcoal transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-vicce-charcoal/40 hover:text-vicce-charcoal transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
