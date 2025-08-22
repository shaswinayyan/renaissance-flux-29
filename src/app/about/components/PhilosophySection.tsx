// src/app/about/components/PhilosophySection.tsx
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { PhilosophyItem } from "../types";

interface PhilosophySectionProps {
  philosophies: PhilosophyItem[];
}

const PhilosophySection = ({ philosophies }: PhilosophySectionProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <h2 className="section-title mb-6">Philosophy</h2>
          <p className="section-subtitle">
            Reflections on the intersection of art, science, and human potential
          </p>
        </div>

        <div className="space-y-8">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="reveal-up">
              <div className="card-elegant text-center">
                <Quote className="w-8 h-8 text-accent mx-auto mb-6" />
                <blockquote className="text-xl font-heading font-light italic mb-4 leading-relaxed">
                  "{philosophy.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground">— {philosophy.context}</cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;