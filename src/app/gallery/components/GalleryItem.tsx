// src/app/gallery/components/GalleryItem.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GalleryItem as GalleryItemType } from "../data/galleryItems";
import { categories } from "../data/categories";

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onItemClick: (item: GalleryItemType) => void;
}

export const GalleryItem = ({ item, index, onItemClick }: GalleryItemProps) => {
  const categoryLabel = categories.find(c => c.id === item.category)?.label;

  return (
    <div
      className={cn(
        "reveal-up group cursor-pointer",
        item.featured ? "md:col-span-2 lg:col-span-2" : ""
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onItemClick(item)}
    >
      <Card className={cn(
        "h-full overflow-hidden transition-all duration-500 hover:shadow-hover hover:-translate-y-2",
        item.featured ? "bg-gradient-to-br from-accent/5 to-royal/5 border-accent/20" : ""
      )}>
        {/* Image Placeholder */}
        <div className={cn(
          "relative overflow-hidden bg-gradient-to-br from-accent/10 to-royal/10",
          item.featured ? "h-64" : "h-48"
        )}>
          {item.featured && (
            <Badge className="absolute top-4 left-4 bg-gradient-accent z-10">
              Featured
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-heading text-xl font-medium mb-1">
              {item.title}
            </h3>
            <p className="text-sm opacity-90">{item.year}</p>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="ghost" className="text-white border-white hover:bg-white/20">
              View Details
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {categoryLabel}
            </Badge>
            <span className="text-xs text-muted-foreground">{item.medium}</span>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>
          
          <div className="border-t border-border/50 pt-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Inspiration:</span> {item.inspiration}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};