
import React from "react";
import { CategoryData } from "@/types/category";

interface CategoryCardProps {
  category: CategoryData;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <a
      href={category.href}
      className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group"
    >
      <div className="mb-3 p-3 bg-gray-50 rounded-full group-hover:bg-conecta-green-50 transition-colors">
        {category.icon}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-conecta-green-600 transition-colors">
        {category.name}
      </span>
    </a>
  );
};

export default CategoryCard;
