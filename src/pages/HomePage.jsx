import React from "react";
import Sidebar from "../compents/Home/Sidebar";
import HeroSection from "../compents/Home/HeroSection";
import BrowseSection from "../compents/Home/BrowseSection";
import FlashSalesHeader from "../compents/Home/FlashSales";
import SellingPrd from "../compents/Home/SellingPrd";
import Categories from "../compents/Home/Categories";
import OurPrd from "../compents/Home/OurPrd";
import Featur from "../compents/Home/Featur";
const Home = () => {
  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className=" max-w-[60%] max-h-[400px] mx-16 mt-10">
          <HeroSection />
        </div>
      </div>
      <FlashSalesHeader />
      <BrowseSection />
      <SellingPrd />
      <Categories />
      <OurPrd />
      <Featur/>
    </>
  );
};

export default Home;
