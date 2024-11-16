import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';

import blr from '../assets/images/blr.png';
import mum from '../assets/images/mum.png';
import del from '../assets/images/del.png';
import pune from '../assets/images/pune.png';

const cities = [
  { name: 'Bangalore', image: blr },
  { name: 'Pune', image: pune },
  { name: 'Mumbai', image: mum },
  { name: 'Delhi NCR', image: del },
];

const CitySelection = () => {

  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openRoomsPage = () => {
    navigate('/rooms');
  };

  return (
    <div className="max-w-[1440px] mx-auto text-center lg:py-2 px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16">
        Cities We Serve
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
                className="w-full h-48 lg:h-56 object-cover rounded-lg"
              />
            </div>
            <div
              className="font-semibold text-xl lg:text-2xl text-gray-700 mb-5"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}
            >
              {city.name}
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

      {/* Mobile view with enhanced slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {cities.map((city) => (
            <div key={city.name} className="px-4 pb-8">
              <div className="bg-white shadow-lg rounded-lg p-4 h-auto mx-2">
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CitySelection;