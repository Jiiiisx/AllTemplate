import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.5 3H5.5C3.567 3 2 4.567 2 6.5V17.5C2 19.433 3.567 21 5.5 21H18.5C20.433 21 22 19.433 22 17.5V6.5C22 4.567 20.433 3 18.5 3ZM20 17.5C20 18.328 19.328 19 18.5 19H5.5C4.672 19 4 18.328 4 17.5V6.5C4 5.672 4.672 5 5.5 5H18.5C19.328 5 20 5.672 20 6.5V17.5Z" />
                </svg>
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-secondary">COFFEE SHOP</span>
            </div>
            <p className="text-secondary/60 text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-secondary mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-4 text-secondary/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Product</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Template</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary mb-6 text-sm">Socials</h4>
              <ul className="space-y-4 text-secondary/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">X</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary mb-6 text-sm">Resources</h4>
              <ul className="space-y-4 text-secondary/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Help center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Affiliate program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary mb-6 text-sm">Stay in Loop</h4>
              <p className="text-secondary/60 text-xs mb-4">
                Get Productivity tips & email hacks in your inbox
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="w-full bg-black text-white py-3 rounded-full font-bold text-sm hover:bg-primary transition-colors uppercase tracking-widest">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright or line if needed (not in screenshot but good practice) */}
        <div className="pt-12 border-t border-gray-100 text-center">
            <p className="text-secondary/40 text-xs">© 2026 Coffee Shop Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
