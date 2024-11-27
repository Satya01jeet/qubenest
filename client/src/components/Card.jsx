import React from "react";
import Room from '../assets/images/room1.png'

const Card = () => {
  const listings = [
    {
      title: "Single Sharing Delux Room",
      price: " ₹ 12999/- + GST",
      feature: ["mini fridge", "single",],
    },
    {
      title: "Single Sharing Super Delux Room",
      price: "₹ 17999 (+ GST)",
      feature: ["AC", "single"],
    },
    {
      title: "Double Sharing Delux Room",
      price: "₹ 7499 (+GST)",
      feature: ["AC", "double"],
    },
    {
      title: "Double Sharing Super Delux Room",
      price: "₹ 8499 (+GST)",
      feature: ["mini fridge","double"],
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-row p-6 bg-gray-100 min-h-screen">
      {/* Left */}
      <div className="flex flex-col gap-4 w-full lg:w-2/3">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 border rounded-lg shadow-lg bg-white"
          >
            {/* Image */}
            <div className="w-1/2">
              <img
                src={Room} 
                alt={listing.title}
                className="w-full h-72 object-cover rounded-md mt-2 shadow-xl"
              />
            </div>

            <div className="w-1/2">
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.feature.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <p className="text-lg font-medium text-gray-800">
                at <span className="text-green-600 font-bold">{listing.price}</span> only
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="rounded-xl overflow-hidden shadow-lg h-[1425px] lg:w-1/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.922130102179!2d77.62170647507769!3d13.040628487281085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17000597ace5%3A0x6f371714c45f5873!2sQubenest%20Elite%20Co%20living%20PG%20Near%20Manyata%20Tech%20Park!5e0!3m2!1sen!2sin!4v1731317795645!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Card;
