import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.jpg";
import ScrollFadeImage from "./ScrollFadeImage";

function Welcome() {
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-firstcare-blue">
            Welcome to Firstcare Facility Services
          </h1>
          <p className="text-xl text-gray-700">
            At Firstcare Facility Services, we pride ourselves on delivering
            exceptional cleaning solutions tailored to meet your needs in New
            Zealand.
          </p>
        </motion.div>

        <ScrollFadeImage
          src={cover2}
          alt="Firstcare Facility Services"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Welcome;
