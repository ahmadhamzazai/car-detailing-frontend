import React from "react";
import "../styles/Section2.css";
import { services_data } from "../data/services_data.js";

const Section2 = () => {
  return (
    <section className="max-w-screen-2xl mx-auto  px-4 py-16 section2 flex flex-col items-center gap-[2.7rem]">
      <div className="services-text">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-center text-gray-600">
          Professional detailing services that bring out the best in your
          vehicle
        </p>
      </div>
      <div className="services-cards max-w-[1300px] mx-auto flex flex-wrap justify-center gap-6">
        {services_data?.map((card, index) => {
          return (
            <div className="service-card  hover:scale-105 transition-all duration-600 cursor-pointer rounded-lg shadow-xl p-5 flex flex-col items-center justify-center gap-3">
              <div className="image-container rounded-full bg-gray-200 overflow-hidden">
                <img src={card.image} alt="" className="object-contain" />
              </div>
              <h1 className="font-semibold text-xl">{card.heading}</h1>
              <p className="text-sm text-center">{card.description}</p>
              <button className="bg-yellow-500 rounded-full text-base px-4 py-1 text-white font-normal whitespace-nowrap ">
                {card.price}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section2;
