// src/app/blog/components/PostsSection.tsx
import { BlogPost } from "../data/blogPosts";
import { PostCard } from "./PostCard";
import { FeaturedPostCard } from "./FeaturedPostCard";

interface PostsSectionProps {
  filteredPosts: BlogPost[];
}

export const PostsSection = ({ filteredPosts }: PostsSectionProps) => {
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12 reveal-up">
        <p className="text-muted-foreground">
          No articles found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <div key={`featured-${post.id}`} className="reveal-up">
                <FeaturedPostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div>
        <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">
          {featuredPosts.length > 0 ? "More Articles" : "All Articles"}
        </h2>
        <div className="space-y-6">
          {regularPosts.map(post => (
            <div key={`regular-${post.id}`} className="reveal-up">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};