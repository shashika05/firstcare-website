import React, { useState } from "react";
import ScrollFadeImage from "./ScrollFadeImage";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import getintouch from "../assets/getintouch.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <ScrollFadeImage
            src={getintouch}
            alt="Contact Firstcare"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-firstcare-blue mb-8">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-firstcare-blue"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-firstcare-blue"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-firstcare-blue"
                rows="4"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-firstcare-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <div className="bg-white p-8 flex flex-col items-center rounded-2xl shadow-2xl">
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
              <p>Email: info@firstcare.co.nz</p>
              <p>Location: 25A Poruru Close, Papakura 2110</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-firstcare-blue mb-4">
                Follow Us
              </h3>
              <p>
                Stay connected and follow us on social media for tips,
                promotions, and updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
