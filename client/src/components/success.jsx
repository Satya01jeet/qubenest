import React from 'react'

const success = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Transaction Successful!</h2>
        <p>Your transaction has been completed successfully.</p>
      </div>
    </div>
  )
}

export default success