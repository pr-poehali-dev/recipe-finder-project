import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" className="text-recipe-peach" size={32} />
            <h1 className="text-2xl font-bold font-merriweather text-gray-800">
              Домашние Рецепты
            </h1>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Поиск рецептов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border-gray-200 focus:border-recipe-peach focus:ring-recipe-peach"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-recipe-peach transition-colors"
            >
              Избранное
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-recipe-peach transition-colors"
            >
              Мои рецепты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
