import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';

// Import your components
import Index from "./pages/home/Index.jsx";
import Contact from "./pages/contact/Contact.jsx";

// Main App Component
const Main = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="background-image"></div>
      <div className="route">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

// Use createRoot to render the app
const root = document.getElementById("root");
createRoot(root).render(<Main />);
