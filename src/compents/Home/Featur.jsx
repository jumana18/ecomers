import React from 'react'
import Icon from '../../assets/ps5-slim-goedkope-playstation_large 1.png'


const Featur = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6 py-12  ">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-4 h-8 bg-red-500 rounded"></div>
              <p class="text-red-500 font-semibold">Featured</p>
            </div>
            <h2 class="text-4xl font-bold text-gray-900">New Arrival</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

          {/* Left Large Card */}

          <div className="relative col-span-1 md:col-span-2 lg:col-span-1 row-span-2 bg-black rounded-md overflow-hidden h-[40rem] w-[40rem]">
            <img
              src={Icon}
              alt=""
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className= " text-2xl font-semibold">PlayStation 5</h3>
              <p className="text-lg mb-3 text-gray-300 ">
                Black and White version of the PS5 coming out on sale.
              </p>
              
              <span className="font-semibold underline ">
                Shop Now
              </span>
            </div>
          </div>
          
          {/* Women's Collection */}

         
        </div>
      </section>
    </>
  );
}

export default Featur