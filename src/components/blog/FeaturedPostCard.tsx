import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
}

export const FeaturedPostCard = ({ post }: { post: Post }) => (
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
);