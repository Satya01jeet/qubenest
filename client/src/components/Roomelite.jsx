import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaFan, FaBed } from "react-icons/fa";
import Room1 from "../assets/images/room1.png";
import Room2 from "../assets/images/room2.png";
import Cupboard from "../assets/images/cupboard.jpg";
import Room3 from "../assets/images/room3.jpg";

import RoomFeatures from "./RoomFeatures";

const Room = () => {
    const navigate = useNavigate(); // Initialize navigate

    const featureIcons = {
        "Mini Fridge": <FaFan className="text-green-500" />,
        "Double Bed": <FaBed className="text-yellow-600" />,
    };

    const listings = [
        {
            title: "Single Sharing Room",
            price: "₹14,999",
            discountPrice: "₹16,999",
            discount: "12% off",
            feature: ["Mini Fridge", "Double Bed"],
            rating: "4.5",
            reviews: 102,
            images: [Room1, Cupboard, Room3],
        },
        {
            title: "Couple Sharing Room",
            price: "₹18,999",
            discountPrice: "₹24,999",
            discount: "25% off",
            feature: ["Mini Fridge", "Double Bed"],
            rating: "4.6",
            reviews: 120,
            images: [Room2, Room3, Cupboard],
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="bg-white mt-20">
            <div className="text-center bg-white text-gray-800 py-6">
                <h1 className="text-6xl font-bold font-merriweather">
                    Qubenest <span className="text-amber-500">Elite</span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-white min-h-96 mt-4">
                <div className="flex flex-wrap gap-6 lg:w-2/3">
                    {listings.map((listing, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[48%] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                        >
                            <div className="relative">
                                <Slider {...sliderSettings}>
                                    {listing.images.map((image, idx) => (
                                        <div key={idx}>
                                            <img
                                                src={image}
                                                alt={`Room ${index + 1} - Image ${idx + 1}`}
                                                className="w-full h-96 object-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">{listing.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                                    {listing.feature.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="flex items-center gap-2 bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full"
                                        >
                                            {featureIcons[feature] || null}
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-2">
                                    <div className="flex items-center">
                                        <span className="text-xl font-bold text-gray-800">
                                            {listing.price}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through ml-3">
                                            {listing.discountPrice}
                                        </span>
                                        <span className="text-sm text-green-600 font-semibold ml-2">
                                            {listing.discount}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">GST inclusive</p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        onClick={() => navigate("/checkout")} // Navigate to checkout
                                        className="w-full bg-amber-400 text-black text-sm font-semibold py-2 px-4 rounded hover:bg-amber-500"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg h-auto lg:w-1/3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.4620838815285!2d77.62170647507769!3d13.040628487281085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17000597ace5%3A0x6f371714c45f5873!2sQubenest%20Elite%20Co%20living%20PG%20Near%20Manyata%20Tech%20Park!5e1!3m2!1sen!2sin!4v1733028355760!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <RoomFeatures />
        </div>
    );
};

export default Room;
