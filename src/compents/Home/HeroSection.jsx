import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainBannerData } from "../../constance/dummyData (3)";

const MainBanner = () => {
  const [current, setCurrent] = useState(0);

  const slides = mainBannerData || [];

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="relative bg-black text-white w-full overflow-hidden flex items-center justify-center py-12 md:py-16">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current]?.id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center justify-between w-full gap-8"
          >
            {/* TEXT SECTION */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 w-full lg:w-1/2">

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <img
                  src="https://cdn-icons-png.freepik.com/256/121/121144.png"
                  alt="Logo"
                  className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full p-1"
                />
                <h2 className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                  {slides[current]?.subtitle}
                </h2>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                {slides[current]?.title}
              </h3>

              <button className="flex items-center space-x-2 text-white font-medium group mt-4">
                <span className="border-b border-white group-hover:border-transparent transition">
                  Shop Now
                </span>
              </button>
            </div>

            {/* IMAGE SECTION */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={slides[current]?.image}
                alt={slides[current]?.subtitle}
                className="w-60 sm:w-72 md:w-96 lg:w-[28rem] object-contain"
              />
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 md:bottom-6 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition ${
              i === current
                ? "bg-red-500 scale-125"
                : "bg-gray-500 hover:bg-red-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
