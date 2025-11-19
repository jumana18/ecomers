import React, { useState, useEffect } from "react";

/**
 * Props:
 *  - product: object which can contain image (main) and images (array)
 *
 * If no product passed, shows nothing.
 */
const ProductImg = ({ product }) => {
  const images = product?.images ?? (product?.image ? [product.image] : []);
  const [mainImage, setMainImage] = useState(images[0] ?? "");

  useEffect(() => {
    setMainImage(images[0] ?? "");
  }, [product]); // update when product changes

  if (!product) return null;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto">
      {/* Thumbnails - Left */}
      <div className="flex md:flex-col gap-3 justify-center md:justify-start ">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 object-cover rounded-sm cursor-pointer bg-gray-100 hover:opacity-80 border-2 transition-all duration-200 ${
              mainImage === img ? "border-gray-400" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Main Image - Right */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-sm p-4">
        {mainImage ? (
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImg;
