import React, { useState } from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineCancel } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { IoStarOutline, IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state)=>state.user?.user)
  console.log({user});
  

  return (
    <>
      {/* --- Header Banner --- */}
      <div className="flex flex-col relative">
        {/* Top Banner */}
        <div className="bg-black text-white text-center py-3 text-xs sm:text-sm md:text-base flex flex-col sm:flex-row justify-center sm:justify-between items-center px-3 sm:px-8 md:px-16 gap-2">
          {/* Offer Text */}
          <p className="flex flex-wrap justify-center items-center text-center">
            Summer Sale For All Swim Suits And Free Express Delivery —{" "}
            <span className="font-semibold underline cursor-pointer ml-1">
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
      <header className="w-full flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-3 sm:py-4 border-b relative bg-white">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Exclusive
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 text-sm lg:text-lg font-medium">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/signup" className="hover:text-black">
            Sign Up
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          {/* Search Input (hidden on small screens) */}
          <div className="hidden sm:flex items-center bg-[#F5F5F5] px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-xs sm:text-sm w-24 sm:w-40 md:w-48"
            />
            <FaSearch size={16} className="text-gray-500" />
          </div>

          {/* Wishlist Icon */}
          <Link to="/WishlisTPage" className="relative group">
            <FaRegHeart size={20} className="text-gray-700 cursor-pointer" />
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              4
            </span>
          </Link>

          {/* Cart Icon */}
          <Link to="/CartPage" className="relative group">
            <MdOutlineShoppingCart
              size={20}
              className="text-gray-700 cursor-pointer"
            />
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              2
            </span>
          </Link>

          {/* User Dropdown */}
          <div className="relative group">
            <button className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-700">
              <IoPersonOutline className="text-base sm:text-xl" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 sm:mt-3 w-44 sm:w-56 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white backdrop-blur-lg z-50">
              <ul className="py-2 text-sm">
                <Link to="/MyAccount">
                  <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                    <IoPersonOutline className="text-lg" />
                    <span>Manage My Account</span>
                  </li>
                </Link>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <LuShoppingBag className="text-lg" />
                  <span>My Order</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <MdOutlineCancel className="text-xl" />
                  <span>My Cancellations</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <IoStarOutline className="text-xl" />
                  <span>My Reviews</span>
                </li>
                <li className="px-5 py-2 flex items-center gap-3 hover:bg-white/10 cursor-pointer">
                  <CiLogout className="text-xl" />
                  <span>Logout</span>
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center text-base font-medium text-gray-800 space-y-4 py-6 transition-all duration-300 md:hidden ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500"
          >
            Contact
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500"
          >
            About
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
