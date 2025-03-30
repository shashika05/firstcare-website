import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import logoBgRemowed from "../assets/logoBgRemowed.png";

function NavBar({ welcomeRef, servicesRef, whyChooseUsRef, contactRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-firstcare-blue shadow-md">
      <div className="container py-3 mx-auto px-2 flex justify-between w-full items-center">
        <a href="/" className="flex items-center">
          <div className="text-2xl font-bold italic text-firstcare-yellow flex flex-row">
            <div>
              <img className="h-14" src={logoBgRemowed} alt="Firstcare Logo" />
            </div>
            <div>
              <p>FIRSTCARE</p>
              <p className="font-extralight text-base">FACILITY SERVICES</p>
            </div>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden bg-firsrcare-blue justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-firstcare-blue/80 focus:outline-none"
          >
            {isMenuOpen ? (
              <IoClose size={28} color="yellow" />
            ) : (
              <FiMenu size={24} color="yellow" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`
            ${isMenuOpen ? "block" : "hidden"}
            md:flex md:space-x-6 
            absolute md:static 
            top-full left-0 right-0 
            bg-firstcare-blue md:bg-transparent 
            shadow-md md:shadow-none
            rounded-b-lg
            px-4
            py-4 md:py-0
            text-firstcare-yellow
          `}
        >
          <button
            onClick={() => scrollToSection(welcomeRef)}
            className="block md:inline-block hover:bg-blue-600 cursor-pointer w-full text-center rounded-2xl p-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="block md:inline-block hover:bg-blue-600 cursor-pointer w-full text-center rounded-2xl p-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(whyChooseUsRef)}
            className="block md:inline-block hover:bg-blue-600 cursor-pointer w-full text-center rounded-2xl p-2"
          >
            Why We?
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="block md:inline-block hover:bg-blue-600 cursor-pointer w-full text-center rounded-2xl p-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
