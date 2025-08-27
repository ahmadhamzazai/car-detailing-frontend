import React from "react";

const Section5 = () => {
  return (
    <section
      id="book-appointment"
      className="bg-gray-50 w-full mx-0 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Book Your Appointment</h2>
        <p className="text-gray-600 mb-12">
          Ready to give your car the premium treatment it deserves?
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your full name"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(555) 123-4567"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="emailAddress" className="text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="your.email@example.com"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="carMakeModel" className="text-sm font-medium mb-1">
              Car Make & Model *
            </label>
            <input
              type="text"
              id="carMakeModel"
              name="carMakeModel"
              placeholder="e.g., BMW X5"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="serviceType" className="text-sm font-medium mb-1">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400 text-gray-400"
            >
              <option value="">Select a service</option>
              <option value="interior-detailing">
                Interior Detailing - $89
              </option>
              <option value="exterior-detailing">
                Exterior Detailing - $129
              </option>
              <option value="ceramic-coating">Ceramic Coating - $399</option>
              <option value="engine-bay-cleaning">
                Engine Bay Cleaning - $79
              </option>
              <option value="full-detailing-package">
                Full Detail Package - $199
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="preferredDate" className="text-sm font-medium mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="preferredTime" className="text-sm font-medium mb-1">
              Preferred Time *
            </label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              min="10:00"
              max="18:00"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-400"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:scale-105 hover:bg-yellow-500 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Section5;
