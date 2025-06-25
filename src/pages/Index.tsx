import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedRecipes from "@/components/FeaturedRecipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryFilter />
      <FeaturedRecipes />

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 Домашние Рецепты. Готовим с любовью! 🍽️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
