import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
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
  faCamera 
} from '@fortawesome/free-solid-svg-icons';

import featureImage from '../assets/images/colive.png';
import secondImage from '../assets/images/colive2.png';
import thirdImage from '../assets/images/colive.png';
import fourthImage from '../assets/images/books.png';
import fifthImage from '../assets/images/gym.png';

const Feature = () => {
    const sections = [
        {
            id: 1,
            image: featureImage,
            alt: "Group of people enjoying",
            title: "HOME BEYOND WALLS",
            items: [
                { text: "Enjoy fully furnished rooms at affordable prices.", icon: faHome },
                { text: "No hidden fees, no brokerage charges", icon: faDollarSign },
                { text: "Just one month's security deposit", icon: faLock },
            ],
        },
        {
            id: 2,
            image: secondImage,
            alt: "Entertainment space",
            title: "TOGETHER AT HOME",
            items: [
                { text: "Entertainment Room", icon: faUsers },
                { text: "High-Speed WiFi", icon: faWifi },
                { text: "24*7 Power Supply", icon: faBolt },
                { text: "2-wheeler Parking", icon: faMotorcycle },
            ],
        },
        {
            id: 3,
            image: thirdImage,
            alt: "Cozy living space",
            title: "COZY SPACE",
            items: [
                { text: "Designed for comfort and style.", icon: faCouch },
                { text: "Perfect for relaxation and gatherings.", icon: faUsers },
                { text: "Embrace a welcoming atmosphere.", icon: faCheckCircle },
            ],
        },
        {
            id: 4,
            image: fourthImage,
            alt: "Books and workspace",
            title: "SPACE FOR WORK",
            items: [
                { text: "Books to read", icon: faBook },
                { text: "WFH Friendly", icon: faCouch },
                { text: "24*7 Support", icon: faShieldAlt },
                { text: "High Security", icon: faLock },
            ],
        },
        {
            id: 5,
            image: fifthImage,
            alt: "Active shared spaces",
            title: "ACTIVE SHARED SPACES",
            items: [
                { text: "Gym access", icon: faDumbbell },
                { text: "Fully equipped kitchen for your meals", icon: faUtensils },
                { text: "Laundry Service", icon: faSoap },
                { text: "CCTV Surveillance", icon: faCamera },
            ],
        },
    ];

    return (
        <div className="max-w-[1440px] mx-auto space-y-20 p-6 mt-8 lg:p-12 xl:p-16">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 justify-center items-center"
                >
                    <div 
                        className={`w-full md:w-1/2 ${
                            section.id % 2 === 0 ? 'md:order-last' : ''
                        }`}
                    >
                        <div className={`bg-amber-100 p-4 lg:p-6 rounded-lg shadow-lg inline-block 
                            ${section.id % 2 === 0 ? 'md:ml-8 lg:ml-12 xl:ml-16' : 'md:mr-8 lg:mr-12 xl:mr-16'}`}
                        >
                            <img
                                src={section.image}
                                alt={section.alt}
                                className="rounded-lg w-full h-auto max-w-2xl"
                            />
                        </div>
                    </div>
                    <div className={`w-fit md:w-1/2 max-w-xl md:max-w-none 
                        ${section.id % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-start md:text-start text-gray-800">
                            {section.title}
                        </h2>
                        <ul className="flex flex-col justify-center md:text-center text-base md:text-lg lg:text-xl font-semibold text-gray-700 space-y-4 max-w-fit">
                            {section.items.map((item) => (
                                <li key={`${section.id}-${item.text}`} 
                                    className="flex items-center gap-3 transition-all duration-300 hover:text-gray-900 justify-start cursor-default"
                                >
                                    <FontAwesomeIcon icon={item.icon} className="text-gray-700" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feature;
