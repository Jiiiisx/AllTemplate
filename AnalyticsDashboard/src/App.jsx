import React, { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Tasks from "./pages/Tasks";
import Repos from "./pages/Repos";
import Docs from "./pages/Docs";
import Settings from "./pages/Settings";
import Workspaces from "./pages/Workspaces";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false); // Persistent Sidebar State
  const [viewMode, setViewMode] = useState('public');
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (value) => {
    setIsDarkMode(value);
  };

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen key="loader" />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* FULL SCREEN PAGES */}
        <Route path="/workspaces" element={<Workspaces />} />
        
        {/* DASHBOARD PAGES WITH SIDEBAR */}
        <Route 
          element={
            <MainLayout 
              isDarkMode={isDarkMode} 
              setIsDarkMode={toggleDarkMode}
              viewMode={viewMode}
              setViewMode={setViewMode}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          }
        >
          <Route path="/" element={<Dashboard viewMode={viewMode} isDarkMode={isDarkMode} />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/repos" element={<Repos />} />
                              <Route path="/docs" element={<Docs />} />
                              <Route path="/settings" element={<Settings />} />
                              <Route path="/notifications" element={<Notifications />} />
                              <Route path="/customers" element={<Customers />} />        </Route>

        {/* 404 PAGE - ALSO FULL SCREEN */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;