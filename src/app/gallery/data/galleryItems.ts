// src/app/gallery/data/galleryItems.ts
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  medium: string;
  inspiration: string;
  featured: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Algorithmic Landscapes",
    category: "digital-art",
    description: "Generative art exploring the intersection of mathematics and natural beauty.",
    year: "2024",
    medium: "Processing, Custom Algorithms",
    inspiration: "Fractal geometry and mountain formations",
    featured: true
  },
  {
    id: 2,
    title: "Urban Geometries",
    category: "photography",
    description: "A series capturing architectural patterns in modern cityscapes.",
    year: "2023",
    medium: "Digital Photography",
    inspiration: "Swiss design principles in built environments",
    featured: false
  },
  {
    id: 3,
    title: "Quantum Harmonies",
    category: "music",
    description: "Ambient compositions inspired by quantum mechanics and wave functions.",
    year: "2024",
    medium: "Ableton Live, Max/MSP",
    inspiration: "Wave-particle duality and uncertainty principles",
    featured: true
  },
  {
    id: 4,
    title: "Data Poetics",
    category: "creative-code",
    description: "Interactive visualizations transforming financial data into poetic narratives.",
    year: "2023",
    medium: "D3.js, WebGL",
    inspiration: "The hidden stories within market movements",
    featured: false
  },
  {
    id: 5,
    title: "Emotional Algorithms",
    category: "digital-art",
    description: "AI-generated portraits exploring human emotion through machine learning.",
    year: "2024",
    medium: "StyleGAN, Custom Training",
    inspiration: "The boundary between human and artificial creativity",
    featured: true
  },
  {
    id: 6,
    title: "Reflections of Time",
    category: "photography",
    description: "Long-exposure studies of movement and change in natural environments.",
    year: "2023",
    medium: "Film Photography, Long Exposure",
    inspiration: "The temporal nature of experience",
    featured: false
  }
];