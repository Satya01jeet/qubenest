import React from 'react'
import hero_img from '../assets/images/traveller1.png';
import bg from '../assets/decors/Decore.png';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center pt-24 px-8'>
      {/* text section */}
      <div className="space-y-6 md:ml-24 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            {/* <span className="block text-amber-400 text-xl mb-4">REST, RECHARGE, REPEAT</span> */}
            Your <span className='text-amber-400'> Home</span> <br />Away From<span className='text-amber-400'> Home</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-lg lg:mx-2">
            Our comfortable accommodations offer the perfect escape from the hustle and bustle of city life. Whether you're looking to unwind with a good book or simply enjoy some quiet time, our PG provides the ideal environment for rest and rejuvenation.
          </p>
          <button className="mt-4 px-6 py-3 bg-gold text-black rounded-lg shadow-lg hover:bg-amber-500 active:scale-95 transition ease-in-out">
            Book a tour
          </button>
        </div>

      {/* image section */}
      <div className="my-8 flex md:relative md:w-1/2 justify-center">
          <div className="hidden w-[600px] mt-[-160px] mr-[-150px] md:block">
            <img
              src={bg}
              alt=""
              className="" 
            />
          </div>

          <div className="w-[500px] md:absolute md:top-[-80px] md:w-[600px]">
            <img
              src={hero_img}
              alt="Traveler with luggage"
              className="w-[700px]" 
            />
          </div>
        </div>
    </div>
  )
}

export default HeroSection