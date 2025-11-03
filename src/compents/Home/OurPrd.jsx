import React from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import {productData}from "../../constance/dummyData (3)"
import ProductCrd from './ProductCrd';

const OurPrd = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12  ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-8 bg-red-500 rounded"></div>
              <p className="text-red-500 font-semibold">Our Products</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Our Products
            </h2>
          </div>

          <div className="flex items-center gap-3  ">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200  rounded-full text-2xl ">
              <GoArrowLeft />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-2xl ">
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map((item) => (
            <ProductCrd key={item.image} item={item} />
          ))}
        </div>

        <div className="flex justify-center ">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition mt-16">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default OurPrd