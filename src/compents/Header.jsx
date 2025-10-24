import React from "react";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  return (
    <>
      <div className="flex flex-col  ">
        {/*Top Banner*/}

        <div className="bg-black text-white text-center py-2 text-sm h-14 ">
          <p className="mt-3 ">
            {" "}
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-semibold underline cursor-pointer  ">
              ShopNow
            </span>
          </p>
        </div>
        <div className="absolute top-3 right-20 flex-col text-white flex items-center justify-center">
          <p className="flex justify-center items-center gap-3">
            English
            <button className="bg-white shadow p-2 w-6 h-6"></button>
          </p>
        </div>

        <header className=" flex justify-between items-center px-32 py-4 border-b">
          <h1 className="text-3xl font-bold">Exclusive</h1>
          <nav className=" flex space-x-18 text-gray-800 text-xl">
            <a href="/" className=" hover:text-black font-medium ">
              Home
            </a>
            <a href="/contact" className=" hover:text-black font-medium ">
              Contact
            </a>
            <a href="/about" className=" hover:text-black font-medium ">
              About
            </a>
            <a href="/signup" className=" hover:text-black font-medium ">
              Sign Up
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for? "
                className=" bg-transparent outline-none text-sm w-60"
              />
              <FaSearch size={18} className="text-gray-500" />
            </div>
            <FaRegHeart size={22} className="text-gray-700 cursor-pointer" />
            <MdOutlineShoppingCart
              size={22}
              className="text-gray-700 cursor-pointer"
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
