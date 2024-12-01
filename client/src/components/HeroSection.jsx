import React, { useState } from 'react';
import hero_img from '../assets/images/traveller1.png';
import bg from '../assets/decors/Decore.png';
import TextSlideShow from './TextSlideShow';

const HeroSection = () => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleCallbackModal = () => {
    setIsCallbackModalOpen((prev) => !prev);
    setFormData({ name: '', number: '', email: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsSubmitting(true);
  
    const { name, number, email } = formData;  // Destructure the values from formData
    
    console.log("Form Data: ", { name, number, email }); // Log to verify data structure
  
    try {
      const response = await fetch("http://localhost:3001/user/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, email }), // Send the form data
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }
  
      // Handle successful response
      const responseData = await response.json();
      setSuccessMessage(responseData.message); // Assuming server returns a message field
  
    } catch (error) {
      console.error("Error from server: ", error);
    } finally {
      setIsSubmitting(false);
      toggleCallbackModal();
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center pt-24 px-8">
      {/* Text Section */}
      <div className="flex flex-col md:mt-16 md:w-1/2">

        {/* Text */}
        <div className="space-y-6 md:ml-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-merriweather">
            A <span className="text-amber-400">Home</span>
            <br />
            Away From <span className="text-amber-400">Home</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-lg lg:mx-2 font-merriweather">
            An accommodation that gives you the warmth of your home, familiarity of your surroundings, comfort of your
            own bed, and a sense of belonging...
          </p>
          <button
            className="mt-4 px-6 py-3 bg-amber-300 text-black rounded-lg shadow-lg hover:bg-amber-400 active:scale-95 transition ease-in-out font-semibold"
            onClick={toggleCallbackModal}
          >
            Book a <span className="text-orange-600 font-bold text-lg">FREE</span> callback 📞
          </button>
        </div>

        {/* call us section  */}
        <div className='ml-24 text-ledt mt-12 hidden md:block'>
          <p className='text-2xl font-bold text-gray-700'>or <span className='text-amber-400'>Call</span> us at</p>
          <p className='text-5xl font-extrabold text-amber-400'>+91-7619636239</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="my-8 flex md:relative md:w-1/2 justify-center">
        <div className="hidden w-[600px] mt-[-160px] mr-[-200px] md:block">
          <img src={bg} alt="Background decoration" />
        </div>
        <div className="w-[500px] md:absolute md:top-[-55px] md:left-[10px] md:w-[600px]">
          <img src={hero_img} alt="Traveler with luggage" className="w-[700px]" />
        </div>
      </div>

      {/* Callback Modal */}
      {isCallbackModalOpen && (
        <div
          className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={toggleCallbackModal}
        >
          <div
            className="bg-white rounded-lg p-8 w-full max-w-sm relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="callback-title"
            aria-modal="true"
          >
            <h2 id="callback-title" className="text-2xl font-bold mb-6 text-center">
              Enter Your Details
            </h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
                required
              />
              <button
                type="submit"
                className="bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg z-50">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
