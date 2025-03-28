import React from "react";

import whywe1 from "../assets/whywe1.jpg";

function WhyChooseUs() {
  const reasons = [
    "Experienced Professionals",
    "Customized Solutions",
    "Eco-Friendly Products",
    "Satisfaction Guaranteed",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-firstcare-blue mb-8">
          Why Choose Firstcare Facility Services?
        </h2>
        <img
          src={whywe1}
          alt="Why Choose Us"
          className="mx-auto mb-8 rounded-lg shadow-lg"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-firstcare-blue mb-4">
                {reason}
              </h3>
              <p>
                {reason === "Experienced Professionals" &&
                  "Our team consists of trained and experienced cleaning professionals who are dedicated to delivering the highest quality service."}
                {reason === "Customized Solutions" &&
                  "We understand that every client has unique needs. We tailor our services to fit your specific requirements."}
                {reason === "Eco-Friendly Products" &&
                  "We use environmentally friendly cleaning products that are safe for your family, pets, and the planet."}
                {reason === "Satisfaction Guaranteed" &&
                  "We are committed to exceeding your expectations. If you're not satisfied, we'll make it right!"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
