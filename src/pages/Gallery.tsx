import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Camera, Palette, Music, Code, Eye, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = useMemo(() => [
    { id: "all", label: "All", icon: Eye },
    { id: "digital-art", label: "Digital Art", icon: Palette },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "music", label: "Music", icon: Music },
    { id: "creative-code", label: "Creative Code", icon: Code },
  ], []);

  const galleryItems = useMemo(() => [
    {
      id: 1,
      title: "Algorithmic Landscapes",
      category: "digital-art",
      description: "Generative art exploring the intersection of mathematics and natural beauty.",
      year: "2024",
      medium: "Processing, Custom Algorithms",
      inspiration: "Fractal geometry and mountain formations",
      featured: true
    },
    {
      id: 2,
      title: "Urban Geometries",
      category: "photography",
      description: "A series capturing architectural patterns in modern cityscapes.",
      year: "2023",
      medium: "Digital Photography",
      inspiration: "Swiss design principles in built environments",
      featured: false
    },
    {
      id: 3,
      title: "Quantum Harmonies",
      category: "music",
      description: "Ambient compositions inspired by quantum mechanics and wave functions.",
      year: "2024",
      medium: "Ableton Live, Max/MSP",
      inspiration: "Wave-particle duality and uncertainty principles",
      featured: true
    },
    {
      id: 4,
      title: "Data Poetics",
      category: "creative-code",
      description: "Interactive visualizations transforming financial data into poetic narratives.",
      year: "2023",
      medium: "D3.js, WebGL",
      inspiration: "The hidden stories within market movements",
      featured: false
    },
    {
      id: 5,
      title: "Emotional Algorithms",
      category: "digital-art",
      description: "AI-generated portraits exploring human emotion through machine learning.",
      year: "2024",
      medium: "StyleGAN, Custom Training",
      inspiration: "The boundary between human and artificial creativity",
      featured: true
    },
    {
      id: 6,
      title: "Reflections of Time",
      category: "photography",
      description: "Long-exposure studies of movement and change in natural environments.",
      year: "2023",
      medium: "Film Photography, Long Exposure",
      inspiration: "The temporal nature of experience",
      featured: false
    }
  ], []);

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => 
      selectedCategory === "all" || item.category === selectedCategory
    );
  }, [selectedCategory, galleryItems]);

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
  }, [filteredItems]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal-up">
            <h1 className="section-title mb-6">
              Creative <span className="text-gradient-gold">Explorations</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto mb-8">
              A window into my artistic journey - where technology meets creativity, 
              and analytical thinking merges with aesthetic expression.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                <span>{galleryItems.length} Collections</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-accent" />
                <span>Multiple Mediums</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-accent" />
                <span>Through My Eyes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="reveal-up">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "gold" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedItem(null);
                  }}
                  className="flex items-center gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.id}-${selectedCategory}`}
                className={cn(
                  "reveal-up group cursor-pointer",
                  item.featured ? "md:col-span-2 lg:col-span-2" : ""
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                <Card className={cn(
                  "h-full overflow-hidden transition-all duration-500 hover:shadow-hover hover:-translate-y-2",
                  item.featured ? "bg-gradient-to-br from-accent/5 to-royal/5 border-accent/20" : ""
                )}>
                  {/* Image Placeholder */}
                  <div className={cn(
                    "relative overflow-hidden bg-gradient-to-br from-accent/10 to-royal/10",
                    item.featured ? "h-64" : "h-48"
                  )}>
                    {item.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-accent z-10">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading text-xl font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90">{item.year}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" className="text-white border-white hover:bg-white/20">
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {categories.find(c => c.id === item.category)?.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.medium}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="border-t border-border/50 pt-4">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Inspiration:</span> {item.inspiration}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 reveal-up">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal-up">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">Artist Statement</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-center">
            <blockquote className="text-xl font-heading font-light italic leading-relaxed border-l-4 border-accent pl-6 text-left">
              "Art and technology are not opposing forces, but complementary languages 
              for understanding and reshaping our world. In my creative practice, 
              I explore how computational thinking can enhance rather than replace 
              human intuition and emotion."
            </blockquote>
            
            <div className="mt-8 text-left space-y-4 text-muted-foreground">
              <p>
                My artistic explorations serve as both personal expression and research 
                into the evolving relationship between humans and machines. Each piece 
                represents an experiment in translating abstract concepts—whether from 
                finance, technology, or philosophy—into tangible, emotional experiences.
              </p>
              
              <p>
                Through generative algorithms, I investigate emergent beauty in mathematical 
                systems. In photography, I capture the hidden geometries of our built 
                environment. My musical compositions explore the sonic landscapes of 
                data and uncertainty.
              </p>
              
              <p>
                This work reminds me that creativity and logic need not be separate domains. 
                The most profound innovations often emerge at their intersection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
          <h2 className="section-title mb-6">Interested in Collaboration?</h2>
          <p className="section-subtitle mb-8">
            I'm always excited to work on creative projects that push boundaries 
            and explore new forms of expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">Commission a Piece</Button>
            <Button variant="outline" size="lg">View Exhibition History</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;