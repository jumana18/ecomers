import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="mb-12 md:mb-16 max-w-7xl mx-auto px-6 py-8">
        <p className="text-gray-500 text-sm md:text-base">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">404 Error</span>
        </p>
      </div>

      {/* Error Message Section */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl  sm:text-5xl md:text-8xl font-medium text-black mb-10">
          404 Not Found
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-20 max-w-xl">
          The page you’re looking for doesn’t exist or was moved. You can go
          back to the homepage.
        </p>

        {/* Button with Link */}
        <Link to="/">
          <button className="bg-[#DB4444] text-white px-8 py-3 rounded-md  transition w-full sm:w-auto mb-40">
            Back to Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
