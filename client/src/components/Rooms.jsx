import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaSnowflake, FaFan, FaTv, FaTshirt, FaBox, FaBed } from "react-icons/fa";

import Room1 from "../assets/images/room1.png";
import Room2 from "../assets/images/room2.png";
import Room3 from "../assets/images/book.png";

import RoomFeatures from "./RoomFeatures";
import RoomImage from "./RoomImage";
import Splfeature from "./Splfeature";

const Room = () => {
    const featureIcons = {
        AC: <FaFan className="text-blue-500" />,
        "Mini Fridge": <FaBox className="text-green-500" />,
        Television: <FaTv className="text-purple-500" />,
        Single: <FaBed className="text-gray-700" />,
        Double: <FaBed className="text-gray-700" />,
        Curtains: <FaSnowflake className="text-cyan-500" />,
    };

    const listings = [
        {
            title: "Single Sharing Deluxe Room",
            price: "₹12,999",
            discountPrice: "₹14,999",
            discount: "13% off",
            feature: ["Mini Fridge", "Single"],
            rating: "4.5",
            reviews: 102,
            images: [Room1, Room2, Room3],
        },
        {
            title: "Single Sharing Super Deluxe Room",
            price: "₹17,999",
            discountPrice: "₹19,999",
            discount: "10% off",
            feature: ["AC", "Single"],
            rating: "4.3",
            reviews: 89,
            images: [Room2, Room3, Room1],
        },
        {
            title: "Double Sharing Deluxe Room",
            price: "₹7,499",
            discountPrice: "₹8,499",
            discount: "12% off",
            feature: ["AC", "Double"],
            rating: "4.6",
            reviews: 120,
            images: [Room3, Room1, Room2],
        },
        {
            title: "Double Sharing Super Deluxe Room",
            price: "₹8,499",
            discountPrice: "₹9,499",
            discount: "11% off",
            feature: ["Mini Fridge", "Double"],
            rating: "4.2",
            reviews: 98,
            images: [Room1, Room2, Room3],
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
        <div className="bg-white mt-16">
            {/* Page Heading */}
            <div className="text-center bg-amber-400 text-gray-800 py-6">
                <h1 className="text-3xl font-bold">Building - Qubenest Splendour</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen mt-4">
                {/* Cards Section */}
                <div className="flex flex-wrap gap-6 lg:w-2/3">
                    {listings.map((listing, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[48%] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                        >
                            {/* Image Slider Section */}
                            <div className="relative">
                                <Slider {...sliderSettings}>
                                    {listing.images.map((image, idx) => (
                                        <div key={idx}>
                                            <img
                                                src={image}
                                                alt={`Room ${index + 1} - Image ${idx + 1}`}
                                                className="w-full h-80 object-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            {/* Content Section */}
                            <div className="p-4">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800">
                                    {listing.title}
                                </h3>
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

                                {/* Price Section */}
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
                                    <p className="text-sm text-gray-500 mt-1">GST additional</p>
                                </div>

                                {/* Book Now Button */}
                                <div className="mt-4">
                                    <button className="w-full bg-amber-400 text-black text-sm font-semibold py-2 px-4 rounded hover:bg-amber-500">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
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
            <Splfeature />
            <RoomFeatures />
            <RoomImage />
        </div>
    );
};

export default Room;
