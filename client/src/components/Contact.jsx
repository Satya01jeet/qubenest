import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail(''); // Clear the input after submitting
  };

  return (
    <div className="bg-purple-50 py-12 px-4 md:px-6 rounded-lg shadow-none max-w-3xl mx-auto text-center mb-4 md:my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
        Get in touch with us to receive more information and offers by Qubenest.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-full overflow-hidden w-full max-w-lg p-2 shadow-none">
          {/* Icon container */}
          <div className="px-3 py-2 bg-purple-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12V8m0 0a4 4 0 10-8 0v4a4 4 0 11-8 0v-4"
              />
            </svg>
          </div>
          {/* Input field */}
          <input
            type="email"
            className="w-full px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-red-500 text-white text-base md:text-lg font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-none hover:bg-red-600 transition duration-300 w-full md:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;