import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Qubenest</h2>
          <p className="text-gray-400">PG , Hostels and Managed Apartments</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            Ideally set in the Nagavara district of Bangalore, Qubenest Elite Manyata PG and Hostel is set 8.5 km from Commercial Street, 9.4 km from Chinnaswamy Stadium, and 10 km from Indira Gandhi Musical Fountain Park. Among the facilities at this property are a shared kitchen and a shared lounge, along with free WiFi throughout the property.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-400 hover:text-white">Co-Living for professionals</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Managed Apartments</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li className="text-gray-400">Email: info@qubenest.com</li>
            <li className="text-gray-400">Phone: +91-9874563210</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 text-sm">© Qubenest. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
