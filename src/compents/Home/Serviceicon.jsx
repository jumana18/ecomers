import React from "react";
import { FaShippingFast, FaHeadset, FaRegCheckCircle } from "react-icons/fa";

const Serviceicon = () => {
  return (
    <>
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
    </>
  );
};

export default Serviceicon;
