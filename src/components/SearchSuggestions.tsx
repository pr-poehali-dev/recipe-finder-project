import Icon from "@/components/ui/icon";

interface SearchSuggestionsProps {
  query: string;
}

const popularSearches = [
  "Блины",
  "Борщ",
  "Торт",
  "Салат Цезарь",
  "Суп",
  "Пицца",
];

const quickFilters = [
  { name: "Быстрые рецепты", icon: "Zap", filter: "до 30 мин" },
  { name: "Вегетарианские", icon: "Leaf", filter: "без мяса" },
  { name: "Низкокалорийные", icon: "Heart", filter: "диетические" },
  { name: "Праздничные", icon: "Star", filter: "для праздника" },
];

const SearchSuggestions = ({ query }: SearchSuggestionsProps) => {
  const filteredSearches = popularSearches.filter((search) =>
    search.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-2 py-4 z-50">
      {query === "" && (
        <>
          <div className="px-4 pb-3">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Популярные запросы
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-recipe-cream rounded-full text-gray-700 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-3 px-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Быстрый поиск
            </h3>
            <div className="space-y-1">
              {quickFilters.map((filter) => (
                <button
                  key={filter.name}
                  className="flex items-center space-x-3 w-full p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Icon
                    name={filter.icon as any}
                    size={16}
                    className="text-recipe-peach"
                  />
                  <span>{filter.name}</span>
                  <span className="text-xs text-gray-400 ml-auto">
                    {filter.filter}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {query !== "" && filteredSearches.length > 0 && (
        <div className="px-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Предложения
          </h3>
          <div className="space-y-1">
            {filteredSearches.map((search) => (
              <button
                key={search}
                className="flex items-center space-x-3 w-full p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Icon name="Search" size={16} className="text-gray-400" />
                <span>{search}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
