import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainBannerData } from "../../constance/dummyData (3)";

const slides = mainBannerData;
console.log({ slides });

const MainBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-black text-white w-7xl overflow-hidden flex items-center justify-center py-10  h-[25rem] ">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between w-full"
          >
            {/* Text Section */}
            <div className="flex flex-col items-start space-y-4 lg:w-1/2">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.freepik.com/256/121/121144.png"
                  alt="Apple Logo"
                  className="w-16 h-16 bg-white "
                />
                <h2 className="text-lg tracking-widest uppercase">
                  {slides[current].subtitle}
                </h2>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                {slides[current].title}
              </h3>

              <button className="flex items-center space-x-2 text-white font-medium group mt-4">
                <span className="border-b border-white group-hover:border-transparent transition">
                  Shop Now
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <img
                src={slides[current].image}
                alt={slides[current].subtitle}
                className="max-w-sm md:max-w-md rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current
                ? "bg-red-500 scale-125"
                : "bg-gray-500 hover:bg-red-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
