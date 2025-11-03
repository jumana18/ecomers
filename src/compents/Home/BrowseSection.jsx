import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CategoriesCard from './CategoriesCard';


const BrowseSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12  ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-8 bg-red-500 rounded"></div>
              <p className="text-red-500 font-semibold">Categories</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Browse By Category</h2>
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
         
         <CategoriesCard/>
       
      </section>
    </>
  );
}

export default BrowseSection