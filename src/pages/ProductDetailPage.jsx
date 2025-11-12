import React from 'react'
import { Link } from 'react-router'
import ProductImg from '../compents/ProductDetail/ProductImg';
import RightProductInfo from '../compents/ProductDetail/RightProductInfo';
import RelatedItem from '../compents/ProductDetail/RelatedItem';

const ProductDetailPage = () => {
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
          <span className="text-black font-medium">Havic HV G-92 Gamepad</span>
        </p>
      </div>
      <div className='max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-8'>
      <ProductImg/>
      <RightProductInfo/>
      </div>
     <RelatedItem/>
    </>
  );
}

export default ProductDetailPage