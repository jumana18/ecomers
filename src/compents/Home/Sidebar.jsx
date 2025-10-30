import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-100 shadow">
        <h2 className="text-xl font-semibold">Categories</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-3/4 sm:w-1/2 md:w-1/5 bg-white border-r p-6 text-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <ul className="space-y-4 font-medium text-lg">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="flex justify-between cursor-pointer hover:text-red-500 transition-colors"
            >
              {cat}
              {(cat === "Woman’s Fashion" || cat === "Men’s Fashion") && (
                <span className="text-black">
                  <GoChevronRight />
                </span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Background Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
