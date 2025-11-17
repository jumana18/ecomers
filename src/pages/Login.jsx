import React, { useState } from "react";
import Leftimage from "../compents/SignUp/LeftImage";
import { toast } from "react-toastify";

const Login = () => {
  
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Update values when typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.warn("Enter a valid email address!");
      return;
    }

    // Success toast
    toast.success("Logged in successfully!");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row">
          <Leftimage />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Log in to Exclusive
          </h2>
          <p className="text-gray-900 mb-6 text-lg">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500 mb-10"
              required
            />

            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="w-40 bg-red-600 text-white py-3 rounded-md transition"
              >
                Log In
              </button>

              <a href="#" className="text-red-600 font-medium">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
