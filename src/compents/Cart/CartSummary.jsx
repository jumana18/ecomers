import React from "react";

const CartSummary = ({ subtotal }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-7xl mx-auto">
      {/* Coupon Section */}
      <div className="flex items-center gap-3 w-full md:w-[400px]">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border border-gray-300 rounded-md px-4 py-2 "
        />
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">
          Apply Coupon
        </button>
      </div>

      {/* Cart Total */}
      <div className="border border-gray-300 rounded-md p-6 w-full md:w-[400px] ml-auto">
        <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
        <div className="flex justify-between py-2 border-b">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between py-3 font-semibold">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>
        <button className="bg-red-500 text-white w-full py-2 rounded-md mt-3 hover:bg-red-600">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
