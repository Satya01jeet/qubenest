import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Room1 from "../assets/images/room1.png";
import Room2 from "../assets/images/room2.png";
import Cupboard from "../assets/images/cupboard.jpg";
import Room3 from "../assets/images/room3.jpg";
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.jpg";
import image6 from "../assets/images/img6.jpg";
import image7 from "../assets/images/img7.jpg";
import image8 from "../assets/images/img8.jpg";

const Room = () => {
  const { buildingName } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoomType, setSelectedRoomType] = useState("single"); // Manage selected room type (single or double)

  const carouselImages = [
    Room1,
    Room2,
    Cupboard,
    Room3,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [carouselImages.length]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`http://13.232.98.230:3000/rooms/${buildingName}`);
        if (!response.ok) {
          throw new Error("Room data not found");
        }
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [buildingName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!room || !room.type || !room.type.single || !room.type.double) {
    return <div>Error: Room data is missing</div>;
  }

  // Determine the selected room type details (single or double)
  const selectedRoom = room.type[selectedRoomType];

  return (
    <div className="flex flex-col mt-10 md:flex-row p-8 space-y-8">
      {/* Room Info */}
      <div className="flex-1 bg-white p-6 rounded-md shadow-md">
        {/* Image Carousel */}
        <div className="relative w-full h-96 overflow-hidden rounded-md">
          <img
            src={carouselImages[currentImageIndex]}
            alt={`Room ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-md transition-opacity duration-500"
          />
        </div>

        {/* Room Details */}
        <h1 className="text-2xl font-bold text-gray-800 mt-6">{room.title.replace("_", " ").toUpperCase()}</h1>
        <p className="text-gray-600 mt-2">{room.description}</p>

        {/* Pricing Section */}
        <div className="mt-6 flex items-center space-x-4">
          <p className="text-3xl font-semibold text-gray-800">{selectedRoom.discountPrice}</p>
          <span className="text-gray-500 line-through">{selectedRoom.price}</span>
          <span className="text-green-600 font-medium">{selectedRoom.discount}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">GST Inclusive</p>

        {/* Features Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Features</h2>
          <div className="flex items-center space-x-4 mt-2">
            {room.feature?.map((feature, index) => (
              <span key={index} className="text-gray-600">
                ✅ {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Security Deposit */}
        <div className="mt-6">
          <p className="text-lg text-gray-600">Security Deposit:{selectedRoom.security}</p>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="flex-1 p-6 bg-gray-100 rounded-md shadow-lg">
        <h2 className="text-xl font-medium text-gray-600">Checkout</h2>
        <h2 className="text-3xl font-semibold text-gray-800">{`Book This Room - ${room.title.replace("_"," ").toUpperCase()} `}</h2>

        {/* Toggle Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => setSelectedRoomType("single")}
            className={`px-6 py-2 rounded-md font-semibold ${selectedRoomType === "single"
                ? "bg-amber-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
          >
            Single
          </button>
          <button
            onClick={() => setSelectedRoomType("double")}
            className={`px-6 py-2 rounded-md font-semibold ${selectedRoomType === "double"
                ? "bg-amber-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
          >
            Double
          </button>
        </div>

        {/* Selected Pricing */}
        <div className="mt-6 flex items-center space-x-4">
          <p className="text-3xl font-semibold text-gray-800">{selectedRoom.discountPrice}</p>
          <span className="text-gray-500 line-through">{selectedRoom.price}</span>
          <span className="text-green-600 font-medium">{selectedRoom.discount}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">GST Inclusive</p>
        <p className="text-red-500 mt-2">{`[${room.additional_info}]`}</p>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          <li>The Booking Fee ensures your reservation is made.</li>
          <li>At the time of check-in, you will need to pay a 1-month security deposit.</li>
          <li>The ₹999 Booking Fee is fully adjustable against this security deposit payment.</li>
        </ul>


        {/* Booking Button */}
        <div className="mt-6">
          <button className="w-full bg-amber-500 text-white py-3 rounded-md shadow-lg hover:bg-amber-600 transition duration-300">
            {`Book now`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
