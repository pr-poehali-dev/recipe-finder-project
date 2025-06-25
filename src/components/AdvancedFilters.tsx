import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const cuisineTypes = [
  "Русская",
  "Итальянская",
  "Французская",
  "Азиатская",
  "Американская",
];
const dietaryOptions = [
  "Вегетарианская",
  "Веганская",
  "Безглютеновая",
  "Кето",
  "Низкокалорийная",
];
const difficultyLevels = ["Легко", "Средне", "Сложно"];
const cookingTimes = [
  "До 15 мин",
  "15-30 мин",
  "30-60 мин",
  "1-2 часа",
  "Более 2 часов",
];

const AdvancedFilters = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    currentSelection: string[],
    setSelection: (items: string[]) => void,
  ) => {
    if (currentSelection.includes(item)) {
      setSelection(currentSelection.filter((i) => i !== item));
    } else {
      setSelection([...currentSelection, item]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCuisine([]);
    setSelectedDietary([]);
    setSelectedDifficulty([]);
    setSelectedTime([]);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mt-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="Globe" size={16} className="mr-2 text-recipe-peach" />
            Кухня мира
          </h3>
          <div className="space-y-2">
            {cuisineTypes.map((cuisine) => (
              <label key={cuisine} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCuisine.includes(cuisine)}
                  onChange={() =>
                    toggleSelection(
                      cuisine,
                      selectedCuisine,
                      setSelectedCuisine,
                    )
                  }
                  className="mr-2 text-recipe-peach focus:ring-recipe-peach rounded"
                />
                <span className="text-sm text-gray-700">{cuisine}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="Leaf" size={16} className="mr-2 text-recipe-green" />
            Особенности питания
          </h3>
          <div className="space-y-2">
            {dietaryOptions.map((option) => (
              <label key={option} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedDietary.includes(option)}
                  onChange={() =>
                    toggleSelection(option, selectedDietary, setSelectedDietary)
                  }
                  className="mr-2 text-recipe-green focus:ring-recipe-green rounded"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="TrendingUp" size={16} className="mr-2 text-blue-500" />
            Сложность
          </h3>
          <div className="space-y-2">
            {difficultyLevels.map((level) => (
              <label key={level} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedDifficulty.includes(level)}
                  onChange={() =>
                    toggleSelection(
                      level,
                      selectedDifficulty,
                      setSelectedDifficulty,
                    )
                  }
                  className="mr-2 text-blue-500 focus:ring-blue-500 rounded"
                />
                <span className="text-sm text-gray-700">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="Clock" size={16} className="mr-2 text-purple-500" />
            Время готовки
          </h3>
          <div className="space-y-2">
            {cookingTimes.map((time) => (
              <label key={time} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTime.includes(time)}
                  onChange={() =>
                    toggleSelection(time, selectedTime, setSelectedTime)
                  }
                  className="mr-2 text-purple-500 focus:ring-purple-500 rounded"
                />
                <span className="text-sm text-gray-700">{time}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={clearAllFilters}
          className="text-gray-600"
        >
          Сбросить фильтры
        </Button>
        <Button className="bg-recipe-peach hover:bg-orange-200 text-gray-800">
          Применить фильтры
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
