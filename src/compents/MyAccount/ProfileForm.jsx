import React from 'react'

const ProfileForm = () => {
  return (
    <>
      <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-32">
        <h2 className="text-[#DB4444] text-lg font-semibold mb-4 flex ">
          Edit Your Profile
        </h2>
        <form className="space-y-5">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xl mb-1 text-[#000000]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Md"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>
            <div>
              <label className="block text-xl mb-1 text-[#000000]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Rimel"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>
            {/* Email and  Address */}
            <div>
              <label className="block text-xl mb-1 text-[#000000]">
                Email{" "}
              </label>
              <input
                type="text"
                placeholder="rimel1111@gmail.com"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>
            <div>
              <label className="block text-xl mb-1 text-[#000000]">
                Address{" "}
              </label>
              <input
                type="text"
                placeholder="Kingston, 5236, United State"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>
          </div>
          {/* password Change */}
          <div>
            <h3 className=" text-xl mb-2 text-[#000000] ">Password Changes</h3>
            <div className="space-y-3 ">
              <input
                type="password"
                placeholder="Current Passwod"
                className="w-full border  border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
              <input
                type="password"
                placeholder="New Passwod"
                className="w-full border  border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
              <input
                type="password"
                placeholder="Confirm New Passwod"
                className="w-full border  border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end items-center space-x-4 pt-4 ">
            <button type="button" className="text-[#000000] ">
              Cancel
            </button>
            <button  type="submit"  className="text-[#FAFAFA] bg-[#DB4444] px-5 py-2 rounded-md transition">Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileForm