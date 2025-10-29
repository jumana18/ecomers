import React from "react";
import LeftImage from '../SignUp/LeftImage'

const SignForm = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white ">
        <LeftImage />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 max-w-md">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900">
          Create an account
        </h2>
        <p className=" text-gray-900 mb-6 text-md ">Enter your details below</p>
        <form className=" space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500 mb-10
            "
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3  rounded-md  transition"
          >
            Create Account
          </button>
          <button className="w-full rounded-md  mt-4 border py-3 flex justify-center items-center   border-gray-400 gap-2 transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s"
              alt=""
              className="w-5 h-5 "
            />
            <p>Sign up with Google</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignForm;
