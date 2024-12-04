import React, { useState, useEffect } from 'react';
import saurabh from '../assets/images/saurabh.jpg';
import arnav from '../assets/images/arnav.png';
import saddam from '../assets/images/saddam.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Saurabh Prasad',
      position: 'Software Engineer',
      text: 'Qubenest made my move so easy! No more dealing with brokers or landlords. The spaces are well-maintained, fully furnished, and super comfortable. It feels like home!',
      image: saurabh,
    },
    {
      name: 'Arnav Nath',
      position: 'State level badminton player',
      text: 'Qubenest is the best platform I have ever used! The spaces are not only great but also affordable!',
      image: arnav,
    },
    {
      name: 'Saddam Hussain',
      position: 'Manager',
      text: 'I have tried other co-living platforms, but Qubenest is by far the best. The spaces are well-maintained, and the community atmosphere is fantastic. I feel right at home here.',
      image: saddam,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setAnimate(false); // Reset animation after transition
      },500); // Animation duration matches CSS transition
    }, 4000); // 3-second interval for testimonial rotation

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <div className="flex flex-col md:flex-row justify-around px-4 md:px-24 my-4 md:my-28 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="w-full md:max-w-xl mx-auto text-center md:text-left p-4 font-merriweather font-bold">
        <p className="text-black text-4xl md:text-5xl">What People Say</p>
        <p className="text-black text-4xl md:text-5xl">About Us</p>
      </div>

      {/* Testimonial Section */}
      <div
        className={`shadow-xl rounded-lg p-6 md:p-8 max-h-[300px] w-full md:w-1/2 mx-auto transition-opacity duration-300 flex flex-col justify-center items-center ${
          animate ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ minHeight: '300px' }}
      >
        {/* Profile Picture and Testimonial Text */}
        {testimonials[currentIndex] && (
          <div key={currentIndex} className="flex flex-col items-center gap-4">
            {testimonials[currentIndex].image && (
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="rounded-full w-20 h-20 md:w-24 md:h-24"
              />
            )}

            {/* Text, Name, and Position */}
            <div className="text-center">
              <p className="text-md md:text-lg text-gray-600 font-light italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-lg md:text-xl font-semibold text-black mt-4">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
