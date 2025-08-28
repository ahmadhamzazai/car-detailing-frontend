import React from 'react'
import { PiCarProfileFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 mx-auto right-0  z-10">
      <header>
        <nav className="flex items-center justify-between py-4 px-4 text-white">
          <div className="flex items-center justify-center gap-2">
            <div className="text-xl cursor-pointer text-yellow-400">
              <PiCarProfileFill />
            </div>
            <h1 className="text-xl font-semibold cursor-pointer">DetailPro</h1>
          </div>

          <div className="w-1/2 items-center justify-center sm:text-base">
            <ul className="flex items-center justify-center gap-[3rem] list-none ">
              <li
                className="cursor-pointer hover:text-yellow-400"
                onClick={() =>
                  document.getElementById("home").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-yellow-400"
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                About
              </li>
              <li
                className="cursor-pointer hover:text-yellow-400"
                onClick={() =>
                  document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Services
              </li>

              <li
                className="cursor-pointer hover:text-yellow-400"
                onClick={() =>
                  document.getElementById("reviews").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Reviews
              </li>
              <li
                className="cursor-pointer hover:text-yellow-400"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Contact
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-3">
            <button
              className="bg-yellow-400 whitespace-nowrap text-white rounded-full hover:bg-gray-800 border border-transparent hover:border-yellow-600"
              onClick={() =>
                document.getElementById("book-appointment").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Book Now
            </button>
            <div className="menu">
              <HiOutlineMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar
