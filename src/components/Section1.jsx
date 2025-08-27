import React from 'react'
import "../styles/Section1.css"
import coverImage from "../assets/lambo.png"

const Section1 = () => {
  return (
    <section className="relative w-full mx-auto section1">
      <div className="lambo-shade"></div>
      <img
        src={coverImage}
        alt=""
        className="object-cover w-full lambo-image"
      />
      <div className="absolute section1-text">
        <h1>where every detail truely matters</h1>
        <p className="m-0 p-0 text-center">
          AutoDetail offers efficient, reliable detailing that restores shine
          and preserves your vehicle.
        </p>
        <button className="relative bg-yellow-500 text-gray-900 font-semibold px-8 py-2 lg:py-3 rounded-full shadow-lg transition-all duration-300 group overflow-hidden">
          <span className="relative z-10 sm:text-sm md:text-base lg:text-lg transition-colors duration-300 group-hover:text-white">
            Make Appointment
          </span>
          <div className="absolute inset-0 bg-gray-900 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
        </button>
      </div>
    </section>
  );
}

export default Section1
