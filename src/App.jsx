import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";

import logoBgRemowed from "./assets/logoBgRemowed.png";
import cover2 from "./assets/cover2.jpg";
import scl1 from "./assets/scl1.jpg";
import hospital1 from "./assets/hospital1.jpg";
import office1 from "./assets/office1.jpg";
import rest1 from "./assets/rest1.jpg";
import moveinout1 from "./assets/moveinout1.jpg";
import floor1 from "./assets/floor1.jpg";
import carpet1 from "./assets/carpet1.jpg";
import highWindow1 from "./assets/highWindow1.jpg";
import car1 from "./assets/car1.jpg";
import whywe1 from "./assets/whywe1.jpg";

import ScrollToTopButton from "./components/ScrollToTopButton";

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Set up intersection observer to update active section on scroll
  useEffect(() => {
    const sectionIds = ["home", "services", "why-us", "contact"];

    // Create a map to store the intersection ratios of each section
    const sectionIntersectionRatios = new Map();

    const options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px", // Adjust this for better detection
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8], // Multiple thresholds for more granular detection
    };

    const handleIntersect = (entries) => {
      // Update the intersection ratio for each entry
      entries.forEach((entry) => {
        sectionIntersectionRatios.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let maxSection = activeSection; // Default to current active section

      sectionIntersectionRatios.forEach((ratio, section) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxSection = section;
        }
      });

      // Only update if we have a meaningful intersection
      if (maxRatio > 0.1) {
        setActiveSection(maxSection);
      }
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        // Initialize with zero ratio
        sectionIntersectionRatios.set(id, 0);
      }
    });

    // Cleanup function
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [activeSection]); // Empty dependency array means this runs once on mount

  // Track scroll direction to improve active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If near the top of the page, ensure home is active
      if (scrollY < 100) {
        setActiveSection("home");
      }

      // If near the bottom of the page, ensure contact is active
      if (scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section with improved handling for mobile
  const scrollToSection = (sectionId) => {
    // First close the mobile menu
    setIsMobileMenuOpen(false);

    // Then update active section
    setActiveSection(sectionId);

    // Use setTimeout to ensure the menu closing animation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Adjust this based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to allow menu animation to start
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#0413ac] text-white z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              <a href="/" className="flex items-center">
                <div className="text-2xl font-bold italic text-firstcare-yellow flex flex-row">
                  <div>
                    <img
                      className="h-12"
                      src={logoBgRemowed}
                      alt="Firstcare Logo"
                    />
                  </div>
                  <div className="h-12 items-center justify-center text-left">
                    <p className="text-[23px]">FIRSTCARE</p>
                    <p className="font-extralight text-sm">FACILITY SERVICES</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none hover:bg-blue-500 p-2 rounded-lg transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-[#eedc88] hover:bg-blue-500 p-2 rounded-2xl transition-colors ${
                  activeSection === "home" ? "text-[#eedc88]" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`hover:text-[#eedc88] hover:bg-blue-500 p-2 rounded-2xl transition-colors ${
                  activeSection === "services" ? "text-[#eedc88]" : ""
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className={`hover:text-[#eedc88] hover:bg-blue-500 p-2 rounded-2xl transition-colors ${
                  activeSection === "why-us" ? "text-[#eedc88]" : ""
                }`}
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-[#eedc88] hover:bg-blue-500 p-2 rounded-2xl transition-colors ${
                  activeSection === "contact" ? "text-[#eedc88]" : ""
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          className="md:hidden overflow-hidden bg-[#0413ac]"
        >
          <div className="flex flex-col space-y-3 px-4 py-2">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-left p-2 rounded-xl hover:bg-blue-500 ${
                activeSection === "home" ? "text-[#eedc88]" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-left p-2 rounded-xl hover:bg-blue-500 ${
                activeSection === "services" ? "text-[#eedc88]" : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className={`text-left p-2 rounded-xl hover:bg-blue-500 ${
                activeSection === "why-us" ? "text-[#eedc88]" : "text-white"
              }`}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-left p-2 rounded-xl hover:bg-blue-500 ${
                activeSection === "contact" ? "text-[#eedc88]" : "text-white"
              }`}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 pb-20 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0413ac]/10 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center"
          >
            <motion.div variants={fadeIn} className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-3xl lg:text-4xl font-extrabold text-[#0413ac] mb-4">
                Welcome to Firstcare Facility Services
              </h1>
              <div className="w-24 h-1 bg-[#eedc88] mb-4"></div>
              <p className="text-lg text-gray-700 mb-6">
                We pride ourselves on delivering exceptional cleaning solutions
                tailored to meet your needs in New Zealand. Our commitment to
                quality and customer satisfaction sets us apart as a leader in
                the cleaning industry.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0413ac] text-white px-6 py-3 rounded-lg hover:bg-[#0413ac]/90 transition"
                onClick={() => scrollToSection("contact")}
              >
                Get a Free Quote
              </motion.button>
            </motion.div>
            <motion.div variants={fadeIn} className="md:ml-8">
              <img
                src={cover2}
                alt="Firstcare Cleaning Services"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0413ac] mb-2">
                Our Services
              </h2>
              <div className="w-20 h-1 bg-[#eedc88] mx-auto mb-4"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We offer a comprehensive range of cleaning services to meet all
                your needs.
              </p>
            </motion.div>

            {/* Commercial Cleaning */}
            <motion.div
              variants={fadeIn}
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#0413ac] mb-6">
                1. Commercial Cleaning
              </h3>
              <p className="text-gray-700 mb-8">
                We understand that a clean environment is essential for
                productivity and health. Our commercial cleaning services cater
                to various sectors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                  title="Schools and Preschools"
                  description="Providing a safe and hygienic space for students and staff."
                  imageUrl={scl1}
                />
                <ServiceCard
                  title="Hospitals"
                  description="Ensuring the highest standards of cleanliness and sanitation."
                  imageUrl={hospital1}
                />
                <ServiceCard
                  title="Offices"
                  description="Creating a welcoming workspace that promotes efficiency."
                  imageUrl={office1}
                />
                <ServiceCard
                  title="Restaurants"
                  description="Maintaining cleanliness to meet health regulations and enhance customer experience."
                  imageUrl={rest1}
                />
              </div>
            </motion.div>

            {/* Move In/Out Cleaning */}
            <motion.div
              variants={fadeIn}
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#0413ac] mb-6">
                2. Move In/Out Cleaning
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Whether you're moving into a new home or vacating your
                    current space, our move in/out cleaning services ensure that
                    every corner is spotless.
                  </p>
                  <p className="text-gray-700">
                    We specialize in builders' cleaning, removing dust and
                    debris left behind, so you can settle into your new
                    environment without worry.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={moveinout1}
                    alt="Move In/Out Cleaning"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Specific Cleaning Services */}
            <motion.div
              variants={fadeIn}
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#0413ac] mb-6">
                3. Specific Cleaning Services
              </h3>
              <p className="text-gray-700 mb-8">
                We offer targeted cleaning solutions to address specific needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Floor Scrubbing and Polishing"
                  description="Revitalize your floors with our professional scrubbing and polishing services, ensuring they look their best."
                  imageUrl={floor1}
                />
                <ServiceCard
                  title="Carpet Shampooing"
                  description="Deep clean your carpets to remove stains, allergens, and odors, creating a fresher indoor atmosphere."
                  imageUrl={carpet1}
                />
                <ServiceCard
                  title="High Window Cleaning"
                  description="Let us take care of those hard-to-reach windows! Our high window cleaning service ensures that your windows are crystal clear."
                  imageUrl={highWindow1}
                />
              </div>
            </motion.div>

            {/* Car Grooming */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#0413ac] mb-6">
                4. Car Grooming
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <img
                    src={car1}
                    alt="Car Grooming"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <p className="text-gray-700">
                    Keep your vehicle looking pristine with our comprehensive
                    car grooming services. We provide interior and exterior
                    cleaning that protects your investment and enhances your
                    driving experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-[#0413ac]/5">
        {/* Section content remains the same */}
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0413ac] mb-2">
                Why Choose Firstcare Facility Services?
              </h2>
              <div className="w-20 h-1 bg-[#eedc88] mx-auto mb-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div variants={fadeIn} className="order-2 md:order-1">
                <ul className="space-y-6">
                  <FeatureItem
                    title="Experienced Professionals"
                    description="Our team consists of trained and experienced cleaning professionals who are dedicated to delivering the highest quality service."
                  />
                  <FeatureItem
                    title="Customized Solutions"
                    description="We understand that every client has unique needs. We tailor our services to fit your specific requirements."
                  />
                  <FeatureItem
                    title="Eco-Friendly Products"
                    description="We use environmentally friendly cleaning products that are safe for your family, pets, and the planet."
                  />
                  <FeatureItem
                    title="Satisfaction Guaranteed"
                    description="We are committed to exceeding your expectations. If you're not satisfied, we'll make it right!"
                  />
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="order-1 md:order-2">
                <img
                  src={whywe1}
                  alt="Professional Cleaning Team"
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        {/* Section content remains the same */}
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0413ac] mb-2">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-[#eedc88] mx-auto mb-4"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Ready to experience the Firstcare difference? Contact us today
                for a free quote or to schedule a service. Let us take care of
                your cleaning needs, so you can focus on what matters most!
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8">
              <motion.div variants={fadeIn} className="md:w-1/2">
                <form
                  className="bg-white rounded-lg shadow-xl p-8"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const service = document.getElementById("service").value;
                    const message = document.getElementById("message").value;

                    // Format email body
                    const emailBody = `
              Name: ${name}
              Email: ${email}
              Phone: ${phone}
              Service Interested In: ${service}
              Message:
              ${message}
                  `;

                    // Create mailto link with all form data
                    const mailtoLink = `mailto:info@firstcare.co.nz?subject=Inquiry from ${name}&body=${encodeURIComponent(
                      emailBody
                    )}`;

                    // Open default mail client
                    window.location.href = mailtoLink;
                  }}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0413ac]"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0413ac]"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0413ac]"
                      type="tel"
                      id="phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="service"
                    >
                      Service Interested In
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0413ac]"
                      id="service"
                    >
                      <option value="">Select a Service</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="moveInOut">Move In/Out Cleaning</option>
                      <option value="floor">Floor Scrubbing & Polishing</option>
                      <option value="carpet">Carpet Shampooing</option>
                      <option value="window">High Window Cleaning</option>
                      <option value="car">Car Grooming</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0413ac] h-28"
                      id="message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#0413ac] text-white font-medium py-3 rounded-lg hover:bg-[#0413ac]/90 transition"
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              <motion.div variants={fadeIn} className="md:w-1/2">
                <div className="bg-[#0413ac]/5 rounded-lg shadow-xl p-8 h-full">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0413ac] mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-[#0413ac] mr-3 mt-1">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="hover:text-blue-700 hover:underline">
                          <a
                            href="https://maps.app.goo.gl/81JSZCWQVepVe9KJA?g_st=iw"
                            target="_blank"
                          >
                            <p className="font-medium">Address</p>
                            25A Poruru Close, Papakura 2110
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-[#0413ac] mr-3 mt-1">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <a
                            href="tel:022 165 1771"
                            className="text-gray-700 hover:text-[#0413ac] hover:underline transition-colors"
                          >
                            <p className="font-medium">Phone</p>
                            022 165 1771
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-[#0413ac] mr-3 mt-1">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <a
                            href="mailto:info@firstcare.co.nz"
                            className="text-gray-700 hover:text-[#0413ac] hover:underline transition-colors"
                          >
                            <p className="font-medium">Email</p>
                            info@firstcare.co.nz
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0413ac] mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 5:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sunday</span>
                        <span className="font-medium text-red-600">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-[#0413ac] mb-4">
                      Follow Us On
                    </h3>
                    <div className="flex space-x-4">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#0413ac] text-white p-2 rounded-full"
                      >
                        <FaFacebook />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#0413ac] text-white p-2 rounded-full"
                      >
                        <FaInstagram />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0413ac] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center items-center text-center">
            <div className="mb-4 md:mb-0 md:mr-8">
              <p className="text-xl font-bold">Firstcare Facility Services</p>
              <p className="text-sm opacity-75 mt-1">
                Quality Cleaning Solutions in New Zealand
              </p>
            </div>
            <div className="text-sm opacity-75">
              &copy; {new Date().getFullYear()} Firstcare Facility Services. All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
}

// Service Card Component
{
  /* Updated Service Card Component for better mobile performance */
}
const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h4 className="font-bold text-[#0413ac] text-lg mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

// Feature Item Component
const FeatureItem = ({ title, description }) => {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex">
      <div className="mr-4 text-[#eedc88]">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-[#0413ac] mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};
