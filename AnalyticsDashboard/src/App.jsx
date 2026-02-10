import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = (value) => {
    setIsDarkMode(value);
    localStorage.setItem("darkMode", JSON.stringify(value));
  };

  return (
    <MainLayout isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects Overview" />} />
        <Route path="/settings" element={<PlaceholderPage title="System Settings" />} />
      </Routes>
    </MainLayout>
  );
}

export default App;