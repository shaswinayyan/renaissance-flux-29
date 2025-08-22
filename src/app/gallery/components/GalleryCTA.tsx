// src/app/gallery/components/GalleryCTA.tsx
import { Button } from "@/components/ui/button";

export const GalleryCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <h2 className="section-title mb-6">Interested in Collaboration?</h2>
        <p className="section-subtitle mb-8">
          I'm always excited to work on creative projects that push boundaries 
          and explore new forms of expression.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg">Explore Works</Button>
          <Button variant="outline" size="lg">Reach Out</Button>
        </div>
      </div>
    </section>
  );
};