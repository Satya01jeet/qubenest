// TourSection.js
import React from 'react';
import Tour from '../assets/images/Tour.jpg'

const TourSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-36 lg:justify-around items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 p-8">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 lg:max-w-md">
        <h2 className="text-3xl font-bold text-gray-900">
          Schedule A Tour & <br /> Experience The Difference
        </h2>
        
        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 8h.01M12 16h.01M16 12h.01M21 21l-6-6M3 8a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Your favorite city</h4>
              <p className="text-gray-600">
                Pack your bags and move in hassle-free. No brokers, no landlords, no PG drama. Experience seamless coliving in the heart of your city!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2 bg-myred rounded-lg">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 8h.01M12 16h.01M16 12h.01M21 21l-6-6M3 8a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Your own timings</h4>
              <p className="text-gray-600">
                We know you are super busy, so feel free to choose your own timings for the visit.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-myred text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 active:scale-100 transition">Visit Now</button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[350px] lg:ml-10 p-4 bg-white rounded-2xl shadow-lg flex flex-col items-start">
        <img src={Tour} alt="Tour" className=" rounded-lg mb-4 h-30 " />
        <div>
          <h4 className="font-bold text-gray-800">Visit Scheduled 👍👍👍</h4>
          <p className="text-gray-500">15th June | by Rajesh Chandran Kattapa</p>
          <p className="text-sm text-gray-400">24 people liked this</p>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
