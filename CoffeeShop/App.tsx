import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Landing from './components/Landing';
import Success from './components/Success';
import Menu from './components/Menu';
import ScrollToTop from './components/ui/ScrollToTop';
import NotFound from './components/NotFound';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkRoast transition-colors duration-300">
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <LoadingScreen />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
