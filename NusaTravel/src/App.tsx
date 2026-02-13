import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { FeaturedIn } from './components/sections/FeaturedIn';
import { DestinationBento } from './components/sections/DestinationBento';
import { Testimonials } from './components/sections/Testimonials';
import { HowItWorks } from './components/sections/HowItWorks';
import { TourPackages } from './components/sections/TourPackages';
import { Blog } from './components/sections/Blog';
import { TripPlanner } from './components/sections/TripPlanner';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 2 detik agar user bisa melihat animasi
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main className="min-h-screen bg-primary font-sans selection:bg-secondary selection:text-white">
        <div className="p-4 md:p-6">
          <div className="relative overflow-hidden rounded-[40px] bg-surface">
            <Navbar />
            <Hero />
          </div>
        </div>
        <FeaturedIn />
        <DestinationBento />
        <Testimonials />
        <HowItWorks />
        <TourPackages />
        <Blog />
        <TripPlanner />
        <Footer />
      </main>
    </>
  );
}

export default App;
