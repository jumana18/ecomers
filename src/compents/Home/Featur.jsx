import React from "react";
import Icon from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import woman from "../../assets/455c8d6408463f7e8f57dd3048a2444dbfa0cb90 (1).jpg";
import speaker from "../../assets/e5659d572977438364a41d7e8c9d1e9a794d43ed.png";
import perfume from "../../assets/15315cd15102562cf220504d288fa568eaa816dd.png";
import { FaShippingFast, FaHeadset, FaRegCheckCircle } from "react-icons/fa";

const Featur = () => {
  return (
    <section className="max-w-[1170px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-8 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">Featured</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">New Arrival</h2>
        </div>
      </div>

      {/* Product Grid (Figma accurate layout) */}
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-[60px]">
        {/* Left Big Card */}
        <div className="relative bg-black rounded-md overflow-hidden h-[768px]">
          <img
            src={Icon}
            alt="PlayStation 5"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-lg mb-3 text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <span className="font-semibold underline cursor-pointer">
              Shop Now
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-[60px]">
          {/* Women's Collection */}
          <div className="relative bg-gray-900 rounded-md overflow-hidden h-[350px]">
            <img
              src={woman}
              alt="Women’s Collection"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-semibold">Women’s Collections</h3>
              <p className="text-sm mb-3 text-gray-200">
                Featured woman collections that give you another vibe.
              </p>
              <span className="font-semibold underline cursor-pointer">
                Shop Now
              </span>
            </div>
          </div>

          {/* Speakers + Perfume */}
          <div className="grid grid-cols-2 gap-[60px]">
            {/* Speakers */}
            <div className="relative bg-gray-800 rounded-md overflow-hidden h-[350px]">
              <img
                src={speaker}
                alt="Speakers"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">Speakers</h3>
                <p className="text-sm mb-3 text-gray-300">
                  Amazon wireless speakers
                </p>
                <span className="font-semibold underline cursor-pointer">
                  Shop Now
                </span>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-gray-800 rounded-md overflow-hidden h-[350px]">
              <img
                src={perfume}
                alt="Perfume"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">Perfume</h3>
                <p className="text-sm mb-3 text-gray-300">
                  GUCCI INTENSE OUD EDP
                </p>
                <span className="font-semibold underline cursor-pointer">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 flex flex-col md:flex-row justify-around items-center gap-12 text-center">
        <div className="flex flex-col items-center text-center">
          <div className=" bg-gray-200 rounded-full p-4 ">
            <div className="bg-black text-white rounded-full p-4">
              <FaShippingFast className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg ">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-800 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className=" bg-gray-200 rounded-full p-4 ">
            <div className="bg-black text-white rounded-full p-4">
              <FaHeadset className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg ">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-800 text-sm">
            Friendly 24/7 customer support{" "}
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className=" bg-gray-200 rounded-full p-4 ">
            <div className="bg-black text-white rounded-full p-4">
              <FaRegCheckCircle className="text-2xl" />
            </div>
          </div>
          <h3 className="font-bold text-lg ">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-800 text-sm">
            We reurn money within 30 days{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featur;
