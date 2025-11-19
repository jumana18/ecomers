import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import OrderSummary from "./OrderSummary";

const BillingForm = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6">Billing Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Billing Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                First Name <span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Company Name
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Street Address <span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Town/City <span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Phone Number<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <div>
              <label className="block text-xl font-medium mb-1 text-gray-400">
                Email Address<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#F5F5F5] rounded-md px-3 py-2 
                focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            {/* Custom Checkbox with React Icon */}
            <div className="flex items-center space-x-3 pt-2 cursor-pointer">
              <div
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 flex items-center justify-center rounded border transition-all duration-200
                  ${
                    checked
                      ? "bg-[#DB4444] border-[#DB4444]"
                      : "border-gray-400 bg-white"
                  }`}
              >
                {checked && <FaCheck className="text-white text-xs" />}
              </div>
              <label className="text-sm text-gray-700 select-none">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default BillingForm;
