import React, { useState } from "react";
import Img1 from "../../assets/thumb1.png";
import Img2 from "../../assets/thumb2.png";
import Img3 from "../../assets/thumb3.png";
import Img4 from "../../assets/thumb4.png";
import Main from "../../assets/faa80b609e3950aed9181acb44510f859f50d850.png";

const ProductImg = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [mainImage, setMainImage] = useState(Main);

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
            className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-sm cursor-pointer bg-gray-100 hover:opacity-80 border-2 transition-all duration-200 ${
              mainImage === img ? "border-gray-400" : "border-transparent"
            }`}
          />
        ))}
      </div>
      {/* Main Image - Right */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-sm p-4">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain rounded-lg"
        />
      </div>
      {/* Colours */}
    
    </div>
  );
};

export default ProductImg;
