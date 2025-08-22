// src/app/blog/page.tsx
'use client';

import { BlogHero } from "./components/BlogHero";
import { BlogFilter } from "./components/BlogFilter";
import { NewsletterSignup } from "./components/NewsletterSignup";
import { PostsSection } from "./components/PostsSection";
import { blogPosts } from "./data/blogPosts";
import { categories } from "./data/categories";
import { useBlogFilter } from "./hooks/useBlogFilter";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const Blog = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredPosts
  } = useBlogFilter(blogPosts);

  useIntersectionObserver([filteredPosts]);

  return (
    <div className="min-h-screen pt-20">
      <BlogHero postCount={blogPosts.length} />
      
      <BlogFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm} // Changed from setSearchTerm to onSearchChange
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory} // Changed from setSelectedCategory to onCategoryChange
        categories={categories}
      />

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <PostsSection filteredPosts={filteredPosts} />
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default Blog;