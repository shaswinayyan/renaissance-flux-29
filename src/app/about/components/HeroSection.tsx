// src/app/about/components/HeroSection.tsx
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 geometric-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <h1 className="section-title mb-6">
            Beyond the <span className="text-gradient-royal">Resume</span>
          </h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            A modern Renaissance approach to technology, art, and human progress.
            Exploring the intersections where analytical rigor meets creative vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-up">
            <div className="card-elegant">
              <div className="mb-6">
                <Badge variant="outline" className="mb-4">Current Focus</Badge>
                <h2 className="text-2xl font-heading font-medium mb-4">
                  Building bridges between disciplines
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  My work spans quantitative finance, cybersecurity research, 
                  creative technology, and social impact initiatives. Each domain 
                  informs the others, creating a unique perspective on complex challenges.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Financial Engineering", "Machine Learning", "Digital Art", "Leadership", "Research"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-up">
            <div className="relative">
              <div className="bg-gradient-accent rounded-2xl opacity-20 absolute inset-0 animate-float h-auto lg:aspect-square max-h-[90vh]" />
              <div className="relative z-10 p-8 text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading font-medium mb-2">Credentials & Learning Highlights</h3><br/>
                <ul className="text-muted-foreground text-left list-disc pl-10 space-y-2">
                  <li>B.Tech in Mechatronics Engineering</li>
                  <li>BS in Data Science</li>
                  <li>Google Certified – Cybersecurity & Business Intelligence</li>
                  <li>IBM Certified – Full Stack Software Developer</li>
                  <li>Independent Learner – Quantitative Research & Finance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;