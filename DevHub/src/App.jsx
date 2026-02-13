import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useApp } from "./context/AppContext";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Tasks from "./pages/Tasks";
import Repos from "./pages/Repos";
import Docs from "./pages/Docs";
import Settings from "./pages/Settings";
import Workspaces from "./pages/Workspaces";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { viewMode } = useApp();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

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
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        {/* 404 PAGE - ALSO FULL SCREEN */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;