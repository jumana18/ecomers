import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,  } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.user.cart);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-12">
        <p className="text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Cart</span>
        </p>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 w-[45%]">Product</th>
              <th className="py-3 px-4 w-[15%] text-center">Price</th>
              <th className="py-3 px-4 w-[20%] text-center">Quantity</th>
              <th className="py-3 px-4 w-[20%] text-center">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 flex items-center gap-3">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 font-bold hover:text-red-700"
                  >
                    X
                  </button>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain rounded-md"
                  />

                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </td>

                <td className="py-4 px-4 text-center text-gray-700">
                  ₹{item.salePrice}
                </td>

                <td className="py-4 px-4 text-center">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateCartQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    className="border border-gray-300 rounded-md px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="py-4 px-4 text-center font-semibold text-gray-800">
                  ₹{(item.salePrice * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
        <Link to="/">
          <button className="border border-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
            Return To Shop
          </button>
        </Link>

        <button className="border border-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      {/* Cart Summary */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div></div>

        <div className="border border-gray-300 rounded-md p-6 w-full md:w-[400px] ml-auto">
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
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/CheckoitPage")}
            className="bg-red-500 text-white w-full py-2 rounded-md mt-3 hover:bg-red-600"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
