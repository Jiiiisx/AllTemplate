import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { DestinationGrid } from './components/sections/DestinationGrid';
import { HowItWorks } from './components/sections/HowItWorks';
import { TourPackages } from './components/sections/TourPackages';
import { Blog } from './components/sections/Blog';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <div className="p-4 md:p-6">
        <div className="relative overflow-hidden rounded-[40px] bg-slate-100">
          <Navbar />
          <Hero />
        </div>
      </div>
      <DestinationGrid />
      <HowItWorks />
      <TourPackages />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
