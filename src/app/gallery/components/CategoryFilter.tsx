// src/app/gallery/components/CategoryFilter.tsx
import { Button } from "@/components/ui/button";
import { Category } from "../data/categories";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Category[];
}

export const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  categories
}: CategoryFilterProps) => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="reveal-up">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "gold" : "outline"}
                  onClick={() => onCategoryChange(category.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};