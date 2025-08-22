// src/app/about/types.ts
export interface ValueItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export interface PhilosophyItem {
  quote: string;
  context: string;
}