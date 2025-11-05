import React, { useState } from "react";
import CartTable from "../compents/Cart/CartTable";
import CartSummary from "../compents/Cart/CartSummary";
import lap from '../assets/lap.png'
import { Link } from "react-router-dom";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image:
        "https://s.alicdn.com/@sc04/kf/Hde19f2f80b4743a29ff4ffabb9698f34D.jpg",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://www.cdiscount.com/pdt2/7/2/3/3/700x700/oem6829130922723/rw/t3-controleur-de-jeu-sans-fil-bluetooth-3-0-gamepa.jpg",
    },
  ]);

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12 md:mb-16 max-w-6xl mx-auto px-1 py-6">
        <p className="text-gray-500">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Cart</span>
        </p>
      </div>
      <CartTable
        cartItems={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
      />

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
        <button className="border border-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
          Return To Shop
        </button>
        <button className="border border-gray-800 px-6 py-2 rounded-md hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      <CartSummary subtotal={subtotal} />
    </section>
  );
};

export default CartPage;

