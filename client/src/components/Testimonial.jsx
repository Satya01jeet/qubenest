import React, { useState } from 'react';
import saurabh from '../assets/images/saurabh.jpg';
import arnav from '../assets/images/arnav.png';
import saddam from '../assets/images/saddam.jpg';
import { HiArrowCircleUp, HiArrowCircleDown } from 'react-icons/hi';

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

  const nextTestimonial = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
      setAnimate(false);
    }, 300); // Duration matches animation duration
  };

  const prevTestimonial = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
      setAnimate(false);
    }, 300); // Duration matches animation duration
  };

  return (
    <div className="flex flex-col md:flex-row justify-around px-4 md:px-24 my-4 md:my-28 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="w-full md:max-w-xl mx-auto text-center md:text-left p-4">
        <p className="text-black font-bold text-3xl md:text-5xl">What People Say</p>
        <p className="text-black font-bold text-3xl md:text-5xl">About Us.</p>
      </div>

      {/* Testimonial Section */}
      <div
        className={`shadow-xl rounded-lg p-6 md:p-8 max-h-[300px] w-full md:w-1/2 mx-auto transition-opacity duration-300 flex flex-col justify-center items-center ${
          animate ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ minHeight: '300px' }}
      >
        {/* Profile Picture and Testimonial Text */}
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
            <p className="text-lg md:text-xl font-semibold text-black mt-4">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
          </div>
        </div>
      </div>

      {/* Pagination Arrows */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <button onClick={prevTestimonial} className="rounded-full hover:scale-110 transition-all">
          <HiArrowCircleUp size={30} />
        </button>
        <button onClick={nextTestimonial} className="rounded-full hover:scale-110 transition-all">
          <HiArrowCircleDown size={30} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;