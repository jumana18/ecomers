import React from 'react'
import Leftimage from '../compents/SignUp/LeftImage'

const Login = () => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row ">
          <Leftimage />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Log in to Exclusive
          </h2>
          <p className=" text-gray-900 mb-6 text-lg ">
            Enter your details below
          </p>
          <form className=" space-y-4">
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
              className=" w-40 bg-red-600 text-white py-3  rounded-md  transition"
            >
              Log In
            </button>
            <a href="#" className='text-red-600 font-medium px-20 py-2'>Forget Password?</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login