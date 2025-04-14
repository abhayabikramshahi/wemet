import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from "../components/Navbar";
import Home from "./pages/Home";
import FAQ from "./pages/Faq";
import ContactSupport from "./pages/ContactSupport";
import Apps from "./pages/Apps";
import Moderation from "./pages/Moderation";
import Api from "./pages/Api";
import ReportContent from "./pages/ReportContent";

import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black text-gray-100 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50 pointer-events-none" />
          <Navbar />
          <div className="mt-16 container mx-auto px-4">
            <div className="bg-gray-900/90 rounded-lg shadow-2xl border border-blue-500/20 p-6 backdrop-blur-sm transform transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact-support" element={<ContactSupport />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/moderation" element={<Moderation />} />
                <Route path="/api" element={<Api />} />
                <Route path="/report-content" element={<ReportContent />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      <Toaster position="top-right" />
    </LanguageProvider>
  );
}
