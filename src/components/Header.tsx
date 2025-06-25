import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import SearchSuggestions from "./SearchSuggestions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" className="text-recipe-peach" size={32} />
            <h1 className="text-2xl font-bold font-merriweather text-gray-800">
              Домашние Рецепты
            </h1>
          </div>

          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Найти рецепт по названию, ингредиентам или кухне..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="pl-12 pr-12 py-3 w-full rounded-xl border-gray-200 focus:border-recipe-peach focus:ring-recipe-peach text-base"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-recipe-peach">
                <Icon name="SlidersHorizontal" size={20} />
              </button>
            </div>
            {showSuggestions && <SearchSuggestions query={searchQuery} />}
          </div>

          <nav className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-recipe-peach transition-colors">
              <Icon name="Heart" size={18} />
              <span>Избранное</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-recipe-peach transition-colors">
              <Icon name="BookOpen" size={18} />
              <span>Мои рецепты</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
