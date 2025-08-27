import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Section6 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-8 text-center md:text-left">
          {/* Logo and Tagline */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-extrabold text-yellow-500 mb-3">
              DetailPro
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Premium car care services that restore your vehicle's showroom
              brilliance.
            </p>
            <div className="flex mt-6 space-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-bold text-xl text-white mb-5">Contact Info</h4>
            <ul className="space-y-3 text-base text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                123 Auto Street, City, ST 12345
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 00.95.695l2.798 1.679a1 1 0 010 1.614l-2.798 1.679A1 1 0 003.153 8H2a1 1 0 01-1-1V3zM15 17a1 1 0 01-1 1h-2.153a1 1 0 00-.95-.695l-2.798-1.679a1 1 0 010-1.614l2.798-1.679A1 1 0 0013.847 12H14a1 1 0 011 1v4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.75A.75.75 0 0110 5zm-.22 9.22a.75.75 0 011.06 0L12.5 16.5l-2 2-2-2 2-2 1.22 1.22z"
                    clipRule="evenodd"
                  />
                </svg>
                (555) 123-4567
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@detailpro.com
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="font-bold text-xl text-white mb-5">
              Business Hours
            </h4>
            <ul className="space-y-3 text-base text-gray-400">
              <li>
                <span className="font-semibold text-white">
                  Monday - Friday:
                </span>{" "}
                8:00 AM - 6:00 PM
              </li>
              <li>
                <span className="font-semibold text-white">Saturday:</span> 9:00
                AM - 5:00 PM
              </li>
              <li>
                <span className="font-semibold text-white">Sunday:</span> 10:00
                AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          © {currentYear} DetailPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Section6;
