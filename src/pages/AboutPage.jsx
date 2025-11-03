import React from 'react'
import womanpar from '../assets/fcc89aaa7b85f8c1dcce81e71e2eb178be13bd4d.jpg'
import TeamSection from '../compents/About/TeamSection'
import Card from '../compents/About/Card';
import Serviceicon from '../compents/Home/Serviceicon'
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-1 py-6">
        {/* Breadcrumbs */}

        <div className="mb-12 md:mb-16">
          <p className="text-gray-500">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium">About</span>
          </p>
        </div>

        {/* Section */}

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 ">
            <h2 className="text-4xl font-bold mb-10">Our Story</h2>
            <p className="text-black leading-relaxed mb-8 text-xl">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="text-black leading-relaxed mb-8 text-xl">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          {/* Right image */}
          <div className="flex-1">
            <img src={womanpar} alt="" className="w-[40rem] " />
          </div>
        </div>

        {/* ===== Stats Section ===== */}
        <Card />

        {/* ===== Team Section ===== */}
        <TeamSection />
        {/* Services Section */}
        <Serviceicon />
      </div>
    </>
  );
}

export default About