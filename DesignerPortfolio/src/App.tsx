import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BentoGrid from './components/BentoGrid';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, [isLoading]);

  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-black grainy-bg relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="fade-in">
          <Navbar />
          <Hero />
          <Offerings />
          <BentoGrid />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;