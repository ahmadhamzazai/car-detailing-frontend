import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { review } from "../data/reviews_data";

const Section4 = () => {


  const allreview = [...review, ...review];

  const [activeCard, setActiveCard] = useState(0);

  const goToPrevCard = () => {
    setActiveCard((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextCard = () => {
    setActiveCard((prevIndex) =>
      Math.min(allreview.length - 1, prevIndex + 1)
    );
  };

  const getTransformValue = () => {
    let cardsPerView = 1;
    if (window.innerWidth >= 1024) {
      cardsPerView = 3;
    } else if (window.innerWidth >= 640) {
      cardsPerView = 2;
    }
    return `-${(activeCard / cardsPerView) * 100}%`;
  };

  const isAtStart = activeCard === 0;
  const isAtEnd =
    activeCard >=
    allreview.length -
      (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-screen-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Trusted by luxury car owners across the city
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${getTransformValue()})` }}
            >
              {allreview.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                >
                  <div className="bg-gray-50 rounded-lg shadow-md p-8 h-full flex flex-col justify-between">
                    <div className="mb-6 text-center">
                      <div className="flex justify-center mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current mx-0.5"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 1l2.39 6.75L19 7.64l-5.46 4.73L15.82 19 10 16.5l-5.82 2.5L6.46 12.37 1 7.64l6.61-.89L10 1z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic text-lg">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center mt-auto justify-center">
                      <div className="rounded-full h-14 w-14 flex items-center justify-center text-white text-2xl font-semibold bg-yellow-500 mr-4">
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.car}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isAtStart && (
            <button
              onClick={goToPrevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 text-gray-600 hover:text-gray-800 transition-colors duration-300 transform translate-x-1/2 z-10"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
          )}
          {!isAtEnd && (
            <button
              onClick={goToNextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 text-gray-600 hover:text-gray-800 transition-colors duration-300 transform -translate-x-1/2 z-10"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section4;
