import React from "react";
import ProductCrd from "./ProductCrd";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { flashSaleItems } from "../../constance/dummyData (3)";

const FlashSalesHeader = () => {
  return (
    <section class="max-w-7xl mx-auto px-6 py-12  ">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-4 h-8 bg-red-500 rounded"></div>
            <p class="text-red-500 font-semibold">Today’s</p>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Flash Sales</h2>
        </div>

        <div class="flex items-center gap-5 mt-4 md:mt-0 ">
          <div class="flex items-center gap-3 mr-[40rem]">
            <div class="text-center">
              <p class="text-xs text-gray-500">Days</p>
              <p class="text-2xl font-bold text-gray-800">03</p>
            </div>
            <span class="text-3xl font-bold text-red-500">:</span>
            <div class="text-center">
              <p class="text-xs text-gray-500">Hours</p>
              <p class="text-2xl font-bold text-gray-800">23</p>
            </div>
            <span class="text-3xl font-bold text-red-500">:</span>
            <div class="text-center">
              <p class="text-xs text-gray-500">Minutes</p>
              <p class="text-2xl font-bold text-gray-800">19</p>
            </div>
            <span class="text-3xl font-bold text-red-500">:</span>
            <div class="text-center">
              <p class="text-xs text-gray-500">Seconds</p>
              <p class="text-2xl font-bold text-gray-800">56</p>
            </div>
          </div>

          <div class="flex items-center gap-3  ">
            <button class="w-10 h-10 flex items-center justify-center  text-2xl">
              <GoArrowLeft />
            </button>
            <button class="w-10 h-10 flex items-center justify-center text-2xl ">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flashSaleItems.map((item) => (
          <ProductCrd key={item.image} item={item} />
        ))}
      </div>

      <div class="flex justify-center ">
        <button class="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition mt-16">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSalesHeader;
