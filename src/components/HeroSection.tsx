import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-recipe-cream via-recipe-peach to-recipe-green py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-merriweather text-gray-800 mb-4">
            Готовим с любовью
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Пошаговые рецепты с фотографиями каждого этапа. Готовьте как
            профессиональный шеф-повар прямо у себя дома! 👨‍🍳
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Icon name="Camera" className="text-recipe-peach" size={28} />
            </div>
            <h3 className="font-semibold font-merriweather text-gray-800 mb-2">
              Пошаговые фото
            </h3>
            <p className="text-gray-600 text-sm">
              Каждый шаг с детальными фотографиями
            </p>
          </div>

          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Icon name="Timer" className="text-recipe-green" size={28} />
            </div>
            <h3 className="font-semibold font-merriweather text-gray-800 mb-2">
              Точное время
            </h3>
            <p className="text-gray-600 text-sm">
              Контролируйте каждую минуту готовки
            </p>
          </div>

          <div
            className="text-center animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Icon name="Users" className="text-pink-500" size={28} />
            </div>
            <h3 className="font-semibold font-merriweather text-gray-800 mb-2">
              Семейные рецепты
            </h3>
            <p className="text-gray-600 text-sm">
              Проверенные рецепты для всей семьи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
