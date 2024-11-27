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
import secondImage from '../assets/images/Colive1.jpg';
import thirdImage from '../assets/images/kitchen.png';
import fourthImage from '../assets/images/colive.png';
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
                { text: "A Perfect Stay for Perfect Pairs - Couples", icon: faLock },
            ],
        },
        {
            id: 2,
            image: secondImage,
            alt: "Entertainment space",
            title: "Where Elegance Meets Exceptional Services",
            items: [
                { text: "Bringing Shine to Every Corner - Daily Housekeeping", icon: faBook },
                { text: "Fast Reliable WiFi always", icon: faShieldAlt },
                { text: "Your Security our Priority - 24x7 CCTV Surveilliance", icon: faCouch },
                { text: "Entry/Exit at Your Fingertips - Bio-metric Entry", icon: faLock },
            ],
        },
        {
            id: 3,
            image: thirdImage,
            alt: "Cozy living space",
            title: "Your Dream Stay Made Simple",
            items: [
                { text: "Backup that Never Lets You Down - 24X7 Power Backup", icon: faCouch },
                { text: "Your Kitchen Your Way - Fully Equipped Kitchen", icon: faLock },
                { text: "Laundry Made Easy by You - Self Laundry", icon: faCheckCircle },
                { text: "Pure Water, Pure Life - Unlimited RO Water", icon: faCheckCircle },
                { text: "Unlimited Water Supply - Around the Clock, Around Your Needs", icon: faCheckCircle },
            ],
        },
        {
            id: 4,
            image: fourthImage,
            alt: "Books and workspace",
            title: "Seize the moment, cherish the memories",
            items: [
                { text: "Making Your Abs work", icon: faUsers },
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
