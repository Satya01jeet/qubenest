import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Qubenest</h2>
          <ul className="space-y-1">
            <li>
              <Link to="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="/refund" className="text-gray-400 hover:text-white">Refund Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">Qubenest, a subsidiary of Qubeplex Stays Pvt. Ltd., is dedicated to providing exceptional accommodation management services, tailored to meet the unique needs of our valued clients.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-400 hover:text-white">Co-Living for professionals</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Managed Apartments</a></li>
          </ul>
        </div>

        <div className='space-y-4'>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li className="text-gray-400">Email: Qubenest.booking@gmail.com</li>
              <li className="text-gray-400">Phone: +91-7619636239</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="space-y-1 text-gray-400">
            8th Floor, Whitefield Main Rd, Brigade Metropolis, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048
            </p>
          </div>
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
