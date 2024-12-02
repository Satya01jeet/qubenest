import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";

const ImageSection = () => {
  const images = [
    { src: image1, alt: "Room Interior 1" },
    { src: image2, alt: "Room Interior 2" },
    { src: image3, alt: "Team Group Photo" },
    { src: image4, alt: "Game Area" },
  ];

  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For screens <= 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Facilities</h2>
      </div>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSection;
