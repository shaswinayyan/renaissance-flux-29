// src/app/gallery/components/GalleryGrid.tsx
import { GalleryItem } from "./GalleryItem";
import { GalleryItem as GalleryItemType } from "../data/galleryItems";

interface GalleryGridProps {
  items: GalleryItemType[];
  onItemClick: (item: GalleryItemType) => void;
}

export const GalleryGrid = ({ items, onItemClick }: GalleryGridProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 reveal-up">
        <p className="text-muted-foreground">No items found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <GalleryItem
          key={`${item.id}-${item.category}`}
          item={item}
          index={index}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
};