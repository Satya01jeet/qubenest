import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const LocationSection = () => {
  const businessInfo = {
    name: "Qubenest Elite Co-living PG",
    address: "Site No-16, Bus point, Survey No -141, Service Rd, Nagawara, Bengaluru, Karnataka 560045",
    phone: "+91 7619636239", 
    email: "contact@qubenest.com", // Replace with actual email
    hours: [
      "Opens 365 Days - 24*7",
      
    ],
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-merriweather font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conveniently located near Manyata Tech Park, making your commute a breeze!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[450px]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Ql4Wmd1IHQaAqedbj41Zay__3NNn2pQ&ehbc=2E312F"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {businessInfo.name}
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">{businessInfo.address}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <ul className="text-gray-600 space-y-1">
                    {businessInfo.hours.map((hours, index) => (
                      <li key={index}>{hours}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-gold" />
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-gold" />
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://goo.gl/maps/actual_location_link" // Replace with actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-black bg-gold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
