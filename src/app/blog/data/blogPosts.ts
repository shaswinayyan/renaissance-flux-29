// src/app/blog/data/blogPosts.ts
export interface BlogPost {
  id: number; // Changed from string to number
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  // {
  //   id: 0, // Changed to number
  //   title: "Sample Post",
  //   excerpt: "This is a sample blog post",
  //   category: "technology",
  //   tags: ["react", "nextjs"],
  //   featured: true,
  //   date: "2024-01-01",
  //   readTime: "5 min read",
  //   author: "Shaswin Ayyan"
  // },
  {
      id: 1,
      title: "Beyond Binary: Embracing Nuance in Technology Ethics",
      excerpt: "Why the future of technology requires more than just 'good' vs 'bad' frameworks.",
      category: "philosophy",
      tags: ["Ethics", "Technology", "Society"],
      featured: false,
      date: "2024-01-08",
      readTime: "12 min read",
      author: "Shaswin Ayyan"
    },
    {
    id: 2,
    title: "The Art of Systematic Thinking: Lessons from Quantitative Finance",
    excerpt: "How mathematical models and human intuition can coexist in decision-making processes.",
    category: "finance",
    readTime: "8 min read",
    date: "2024-01-15",
    featured: true,
    tags: ["Finance", "Philosophy", "Systems Thinking"],
    author: "Shaswin Ayyan"
  },
   {
      id: 3,
      title: "The Renaissance Engineer: Why Specialization Isn't Everything",
      excerpt: "A case for cultivating breadth alongside depth in technical education.",
      category: "philosophy",
      readTime: "10 min read",
      date: "2024-01-01",
      featured: true,
      tags: ["Education", "Career", "Learning"],
      author: "Shaswin Ayyan"
    },
    {
      id: 4,
      title: "Building Resilient Systems: Lessons from Nature and Networks",
      excerpt: "How biological systems inform better cybersecurity architecture.",
      category: "technology",
      readTime: "15 min read",
      date: "2023-12-20",
      featured: false,
      tags: ["Cybersecurity", "Biomimicry", "Systems"],
      author: "Shaswin Ayyan"
    },
    {
      id: 5,
      title: "The Intersection of Art and Algorithm",
      excerpt: "Exploring how computational creativity is reshaping artistic expression.",
      category: "creativity",
      readTime: "6 min read",
      date: "2023-12-15",
      featured: false,
      tags: ["Art", "AI", "Creativity"],
      author: "Shaswin Ayyan"
    },
    {
      id: 6,
      title: "Leading Through Uncertainty: A Framework for Technical Teams",
      excerpt: "Practical strategies for guiding engineering teams through ambiguous challenges.",
      category: "leadership",
      readTime: "11 min read",
      date: "2023-12-10",
      featured: false,
      tags: ["Leadership", "Management", "Teams"],
      author: "Shaswin Ayyan"
    },
  // ... more posts
];