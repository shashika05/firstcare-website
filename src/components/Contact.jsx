import React from "react";

import getintouch from "../assets/getintouch.jpg";

function Contact() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-firstcare-blue mb-8">
          Get in Touch
        </h2>
        <img
          src={getintouch}
          alt="Contact Us"
          className="mx-auto mb-8 rounded-lg shadow-lg object-cover w-full h-80"
        />
        <p className="text-center mb-6">
          Ready to experience the Firstcare difference? Contact us today for a
          free quote or to schedule a service.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-firstcare-blue">
              Contact Information
            </h3>
            <p>Phone: 027 540 5400</p>
            <p>Email: Infor@firstcare.co.nz</p>
            <p>Location: 25A Poruru Close, Papakura 2110</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-firstcare-blue mb-4">
              Follow Us
            </h3>
            <p>
              Stay connected and follow us on social media for tips, promotions,
              and updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
