import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.jpg";
import image6 from "../assets/images/img6.jpg";
import image7 from "../assets/images/img7.jpg";
import image8 from "../assets/images/img8.jpg";

const ImageSection = () => {
  const images = [
    { src: image1, alt: "Room Interior 1" },
    { src: image2, alt: "Room Interior 2" },
    { src: image3, alt: "Team Group Photo" },
    { src: image4, alt: "Game Area" },
    { src: image5, alt: "Recliners" },
    { src: image6, alt: "Gym" },
    { src: image7, alt: "Top" },
    { src: image8, alt: "" },
  ];

  const firstAndThirdRowSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const middleRowSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white  mt-8">
      {/* First Row */}
      <div className="mb-">
        <Slider {...firstAndThirdRowSettings}>
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

      {/* Middle Row */}
      <div className="mb-">
        <Slider {...middleRowSettings}>
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

      {/* Third Row */}
      <div>
        <Slider {...firstAndThirdRowSettings}>
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
    </div>
  );
};

export default ImageSection;