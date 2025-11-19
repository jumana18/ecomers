import React from "react";
import ProductCrd from '../Home/ProductCrd'
import { flashSaleItems } from "../../constance/dummyData (3)"; // keep your path

const RelatedItem = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-8 bg-[#DB4444] rounded"></div>
            <p className="text-[#DB4444] font-semibold text-2xl">
              Related Item
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flashSaleItems.map((item) => (
          <ProductCrd key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedItem;
