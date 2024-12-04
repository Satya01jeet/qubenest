import React, { useState } from 'react';

const Checkout = () => {
    const [paymentOption, setPaymentOption] = useState("bookingFee");

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-16">

            {/* Main Content */}
            <main className="flex flex-col items-center max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
                {/* Package Info */}
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    The <span className="text-sky-400">Double Sharing</span>
                </h2>
                <p className="text-xl font-semibold text-black-600 text-center my-2">Splendour - BLR</p>
                <p className="text-lg font-medium text-gray-600 text-center">
                    For a fee of <span className="text-black">₹8,499*</span> Per Person, <span className="text-gray-500">*Paid Monthly</span>
                </p>
                <p className="text-lg font-medium text-red-300 text-center mt-2">
                    * electricity on actual basis
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
                            <p className="font-medium">Pay ₹999 Booking Fee</p>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                <li>The Booking Fee ensures your reservation is made.</li>
                                <li>At the time of check-in, you will need to pay a 1-month security deposit.</li>
                                <li>The ₹999 Booking Fee is fully adjustable against this security deposit payment.</li>
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
                        placeholder="Starting From"
                        // Replace this with the desired default date
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
                    Pay ₹999
                </button>
            </main>
        </div>
    );
};

export default Checkout;