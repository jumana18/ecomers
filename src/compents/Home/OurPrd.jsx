import React from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import ExploreCard from './ExploreCard';

const OurPrd = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6 py-12  ">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-8 bg-red-500 rounded"></div>
              <p class="text-red-500 font-semibold">Our Products</p>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">
              Explore Our Products
            </h2>
          </div>

          <div class="flex items-center gap-3  ">
            <button class="w-10 h-10 flex items-center justify-center bg-gray-200  rounded-full text-2xl ">
              <GoArrowLeft />
            </button>
            <button class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-2xl ">
              <GoArrowRight />
            </button>
          </div>
        </div>
            <ExploreCard/>
            
        <div class="flex justify-center ">
          <button class="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition mt-16">
            View All Products
          </button>
        </div>

      </section>
    </>
  );
}

export default OurPrd