import React from "react";
import ScrollFadeImage from "./ScrollFadeImage";

import whywe1 from "../assets/whywe1.jpg";
import moveinout1 from "../assets/moveinout1.jpg";
import rest1 from "../assets/rest1.jpg";

function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description: "Highly trained professionals dedicated to excellence.",
      image: whywe1,
      icon: "👥",
    },
    {
      title: "Custom Solutions",
      description: "Tailored cleaning strategies for your unique needs.",
      image: moveinout1,
      icon: "🛠️",
    },
    {
      title: "Eco-Friendly",
      description: "Environmentally responsible cleaning products.",
      image: rest1,
      icon: "🌿",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-firstcare-blue mb-16">
          Why Choose Firstcare?
        </h2>

        {reasons.map((reason, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 items-center gap-8 mb-16"
          >
            {index % 2 === 0 ? (
              <>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{reason.icon}</span>
                    <h3 className="text-3xl font-semibold text-firstcare-blue">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
                <ScrollFadeImage
                  src={reason.image}
                  alt={reason.title}
                  className="rounded-2xl shadow-2xl"
                />
              </>
            ) : (
              <>
                <ScrollFadeImage
                  src={reason.image}
                  alt={reason.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{reason.icon}</span>
                    <h3 className="text-3xl font-semibold text-firstcare-blue">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
