import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blr from '../assets/images/blr2.jpg';

const CitySelection = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState('Select');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown container

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAreaSelection = (area) => {
    setArea(area);
    setIsDropDownOpen(false);
    // Navigate based on selection
    if (area === 'BLR - Manyata-Elite') {
      navigate('/rooms/elite');
    } else if (area === 'BLR - Manyata-Splendour') {
      navigate('/rooms');
    }
  };

  const areas = [
    {
      id: 1,
      buildingName: 'BLR - Manyata-Elite',
    },
    {
      id: 2,
      buildingName: 'BLR - Manyata-Splendour',
    }
  ];

  return (
    <div id="city-section" className="flex flex-col md:flex-row justify-center my-10 items-center px-10 md:px-16 gap-2 space-y-2">
      <div className="flex flex-col space-y-2 items-center">
        {/* Main Heading */}
        <p className="text-3xl text-center md:text-5xl font-bold mb-4 font-merriweather">
          We serve in your city - <span className="text-amber-400">Bangalore</span>
        </p>

        {/* Image Section */}
        <div className="flex-shrink-0 mb-10">
          <img
            src={blr}
            alt="Bangalore"
            className="w-[300px] md:w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Dropdown */}
        <div className="flex flex-col relative" ref={dropdownRef}>
          {/* Dropdown Button */}
          <button
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="w-56 md:w-96 text-black border rounded-md px-4 py-2 mt-4 hover:bg-gray-100 text-sm text-left flex justify-between items-center"
          >
            {area} <span>&#x25BC;</span>
          </button>

          {/* Dropdown Menu */}
          {isDropDownOpen && (
            <div className="absolute left-0 mt-14 w-56 md:w-96 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1 text-gray-700">
                {areas.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAreaSelection(item.buildingName)}
                  >
                    {item.buildingName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitySelection;
