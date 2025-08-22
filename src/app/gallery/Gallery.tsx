// src/app/gallery/Gallery.tsx
'use client';

import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { GalleryHero } from "./components/GalleryHero";
import { CategoryFilter } from "./components/CategoryFilter";
import { GalleryGrid } from "./components/GalleryGrid";
import { ArtistStatement } from "./components/ArtistStatement";
import { GalleryCTA } from "./components/GalleryCTA";
import { categories } from "./data/categories";
import { galleryItems } from "./data/galleryItems";
import { useGalleryFilter } from "./hooks/useGalleryFilter";

export const Gallery = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedItem,
    setSelectedItem,
    filteredItems
  } = useGalleryFilter(galleryItems);

  useIntersectionObserver([filteredItems]);

  return (
    <div className="min-h-screen pt-20">
      <GalleryHero itemCount={galleryItems.length} />
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <GalleryGrid
            items={filteredItems}
            onItemClick={setSelectedItem}
          />
        </div>
      </section>

      <ArtistStatement />
      <GalleryCTA />
    </div>
  );
};