import React from 'react';
import { FaBath, FaTable, FaTv, FaSnowflake, FaShoePrints, FaBroom, FaTshirt, FaBox, FaFan, FaConciergeBell, FaSmileBeam } from 'react-icons/fa';

const RoomFeatures = () => {
  const initialFeatures = [
    { icon: <FaBath />, text: "Attached Washroom" },
    { icon: <FaBox />, text: "Cupboard" }, // FaBox used as a substitute
    { icon: <FaTable />, text: "Working Table" },
    { icon: <FaSnowflake />, text: "Curtains/Blinds" },
    { icon: <FaShoePrints />, text: "Shoe Stand" },
    { icon: <FaBroom />, text: "Daily Cleaning" }
  ];

  const basicNeedsFeatures = [
    { icon: <FaTshirt />, text: "Laundry Service" },
    { icon: <FaBox />, text: "Fridge" },
    { icon: <FaTv />, text: "Television" },
    { icon: <FaFan />, text: "Air Conditioned" },
    { icon: <FaConciergeBell />, text: "24hrs Front Desk" },
    { icon: <FaSmileBeam />, text: "Mirror" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
        Basic Amenities
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg text-gray-700">
        {initialFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-full shadow-sm border border-gray-200"
          >
            <span className="text-green-500">{feature.icon}</span>
            <span className="flex-1 text-center">{feature.text}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 mb-4 text-center">
        Room Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg text-gray-700">
        {basicNeedsFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-full shadow-sm border border-gray-200"
          >
            <span className="text-blue-500">{feature.icon}</span>
            <span className="flex-1 text-center">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomFeatures;