import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo_2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  let lastScrollY = window.scrollY;
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreResidences = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("city-section");
      }, 200);
    } else {
      scrollToSection("city-section");
    }
  };

  const handleScheduleVisit = (e) => {
    e.preventDefault();
    if(location.pathname !== "/"){
      navigate('/');
      setTimeout(() => {
        scrollToSection("visit-section");
      }, 200);
    } else {
      scrollToSection('visit-section')
    }
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY && currentScrollY > 100) {
  //       setIsScrollingUp(false);
  //     } else {
  //       setIsScrollingUp(true);
  //     }
  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full backdrop-blur shadow-lg fixed top-0 z-50 flex justify-between items-center py-1 transition-all duration-500 px-4 sm:px-24 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <a href="#">
            <img src={Logo} alt="Logo" className="h-16" />
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
          <a
            href=""
            className="hover:text-zinc-200 transition"
            onClick={handleExploreResidences}
          >
            Explore Residences
          </a>
          <a href="#schedule" className="hover:text-zinc-200 transition" onClick={handleScheduleVisit}>
            Schedule a Visit
          </a>
          <button
            className="border border-black rounded-md py-1 px-4 hover:scale-105 active:scale-100 transition"
            onClick={toggleLoginModal}
          >
            <a href="#login">Login</a>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-6">
            <a
              href="#explore"
              className="text-black font-semibold hover:text-zinc-800 transition"
              onClick={handleExploreResidences}
            >
              Explore Residences
            </a>
            <a
              href="#schedule"
              className="text-black font-semibold hover:text-zinc-200 transition"
              onClick={toggleMobileMenu}
            >
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

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={toggleLoginModal} // Close modal when clicking outside content
        >
          <div
            className="bg-white rounded-lg p-8 w-full max-w-sm relative shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            role="dialog"
            aria-labelledby="login-title"
            aria-modal="true"
          >
            <button
              onClick={toggleLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close Login Modal"
            >
              <FaTimes size={24} />
            </button>
            <h2
              id="login-title"
              className="text-2xl font-bold mb-6 text-center"
            >
              Login
            </h2>
            <form
              className="flex flex-col space-y-4"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default submission behavior
                console.log("Login submitted");
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
                required
                aria-label="Email"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2"
                required
                aria-label="Password"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
