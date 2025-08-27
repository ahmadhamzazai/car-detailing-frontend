import React from "react";
import { plans } from "../data/plans_data";

const Section3 = () => {


  return (
    <div className="py-16 bg-gray-50 w-full mx-auto">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-gray-600 mb-12">
          Choose the perfect detailing package for your vehicle's needs and
          budget
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center p-8 bg-white rounded-xl shadow-xl w-full max-w-sm transition-all duration-300 transform hover:scale-105 ${
                plan.isPopular ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                {plan.price}
              </p>
              <p className="text-gray-500 mb-6 text-center">
                {plan.description}
              </p>
              <ul className="text-left w-full mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
