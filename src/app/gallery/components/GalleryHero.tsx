// src/app/gallery/components/GalleryHero.tsx
import { Heart, Palette, Eye } from "lucide-react";

interface GalleryHeroProps {
  itemCount: number;
}

export const GalleryHero = ({ itemCount }: GalleryHeroProps) => {
  return (
    <section className="py-20 geometric-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal-up">
          <h1 className="section-title mb-6">
            Creative <span className="text-gradient-gold">Explorations</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto mb-8">
            A window into my artistic journey - where technology meets creativity, 
            and analytical thinking merges with aesthetic expression.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span>{itemCount} Collections</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-accent" />
              <span>Multiple Mediums</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-accent" />
              <span>Through My Eyes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};