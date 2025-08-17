import { BookOpen } from "lucide-react";

export const BlogHero = ({ postCount }: { postCount: number }) => (
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
          <span>{postCount} articles published</span>
        </div>
      </div>
    </div>
  </section>
);