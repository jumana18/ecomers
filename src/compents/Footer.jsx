import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import {FaInstagram} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Exclusive</h2>
          <p className="text-2xl mb-4">Subscribe</p>
          <p className=" text-gray-200 mb-4 text-sm">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full outline-none text-lg text-gray-200 placeholder-gray-400 h-14"
            />
            <button className="bg-transparent px-3">
              <AiOutlineSend
                size={18}
                className=" text-gray-400 hover:text-white"
              />
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl ">Support</h3>
          <p className="text-gray-200 text-xl mb-4">
            111 Bijoy sarani,Dhaka, DH 1525,Bangladesh.
          </p>
          <p className="text-gray-200 text-xl mb-4">exclusive@gmail.com</p>
          <p className=" text-gray-200 text-xl ">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Accound</h3>
          <ul className=" space-y-2 text-gray-200 text-xl">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Quick Lnk</h3>
          <ul className="space-y-2 text-gray-200 text-xl">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl">Download App </h3>
          <p className="text-gray-200 text-lg mb-4">
            Save $3 With App New User Only{" "}
          </p>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
              alt="QR Code"
              className="w-16 h-16 bg-white p-1"
            />
            <div className=" space-y-2">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=hi"
                alt="Google Play"
                className="w-32"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="w-32"
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-white">
            <TiSocialFacebook size={26} />
            <CiTwitter size={26} />
            <FaInstagram size={26} />
            <TiSocialLinkedin size={26}/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer