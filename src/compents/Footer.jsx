import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10 md:px-20">
      <div className="border-b border-gray-700 pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* --- Subscribe Section --- */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exclusive</h2>
          <p className="text-xl mb-4 font-semibold">Subscribe</p>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full outline-none text-sm sm:text-base text-gray-200 placeholder-gray-400 h-12"
            />
            <button className="bg-transparent px-3">
              <AiOutlineSend
                size={20}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              />
            </button>
          </div>
        </div>

        {/* --- Support Section --- */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer md:cursor-default"
            onClick={() => toggleSection("support")}
          >
            <h3 className="font-semibold text-xl sm:text-2xl">Support</h3>
            <div className="md:hidden">
              {openSection === "support" ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </div>
          <div
            className={`${
              openSection === "support" || window.innerWidth >= 768
                ? "block"
                : "hidden"
            } mt-4 md:block`}
          >
            <p className="text-gray-300 text-base sm:text-lg mb-3">
              111 Bijoy Sarani, Dhaka, DH 1525, Bangladesh.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-2">
              exclusive@gmail.com
            </p>
            <p className="text-gray-300 text-base sm:text-lg">
              +88015-88888-9999
            </p>
          </div>
        </div>

        {/* --- Account Section --- */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer md:cursor-default"
            onClick={() => toggleSection("account")}
          >
            <h3 className="font-semibold text-xl sm:text-2xl">Account</h3>
            <div className="md:hidden">
              {openSection === "account" ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </div>
          <ul
            className={`space-y-2 mt-4 text-gray-300 text-base sm:text-lg ${
              openSection === "account" || window.innerWidth >= 768
                ? "block"
                : "hidden"
            } md:block`}
          >
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Login / Register</a></li>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
          </ul>
        </div>

        {/* --- Quick Links Section --- */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer md:cursor-default"
            onClick={() => toggleSection("links")}
          >
            <h3 className="font-semibold text-xl sm:text-2xl">Quick Links</h3>
            <div className="md:hidden">
              {openSection === "links" ? (
                <IoIosArrowUp size={22} />
              ) : (
                <IoIosArrowDown size={22} />
              )}
            </div>
          </div>
          <ul
            className={`space-y-2 mt-4 text-gray-300 text-base sm:text-lg ${
              openSection === "links" || window.innerWidth >= 768
                ? "block"
                : "hidden"
            } md:block`}
          >
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* --- Download App Section --- */}
        <div>
          <h3 className="font-semibold mb-4 text-xl sm:text-2xl">Download App</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Save $3 with App — New User Only
          </p>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
              alt="QR Code"
              className="w-14 h-14 bg-white p-1 rounded"
            />
            <div className="space-y-2">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Google Play"
                className="w-28"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="w-28"
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <TiSocialFacebook size={26} className="hover:text-white transition-colors" />
            <CiTwitter size={26} className="hover:text-white transition-colors" />
            <FaInstagram size={26} className="hover:text-white transition-colors" />
            <TiSocialLinkedin size={26} className="hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2025 Exclusive. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
