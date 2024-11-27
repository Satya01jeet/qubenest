import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blr from '../assets/images/blr2.jpg';

const CitySelection = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const openRoomsPage = () => {
    if (selectedArea) {
      navigate(`/rooms?area=${selectedArea}`);
    } else {
      alert('Please select an area.');
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto text-center py-8 px-4 lg:px-8">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20 font-merriweather">
        We serve in your city - Bangalore
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-32">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={blr}
            alt="Bangalore"
            className="w-[300px] md:w-[400px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text and Dropdown Section */}
        <div className="text-left font-merriweather">
          <h3 className="text-4xl font-bold mb-4 text-amber-500">We are Located at :-</h3>
          <div className="mb-6">
            <select
              id="area-select"
              value={selectedArea}
              onChange={handleAreaChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select an area
              </option>
              <option value="area1">Manyata Tech Park</option>
              <option value="area2">White Field</option>
              <option value="area3">Marathahalli</option>
              <option value="area4">Indiranagar</option>
            </select>
          </div>
          <button
            onClick={openRoomsPage}
            className="w-full md:w-auto px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300"
          >
            View Rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitySelection;
