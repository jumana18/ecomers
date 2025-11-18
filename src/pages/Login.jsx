import React, { useState } from "react";
import Leftimage from "../compents/SignUp/LeftImage";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const savedUser = useSelector((state) => state.user.user); // stored user from signup

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all the fields!");
      return;
    }
    

    if (!savedUser) {
      toast.error("No user found! Please sign up first.");
      return;
    }

    // --- LOGIN CHECK ---
    if (
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      toast.success("Login Successful!");
      navigate("/"); // redirect to home
    } else {
      toast.error("Incorrect email or password!");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row">
          <Leftimage />
        </div>

        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Log in to Exclusive
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 mb-10"
            />

            <button
              type="submit"
              className="w-40 bg-red-600 text-white py-3 rounded-md"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
