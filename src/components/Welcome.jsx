import React from "react";

// import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.jpg";

function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-firstcare-blue mb-4">
          Welcome to Firstcare Facility Services
        </h1>
        <img
          src={cover2}
          alt="Firstcare Welcome"
          className="mx-auto mb-4 rounded-lg shadow-lg"
        />
        <p className="text-lg">
          At Firstcare Facility Services, we pride ourselves on delivering
          exceptional cleaning solutions tailored to meet your needs in New
          Zealand. Our commitment to quality and customer satisfaction sets us
          apart as a leader in the cleaning industry.
        </p>
      </div>
    </div>
  );
}
export default Welcome;
