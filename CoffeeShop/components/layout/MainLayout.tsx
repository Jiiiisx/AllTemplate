
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LoadingScreen from '../LoadingScreen';
import ScrollToTop from '../ui/ScrollToTop';
import { Toaster } from 'react-hot-toast';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkRoast transition-colors duration-300">
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <LoadingScreen />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
