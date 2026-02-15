import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Footer from './components/layout/Footer';
import BookingModal from './components/ui/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-vicce-cream font-sans">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Services />
        <About />
        <Portfolio />
      </main>
      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}

export default App;
