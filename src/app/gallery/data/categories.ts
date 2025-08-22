// src/app/gallery/data/categories.ts
import { Eye, Palette, Camera, Music, Code } from "lucide-react";

export interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export const categories: Category[] = [
  { id: "all", label: "All", icon: Eye },
  { id: "digital-art", label: "Digital Art", icon: Palette },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "music", label: "Music", icon: Music },
  { id: "creative-code", label: "Creative Code", icon: Code },
];