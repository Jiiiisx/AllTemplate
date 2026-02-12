import React, { useState, useEffect } from "react";
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
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('public');
  const location = useLocation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    return () => clearTimeout(timer);
  }, [isDarkMode]);

  const toggleDarkMode = (value) => {
    setIsDarkMode(value);
  };

  const isWorkspaceHub = location.pathname === '/workspaces';

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <Routes location={location}>
                    <Route path="/" element={<Dashboard viewMode={viewMode} isDarkMode={isDarkMode} />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/repos" element={<Repos />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/customers" element={<Customers />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </MainLayout>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default App;