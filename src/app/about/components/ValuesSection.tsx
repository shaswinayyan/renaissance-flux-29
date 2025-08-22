// src/app/about/components/ValuesSection.tsx
import { Card } from "@/components/ui/card";
import { ValueItem } from "../types";

interface ValuesSectionProps {
  values: ValueItem[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <h2 className="section-title mb-6">Core Values</h2>
          <p className="section-subtitle">
            The principles that guide my work and worldview
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="reveal-up card-elegant group hover:scale-105">
                <IconComponent className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;