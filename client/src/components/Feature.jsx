import React from 'react';
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
                "Enjoy comfortable, fully furnished rooms at affordable prices.",
                "No hidden fees, no brokerage charges",
                "Just one month's security deposit",
            ],
        },
        {
            id: 2,
            image: secondImage,
            alt: "Entertainment space",
            title: "TOGETHER AT HOME",
            items: [
                "Entertainment Room",
                "High-Speed WiFi",
                "24*7 Power Supply",
                "2-wheeler Parking",
            ],
        },
        {
            id: 3,
            image: thirdImage,
            alt: "Cozy living space",
            title: "COZY SPACE",
            items: [
                "Designed for comfort and style.",
                "Perfect for relaxation and gatherings.",
                "Embrace a welcoming atmosphere.",
            ],
        },
        {
            id: 4,
            image: fourthImage,
            alt: "Books and workspace",
            title: "SPACE FOR WORK",
            items: [
                "Books to read",
                "WFH Friendly",
                "24*7 Support",
                "High Security",
            ],
        },
        {
            id: 5,
            image: fifthImage,
            alt: "Active shared spaces",
            title: "ACTIVE SHARED SPACES",
            items: [
                "Gym access",
                "Fully equipped kitchen for your meals",
                "Laundry Service",
                "CCTV Surveillance",
            ],
        },
    ];

    return (
        <div className="max-w-[1440px] mx-auto space-y-20 p-6 lg:p-12 xl:p-16">
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
                    <div className={`w-full md:w-1/2 max-w-xl mx-auto md:max-w-none 
                        ${section.id % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-center md:text-center text-gray-800">
                            {section.title}
                        </h2>
                        <ul className="text-center md:text-center text-base md:text-lg lg:text-xl font-semibold text-gray-700 space-y-4">
                            {section.items.map((item) => (
                                <li key={`${section.id}-${item}`} 
                                    className="transition-all duration-300 hover:text-gray-900"
                                >
                                    {item}
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