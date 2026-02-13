import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode } = useApp();

  return (
    <div className={`h-screen w-full flex font-sans overflow-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-[#F8F9FB] text-zinc-800'}`}>
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative z-10">
        <Header 
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* INNER CONTENT */}
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth smooth-scroll">
            <Outlet />
          </main>

          <div className="overflow-y-auto no-scrollbar smooth-scroll">
            <RightSidebar isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;