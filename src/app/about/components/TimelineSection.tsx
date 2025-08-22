// src/app/about/components/TimelineSection.tsx
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TimelineItem } from "../types";

interface TimelineSectionProps {
  timeline: TimelineItem[];
}

const TimelineSection = ({ timeline }: TimelineSectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <h2 className="section-title mb-6">Journey</h2>
          <p className="section-subtitle">
            Key milestones in my academic and professional evolution
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="reveal-up">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-border ml-1.5 mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="card-elegant">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{item.year}</Badge>
                      <Badge className="bg-gradient-accent">{item.highlight}</Badge>
                    </div>
                    <h3 className="font-heading text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;