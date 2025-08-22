import { Card } from "@/components/ui/card";
import { ChartLine, Shield, ChevronsLeftRightEllipsis, Goal, DraftingCompass, BrainCircuit} from 'lucide-react';
const DomainsSection = () => {
  const domains = [
    {
      title: "Quantitative Finance",
      description: "Algorithmic trading systems, risk management, and financial modeling with machine learning.",
      icon: ChartLine
    },
    {
      title: "Cybersecurity",
      description: "Penetration testing, vulnerability research, and security architecture consulting.",
      icon: Shield
    },
    {
      title: "Full Stack Development",
      description: "From UI/UX design to backend APIs, I build scalable, data-driven web applications.",
      icon: ChevronsLeftRightEllipsis
    },
    {
      title: "Leadership & Strategy",
      description: "Technical team leadership, strategic planning, and interdisciplinary collaboration.",
      icon: Goal
    },
    {
      title: "Product Engineering",
      description: "Building end-to-end MVPs, optimizing UX flows, and shipping scalable SaaS platforms.",
      icon: DraftingCompass
    },
    {
      title: "AI & Data Science",
      description: "Exploratory data analysis, model deployment, and turning data into actionable insights.",
      icon: BrainCircuit
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="section-title mb-4 sm:mb-6">Domains of Expertise</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A Renaissance approach to modern challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="reveal-slide-left" 
              data-delay={index * 150}
            >
              <Card className="card-elegant group h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <domain.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-medium mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;