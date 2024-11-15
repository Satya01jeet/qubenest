import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import buddyImage from '../assets/images/room1.png';
import soloImage from '../assets/images/room2.png';
import image1 from '../assets/images/img1.png';
import image2 from '../assets/images/img2.png';
import image3 from '../assets/images/img3.png';
import image4 from '../assets/images/img4.png';
import RoomFeatures from './RoomFeatures';
import RoomImage from './RoomImage';

const Rooms = () => {
    const [buddyFeatures, setBuddyFeatures] = useState({
        balcony: 'Attached',
        bathroom: 'Attached',
        duration: '3 Day Trial',
    });

    const [soloFeatures, setSoloFeatures] = useState({
        balcony: 'None',
        bathroom: 'Detached',
        duration: '11 Months',
    });

    const buddyImages = [buddyImage, image1, image2];
    const soloImages = [soloImage, image3, image4];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-0">
            <div className="text-center mb-10 mt-20">
                <h2 className="text-4xl font-extrabold text-yellow-700 tracking-wider drop-shadow-lg">
                    "Comfort and Elegance Redefined"
                </h2>
            </div>

            {/* Responsive column layout for Buddy and Solo options */}
            <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
                {/* Buddy Option */}
                <div className="relative bg-gradient-to-r from-green-200 via-green-300 to-green-400 shadow-2xl rounded-lg p-6 w-full md:w-96">
                    <div className="absolute -top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-br-lg shadow-2xl">
                        Building - Qubenest Elite
                    </div>
                    <div className="text-center mb-4 mt-4">
                        <Slider {...sliderSettings}>
                            {buddyImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="{Buddy Room ${index + 1}}"
                                    className="w-full h-72 object-cover rounded-md mt-2 shadow-xl"
                                />
                            ))}
                        </Slider>
                    </div>
                    <p className="text-lg text-gray-800 font-medium drop-shadow-lg">
                    Qubenst Elite provides comfortable, upscale living spaces designed for convenience and community in Bangalore’s vibrant cityscape.
                    </p>
                    <div className="mt-4 space-y-3">
                        <label className="block font-semibold text-gray-700 mt-2">Living option</label>
                        <select
                            value={buddyFeatures.bathroom}
                            onChange={(e) => setBuddyFeatures({ ...buddyFeatures, bathroom: e.target.value })}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md"
                        >
                            <option value="Attached">Solo</option>
                            <option value="Detached">Co-Living</option>
                        </select>

                        <label className="block font-semibold text-gray-700 mt-2">Duration</label>
                        <select
                            value={buddyFeatures.duration}
                            onChange={(e) => setBuddyFeatures({ ...buddyFeatures, duration: e.target.value })}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md"
                        >
                            <option value="Daily Basis">Daily Basis</option>
                            <option value="Monthly Basis">Monthly Basis</option>
                        </select>

                        <p className="mt-4 text-green-800 text-xl font-semibold drop-shadow-lg">₹1,199* <span className="text-sm">(+ GST as applicable)</span></p>
                        <button className="mt-4 w-full bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 shadow-lg">
                            Package Details
                        </button>
                    </div>
                </div>

                {/* Solo Option */}
                <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 shadow-2xl rounded-lg p-6 w-full md:w-96">
                    <div className="absolute -top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-br-lg shadow-2xl">
                        Building - Qubenest Splendour
                    </div>
                    <div className="text-center mb-4 mt-4">
                        <Slider {...sliderSettings}>
                            {soloImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    className="w-full h-72 object-cover rounded-md mt-2 shadow-xl"
                                />
                            ))}
                        </Slider>
                    </div>
                    <p className="text-lg text-gray-800 font-medium drop-shadow-lg">
                    Qubenest Splendour offers premium co-living spaces in a modern, well-equipped environment, ideal for professionals in Bangalore.
                    </p>
                    <div className="mt-4 space-y-3">
                        <label className="block font-semibold text-gray-700">Living Option</label>
                        <select
                            value={soloFeatures.balcony}
                            onChange={(e) => setSoloFeatures({ ...soloFeatures, balcony: e.target.value })}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
                        >
                            <option value="None">Coliving</option>
                            <option value="Attached">Solo</option>
                        </select>

                        <label className="block font-semibold text-gray-700 mt-2">Bathroom</label>
                        <select
                            value={soloFeatures.bathroom}
                            onChange={(e) => setSoloFeatures({ ...soloFeatures, bathroom: e.target.value })}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
                        >
                            <option value="Detached">Detached</option>
                            <option value="Attached">Attached</option>
                        </select>

                        <label className="block font-semibold text-gray-700 mt-2">Duration</label>
                        <select
                            value={soloFeatures.duration}
                            onChange={(e) => setSoloFeatures({ ...soloFeatures, duration: e.target.value })}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
                        >
                            <option value="11 Months">Daily Basic</option>
                            <option value="11 Months">Weekly Basic</option>
                            <option value="3 Day Trial">Monthly Basis</option>
                        </select>

                        <p className="mt-4 text-red-700 text-xl font-semibold drop-shadow-lg">Oops! No Rooms Available</p>
                        <button className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded cursor-not-allowed shadow-lg">
                            Package Details
                        </button>
                    </div>
                </div>
            </div>

            <RoomFeatures />
            <RoomImage/>
        </div>
    );
};

export default Rooms;