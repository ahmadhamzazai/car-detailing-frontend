import React from 'react'
import "../styles/Section1.css"
import coverImage from "../assets/lambo.png"

const Section1 = () => {
  return (
    <section className="relative max-w-screen-2xl mx-auto section1">
      <div className="lambo-shade"></div>
      <img
        src={coverImage}
        alt=""
        className="object-cover w-full lambo-image"
      />
      <div className='absolute section1-text'>
        <h1>where every detail truely matters</h1>
        <p className='m-0 p-0 text-center'>
          AutoDetail offers efficient, reliable detailing that restores shine
          and preserves your vehicle.
        </p>
        <button className='bg-yellow-600'>Make Appointment</button>
      </div>
    </section>
  );
}

export default Section1
