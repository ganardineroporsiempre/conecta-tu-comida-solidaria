
import React from "react";
import CategoryCard from "./categories/CategoryCard";
import { foodCategory } from "./categories/FoodCategory";
import { babiesCategory } from "./categories/BabiesCategory";
import { drinksCategory } from "./categories/DrinksCategory";
import { emergencyCategory } from "./categories/EmergencyCategory";
import { discountsCategory } from "./categories/DiscountsCategory";
import { campaignsCategory } from "./categories/CampaignsCategory";
import { cleaningCategory } from "./categories/CleaningCategory";

const categories = [
  foodCategory,
  babiesCategory,
  drinksCategory,
  emergencyCategory,
  discountsCategory,
  campaignsCategory,
  cleaningCategory,
];

const CategoryLinks = () => {
  return (
    <div className="conecta-container py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;
