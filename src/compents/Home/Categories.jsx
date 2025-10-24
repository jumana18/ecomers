import React from 'react'

const Categories = () => {
  return (
    <>
      <section class="bg-black text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between max-w-6xl  mx-auto mb-20 mt-20 ">
        <div class="md:w-1/2 space-y-6 text-center md:text-left">
          <p class="text-green-500 font-semibold tracking-widest ">
            Categories
          </p>
          <h2 class="text-4xl md:text-5xl font-bold leading-snug">
            Enhance Your <br /> Music Experience
          </h2>

          <div class="flex justify-center md:justify-start gap-4 text-center">
            <div class="bg-white text-black rounded-full w-18 h-18 flex flex-col items-center justify-center">
              <span class="text-xl font-bold">23</span>
              <span class="text-xs uppercase">Hours</span>
            </div>
            <div class="bg-white text-black rounded-full w-18 h-18  flex flex-col items-center justify-center">
              <span class="text-xl font-bold">05</span>
              <span class="text-xs uppercase">Days</span>
            </div>
            <div class="bg-white text-black rounded-full w-18 h-18  flex flex-col items-center justify-center">
              <span class="text-xl font-bold">59</span>
              <span class="text-xs uppercase">Minutes</span>
            </div>
            <div class="bg-white text-black rounded-full w-18 h-18  flex flex-col items-center justify-center">
              <span class="text-xl font-bold">35</span>
              <span class="text-xs uppercase">Seconds</span>
            </div>
          </div>

          <button class="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold mt-6 hover:bg-green-600 transition">
            Buy Now!
          </button>
        </div>

        <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/2/393350202/UN/KA/TZ/23113504/jbl-speaker-1000x1000.jpg"
            alt="JBL Speaker"
            class="w-full max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </section>
    </>
  );
}

export default Categories