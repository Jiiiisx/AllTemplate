
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Tasks from "./pages/Tasks";
import Repos from "./pages/Repos";
import Docs from "./pages/Docs";
import Settings from "./pages/Settings";
import Workspaces from "./pages/Workspaces";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [viewMode, setViewMode] = useState('public');
  const location = useLocation();

  useEffect(() => {
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

  const isWorkspaceHub = location.pathname === '/workspaces';

  return (
    <AnimatePresence mode="wait">
      {isWorkspaceHub ? (
        <Workspaces key="workspaces" />
      ) : (
        <MainLayout 
          key="main-layout"
          isDarkMode={isDarkMode} 
          setIsDarkMode={toggleDarkMode}
          viewMode={viewMode}
          setViewMode={setViewMode}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Dashboard viewMode={viewMode} isDarkMode={isDarkMode} />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/community" element={<Community />} />
            <Route path="/repos" element={<Repos />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainLayout>
      )}
    </AnimatePresence>
  );
}

export default App;
