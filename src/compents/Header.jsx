import React, { useState } from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* --- Header Banner  --- */}
      <div className="flex flex-col relative">
        {/* --- Top Banner --- */}
        <div className="bg-black text-white text-center py-3 text-sm sm:text-base flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-8 md:px-16 h-auto">
          {/* Offer Text */}
          <p className="mb-2 sm:mb-0  flex justify-center items-center ">
            Summer Sale For All Swim Suits And Free Express Delivery -{" "}
            <span className="font-semibold underline cursor-pointer">
              ShopNow
            </span>
          </p>

          {/* Language Selector */}
          <div className="flex items-center justify-center gap-2 text-white">
            <p>English</p>
            <button className="bg-white shadow p-1.5 w-6 h-6 rounded-sm"></button>
          </div>
        </div>
      </div>

      {/* --- Header Section --- */}
      <header className="w-full flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-4 border-b relative bg-white">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Exclusive
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 text-lg font-medium">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
          <a href="/about" className="hover:text-black">
            About
          </a>
          <a href="/signup" className="hover:text-black">
            Sign Up
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Search (hidden on small screens) */}
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 sm:w-48"
            />
            <FaSearch size={18} className="text-gray-500" />
          </div>

          {/* Icons */}
          <FaRegHeart size={22} className="text-gray-700 cursor-pointer" />
          <MdOutlineShoppingCart
            size={22}
            className="text-gray-700 cursor-pointer"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* --- Mobile Menu Drawer --- */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center text-lg font-medium text-gray-800 space-y-4 py-6 transition-transform duration-300 md:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="/"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/contact"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/about"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/signup"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
