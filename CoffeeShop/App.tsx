import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Services from './components/Services';
import StoreLocator from './components/StoreLocator';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Services />
        <StoreLocator />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
