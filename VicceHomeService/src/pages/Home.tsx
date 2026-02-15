import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import CostCalculator from '../components/sections/CostCalculator';
import Testimonials from '../components/sections/Testimonials';
import ServiceArea from '../components/sections/ServiceArea';
import Newsletter from '../components/sections/Newsletter';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';
import BookingModal from '../components/ui/BookingModal';
import LoadingScreen from '../components/ui/LoadingScreen';

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-vicce-cream font-sans">
        <Navbar onBookClick={() => setIsBookingOpen(true)} />
        <main>
          <Hero onBookClick={() => setIsBookingOpen(true)} />
          <Services />
          <About />
          <CostCalculator />
          <ServiceArea />
          <Portfolio />
          <Testimonials />
          <Newsletter />
          <FAQ />
        </main>
        <Footer />
        
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />
      </div>
    </>
  );
};

export default Home;
