import { useState, useEffect, useMemo } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { PostCard } from "@/components/blog/PostCard";
import { FeaturedPostCard } from "@/components/blog/FeaturedPostCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Memoized filtered posts for better performance
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Debug effect (remove in production)
  useEffect(() => {
    console.log("Current filter state:", {
      searchTerm,
      selectedCategory,
      filteredPostsCount: filteredPosts.length,
      featuredCount: filteredPosts.filter(p => p.featured).length,
      regularCount: filteredPosts.filter(p => !p.featured).length
    });
  }, [filteredPosts, searchTerm, selectedCategory]);

  // Animation observer
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
  }, [filteredPosts]); // Re-run when posts change

  return (
    <div className="min-h-screen pt-20">
      <BlogHero postCount={blogPosts.length} />
      
      <BlogFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={["all", "philosophy", "technology", "finance", "creativity", "leadership"]}
      />

      {/* Unified Posts Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 reveal-up">
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Posts - Only show if any exist */}
              {filteredPosts.some(post => post.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">Featured Articles</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts
                      .filter(post => post.featured)
                      .map(post => (
                        <div key={`featured-${post.id}`} className="reveal-up">
                          <FeaturedPostCard post={post} />
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Regular Posts - Always show */}
              <div>
                <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">
                  {filteredPosts.some(post => post.featured) ? "More Articles" : "All Articles"}
                </h2>
                <div className="space-y-6">
                  {filteredPosts
                    .filter(post => !post.featured)
                    .map(post => (
                      <div key={`regular-${post.id}`} className="reveal-up">
                        <PostCard post={post} />
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default Blog;