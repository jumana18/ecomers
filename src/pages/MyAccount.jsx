import React from 'react'
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <>
     {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-1 py-6">
        {/* Breadcrumbs */}

        <div className="mb-12 md:mb-16">
          <p className="text-gray-500">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium"> My Account</span>
          </p>
        </div>
        </div>

    </>
  )
}

export default MyAccount