import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blr from '../assets/images/blr2.jpg';

const CitySelection = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState('Select');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [selectedArea, setSelectedArea] = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  // const openRoomsPage = () => {
  //   if (selectedArea) {
  //     navigate(/rooms?area=${selectedArea});
  //   } else {
  //     alert('Please select an area.');
  //   }
  // };

  const handleAreaSelection = (area) => {
    setArea(area);
    setIsDropDownOpen(false);
    navigate(`/rooms?area=${area}`);
  };
  

  <iframe src="" width="640" height="480"></iframe>

  const areas = [
    {
      id: 1,
      buildingName: 'Qubenest Elite',
      iframe: 'https://www.google.com/maps/d/embed?mid=1Ql4Wmd1IHQaAqedbj41Zay__3NNn2pQ&ehbc=2E312F'
    },
    {
      id: 2,
      buildingName: 'Qubenest Splendour'
    }
  ]

  return (
    <div className="flex flex-col md:flex-row justify-center my-10 items-center md:items-start px-10 md:px-32 gap-2 space-y-2">
      <div className='flex flex-col md:w-1/2 space-y-2 md:items-start items-center'>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold mb-4 md:mb-16 font-merriweather">
          We serve in your city - <span className='text-amber-400'>Bangalore</span> 
        </h2>

        {/* Image Section */}
        <div className="flex-shrink-0 mb-10">
          <img
            src={blr}
            alt="Bangalore"
            className="w-[300px] md:w-[400px] rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className='flex flex-col relative'>
          {/* Dropdown Button */}
          <button
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="w-56 text-black border rounded-md px-4 py-2 mt-4 hover:bg-gray-100 text-sm text-left flex justify-between items-center"
          >
            {area} <span >&#x25BC;</span>
          </button>

          {/* Dropdown Menu */}
          {isDropDownOpen && (
            <div className="absolute left-0 mt-14 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1 text-gray-700">
                {areas.map((item, index) => (
                  <li
                    key={index}
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

      {/* map */}
      {/* <div className="rounded-xl h-[400px] overflow-hidden md:w-1/2">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1Ql4Wmd1IHQaAqedbj41Zay__3NNn2pQ&ehbc=2E312F&noprof=1"
          className="w-full h-[120%] -translate-y-[20%] rounded-xl focus:outline-none"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}

    </div>

  );
};

export default CitySelection;
