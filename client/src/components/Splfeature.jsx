import React from "react";
import { FaParking } from "react-icons/fa";
import { GiElevator } from "react-icons/gi"; // Import from Game Icons

const FeaturesSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Convenient Features for Your Comfort
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Designed to make your life easier with essential amenities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature: Lift */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-amber-500 text-5xl mb-4">
              <GiElevator />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Lift</h3>
            <p className="text-gray-600 text-center">
              Enjoy hassle-free access to all floors with our modern lift facility.
            </p>
          </div>

          {/* Feature: 2-Wheeler Parking */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="text-amber-500  text-5xl mb-4">
              <FaParking />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              2-Wheeler Parking
            </h3>
            <p className="text-gray-600 text-center">
              Safe and secure parking space designed for your 2-wheelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
