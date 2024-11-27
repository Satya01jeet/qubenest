import React from 'react';
import { useNavigate } from 'react-router-dom';
import blr from '../assets/images/blr2.jpg';

const cities = [
  { name: 'Bangalore', image: blr },
];

const CitySelection = () => {
  const navigate = useNavigate();

  const openRoomsPage = () => {
    navigate('/rooms');
  };

  return (
    <div id="city-section" className="max-w-[1440px] mx-auto text-center lg:py-2 md:mt-16 lg:mt-16 px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 lg:mb-16 font-merriweather font-bold">
        We serve in your city - Bangalore
      </h2>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12 justify-items-center">
        {cities.map((city) => (
          <div
            key={city.name}
            className="p-4 lg:p-6 bg-white shadow-lg rounded-lg w-full max-w-sm h-auto transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 mb-5">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-56 lg:h-56 object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              {city.name === 'Bangalore' ? (
                <button
                  onClick={openRoomsPage}
                  className="w-full px-6 py-3 bg-gold text-black rounded-lg shadow-md 
                           hover:bg-yellow-400 transition-colors duration-300
                           text-lg font-medium"
                >
                  View Rooms
                </button>
              ) : (
                <button
                  className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md
                           cursor-not-allowed transition-colors duration-300
                           text-lg font-medium"
                  disabled
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view without slider */}
      <div className="md:hidden px-4 pb-8">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white shadow-lg rounded-lg p-4 h-auto mx-2"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div
              className="font-semibold text-xl text-gray-700 mb-4"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}
            >
              {city.name}
            </div>
            <div className="pb-4">
              {city.name === 'Bangalore' ? (
                <button
                  onClick={openRoomsPage}
                  className="w-full px-6 py-3 bg-gold text-black rounded-lg shadow-md 
                           hover:bg-yellow-400 transition-colors duration-300
                           text-lg font-medium"
                >
                  View Rooms
                </button>
              ) : (
                <button
                  className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md
                           cursor-not-allowed transition-colors duration-300
                           text-lg font-medium"
                  disabled
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;
