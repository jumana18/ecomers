import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { teamMembers } from "../../constance/teamMembers";

export default function TeamSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % teamMembers.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const visibleMembers = [
    teamMembers[index % teamMembers.length],
    teamMembers[(index + 1) % teamMembers.length],
    teamMembers[(index + 2) % teamMembers.length],
  ];

  return (
    <div className="bg-white p-8 rounded-3xl max-w-6xl mx-auto relative overflow-hidden">
      {/* Slider */}
      <div className="flex justify-center gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleMembers.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 120, damping: 15 },
              }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              className="w-1/3 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg shadow-md w-full h-[400px] object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-lg text-gray-800 mb-3">{member.position}</p>

              <div className="flex gap-4 justify-center text-gray-800">
                <FaTwitter className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaLinkedinIn className="cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-3">
        {teamMembers.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all 
              ${index === idx ? "bg-amber-800 scale-125" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
