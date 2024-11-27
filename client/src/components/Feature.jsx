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

import featureImage from '../assets/images/couple.png';
import secondImage from '../assets/images/colive2.png';
import thirdImage from '../assets/images/colive.png';
import fourthImage from '../assets/images/books.png';
import fifthImage from '../assets/images/gym.png';

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
                { text: "Fully Equipped Luxurious Homes", icon: faLock },
                { text: "Loaded with Ammenities for Ultimate Comfort", icon: faLock },
            ],
        },
        {
            id: 2,
            image: secondImage,
            alt: "Entertainment space",
            title: "Where elegance meets exceptional service",
            items: [
                { text: "Daily housekeeping - bringing shine to every corner", icon: faBook },
                { text: "24x7 CCTV serveiliance - your security our priority", icon: faCouch },
                { text: "Fast reliable wifi always", icon: faShieldAlt },
                { text: "Bio-metrics entry/exit", icon: faLock },
            ],
        },
        {
            id: 3,
            image: thirdImage,
            alt: "Cozy living space",
            title: "Seize the moment, cherish the memories",
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
            title: "Where elegance meets exceptional service",
            items: [
                { text: "Entertainment Room", icon: faUsers },
                { text: "High-Speed WiFi", icon: faWifi },
                { text: "24*7 Power Supply", icon: faBolt },
                { text: "2-wheeler Parking", icon: faMotorcycle },
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
        <div className='space-y-4 my-20'>
            {features.map((feature)=>(
                <div id={feature.id}
                className={`flex flex-col ${feature.id%2 === 0 ? 'md:flex-row':'md:flex-row-reverse'} md:items-center md:justify-evenly md:shadow-none shadow-lg rounded-lg mx-4 p-4 my-10`}>

                    {/* Image section */}
                    <div className='w-full md:w-1/2 px-10 py-5'>
                        <img src={feature.image} alt={feature.alt} className='rounded-ss-[50px] rounded-ee-[50px]' />
                    </div>

                    {/* Text section */}
                    <div className='flex flex-col md:w-1/2 items-center'>
                        <h2 className='text-2xl md:text-3xl mb-8 font-bold text-centre font-merriweather'>{feature.title}</h2>
                        <div className=''>
                            {feature.items.map((item) => (
                                <div className='text-center md:text-xl'>
                                    {item.text}
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
