import React from "react";
import ScrollFadeImage from "./ScrollFadeImage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// import scl1 from "../assets/scl1.jpg";
// import hospital1 from "../assets/hospital1.jpg";
// import rest1 from "../assets/rest1.jpg";
// // import rest2 from "../assets/rest2.jpg";
// import carpet1 from "../assets/carpet1.jpg";
// import highWindow1 from "../assets/highWindow1.jpg";
// import floor1 from "../assets/floor1.jpg";
// import car1 from "../assets/car1.jpg";
import moveinout1 from "../assets/moveinout1.jpg";
import office1 from "../assets/office1.jpg";

// const services = [
//   {
//     title: "Commercial Cleaning",
//     description:
//       "We understand that a clean environment is essential for productivity and health.",
//     subServices: [
//       { name: "Schools and Preschools", image: scl1, icon: "🏫" },
//       { name: "Hospitals", image: hospital1, icon: "🏥" },
//       { name: "Offices", image: office1, icon: "🏢" },
//       { name: "Restaurants", image: rest1, icon: "🍽️" },
//     ],
//   },
//   {
//     title: "Move In/Out Cleaning",
//     description: "Ensure every corner is spotless when moving in or out.",
//     image: moveinout1,
//   },
//   {
//     title: "Specific Cleaning Services",
//     description: "Targeted cleaning services for specific needs.",
//     services: [
//       {
//         name: "Floor Scrubbing and Polishing",
//         image: floor1,
//       },
//       { name: "Carpet Shampooing", image: carpet1 },
//       { name: "High Window Cleaning", image: highWindow1 },
//     ],
//   },
//   {
//     title: "Car Grooming",
//     description:
//       "Keep your vehicle looking pristine with our comprehensive services.",
//     image: car1,
//   },
// ];

function Services() {
  const servicesData = [
    {
      title: "Commercial Cleaning",
      description: "Comprehensive cleaning solutions for various sectors.",
      image: office1,
      services: [
        { name: "Schools", icon: "🏫" },
        { name: "Hospitals", icon: "🏥" },
        { name: "Offices", icon: "🏢" },
        { name: "Restaurants", icon: "🍽️" },
      ],
    },
    {
      title: "Specialized Cleaning",
      description: "Targeted cleaning services for specific needs.",
      image: moveinout1,
      services: [
        { name: "Floor Polishing", icon: "✨" },
        { name: "Carpet Cleaning", icon: "🧼" },
        { name: "Window Cleaning", icon: "🪟" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-firstcare-blue mb-12">
          Our Services
        </h2>

        {servicesData.map((service, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 items-center gap-8 mb-16"
          >
            {index % 2 === 0 ? (
              <>
                <div className="space-y-6">
                  <h3 className="text-3xl font-semibold text-firstcare-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.services.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <ScrollFadeImage
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </>
            ) : (
              <>
                <ScrollFadeImage
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="space-y-6">
                  <h3 className="text-3xl font-semibold text-firstcare-blue">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.services.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
