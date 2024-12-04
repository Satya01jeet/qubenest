import React from "react";

const Location = () => {
  const locations = [
    {
      name: "ELITE",
      address:
        "Manyata Tech Park Road, 560045 Bangalore, India",
      googleMapsLink: "#",
      packages: ["SOLO LIVING", "CO-LIVING"],
      buttonText: "VIEW ROOMS",
      comingSoon: false,
    },
    {
      name: "SPLENDOUR",
      address:
        "Manyata Tech Park Road, 560045 Bangalore, India",
      googleMapsLink: "#",
      packages: ["SINGLE SHARING", "TWIN SHARING",],
      buttonText: "VIEW ROOMS",
      comingSoon: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-yellow-300 text-white py-16 px-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 font-merriweather">Our Locations</h1>
        <p className="text-lg text-gray-600 font-merriweather">
          Explore premium properties tailored for you.
        </p>
      </div>

      {/* Locations */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 text-center shadow-lg transform hover:scale-105 transition duration-300"
          >
            {/* Location Name */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{location.name}</h2>
            
            {/* Location Address */}
            <p className="text-sm text-gray-800 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>{location.address}</p>

            {/* Google Maps Link */}
            <a
              href={location.googleMapsLink}
              className="text-teal-400 hover:text-teal-500 text-sm font-medium mb-4 block"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Open in Google Maps
            </a>

            {/* Available Packages */}
            {!location.comingSoon && (
              <div className="flex flex-col items-center gap-1 mb-6">
                {location.packages.map((pkg, i) => (
                  <p
                    key={i}
                    className="text-gray-700 text-sm flex items-center"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    ✅ {pkg}
                  </p>
                ))}
              </div>
            )}

            {/* Button */}
            <button
              className={`${
                location.comingSoon
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              } py-2 px-6 rounded-md font-medium text-sm transition duration-300`}
              disabled={location.comingSoon}
            >
              {location.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-600 " style={{ fontFamily: "Poppins, sans-serif" }}>OR</p>
        <p className="text-2xl font-semibold font-merriweather text-black">
          Call us now at <span className="text-Black font-merriweather">+91-7619636239</span>
        </p>
      </div>
    </div>
  );
};

export default Location;