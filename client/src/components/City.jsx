import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// Importing logos - Ensure these files exist in the correct path
import HclLogo from "../assets/companies/hcl.png";
import InfosysLogo from "../assets/companies/infosys.png";
import WiproLogo from "../assets/companies/wipro.png";
import BioconLogo from "../assets/companies/biocon.png";
import HpLogo from "../assets/companies/hp.png";
import SiemensLogo from "../assets/companies/siemens.png";
import TataLogo from "../assets/companies/tata.png";
import VelankaniLogo from "../assets/companies/velankani.png";

const City = () => {
  const companies = [
    { name: "HCL Technologies", logo: HclLogo, time: "9 min" },
    { name: "Infosys Campus", logo: InfosysLogo, time: "12 min" },
    { name: "Velankani Campus", logo: VelankaniLogo, time: "10 min" },
    { name: "Wipro", logo: WiproLogo, time: "13 min" },
    { name: "BioCon", logo: BioconLogo, time: "15 min" },
    { name: "Hewlett Packard", logo: HpLogo, time: "9 min" },
    { name: "Siemens", logo: SiemensLogo, time: "15 min" },
    { name: "Tata BP Solar", logo: TataLogo, time: "17 min" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Qubenest Elite");

  const navigate = useNavigate(); // Initialize useNavigate
  const locations = ["Qubenest Elite", "Qubenest Splendour"];
  const slides = [companies.slice(0, 4), companies.slice(4)];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleSlideChange = (direction) => {
    setCurrentSlide((prev) =>
      direction === "prev"
        ? prev === 0
          ? slides.length - 1
          : prev - 1
        : prev === slides.length - 1
        ? 0
        : prev + 1
    );
  };

  const handleExploreRooms = () => {
    if (selectedLocation === "Qubenest Elite") {
      navigate("/roomelite"); // Navigate to RoomElite page
    } else if (selectedLocation === "Qubenest Splendour") {
      navigate("/rooms"); // Navigate to Rooms page
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-yellow-300 min-h-screen p-8 relative">
      <div className="text-center mb-12">
        <p className="text-4xl uppercase tracking-wide font-merriweather mb-10 text-amber-600 font-bold">
          We Serve in Your City - <span className="text-gray-800 font-bold">Bangalore</span>
        </p>
        <h1 className="text-3xl font-bold text-black mt-2 font-merriweather">Coliving Home For Like-Hearted</h1>
        <div className="flex justify-center items-center mt-4">
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-4xl font-bold font-merriweather text-amber-600 hover:cursor-pointer flex items-center"
            >
              <span>{selectedLocation}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56 text-lg">
                {locations.map((location) => (
                  <li
                    key={location}
                    onClick={() => handleLocationChange(location)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-800"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-lg text-blue-600 ml-4">
            {selectedLocation === "Qubenest Elite" ? "Near Manyata Tech Park" : "Near Manyata Tech Park"}
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-32">
        <button
          onClick={() => handleSlideChange("prev")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-700 transition duration-300"
        >
          &lt;
        </button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-8">
          {slides[currentSlide].map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img src={company.logo} alt={`${company.name} Logo`} className="w-20 h-20 mb-4 object-contain" />
              <p className="text-xl font-semibold text-gray-800">{company.time}</p>
              <p className="text-sm text-gray-600 text-center mt-2">{company.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleSlideChange("next")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-700 transition duration-300"
        >
          &gt;
        </button>
      </div>

      {/* Explore Rooms Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleExploreRooms}
          className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg text-xl font-bold hover:bg-amber-700 transition duration-300"
        >
          Explore Rooms
        </button>
      </div>
    </div>
  );
};

export default City;
