import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./App.css";

import NavBar from "./components/NavBar";

import { FaArrowUp } from "react-icons/fa6";

// Components
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";

function App() {
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () => {
    welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <NavBar
        welcomeRef={welcomeRef}
        servicesRef={servicesRef}
        whyChooseUsRef={whyChooseUsRef}
        contactRef={contactRef}
      />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-firstcare-yellow text-black p-3 rounded-full shadow-lg hover:bg-firstcare-blue hover:text-white transition-all"
      >
        <FaArrowUp />
      </motion.button>

      {/* Page Sections */}
      <div ref={welcomeRef}>
        <Welcome />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={whyChooseUsRef}>
        <WhyChooseUs />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
