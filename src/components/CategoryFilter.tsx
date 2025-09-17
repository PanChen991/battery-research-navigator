import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedCategory === "全部" ? "default" : "outline"}
        className={cn(
          "cursor-pointer transition-all hover:scale-105",
          selectedCategory === "全部" && "bg-tech-gradient text-white"
        )}
        onClick={() => onCategoryChange("全部")}
      >
        全部报告
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={cn(
            "cursor-pointer transition-all hover:scale-105",
            selectedCategory === category && "bg-tech-gradient text-white"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};