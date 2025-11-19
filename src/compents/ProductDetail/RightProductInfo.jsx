import React, { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiTruckLight } from "react-icons/pi";
import { TbReplace } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToWishlist, addToCart } from "../../redux/userSlice";

const RightProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // reset when product changes
    setSelectedSize(null);
    setQuantity(1);
    setIsFavorite(false);
  }, [product]);

  if (!product) return null;

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const handleIncrement = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleWishlist = () => {
    dispatch(addToWishlist(product));
    setIsFavorite(true);
  };

  return (
    <div className="space-y-4">
      {/* Product Title */}
      <h2 className="text-2xl font-semibold">{product.title}</h2>

      {/* Star Rating */}
      <div className="flex items-center gap-1 text-xl text-[#FFAD33]">
        {[...Array(4)].map((_, i) => (
          <IoStarSharp key={i} />
        ))}
        <span className="text-gray-400">
          <IoStarSharp />
        </span>
        <span className="text-md text-gray-500 ml-2">
          ({product.reviews ?? 0} Reviews)
        </span>
        <span className="mx-2 text-[#000000] text-md">|</span>
        <span className="text-[#00FF66] text-sm">
          {product.stock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl text-[#000000] font-semibold">
        ₹{product.salePrice}
      </p>

      {/* Description */}
      <p className="text-[#000000] text-lg leading-relaxed">
        {product.description}
      </p>

      {/* Divider */}
      <div className="border-t border-[#000000] pt-4"></div>

      {/* Colours */}
      <div className="flex items-center gap-3">
        <h4 className="text-base font-medium text-black">Colours:</h4>
        <div className="flex gap-2">
          {(product.colours ?? ["#A0BCE0", "#E07575"]).map((c, idx) => (
            <button
              key={idx}
              className="rounded-full w-5 h-5 border border-gray-800 hover:scale-110 transition"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="flex items-center gap-3">
        <h4 className="text-base font-medium text-black">Size:</h4>
        <div className="flex gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-1 border rounded-md transition-all duration-200 ${
                selectedSize === size
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-400 hover:bg-red-500 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Buttons */}
      <div className="flex items-center gap-4 pt-2">
        {/* Quantity Control */}
        <div className="flex border rounded-lg overflow-hidden">
          <button
            onClick={handleDecrement}
            className="px-3 py-2 hover:bg-[#DB4444] hover:text-white transition"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center border-x outline-none"
          />
          <button
            onClick={handleIncrement}
            className="px-3 py-2 hover:bg-[#DB4444] hover:text-white transition"
          >
            +
          </button>
        </div>

        {/* Buy Now */}
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
        >
          Add to Cart
        </button>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`px-3 py-2 border rounded-md transition-all duration-200 ${
            isFavorite
              ? "bg-red-500 text-white border-red-500"
              : "hover:bg-red-500 hover:text-white border-gray-400"
          }`}
        >
          <FaRegHeart />
        </button>
      </div>

      {/* --- Free Delivery Section --- */}
      <div className="mt-6 w-[80%]">
        <div className="border border-gray-300 rounded-md">
          <div className="flex items-start gap-3 p-4 border-b border-gray-200">
            <PiTruckLight className="text-3xl text-gray-700" />
            <div>
              <h4 className="text-base font-medium text-black">
                Free Delivery
              </h4>
              <p className="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4">
            <TbReplace className="text-3xl text-gray-700" />
            <div>
              <h4 className="text-base font-medium text-black">
                Return Delivery
              </h4>
              <p className="text-sm text-gray-500">
                Free 30 Days Delivery Returns.{" "}
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProductInfo;
