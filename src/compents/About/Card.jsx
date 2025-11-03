import React from 'react'
import { FaStore, FaDollarSign, FaUsers, FaSackDollar } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      {/* ===== Stats Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center mt-28">
        {/* 1 */}
        <div className="border rounded-lg p-6 transition hover:bg-red-500 hover:text-white cursor-pointer">
          <div className="flex justify-center mb-3">
            <div className=" bg-gray-200 rounded-full p-4 ">
                <div className="bg-black text-white rounded-full p-4">
              <FaStore className="text-2xl" /></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">10.5k</h2>
          <p>Sellers active our site</p>
        </div>

        {/* 2 */}
        <div className="border rounded-lg p-6 transition hover:bg-red-500 hover:text-white cursor-pointer">
          <div className="flex justify-center mb-3">
            <div className=" bg-gray-200 rounded-full p-4 ">
                <div className="bg-black text-white rounded-full p-4">
              <FaDollarSign className="text-2xl" /></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">33k</h2>
          <p>Monthly Product Sale</p>
        </div>

        {/* 3 */}
        <div className="border rounded-lg p-6 transition hover:bg-red-500 hover:text-white cursor-pointer">
          <div className="flex justify-center mb-3">
           <div className=" bg-gray-200 rounded-full p-4 ">
                <div className="bg-black text-white rounded-full p-4">
              <FaUsers className="text-2xl" /></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">45.5k</h2>
          <p>Customer active in our site</p>
        </div>

        {/* 4 */}
        <div className="border rounded-lg p-6 transition hover:bg-red-500 hover:text-white cursor-pointer">
          <div className="flex justify-center mb-3">
            <div className=" bg-gray-200 rounded-full p-4 ">
                <div className="bg-black text-white rounded-full p-4">
              <FaSackDollar className="text-2xl" /></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold">25k</h2>
          <p>Annual gross sale in our site</p>
        </div>
      </div>
    </>
  );
}

export default Card