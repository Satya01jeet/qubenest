import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/icon.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`w-full backdrop-blur shadow-lg fixed top-0 z-50 flex justify-between items-center py-4 transition-all duration-500 px-4 sm:px-24 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-10" />
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center space-x-6 text-black font-semibold">
        <a href="#explore" className="hover:text-zinc-200 transition">
          Explore Residences
        </a>
        <a href="#schedule" className="hover:text-zinc-200 transition">
          Schedule a Visit
        </a>
        <button className="border border-black rounded-md py-1 px-4 hover:scale-105 active:scale-100 transition">
          <a href="#login">Login</a>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-6">
          <a href="#explore" className="text-black font-semibold hover:text-zinc-200 transition" onClick={toggleMobileMenu}>
            Explore Residences
          </a>
          <a href="#schedule" className="text-black font-semibold hover:text-zinc-200 transition" onClick={toggleMobileMenu}>
            Schedule a Visit
          </a>
          <button
            onClick={toggleMobileMenu}
            className="border border-black rounded-md py-1 px-4 hover:scale-105 active:scale-100 transition"
          >
            <a href="#login">Login</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
