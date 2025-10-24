import React from "react";
import { categoryData } from "../../constance/dummyData (3)";

const CategoriesCard = () => {
  return (
    <section className="py-10 px-4">
     

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="border rounded-xl flex flex-col items-center justify-center p-4 hover:bg-red-500 hover:text-white transition cursor-pointer group"
          >
            <div className="w-20 h-20 mb-3 ">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform "
              />
            </div>
            <span className="text-lg font-medium text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesCard;
