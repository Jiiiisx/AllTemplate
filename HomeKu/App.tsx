
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import CuratedAssets from './components/CuratedAssets';
import { Newsletter, Footer } from './components/FooterSections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-brand-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedIn />
        <CuratedAssets />
        <Newsletter />
      </main>

      <Footer />
      
      {/* Decorative grain overlay for editorial feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
