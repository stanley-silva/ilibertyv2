import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import Home from './pages/Home';
import Cooperativas from './pages/Cooperativas';
import Laboratorios from './pages/Laboratorios';
import Discovery from './pages/Discovery';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll manager returning scroll frame to 0 on pagination */}
      <ScrollToTop />

      <div id="iliberty-app-root" className="min-h-screen bg-white text-[#333333] flex flex-col justify-between antialiased selection:bg-[#00AECC]/20 selection:text-[#333333]">
        {/* Global Fixed Navbar */}
        <Navbar />

        {/* Dynamic page content wrapped in central margins */}
        <main className="flex-1 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cooperativas" element={<Cooperativas />} />
            <Route path="/laboratorios" element={<Laboratorios />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            
            {/* Soft Catch-all redirecting to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Corporate Dark Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
