import Icon from "@/components/ui/icon";

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
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold font-merriweather mb-4 text-gray-800">
        Категории рецептов
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-badge ${category.color} hover:shadow-md transition-all duration-200 flex items-center space-x-2`}
          >
            <Icon name={category.icon as any} size={16} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
