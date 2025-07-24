import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Users, TrendingUp, Target, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Index = () => {
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

  const domains = [
    {
      title: "Quantitative Finance",
      description: "Algorithmic trading systems, risk management, and financial modeling with machine learning.",
      icon: "📊"
    },
    {
      title: "Cybersecurity",
      description: "Penetration testing, vulnerability research, and security architecture consulting.",
      icon: "🛡️"
    },
    {
      title: "Creative Technology",
      description: "Digital art installations, generative algorithms, and human-computer interaction.",
      icon: "🎨"
    },
    {
      title: "Leadership & Strategy",
      description: "Technical team leadership, strategic planning, and interdisciplinary collaboration.",
      icon: "🧭"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, entry.target.getAttribute("data-delay") ? parseInt(entry.target.getAttribute("data-delay")!) : 0);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    document.querySelectorAll(".reveal-up, .reveal-scale").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Highlights Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Highlights at a Glance</h2>
            <p className="section-subtitle">
              Measurable impact across academic, professional, and creative endeavors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="reveal-scale" 
                data-delay={index * 100}
              >
                <Card className="card-elegant text-center group hover:scale-105 h-full">
                  <highlight.icon className="w-8 h-8 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground mb-1">{highlight.label}</p>
                  <p className="text-xl lg:text-2xl font-heading font-medium text-accent mb-2">{highlight.value}</p>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains of Expertise */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Domains of Expertise</h2>
            <p className="section-subtitle">
              A Renaissance approach to modern challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {domains.map((domain, index) => (
              <div 
                key={index} 
                className="reveal-up" 
                data-delay={index * 150}
              >
                <Card className="card-elegant group h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl lg:text-3xl flex-shrink-0">{domain.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg lg:text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
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

      {/* Philosophy Preview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
          <div className="mb-12">
            <Lightbulb className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="section-title mb-6">Philosophy & Approach</h2>
          </div>
          
          <blockquote className="text-lg sm:text-xl md:text-2xl font-heading font-light italic leading-relaxed mb-8 px-4">
            "The future belongs to those who can navigate the intersection of 
            analytical rigor and creative vision, building bridges between 
            disciplines to solve humanity's most complex challenges."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn My Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-16 lg:py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Recent Work</h2>
            <p className="section-subtitle">
              Latest projects spanning technology, finance, and creative expression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
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
            ].map((project, index) => (
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
                    <h3 className="font-heading text-base lg:text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform mt-auto">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal-up">
            <Button variant="gold" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
          <Heart className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="section-title mb-6">Let's Create Something Meaningful</h2>
          <p className="section-subtitle mb-8">
            Whether you're looking to solve complex technical challenges or explore 
            creative collaborations, I'm always open to meaningful conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
