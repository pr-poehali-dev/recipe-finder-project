import { useState } from "react";
import Icon from "@/components/ui/icon";
import AdvancedFilters from "./AdvancedFilters";

const categories = [
  { name: "Все", icon: "Utensils", color: "bg-gray-100 text-gray-700" },
  {
    name: "Завтраки",
    icon: "Coffee",
    color: "bg-recipe-cream text-orange-700",
  },
  { name: "Обеды", icon: "Soup", color: "bg-recipe-green text-green-700" },
  {
    name: "Ужины",
    icon: "Drumstick",
    color: "bg-recipe-peach text-orange-800",
  },
  { name: "Десерты", icon: "Cake", color: "bg-pink-100 text-pink-700" },
  {
    name: "Выпечка",
    icon: "Croissant",
    color: "bg-yellow-100 text-yellow-700",
  },
  { name: "Напитки", icon: "GlassWater", color: "bg-blue-100 text-blue-700" },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold font-merriweather text-gray-800">
          Найти рецепты
        </h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 text-recipe-peach hover:text-orange-600 transition-colors"
        >
          <Icon name="Filter" size={18} />
          <span className="text-sm font-medium">Фильтры</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`category-badge ${
              activeCategory === category.name
                ? "bg-recipe-peach text-orange-800 shadow-md"
                : category.color
            } hover:shadow-md transition-all duration-200 flex items-center space-x-2`}
          >
            <Icon name={category.icon as any} size={16} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {showAdvanced && <AdvancedFilters />}
    </div>
  );
};

export default CategoryFilter;
