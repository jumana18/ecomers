import React from "react";

import ProductCrd from "../Home/ProductCrd";
import { bestSellingItems } from "../../constance/dummyData (3)";

const WishlistSection = () => {
  return (
    <>
      {/* Wishlist Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wishlist (4)</h2>
          <button className="border border-gray-800 px-4 py-2 rounded">
            Move All To Bag
          </button>
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellingItems.map((item) => (
            <ProductCrd key={item.image} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default WishlistSection;
