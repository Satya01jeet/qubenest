import React from 'react';
import hero_img from '../assets/images/traveller1.png';
import bg from '../assets/decors/Decore.png';

const HeroSection = () => {
  return (
    <section className="flex flex-1 items-center justify-center bg-gradient-to-r min-h-screen overflow-hidden md:mb-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Left Section */}
        <div className="space-y-6 md:ml-24 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block text-amber-400 text-xl mb-4">REST, RECHARGE, REPEAT</span>
            Your Home <br /> Away From Home
          </h1>
          <p className="text-gray-600 text-lg md:text-lg lg:mx-2">
            Our comfortable accommodations offer the perfect escape from the hustle and bustle of city life. Whether you're looking to unwind with a good book or simply enjoy some quiet time, our PG provides the ideal environment for rest and rejuvenation.
          </p>
          <button className="mt-4 px-6 py-3 bg-gold text-black rounded-lg shadow-lg hover:bg-amber-500 active:scale-95 transition ease-in-out">
            Book a tour
          </button>
        </div>
        
        {/* Right Section */}
        <div className="relative">
          <div className="mt-[-100px] ml-[100px] w-full">
            <img
              src={bg}
              alt=""
              className="hidden md:block w-full" 
            />
          </div>

          <div className="overflow-hidden absolute top-[80px] left-[-100px] transform">
            <img
              src={hero_img}
              alt="Traveler with luggage"
              className="hidden md:block w-[700px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;