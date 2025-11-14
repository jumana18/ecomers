import React from "react";

const CartTable = ({ cartItems, removeItem, updateQuantity }) => {
  return (
    <div className="overflow-x-auto  max-w-7xl mx-auto w-full">
      <table className="w-full text-left text-sm md:text-base table-fixed">
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
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-4 flex items-center gap-3">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  X
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <span className="font-medium text-gray-800">{item.name}</span>
              </td>

              <td className="py-4 px-4 text-center text-gray-700">
                ${item.price}
              </td>

              <td className="py-4 px-4 text-center">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
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
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
