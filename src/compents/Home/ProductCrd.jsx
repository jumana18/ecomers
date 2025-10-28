// import React from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { IoEyeOutline, IoStarSharp } from "react-icons/io5";
// import { flashSaleItems } from "../../constance/dummyData (3)";

// const ProductCrd = ({}) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//       {flashSaleItems.map((item) => (
//         <div
//           key={item.id}
//           className="group bg-white shadow-sm p-4  transition relative overflow-hidden"
//         >
//           {/* Discount Tag */}
//           <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//             -{item.discountPercent}%
//           </span>

//           {/* Wishlist & View Buttons */}
//           <div className="absolute top-3 right-3 flex flex-col space-y-2">
//             <button className="bg-white rounded-full shadow p-2 hover:bg-gray-100">
//               <FaRegHeart className="w-5 h-5 text-gray-700" />
//             </button>
//             <button className="bg-white rounded-full shadow p-2 hover:bg-gray-100">
//               <IoEyeOutline className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>

//           {/* Product Image */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="mx-auto h-60 object-contain transition-transform duration-300 "
//           />

//           {/* Product Info */}
//           <div className="mt-4 text-center">
//             <h3 className="font-semibold text-gray-800">{item.title}</h3>

//             <div className="mt-2 flex items-center justify-center space-x-3">
//               <span className="text-red-500 font-bold text-lg">
//                 ₹{item.salePrice}
//               </span>
//               <span className="text-gray-400 line-through text-sm">
//                 ₹{item.originalPrice}
//               </span>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center justify-center mt-2 space-x-1 text-yellow-400">
//               {[...Array(5)].map((_, i) => (
//                 <IoStarSharp key={i} />
//               ))}
//               <p className="text-gray-500 text-sm ml-1">(88)</p>
//             </div>

//             {/* Add To Cart Button — Hidden by default, shows on hover */}
//           </div>

//           <button
//             class="absolute bottom-0 left-0 w-full bg-gray-900 text-white font-medium py-2 opacity-0
//              group-hover:opacity-100 group-hover:translate-y-0 translate-y-3
//              transition-all duration-300 ease-in-out"
//           >
//             Add To Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline, IoStarSharp } from "react-icons/io5";

const ProductCrd = ({ item }) => {
  return (
    <div className="max-w-[270px] h-auto p-3 relative group bg-white shadow-md rounded-xl overflow-hidden">
      {/* Action Icons */}
      {/* Discount Badge */}
      <div className=" flex items-start">
        <div className="h-6 w-12 bg-red-500 rounded-sm flex justify-center items-center ">
          <p className="text-sm text-white font-medium">
            {" "}
            -{item.discountPercent}%
          </p>
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2 ">
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
            <FaRegHeart size={16} />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
            <IoEyeOutline size={16} />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center h-40 mt-4 relative">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="max-h-36 object-contain"
        />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-black  text-white text-sm font-semibold py-2 transition mb-[-20px]">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800">{item.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-red-500 font-bold text-sm">
          ₹{item.salePrice}
        </span>
        <span className="text-gray-400 line-through text-xs">
          ₹{item.originalPrice}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
        {[...Array(5)].map((_, i) => (
          <IoStarSharp key={i} />
        ))}
        <span className="text-gray-500 text-xs ml-1">({item.stock})</span>
      </div>

      {/* Add to Cart Button (hover display) */}
    </div>
  );
};

export default ProductCrd;
