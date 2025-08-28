import React, { useState } from "react";
import "../styles/Section2.css";
import { services_data } from "../data/services_data.js";
import { motion } from "framer-motion";

const Section2 = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showSummary, setShowSummary] = useState(true); // 👈 new state for toggle

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
    setShowSummary(true); // 👈 always show summary when selecting services
  };

  // calculate totals
  const totalPrice = selectedServices.reduce((acc, s) => {
    const price = parseInt(s.price.replace(/[^0-9]/g, "")) || 0;
    return acc + price;
  }, 0);

  // discount logic
  const countExcludingMobile = selectedServices.filter(
    (s) => s.heading !== "Mobile Service"
  ).length;

  let discountRate = 0;
  if (countExcludingMobile >= 2 && countExcludingMobile < 4) {
    discountRate = 0.15;
  }
  if (countExcludingMobile >= 4) {
    discountRate = 0.25;
  }
  if (selectedServices.length === services_data.length) {
    discountRate = 0.3;
  }

  const discount = totalPrice * discountRate;
  const finalPrice = totalPrice - discount;

  return (
    <motion.section
      id="services"
      className="px-4 py-16 flex flex-col items-center gap-8"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-gray-600 mb-12">
          Professional detailing services that bring out the best in your
          vehicle
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services_data.map((card, index) => (
          <div
            key={index}
            className={`w-[250px] hover:scale-105 transition-all shadow-xl p-5 rounded-lg flex flex-col items-center gap-3 ${
              selectedServices.includes(card)
                ? "border-2 border-yellow-400"
                : ""
            }`}
          >
            <img src={card.image} alt="" className="w-20 h-20 object-contain" />
            <h1 className="font-semibold text-xl">{card.heading}</h1>
            <p className="text-sm text-center">{card.description}</p>

            <button
              onClick={() => toggleService(card)}
              className={`rounded-full px-4 py-2 text-white font-medium ${
                selectedServices.includes(card)
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {selectedServices.includes(card) ? "Selected" : card.price}
            </button>
          </div>
        ))}
      </div>

      {/* Booking Summary */}
      {selectedServices.length > 0 && showSummary && (
        <div className="mt-8 p-5 bg-gray-100 rounded-lg w-full max-w-md text-center shadow-md relative">
          {/* Close Button */}
          <button
            onClick={() => setShowSummary(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 font-bold text-lg"
          >
            ✕
          </button>

          <h2 className="font-bold text-xl mb-2">Booking Summary</h2>
          <ul className="mb-3">
            {selectedServices.map((s, i) => (
              <li key={i} className="text-gray-700">
                {s.heading} - {s.price.replace("Starting ", "")}
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          {discount > 0 && (
            <p className="text-green-600">
              Discount ({discountRate * 100}%): -${discount.toFixed(2)}
            </p>
          )}
          <h3 className="font-bold text-lg">
            Final Price: ${finalPrice.toFixed(2)}
          </h3>
          <button
            onClick={() =>
              document.getElementById("book-appointment").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Proceed to Booking
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Section2;
