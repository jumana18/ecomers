import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.user.cart);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );

const applyCoupon = () => {
  if (coupon.trim().toUpperCase() === "SALE10") {
    setDiscount(subtotal * 0.1);
    alert("Coupon Applied Successfully!");
  } else {
    alert("Invalid Coupon Code!");
    setDiscount(0);
  }
};


  return (
    <section className="max-w-7xl mx-auto px-4 py-6 md:py-10">
      {/* BREADCRUMB */}
      <div className="mb-8 md:mb-12 text-sm md:text-base">
        <p className="text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Cart</span>
        </p>
      </div>

      {/* RESPONSIVE TABLE */}
    <div className="w-full overflow-x-auto">
  <table className="w-full table-fixed text-xs sm:text-sm md:text-base">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-3 px-4 w-[40%]">Product</th>
        <th className="py-3 px-4 w-[20%] text-center">Price</th>
        <th className="py-3 px-4 w-[20%] text-center">Quantity</th>
        <th className="py-3 px-4 w-[20%] text-center">Subtotal</th>
      </tr>
    </thead>

    <tbody>
      {cartItems.map((item) => (
        <tr key={item.id} className="hover:bg-gray-50 border-b">
          
          {/* PRODUCT */}
          <td className="py-4 px-4 flex items-center gap-3 overflow-hidden">
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 font-bold hover:text-red-700 shrink-0"
            >
              X
            </button>

            <img
              src={item.image}
              className="w-14 h-14 object-contain rounded shrink-0"
            />

            <span className="font-medium text-gray-800 truncate">
              {item.title}
            </span>
          </td>

          {/* PRICE */}
          <td className="py-4 px-4 text-center whitespace-nowrap">
            ₹{item.salePrice}
          </td>

          {/* QUANTITY */}
          <td className="py-4 px-4 text-center">
            <input
              type="number"
              min="1"
              value={item.quantity}
              className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center"
              onChange={(e) =>
                dispatch(
                  updateCartQuantity({
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />
          </td>

          {/* SUBTOTAL */}
          <td className="py-4 px-4 text-center font-semibold whitespace-nowrap">
            ₹{(item.salePrice * item.quantity).toFixed(2)}
          </td>

        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* BUTTONS BELOW TABLE */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
        <Link
          to="/"
          className="border border-gray-700 px-6 py-3 rounded-md  text-center"
        >
          Return To Shop
        </Link>

        <button
      
          className="border border-gray-700 px-6 py-3 rounded-md "
        >
          Update Cart
        </button>
      </div>

      {/* COUPON + CART TOTAL */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* COUPON BOX */}
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="border px-4 py-3 rounded-md w-full max-w-sm"
          />
    <button
  onClick={applyCoupon}
  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
>
  Apply Coupon
</button>

        </div>

        {/* CART TOTAL */}
        <div className="border border-gray-300 rounded-md p-6 w-full max-w-md ml-auto">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-3 font-semibold">
            <span>Total:</span>
            <span>₹{(subtotal - discount).toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/CheckoitPage")}
            className="bg-red-500 text-white w-full py-3 rounded-md mt-3 hover:bg-red-600 text-sm md:text-base"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
