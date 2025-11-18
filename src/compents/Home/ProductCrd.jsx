import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline, IoStarSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist, addToCart } from "../../redux/userSlice";

const ProductCrd = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-[270px] h-auto p-3 relative group bg-white shadow-md rounded-xl overflow-hidden">
      {/* Discount Badge */}
      <div className="flex items-start">
        <div className="h-6 w-12 bg-red-500 rounded-sm flex justify-center items-center">
          <p className="text-sm text-white font-medium">
            -{item.discountPercent}%
          </p>
        </div>

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/*  Add to Wishlist */}
          <button
            className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(addToWishlist(item));
             
            }}
          >
            <FaRegHeart size={16} />
          </button>

          {/* 👁 Quick View */}
          <button
            className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Quick view clicked!");
            }}
          >
            <IoEyeOutline size={16} />
          </button>
        </div>
      </div>

      {/* Navigate to product details */}
      <Link to={`/product-details/${item.id}`}>
        <div className="flex justify-center items-center h-40 mt-4 relative">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="max-h-36 object-contain"
          />

          {/*  ADD TO CART */}
          <div
            className="absolute bottom-4 left-4 right-4 
                        opacity-0 translate-y-3 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <button
              className="w-full bg-black text-white text-sm font-semibold py-2 transition mb-[-20px]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                dispatch(addToCart(item)); // Add to cart
                
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product Title */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800">{item.title}</h3>

      {/* Price */}
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
    </div>
  );
};

export default ProductCrd;
