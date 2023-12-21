import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './main.css';
import './styles/tailwind.css';
// import './reset.css';

// pages
import Index from "./pages/home/Index.jsx";
import Contact from "./pages/contact/Contact.jsx";

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

// render the app
const root = document.getElementById("root");
createRoot(root).render(<Main />);
