import React, { useState } from "react";
import { motion } from "framer-motion";
import { services_data } from "../data/services_data.js";

const Section4 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    carMakeModel: "",
    preferredDate: "",
    preferredTime: "",
    selectedServices: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.selectedServices.includes(service.heading);
      return {
        ...prev,
        selectedServices: alreadySelected
          ? prev.selectedServices.filter((s) => s !== service.heading)
          : [...prev.selectedServices, service.heading],
      };
    });
  };

  // correct total calculation
  const totalPrice = formData.selectedServices.reduce((acc, selected) => {
    const service = services_data.find((s) => s.heading === selected);
    if (!service) return acc;
    const price = parseInt(service.price.replace(/[^0-9]/g, "")) || 0;
    return acc + price;
  }, 0);

  // discount logic
  const countExcludingMobile = formData.selectedServices.filter(
    (s) => s !== "Mobile Service"
  ).length;

  let discountRate = 0;
  if (countExcludingMobile === 2) discountRate = 0.15;
  if (countExcludingMobile === 4) discountRate = 0.25;
  if (formData.selectedServices.length === services_data.length)
    discountRate = 0.3;

  const discount = totalPrice * discountRate;
  const finalPrice = totalPrice - discount;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    setSubmitted(true);
  };

  return (
    <motion.section
      id="book-appointment"
      className="bg-gray-50 w-full py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Book Your Appointment
        </h2>
        <p className="text-sm text-gray-600">
          Select your services and schedule your car’s premium detailing.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address *"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full col-span-2 px-3 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
                <input
                  type="text"
                  name="carMakeModel"
                  placeholder="Car Make & Model *"
                  value={formData.carMakeModel}
                  onChange={handleChange}
                  className="w-full col-span-2 px-3 py-2 text-sm rounded-md bg-gray-100 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                Choose Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services_data.map((service) => (
                  <label
                    key={service.heading}
                    className={`flex items-center justify-between px-3 py-2 border rounded-md cursor-pointer transition text-sm ${
                      formData.selectedServices.includes(service.heading)
                        ? "bg-yellow-50 border-yellow-400"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.selectedServices.includes(
                          service.heading
                        )}
                        onChange={() => handleServiceToggle(service)}
                        className="accent-yellow-500"
                      />
                      <span>{service.heading}</span>
                    </div>
                    <span className="font-semibold">
                      {service.price.replace("Starting ", "")}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            {formData.selectedServices.length > 0 && (
              <div className="bg-gray-50 rounded-md p-4 text-sm">
                <h3 className="font-semibold mb-2">Price Summary</h3>
                <p>Total: ${totalPrice}</p>
                {discount > 0 && (
                  <p className="text-green-600">
                    Discount ({discountRate * 100}%): -${discount.toFixed(2)}
                  </p>
                )}
                <p className="font-bold text-gray-900">
                  Final Price: ${finalPrice.toFixed(2)}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-base transition-transform transform hover:scale-105"
            >
              Confirm Appointment
            </button>
          </form>
        ) : (
          <div className="text-center py-12 px-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Appointment Booked!
            </h3>
            <p className="text-gray-700 text-sm mb-1">
              Thank you{" "}
              <span className="font-semibold">{formData.fullName}</span>.
            </p>
            <p className="text-gray-700 text-sm">
              Your estimated total is{" "}
              <span className="font-bold">${finalPrice.toFixed(2)}</span>. A
              confirmation will be sent shortly.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Section4;
