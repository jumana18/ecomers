import React, { useState } from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineCancel } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <div className="hidden sm:flex items-center bg-[#F5F5F5] px-3 py-2 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 sm:w-48"
            />
            <FaSearch size={18} className="text-gray-500" />
          </div>

          {/* Right Icons */}
          <Link to="/wishlisPage" className="relative group">
            {/* Heart Icon */}
            <FaRegHeart
              size={22}
              className="text-gray-700 cursor-pointer  transition"
            />

            {/* Red Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              4
            </span>
          </Link>
          {/* Crt */}
          <div className="relative group">
            <Link to="/CrdPage" className="relative group">
              <MdOutlineShoppingCart
                size={22}
                className="text-gray-700 cursor-pointer text-xl transition"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                2
              </span>
            </Link>
          </div>

          {/* User Dropdown */}

          <div className="relative group ">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-700">
              <IoPersonOutline className="text-xl" />
            </button>
            {/* Hover Dropdown */}
            <div
              className=" absolute right-0 mt-3 w-56 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out 
            bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white backdrop-blur-lg z-50 "
            >
              <ul className="py-2 text-sm">
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <IoPersonOutline className=" text-lg" />
                  <span>Manage My Account</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <LuShoppingBag className="text-lg" />
                  <span>Manage My Account</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <MdOutlineCancel className="text-xl" />
                  <span>Manage My Account</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <IoStarOutline className="text-xl" />
                  <span>Manage My Account</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <CiLogout className=" text-xl" />
                  <span>Manage My Account</span>
                </li>
              </ul>
            </div>
          </div>

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
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center text-lg font-medium text-gray-800 space-y-4 py-6 transition-transform duration-300 md:hidden  ${
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
