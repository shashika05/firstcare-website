import React from "react";

import scl1 from "../assets/scl1.jpg";
import office1 from "../assets/office1.jpg";
import hospital1 from "../assets/hospital1.jpg";
import rest1 from "../assets/rest1.jpg";
// import rest2 from "../assets/rest2.jpg";
import carpet1 from "../assets/carpet1.jpg";
import highWindow1 from "../assets/highWindow1.jpg";
import floor1 from "../assets/floor1.jpg";
import car1 from "../assets/car1.jpg";
import moveinout1 from "../assets/moveinout1.jpg";

function Services() {
  const services = [
    {
      title: "Commercial Cleaning",
      description:
        "We understand that a clean environment is essential for productivity and health.",
      subServices: [
        { name: "Schools and Preschools", image: scl1 },
        { name: "Hospitals", image: hospital1 },
        { name: "Offices", image: office1 },
        { name: "Restaurants", image: rest1 },
      ],
    },
    {
      title: "Move In/Out Cleaning",
      description: "Ensure every corner is spotless when moving in or out.",
      image: moveinout1,
    },
    {
      title: "Specific Cleaning Services",
      services: [
        {
          name: "Floor Scrubbing and Polishing",
          image: floor1,
        },
        { name: "Carpet Shampooing", image: carpet1 },
        { name: "High Window Cleaning", image: highWindow1 },
      ],
    },
    {
      title: "Car Grooming",
      description:
        "Keep your vehicle looking pristine with our comprehensive services.",
      image: car1,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-center text-firstcare-blue mb-8">
        Our Services
      </h2>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-firstcare-blue mb-4">
              {service.title}
            </h3>
            {service.description && (
              <p className="mb-4">{service.description}</p>
            )}

            {service.subServices && (
              <div className="grid md:grid-cols-2 gap-4">
                {service.subServices.map((subService, subIndex) => (
                  <div key={subIndex} className="text-center">
                    <img
                      src={subService.image}
                      alt={subService.name}
                      className="mx-auto mb-2 rounded-lg"
                    />
                    <p>{subService.name}</p>
                  </div>
                ))}
              </div>
            )}

            {service.services && (
              <div className="grid md:grid-cols-3 gap-4">
                {service.services.map((specificService, serviceIndex) => (
                  <div key={serviceIndex} className="text-center">
                    <img
                      src={specificService.image}
                      alt={specificService.name}
                      className="mx-auto mb-2 rounded-lg"
                    />
                    <p>{specificService.name}</p>
                  </div>
                ))}
              </div>
            )}

            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="mt-4 mx-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
