import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/layout/NotFound';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
