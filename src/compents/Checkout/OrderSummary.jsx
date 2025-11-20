import React from "react";
import { useSelector } from "react-redux";

import Bkash from "../../assets/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6.png";
import Visa from "../../assets/cfb0a6ee01b240273b40dab07f8246ef98aed88a.png";
import MasterCard from "../../assets/6eefb61d27c754abac218d25d8ea4360de61f8e8.png";
import Nagad from "../../assets/b28e31b9c88d0c9b038b82deeb0523d82cffe267.png";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.user.cart);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );

  return (
    <>
      <div className="rounded-md p-6 space-y-5">
        {/* DYNAMIC CART ITEMS */}
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
              <p>{item.title}</p>
            </div>
            <p className="font-medium">₹{item.salePrice * item.quantity}</p>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between text-lg">
          <p>Subtotal:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>

        <div className="border-t border-gray-200 pt-4"></div>

        {/* Shipping */}
        <div className="flex justify-between text-lg">
          <p>Shipping:</p>
          <p>Free</p>
        </div>

        <div className="border-t border-gray-200 pt-4"></div>

        {/* Total */}
        <div className="flex justify-between font-medium text-lg">
          <p>Total:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>

        <div className="border-t border-gray-200 pt-4"></div>

        {/* Payment Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="accent-black" />
              <span className="text-gray-700 font-medium">Bank</span>
            </label>

            <div className="flex items-center gap-3 ml-auto">
              <img src={Bkash} className="w-14" />
              <img src={Visa} className="w-8" />
              <img src={MasterCard} className="w-8" />
              <img src={Nagad} className="w-10" />
            </div>
          </div>

          <label className="flex items-center space-x-2 pt-2">
            <input
              type="radio"
              name="payment"
              className="accent-black"
              defaultChecked
            />
            <span className="text-gray-700 font-medium">Cash on delivery</span>
          </label>
        </div>

        {/* Coupon Section */}
        <div className="flex gap-2 pt-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 
            focus:outline-none focus:ring-1 focus:ring-[#DB4444]"
          />
          <button className="bg-[#DB4444] text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Apply Coupon
          </button>
        </div>

        {/* Place Order */}
        <button className="w-40 bg-[#DB4444] text-white py-3 rounded-md hover:bg-red-600 font-medium mt-4 transition">
          Place Order
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
