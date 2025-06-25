import RecipeCard from "./RecipeCard";
import { Icon } from "./ui/icon";

const featuredRecipes = [
  {
    title: "Домашние блинчики",
    description:
      "Пышные и ароматные блинчики с пошаговыми фото каждого этапа приготовления",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    cookTime: "30 мин",
    difficulty: "Легко",
    steps: 8,
    category: "Завтраки",
  },
  {
    title: "Борщ с говядиной",
    description:
      "Классический украинский борщ с детальными фото каждого ингредиента",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    cookTime: "2 часа",
    difficulty: "Средне",
    steps: 12,
    category: "Обеды",
  },
  {
    title: "Шоколадный торт",
    description:
      "Нежнейший шоколадный торт с кремом и ягодами - пошаговый мастер-класс",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    cookTime: "3 часа",
    difficulty: "Сложно",
    steps: 15,
    category: "Десерты",
  },
  {
    title: "Куриное рагу",
    description:
      "Сытное рагу с овощами и нежной курицей - идеально для семейного ужина",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    cookTime: "1 час",
    difficulty: "Легко",
    steps: 10,
    category: "Ужины",
  },
  {
    title: "Домашний хлеб",
    description:
      "Ароматный хлеб на закваске с хрустящей корочкой - полный гид с фото",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    cookTime: "4 часа",
    difficulty: "Средне",
    steps: 18,
    category: "Выпечка",
  },
  {
    title: "Смузи-боул",
    description: "Яркий и полезный завтрак с ягодами, орехами и семенами чиа",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
    cookTime: "15 мин",
    difficulty: "Легко",
    steps: 5,
    category: "Завтраки",
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-merriweather text-gray-800">
            Популярные рецепты
          </h2>
          <p className="text-gray-600 mt-1">
            Проверенные рецепты от наших поваров
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:border-recipe-peach focus:ring-recipe-peach text-sm">
            <option>Сортировать по популярности</option>
            <option>По времени приготовления</option>
            <option>По сложности</option>
            <option>По рейтингу</option>
          </select>
          <a
            href="#"
            className="text-recipe-peach hover:text-orange-600 font-medium flex items-center space-x-1"
          >
            <span>Смотреть все</span>
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <RecipeCard {...recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
