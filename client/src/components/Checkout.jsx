import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { building, type } = useParams(); // Get building and room type from the URL
    const [roomData, setRoomData] = useState(null);
    const [paymentOption, setPaymentOption] = useState("bookingFee");

    useEffect(() => {
        // Fetch room data when the component loads
        const fetchRoomData = async () => {
            try {
                const response = await fetch(`/api/room/${building}/${type}`);
                if (response.ok) {
                    const data = await response.json();
                    setRoomData(data);
                } else {
                    console.error("Room not found");
                }
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoomData();
    }, [building, type]); // Depend on building and type to refetch if either changes

    if (!roomData) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-16">
            <main className="flex flex-col items-center max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    The <span className="text-sky-400">{roomData.type}</span>
                </h2>
                <p className="text-xl font-semibold text-black-600 text-center my-2">{roomData.building}</p>
                <p className="text-lg font-medium text-gray-600 text-center">
                    For a fee of <span className="text-black">₹{roomData.price}*</span> Per Person,{" "}
                    <span className="text-gray-500">*Paid Monthly</span>
                </p>
                <p className="text-lg font-medium text-red-300 text-center mt-2">
                    * {roomData.additionalInfo}
                </p>

                {/* Payment Options */}
                <div className="mt-6 space-y-4">
                    <label className="flex items-start space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="paymentOption"
                            value="bookingFee"
                            checked={paymentOption === "bookingFee"}
                            onChange={() => setPaymentOption("bookingFee")}
                            className="mt-1"
                        />
                        <div>
                            <p className="font-medium">Pay ₹{roomData.bookingFee} Booking Fee</p>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                <li>The Booking Fee ensures your reservation is made.</li>
                                <li>At the time of check-in, you will need to pay a 1-month security deposit.</li>
                                <li>The ₹{roomData.bookingFee} Booking Fee is fully adjustable against this security deposit payment.</li>
                            </ul>
                        </div>
                    </label>
                    <label className="flex items-start space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="paymentOption"
                            value="securityDeposit"
                            checked={paymentOption === "securityDeposit"}
                            onChange={() => setPaymentOption("securityDeposit")}
                            className="mt-1"
                        />
                        <div>
                            <p className="font-medium">Pay ₹{roomData.securityDeposit} Security Deposit</p>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                <li>This payment confirms your stay.</li>
                                <li>The deposit is refundable as per policy.</li>
                            </ul>
                        </div>
                    </label>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Email ID"
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="date"
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Payment Button */}
                <button className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700">
                    Pay ₹{paymentOption === "bookingFee" ? roomData.bookingFee : roomData.securityDeposit}
                </button>
            </main>
        </div>
    );
};

export default Checkout;