import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blr from '../assets/images/blr2.jpg';

const CitySelection = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState('BLR - Manyata Elite');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleAreaSelection = (area) => {
    setArea(area);
    setIsDropDownOpen(false);
  }

  const areas = [
    {
      area: 'BLR - Manyata Elite',
      buildingName: 'Qubenest Elite'
    },
    {
      area: 'BLR - Manyata Splendour',
      buildingName: 'Qubenest Splendour'
    }
  ]

  const openRoomsPage = () => {
    if (selectedArea) {
      navigate(`/rooms?area=${selectedArea}`);
    } else {
      alert('Please select an area.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-start md:items-start px-20 space-y-2 text-amber-400">
      <p className="text-lg md:text-base font-bold">Experience the difference with <span className="text-5xl md:text-4xl">
        Qubenest
      </span> </p>

      <div className='flex flex-col relative'>
        {/* Dropdown Button */}
        <button
          onClick={() => setIsDropDownOpen((prev) => !prev)}
          className="w-[300px] text-black border rounded-md px-4 py-2 hover:bg-gray-100 text-left flex justify-between items-center"
        >
          {area} <span >&#x25BC;</span>
        </button>

        {/* Dropdown Menu */}
        {isDropDownOpen && (
          <div className="absolute left-0 mt-10 w-[300px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1 text-gray-700">
              {areas.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAreaSelection(item.area)}
                >
                  {item.area}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-2 text-teal-500">
        {/* <FaMapMarkerAlt className="text-lg" /> */}
        <a
          href="https://www.google.com/maps" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-teal-700"
        >
          Open in Google Maps
        </a>
      </div>
    </div>

  );
};

export default CitySelection;
