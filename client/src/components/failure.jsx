import React from 'react'

const failure = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Transaction Failed</h2>
        <p>Something went wrong. Please try again.</p>
      </div>
    </div>
  )
}

export default failure