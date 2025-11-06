import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../compents/MyAccount/Sidebar';

const MyAccount = () => {
  return (
    <>
      {/* Breadcrumbs */}

      <div className="mb-12 md:mb-16 max-w-6xl mx-auto px-4 py-6 flex justify-between items-center text-md mt-20">
        <p className="text-gray-500">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium "> My Account</span>
        </p>
        <p className="text-[#000000] ">
          Welcome! <span className="text-[#DB4444]"> Md Rimel</span>
        </p>
      </div>
     <Sidebar/>
    </>
  );
}

export default MyAccount