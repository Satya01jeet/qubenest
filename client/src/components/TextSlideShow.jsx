import React, { useEffect, useState } from 'react';

const TextSlideshow = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const slides = [
        "Zero Brokerage, Zero Surprises",
        "One bill covers all utilities",
        "Minutes from Work",
        "Connect with Like-Minded Professionals"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrIndex(prevIndex => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-14 overflow-hidden bg-gradient-to-r from-orange-400 to-orange-700 mt-8 rounded-xl text-white md:w-[500px] md:ml-24 md:mt-14">
            <div className="absolute w-full h-full flex items-center justify-center px-8 py-4">
                {slides.map((text, index) => (
                    <div
                        key={index}
                        className={`absolute w-full text-center transition-all duration-1000 ease-in-out transform
                            ${index === currIndex 
                                ? 'translate-x-0 opacity-100' 
                                : index < currIndex 
                                    ? '-translate-x-full opacity-0' 
                                    : 'translate-x-full opacity-0'
                            }`}
                    >
                        <h2 className="text-lg font-semibold">
                            {text}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextSlideshow;