import React from 'react';
import { AiOutlineDesktop } from 'react-icons/ai';
import { 
  FaBath, FaTv, FaSnowflake, FaDoorClosed, FaChair, FaRulerHorizontal, FaSocks, 
  FaBroom, FaWarehouse, FaShower, FaBed, FaRegSquare, FaUtensils, FaWifi, 
  FaDumbbell, FaUserShield, FaMusic, FaGamepad, FaBolt, FaLock, FaConciergeBell, FaPlug
} from 'react-icons/fa';

const RoomFeatures = () => {
  const initialFeatures = [
    { icon: <FaBath />, text: "Attached Washroom" },
    { icon: <FaShower />, text: "Geyser" },
    { icon: <FaChair />, text: "Mirror" },
    { icon: <FaSnowflake />, text: "Mini Fridge" },
    { icon: <FaTv />, text: "Television" },
    { icon: <FaBed />, text: "Double Bed" },
    { icon: <FaRegSquare />, text: "Pillow & Cushions" },
    { icon: <FaBed />, text: "Bedsheet with Pillow Covers & Blankets" },
    { icon: <FaDoorClosed />, text: "Curtains/Blinds" },
    { icon: <AiOutlineDesktop />, text: "Work Station" },
    { icon: <FaWarehouse />, text: "Cupboard" },
    { icon: <FaSocks />, text: "Shoe Rack" },
    { icon: <FaBroom />, text: "Bedside Table with Drawer" },
    { icon: <FaRulerHorizontal />, text: "Wall Mounted Racks" },
  ];

  const basicNeedsFeatures = [
    { icon: <FaPlug />, text: "Washing Machine" },
    { icon: <FaBolt />, text: "RO Water for Drinking" },
    { icon: <FaUtensils />, text: "Fully Equipped Kitchen for Self Cooking" },
    { icon: <FaBroom />, text: "Daily Housekeeping" },
    { icon: <FaConciergeBell />, text: "24 X 7 Security" },
    { icon: <FaLock />, text: "Biometric Entry" },
    { icon: <FaBolt />, text: "Power Backup" },
    { icon: <FaWifi />, text: "Free High-Speed Internet" },
    { icon: <FaDumbbell />, text: "Fully Equipped Gym" },
    { icon: <FaUserShield />, text: "Front Desk" },
    { icon: <FaMusic />, text: "Music System for Entertainment" },
    { icon: <FaGamepad />, text: "Playzone" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center font-merriweather">
        Basic Amenities in the Room
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

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 mb-4 text-center font-merriweather">
        Building Facilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg text-gray-700 mt-4">
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
