import React from "react";
import Icon from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import woman from "../../assets/455c8d6408463f7e8f57dd3048a2444dbfa0cb90 (1).jpg";
import speaker from "../../assets/e5659d572977438364a41d7e8c9d1e9a794d43ed.png";
import perfume from "../../assets/15315cd15102562cf220504d288fa568eaa816dd.png";
import Serviceicon from "./Serviceicon";
import { GoArrowUp } from "react-icons/go";

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
      
      <Serviceicon/>

      <div className="flex items-center gap-3 ml-[80rem]  ">
        <button className="w-5xl h-3xl flex items-center justify-center bg-gray-200  rounded-full text-4xl ">
          <GoArrowUp />
        </button>
      </div>
    </section>
  );
};

export default Featur;




// import Remot from "../../assets/remot.png";
// import Lap from "../../assets/lap.png";
// import Bkash from "../../assets/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6.png";
// import Visa from "../../assets/cfb0a6ee01b240273b40dab07f8246ef98aed88a.png";
// import MasterCard from "../../assets/6eefb61d27c754abac218d25d8ea4360de61f8e8.png";
// import Nagad from "../../assets/b28e31b9c88d0c9b038b82deeb0523d82cffe267.png";