import Icon from "@/components/ui/icon";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: string;
  steps: number;
  category: string;
}

const RecipeCard = ({
  title,
  description,
  image,
  cookTime,
  difficulty,
  steps,
  category,
}: RecipeCardProps) => {
  return (
    <div className="recipe-card">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3">
          <span className="category-badge bg-white/90 text-gray-700 backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Icon name="Heart" size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold font-merriweather mb-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="TrendingUp" size={14} />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="List" size={14} />
            <span>{steps} шагов</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-recipe-peach hover:bg-orange-200 text-gray-800 py-2 px-4 rounded-lg transition-colors font-medium">
          Смотреть рецепт
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
