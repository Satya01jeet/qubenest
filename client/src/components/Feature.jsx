import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faChessKnight,
  faWifi,
  faBolt,
  faMotorcycle,
  faHome,
  faDollarSign,
  faLock,
  faCouch,
  faUsers,
  faBook,
  faShieldAlt,
  faDumbbell,
  faUtensils,
  faSoap,
  faHeart,
  faBroom,
  faGlassWater,
  faFaucet,
  faHeartbeat,
  faSpa,
} from '@fortawesome/free-solid-svg-icons';

import featureImage from '../assets/images/couple.png';
import secondImage from '../assets/images/Colive1.jpg';
import thirdImage from '../assets/images/kitchen.png';
import fourthImage from '../assets/images/colive.png';
import fifthImage from '../assets/images/gym1.png';

const Feature = () => {
  const features = [
    {
      id: 1,
      image: featureImage,
      alt: "Group of people enjoying",
      title: "It's not ROCKET science, it's POCKET science",
      items: [
        { text: "Say Goodbye to Brokers", icon: faDollarSign },
        { text: "Luxury @Reasonable Price", icon: faHome },
        { text: "Fully Equipped Luxurious Homes", icon: faCouch },
        { text: "Loaded with Amenities for Ultimate Comfort", icon: faBolt },
        { text: "A Perfect Stay for Perfect Pairs - Couples", icon: faHeart }, // Updated
      ],
    },
    {
      id: 2,
      image: secondImage,
      alt: "Entertainment space",
      title: "Where Elegance Meets Exceptional Services",
      items: [
        { text: "Bringing Shine to Every Corner - Daily Housekeeping", icon: faBroom }, // Updated
        { text: "Fast Reliable WiFi always", icon: faWifi },
        { text: "Your Security our Priority - 24x7 CCTV Surveillance", icon: faShieldAlt },
        { text: "Entry/Exit at Your Fingertips - Biometric Entry", icon: faLock },
      ],
    },
    {
      id: 3,
      image: thirdImage,
      alt: "Cozy living space",
      title: "Your Dream Stay Made Simple",
      items: [
        { text: "Backup that Never Lets You Down - 24X7 Power Backup", icon: faBolt },
        { text: "Your Kitchen Your Way - Fully Equipped Kitchen", icon: faUtensils },
        { text: "Laundry Made Easy by You - Self Laundry", icon: faSoap },
        { text: "Pure Water, Pure Life - Unlimited RO Water", icon: faGlassWater }, // Updated
        { text: "Unlimited Water Supply - Around the Clock", icon: faFaucet }, // Updated
      ],
    },
    {
      id: 4,
      image: fourthImage,
      alt: "Books and workspace",
      title: "Seize the moment, cherish the memories",
      items: [
        { text: "Your Ultimate Fun Destination - Entertainment Zone", icon: faUsers },
        { text: "Unleash Your Inner Champion - Playzone", icon: faChessKnight },
        { text: "The Art of Pure Relaxation - Recliner to Relax", icon: faCouch },
      ],
    },
    {
      id: 5,
      image: fifthImage,
      alt: "Active shared spaces",
      title: "Making Your Abs Work",
      items: [
        { text: "Master Your Strength - Self Weight Training", icon: faDumbbell },
        { text: "Heart Strong, Body Fit - Cardio Section Available", icon: faHeartbeat }, // Updated
        { text: "Your Path to Mindful Living - Yoga Mat and Space Available", icon: faSpa }, // Updated
      ],
    },
  ];

  return (
    <div className="space-y-4 my-10 ">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex flex-col ${
            feature.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
          } md:items-center md:justify-evenly md:shadow-none shadow-lg rounded-lg mx-4 p-4 my-10`}
        >
          {/* Image section */}
          <div className="w-full md:w-1/2 px-10 py-5 flex justify-center">
            <img
              src={feature.image}
              alt={feature.alt}
              className="rounded-ss-[50px] rounded-ee-[50px] md:shadow-xl md:w-[500px]"
            />
          </div>

          {/* Text section */}
          <div className="flex flex-col md:w-1/2 items-center">
            <h2 className="text-2xl md:text-4xl mb-8 font-bold text-center font-merriweather">
              {feature.title}
            </h2>
            <div className="space-y-4">
              {feature.items.map((item, index) => (
                <div key={index} className="flex items-center text-left md:text-xl">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-amber-500 mr-4"
                    size="lg"
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
