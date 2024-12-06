import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { buildingName } = useParams(); // Get building name from the route parameter
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch room data based on building name
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/rooms/${buildingName}`);
        if (!response.ok) {
          throw new Error('Room data not found');
        }
        const data = await response.json();
        console.log(data); // Log the room data to check its structure
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

  // Check if 'room' and 'room.type.single' are defined before accessing their properties
  if (!room || !room.type || !room.type.single) {
    return <div>Error: Room data is missing</div>;
  }

  return (
    <div className="flex flex-col mt-10 md:flex-row p-8 space-y-8">
      {/* Room Info */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold text-gray-800">{room.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{room.description}</p>

        <div className="mt-6">
          <p className="text-xl font-medium text-gray-800">Features:</p>
          <ul className="list-disc list-inside">
            {room.feature?.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xl font-medium text-gray-800">Pricing:</p>
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold text-gray-800">{room.type.single.discountPrice}</p>
            <span className="text-gray-500 line-through">{room.type.single.price}</span>
            <span className="text-red-500">{room.type.single.discount}</span>
          </div>
          <p className="text-lg text-gray-600">Security Deposit: {room.type.single.security}</p>
          <p className="text-lg text-gray-600">Booking Fee: {room.bookingFee}</p>
        </div>
      </div>

      {/* Checkout Page */}
      <div className="flex-1 p-6 bg-gray-100 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Book This Room</h2>

        <div className="mt-6">
          <p className="text-lg text-gray-600">Total Price: {room.type.single.discountPrice}</p>
        </div>

        {/* Booking Form */}
        <div className="mt-6">
          <button className="w-full bg-amber-500 text-white py-3 rounded-md shadow-lg hover:bg-amber-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
