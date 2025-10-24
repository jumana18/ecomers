import React from "react";
import { GoChevronRight } from "react-icons/go";


const Sidebar = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <aside className="w-1/5 border-r p-6 text-gray-800">
      <ul className="space-y-4 font-medium text-lg">
        {categories.map((cat, index) => (
          <li key={index} className="flex justify-between cursor-pointer">
            {cat}
            {(cat === "Woman’s Fashion" || cat === "Men’s Fashion") && (
              <span className="text-black" >
                <GoChevronRight />
              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
