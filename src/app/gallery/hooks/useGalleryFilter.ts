// src/app/gallery/hooks/useGalleryFilter.ts
import { useState, useMemo } from "react";
import { GalleryItem } from "../data/galleryItems";

export const useGalleryFilter = (items: GalleryItem[]) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      selectedCategory === "all" || item.category === selectedCategory
    );
  }, [selectedCategory, items]);

  return {
    selectedCategory,
    setSelectedCategory,
    selectedItem,
    setSelectedItem,
    filteredItems
  };
};