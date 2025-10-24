import React from 'react'
import ProductCrd from './ProductCrd';
import {bestSellingItems} from "../../constance/dummyData (3)"


const SellingPrd = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6 py-12  ">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-8 bg-red-500 rounded"></div>
              <p class="text-red-500 font-semibold">This Month</p>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">
              Best Selling Products
            </h2>
          </div>

          <div class="flex items-center gap-3  ">
            <button class="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition mt-16">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellingItems.map((item) => (
            <ProductCrd key={item.image} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default SellingPrd