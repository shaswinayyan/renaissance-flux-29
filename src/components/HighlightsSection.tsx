import { Card } from "@/components/ui/card";
import { Award, Users, TrendingUp, Target } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Award,
      label: "Academic Excellence",
      value: "Summa Cum Laude",
      description: "Phi Beta Kappa, Dean's List"
    },
    {
      icon: TrendingUp,
      label: "Quantitative Returns",
      value: "15.7% Annual",
      description: "Algorithmic trading systems"
    },
    {
      icon: Users,
      label: "Impact Scale",
      value: "50+ Companies",
      description: "Cybersecurity consulting"
    },
    {
      icon: Target,
      label: "Project Success",
      value: "$10M+ Value",
      description: "Delivered across domains"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="section-title mb-4 sm:mb-6">Highlights at a Glance</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Measurable impact across academic, professional, and creative endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="reveal-scale" 
              data-delay={index * 100}
            >
              <Card className="card-elegant text-center group hover:scale-105 h-full">
                <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-accent group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{highlight.label}</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-heading font-medium text-accent mb-2">{highlight.value}</p>
                <p className="text-xs text-muted-foreground">{highlight.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;