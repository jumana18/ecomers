import { useState } from "react";
import LeftImage from "../SignUp/LeftImage";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const SignForm = () => {
  const dispatch = useDispatch();

  // Store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Update form values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit function with toast + redux
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.warn("Enter a valid email address!");
      return;
    }

    // Redux store save
    dispatch(setUser(formData));

    // Success toast
    toast.success("Account created successfully!");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row">
          <LeftImage />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Create an account
          </h2>

          <p className="text-gray-900 mb-6 text-md">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500"
            />

            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-gray-500 mb-10"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md transition"
            >
              Create Account
            </button>

            <button className="w-full rounded-md mt-4 border py-3 flex justify-center items-center border-gray-400 gap-2 transition">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s"
                alt=""
                className="w-5 h-5"
              />
              <span> Sign up with Google</span>
            </button>

            <p className="text-center text-gray-600 text-lg mt-4">
              Already have account?
              <Link to="/login" className="text-gray-700 underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignForm;
