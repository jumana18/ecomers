import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline, IoStarSharp } from "react-icons/io5";
import { bestSellingItems } from '../../constance/dummyData (3)';


const BestCard = () => {
  return (
<>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {bestSellingItems.map((item) => (
        <div
          key={item.id}
          className="group bg-white  shadow-sm p-4  transition relative overflow-hidden"
        >
          {/* Discount Tag */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{item.discountPercent}%
          </span>

          {/* Wishlist & View Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <button className="bg-white rounded-full shadow p-2 hover:bg-gray-100">
              <FaRegHeart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white rounded-full shadow p-2 hover:bg-gray-100">
              <IoEyeOutline className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Product Image */}
          <img
            src={item.image}
            alt={item.title}
            className="mx-auto h-60 object-contain transition-transform duration-300 "
          />

          {/* Product Info */}
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-gray-800">{item.title}</h3>

            <div className="mt-2 flex items-center justify-center space-x-3">
              <span className="text-red-500 font-bold text-lg">
                ₹{item.salePrice}
              </span>
              <span className="text-gray-400 line-through text-sm">
                ₹{item.originalPrice}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mt-2 space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <IoStarSharp key={i} />
              ))}
              <p className="text-gray-500 text-sm ml-1">(88)</p>
            </div>

            {/* Add To Cart Button — Hidden by default, shows on hover */}
          </div>

          <button
            class="absolute bottom-0 left-0 w-full bg-gray-900 text-white font-medium py-2 opacity-0
             group-hover:opacity-100 group-hover:translate-y-0 translate-y-3
             transition-all duration-300 ease-in-out"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
</>
  )
}

export default BestCard