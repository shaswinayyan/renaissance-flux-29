// src/components/RecentWorkSection.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RecentWorkSection = () => {
  const projects = [
    {
      title: "Algorithmic Trading System",
      description: "ML-driven quantitative trading platform with 15.7% annual returns",
      category: "Finance",
      status: "Live Production"
    },
    {
      title: "Zero-Day Scanner",
      description: "AI-powered vulnerability detection tool for enterprise security",
      category: "Cybersecurity", 
      status: "Open Source"
    },
    {
      title: "Generative Art Installation",
      description: "Interactive emotional AI art piece featured in multiple galleries",
      category: "Creative",
      status: "Exhibition"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 geometric-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="section-title mb-4 sm:mb-6">Recent Work</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Latest projects spanning technology, finance, and creative expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="reveal-scale" 
              data-delay={index * 200}
            >
              <Card className="card-elegant group cursor-pointer h-full">
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    <Badge variant="secondary" className="text-xs">{project.status}</Badge>
                  </div>
                  <h3 className="font-heading text-sm sm:text-base lg:text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center text-accent text-xs sm:text-sm font-medium group-hover:translate-x-2 transition-transform mt-auto">
                  View Details <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 reveal-up">
          <Button variant="gold" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;