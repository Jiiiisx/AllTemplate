import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Offerings />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
