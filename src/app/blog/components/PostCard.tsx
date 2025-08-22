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

export const PostCard = ({ post, featured = false }: { post: Post; featured?: boolean }) => (
  <Card className={`group ${featured ? 'h-full p-8' : 'p-6'} hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
    <div className={`flex flex-col ${featured ? '' : 'md:flex-row'} gap-6`}>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant={featured ? "default" : "outline"} className={featured ? "bg-gradient-accent" : ""}>
            {post.category}
          </Badge>
          <div className={`flex items-center gap-4 text-sm text-muted-foreground ${featured ? 'gap-3' : ''}`}>
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

        <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-heading font-medium mb-2 group-hover:text-accent transition-colors ${featured ? 'leading-tight' : ''}`}>
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      {!featured && (
        <div className="flex items-center">
          <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>

    {featured && (
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
      </div>
    )}
  </Card>
);