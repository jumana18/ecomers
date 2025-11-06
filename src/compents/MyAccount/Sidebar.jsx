import React from 'react'
import ProfileForm from './ProfileForm';

const Sidebar = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:flex md:space-x-10 ">
        {/* sidebar */}

        <div className="w-full md:w-1/4 mb-8 md:mb-0 ">
          <h3 className=" text-[#000000] mb-3 font-semibold text-xl">
            Manage My Account
          </h3>
          <ul className=" space-y-2 text-lg font-normal">
            <li className=" hover:text-[#DB4444] cursor-pointer text-gray-500 ml-10">
              My Profile
            </li>
            <li className="hover:text-[#DB4444] cursor-pointer text-gray-500  ml-10">
              Address Book
            </li>
            <li className="hover:text-[#DB4444] cursor-pointer text-gray-500 ml-10">
              My Payment Options
            </li>
          </ul>
          <h3 className=" text-[#000000] mb-3 font-semibold text-xl mt-10">
            My Orders{" "}
          </h3>
          <ul className=" space-y-2 text-lg font-normal">
            <li className=" hover:text-[#DB4444] cursor-pointer text-gray-500 ml-10">
              My Returns{" "}
            </li>
            <li className="hover:text-[#DB4444] cursor-pointer text-gray-500  ml-10">
              My Cancellations{" "}
            </li>
          </ul>
          <h3 className=" text-[#000000] mb-3 font-semibold text-xl mt-10">
            My WishList{" "}
          </h3>{" "}
        </div>
      <ProfileForm/>
      </div>
    </>
  );
}

export default Sidebar