import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Calendar, BookOpen, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "philosophy", "technology", "finance", "creativity", "leadership"];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Systematic Thinking: Lessons from Quantitative Finance",
      excerpt: "How mathematical models and human intuition can coexist in decision-making processes.",
      category: "finance",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true,
      tags: ["Finance", "Philosophy", "Systems Thinking"]
    },
    {
      id: 2,
      title: "Beyond Binary: Embracing Nuance in Technology Ethics",
      excerpt: "Why the future of technology requires more than just 'good' vs 'bad' frameworks.",
      category: "philosophy",
      readTime: "12 min read",
      date: "2024-01-08",
      featured: false,
      tags: ["Ethics", "Technology", "Society"]
    },
    {
      id: 3,
      title: "The Renaissance Engineer: Why Specialization Isn't Everything",
      excerpt: "A case for cultivating breadth alongside depth in technical education.",
      category: "philosophy",
      readTime: "10 min read",
      date: "2024-01-01",
      featured: true,
      tags: ["Education", "Career", "Learning"]
    },
    {
      id: 4,
      title: "Building Resilient Systems: Lessons from Nature and Networks",
      excerpt: "How biological systems inform better cybersecurity architecture.",
      category: "technology",
      readTime: "15 min read",
      date: "2023-12-20",
      featured: false,
      tags: ["Cybersecurity", "Biomimicry", "Systems"]
    },
    {
      id: 5,
      title: "The Intersection of Art and Algorithm",
      excerpt: "Exploring how computational creativity is reshaping artistic expression.",
      category: "creativity",
      readTime: "6 min read",
      date: "2023-12-15",
      featured: false,
      tags: ["Art", "AI", "Creativity"]
    },
    {
      id: 6,
      title: "Leading Through Uncertainty: A Framework for Technical Teams",
      excerpt: "Practical strategies for guiding engineering teams through ambiguous challenges.",
      category: "leadership",
      readTime: "11 min read",
      date: "2023-12-10",
      featured: false,
      tags: ["Leadership", "Management", "Teams"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

    document.querySelectorAll(".reveal-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal-up">
            <h1 className="section-title mb-6">
              Thoughts & <span className="text-gradient-royal">Reflections</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto mb-8">
              A collection of essays on technology, philosophy, and the human condition. 
              Exploring the questions that matter in our rapidly evolving world.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <BookOpen className="w-5 h-5" />
              <span>{blogPosts.length} articles published</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="reveal-up">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="reveal-up">
                <Card className="group h-full p-8 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-gradient-accent">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">All Articles</h2>
          <div className="space-y-6">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <div key={post.id} className="reveal-up">
                <Card className="group p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-heading font-medium mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 reveal-up">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
          <h2 className="section-title mb-6">Stay Connected</h2>
          <p className="section-subtitle mb-8">
            Get notified when I publish new thoughts on technology, philosophy, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="gold">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;