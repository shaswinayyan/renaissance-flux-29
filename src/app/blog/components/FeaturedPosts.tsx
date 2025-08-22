// src/app/blog/components/FeaturedPosts.tsx
import { BlogPost } from "../data/blogPosts";
import { FeaturedPostCard } from "./FeaturedPostCard";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">
        Featured Articles
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <div key={`featured-${post.id}`} className="reveal-up">
            <FeaturedPostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};