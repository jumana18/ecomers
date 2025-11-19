import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductImg from "../compents/ProductDetail/ProductImg";
import RightProductInfo from "../compents/ProductDetail/RightProductInfo";
import RelatedItem from "../compents/ProductDetail/RelatedItem";

const ProductDetailPage = () => {
  const { id } = useParams();
  const selectedProduct = useSelector((state) => state.user.selectedProduct);


  if (!selectedProduct) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p className="mb-4">
          No product selected. Try selecting a product first.
        </p>
        <Link to="/" className="text-blue-600 underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mb-12 md:mb-16 max-w-6xl mx-auto px-1 py-6 mt-10">
        <p className="text-gray-500">
          <Link to="/" className="hover:text-black transition">
            Account
          </Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-black transition">
            Gaming
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">
            {selectedProduct.title}
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-8">
        <ProductImg product={selectedProduct} />
        <RightProductInfo product={selectedProduct} />
      </div>

     <RelatedItem/>
    </>
  );
};

export default ProductDetailPage;
