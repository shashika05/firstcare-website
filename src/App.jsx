import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./App.css";

import { FaArrowUp } from "react-icons/fa6";

// Components
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-firstcare-blue">
            Firstcare
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-firstcare-blue focus:outline-none"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`
            ${isMenuOpen ? "block" : "hidden"}
            md:flex md:space-x-6 
            absolute md:static 
            top-full left-0 right-0 
            bg-white md:bg-transparent 
            shadow-md md:shadow-none
            py-4 md:py-0
          `}
          >
            <button
              onClick={() => scrollToSection(welcomeRef)}
              className="block md:inline-block hover:text-firstcare-blue cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="block md:inline-block hover:text-firstcare-blue cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(whyChooseUsRef)}
              className="block md:inline-block hover:text-firstcare-blue cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block md:inline-block hover:text-firstcare-blue cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

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
