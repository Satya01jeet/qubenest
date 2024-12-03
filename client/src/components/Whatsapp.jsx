import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setScrolling(true); // User is actively scrolling
    //   setIsBlurred(true); // Add blur while scrolling

      // Clear any existing timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to check if scrolling has stopped
      scrollTimeout = setTimeout(() => {
        setScrolling(false); // User stopped scrolling
        setIsBlurred(false); // Remove blur
      }, 300); // Adjust delay for "stopped" detection
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener and timeout on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClick = () => {
    const phoneNumber = 7619636239; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hello! I would like to know more.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`,'');
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out ${
        isBlurred ? 'blur-sm opacity-50' : 'opacity-100'
      }`}
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </div>
  );
};

export default Whatsapp;