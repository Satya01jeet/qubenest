// TourSection.js
import React, { useState } from 'react';
import Tour from '../assets/images/Tour.jpg'

const TourSection = () => {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: '',
  });
  const toggleVisitModal = () => {
    setIsVisitModalOpen((prev) => !prev);
    setFormData({ name: '', number: '', date: '' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, number, date } = formData;  // Destructure the values from formData

    console.log("Form Data: ", { name, number, date }); // Log to verify data structure

    try {
      const response = await fetch("http://13.232.98.230:3000/user/visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, date }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }

      // Handle successful response
      const responseData = await response.json();
      setSuccessMessage(responseData.message);
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      console.error("Error from server: ", error);
    } finally {
      setIsSubmitting(false);
      toggleVisitModal();
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section id='visit-section' className="flex flex-col lg:flex-row lg:px-36 lg:justify-around items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6 p-8">
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
        <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-lg shadow-lg active:bg-amber-300 transition
        " onClick={toggleVisitModal}>Visit Now</button>

        {/* Visit Modal */}
        {isVisitModalOpen && (
          <div
            className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-70 z-50"
            onClick={toggleVisitModal} // Close modal when clicking outside content
          >
            <div
              className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 rounded-xl p-8 w-full max-w-sm shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              role="dialog"
              aria-labelledby="callback-title"
              aria-modal="true"
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition"
                onClick={toggleVisitModal}
                aria-label="Close Modal"
              >
                ✕
              </button>

              <h2
                id="callback-title"
                className="text-3xl font-extrabold text-gray-800 text-center mb-6"
              >
                Enter Your Details
              </h2>

              <p className="text-gray-500 text-center mb-6">
                Let us know how we can reach out to you. We'll contact you shortly!
              </p>

              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-amber-300"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  required
                  aria-label="Name"
                />
                <input
                  type="number"
                  placeholder="Your Mobile Number"
                  className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-amber-300"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  name="number"
                  required
                  aria-label="Mobile Number"
                />
                <input
                  type="date"
                  placeholder="Select date"
                  className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-amber-300"
                  value={formData.date}
                  onChange={handleInputChange}
                  name="date"
                  required
                  aria-label="Date"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[350px] lg:ml-10 p-4 bg-white rounded-2xl shadow-lg flex flex-col items-start">
        <img src={Tour} alt="Tour" className=" rounded-lg mb-4 h-30 " />
        <div>
          <h4 className="font-bold text-gray-800">Visit Scheduled 👍👍👍</h4>
          <p className="text-gray-500">15th June | by Rajesh Gupta</p>
          <p className="text-sm text-gray-400">24 people liked this</p>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg z-50">
          {successMessage}
        </div>
      )}
    </section>
  );
};

export default TourSection;
