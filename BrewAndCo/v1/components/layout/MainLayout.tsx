
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AIAssistant from '../AIAssistant';

interface MainLayoutProps {
  children: React.ReactNode;
  toggleDarkMode: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, toggleDarkMode }) => {
  return (
    <div className="min-h-screen">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main>
        {children}
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
