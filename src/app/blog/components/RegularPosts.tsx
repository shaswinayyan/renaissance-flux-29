// src/app/blog/components/RegularPosts.tsx
import { BlogPost } from "../data/blogPosts";
import { PostCard } from "./PostCard";

interface RegularPostsProps {
  posts: BlogPost[];
  hasFeaturedPosts: boolean;
}

export const RegularPosts = ({ posts, hasFeaturedPosts }: RegularPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-heading font-medium mb-8 reveal-up">
        {hasFeaturedPosts ? "More Articles" : "All Articles"}
      </h2>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={`regular-${post.id}`} className="reveal-up">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};