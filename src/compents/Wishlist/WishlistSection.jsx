import React from "react";
import { useSelector } from "react-redux";
import ProductCrd from "../Home/ProductCrd";

const WishlistSection = () => {
  const wishlist = useSelector((state) => state.user.wishlist);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Wishlist ({wishlist.length})</h2>

        {wishlist.length > 0 && (
          <button className="border border-gray-800 px-4 py-2 rounded">
            Move All To Bag
          </button>
        )}
      </div>

      {/* Empty Wishlist */}
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <ProductCrd key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default WishlistSection;
