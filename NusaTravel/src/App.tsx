import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { FeaturedIn } from './components/sections/FeaturedIn';
import { DestinationBento } from './components/sections/DestinationBento';
import { Testimonials } from './components/sections/Testimonials';
import { HowItWorks } from './components/sections/HowItWorks';
import { TourPackages } from './components/sections/TourPackages';
import { Blog } from './components/sections/Blog';
import { FAQ } from './components/sections/FAQ';
import { TripPlanner } from './components/sections/TripPlanner';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { FloatingCTA } from './components/ui/FloatingCTA';
import { NotFound } from './pages/NotFound';

function LandingPage() {
  return (
    <main className="min-h-screen bg-primary font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      <FloatingCTA />
      <div className="p-4 md:p-6 pt-0">
        <div className="relative overflow-hidden rounded-[40px] bg-surface">
          <div id="home">
            <Hero />
          </div>
        </div>
      </div>
      
      <FeaturedIn />
      
      <div id="destinations">
        <DestinationBento />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="services">
        <HowItWorks />
      </div>
      
      <div id="tour">
        <TourPackages />
      </div>
      
      <div id="blog">
        <Blog />
      </div>

      <FAQ />
      
      <div id="planner">
        <TripPlanner />
      </div>
      
      <Footer />
    </main>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
