import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, TrendingUp, Shield, Code, Cpu, BarChart3, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const projectCategories = useMemo(() => [
    { id: "all", label: "All Projects", icon: BarChart3 },
    { id: "finance", label: "Finance & Quant", icon: TrendingUp },
    { id: "cybersecurity", label: "Cybersecurity", icon: Shield },
    { id: "web", label: "Web Development", icon: Code },
    { id: "hardware", label: "Mechatronics", icon: Cpu },
    { id: "creative", label: "Creative Tech", icon: Paintbrush },
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      category: "finance",
      title: "Algorithmic Trading System",
      description: "Multi-asset quantitative trading platform with ML-driven signal generation and risk management.",
      impact: "15.7% annual return, $2M+ AUM managed",
      technologies: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      status: "Live Production",
      featured: true,
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      }
    },
    {
      id: 2,
      category: "cybersecurity",
      title: "Zero-Day Vulnerability Scanner",
      description: "Advanced penetration testing tool using AI to identify previously unknown security vulnerabilities.",
      impact: "Discovered 12 critical CVEs, used by 50+ companies",
      technologies: ["Rust", "Python", "YARA", "Kubernetes"],
      status: "Open Source",
      featured: true,
      links: {
        github: "#",
        docs: "#"
      }
    },
    {
      id: 3,
      category: "web",
      title: "Real-time Collaboration Platform",
      description: "Enterprise-grade collaborative workspace with end-to-end encryption and advanced permissions.",
      impact: "10,000+ daily active users, 99.9% uptime",
      technologies: ["React", "Node.js", "WebRTC", "Redis"],
      status: "Commercial",
      featured: false,
      links: {
        demo: "#",
        case_study: "#"
      }
    },
    {
      id: 4,
      category: "hardware",
      title: "Autonomous Drone Swarm",
      description: "Coordinated multi-drone system for environmental monitoring with real-time data analytics.",
      impact: "Deployed across 5 national parks, 40% cost reduction",
      technologies: ["C++", "ROS", "Computer Vision", "IoT"],
      status: "Research",
      featured: true,
      links: {
        github: "#",
        publication: "#"
      }
    },
    {
      id: 5,
      category: "creative",
      title: "Interactive Art Installation",
      description: "Generative art piece that responds to human emotion through computer vision and machine learning.",
      impact: "Featured in 3 galleries, 50,000+ interactions",
      technologies: ["Processing", "OpenCV", "Arduino", "TouchDesigner"],
      status: "Exhibition",
      featured: false,
      links: {
        gallery: "#",
        video: "#"
      }
    },
    {
      id: 6,
      category: "finance",
      title: "DeFi Yield Optimization",
      description: "Smart contract system for automated yield farming with dynamic strategy adjustment.",
      impact: "$5M+ TVL, 25% average APY",
      technologies: ["Solidity", "Web3.js", "Hardhat", "Graph Protocol"],
      status: "Beta",
      featured: false,
      links: {
        dapp: "#",
        audit: "#"
      }
    }
  ], []);

  const filteredProjects = useMemo(() => {
    return activeCategory === "all" 
      ? projects 
      : projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [filteredProjects]);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Live Production": return "default";
      case "Commercial": return "secondary";
      case "Open Source": return "outline";
      case "Research": return "secondary";
      case "Exhibition": return "outline";
      case "Beta": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal-up">
            <h1 className="section-title mb-6">
              Innovation in <span className="text-gradient-gold">Action</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto mb-8">
              A curated collection of projects spanning finance, technology, and creative expression. 
              Each represents a unique approach to solving complex challenges.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>20+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-royal" />
                <span>3 Startup Collaborations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Cross-Disciplinary Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories & Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Tabs 
            value={activeCategory} 
            onValueChange={(value) => {
              setActiveCategory(value);
              setHoveredProject(null);
            }} 
            className="reveal-up"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 bg-secondary/50">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 py-3 px-4 data-[state=active]:bg-background data-[state=active]:text-accent"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-${activeCategory}`}
                className={cn(
                  "reveal-up group cursor-pointer",
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className={cn(
                  "h-full p-6 transition-all duration-300 hover:shadow-hover hover:-translate-y-2",
                  project.featured ? "bg-gradient-to-br from-accent/5 to-royal/5 border-accent/20" : ""
                )}>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Badge className="bg-gradient-accent text-accent-foreground">Featured</Badge>
                      )}
                      <Badge variant={getStatusBadgeVariant(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {Object.entries(project.links).map(([type, url]) => (
                        <Button
                          key={type}
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {type === "github" ? (
                            <Github className="w-4 h-4" />
                          ) : (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="p-3 bg-accent/5 rounded-lg border border-accent/10">
                      <p className="text-sm font-medium text-accent mb-1">Impact</p>
                      <p className="text-sm text-foreground">{project.impact}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 reveal-up">
            <Button variant="outline" size="lg">
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
          <h2 className="section-title mb-6">Ready to Build Something Amazing?</h2>
          <p className="section-subtitle mb-8">
            I'm always excited to tackle new challenges and collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">Start a Conversation</Button>
            <Button variant="outline" size="lg">View Case Studies</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;