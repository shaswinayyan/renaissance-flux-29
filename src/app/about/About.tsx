// src/app/about/About.tsx
'use client';

import { useEffect } from "react";
import { Lightbulb, Heart, Target, Users, Quote, Award } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";
import PhilosophySection from "./components/PhilosophySection";
import TimelineSection from "./components/TimelineSection";
import CTASection from "./components/CTASection";
import { ValueItem, TimelineItem, PhilosophyItem } from "./types";

const About = () => {
  const values: ValueItem[] = [
    {
      icon: Lightbulb,
      title: "Intellectual Curiosity",
      description: "Perpetual learner with an insatiable appetite for understanding complex systems across disciplines."
    },
    {
      icon: Heart,
      title: "Human-Centered Design",
      description: "Technology should serve humanity, not the other way around. Every solution starts with empathy."
    },
    {
      icon: Target,
      title: "Excellence & Precision",
      description: "Commitment to craftsmanship and attention to detail in every endeavor, from code to creative work."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Building bridges between disciplines and fostering environments where innovation thrives."
    }
  ];

  const timeline: TimelineItem[] = [
    {
      year: "2021-2025",
      title: "Mechatronics Engineering",
      description: "Strong focus in Applied Math & Quantitative Analysis",
      highlight: "Interdisciplinary Excellence"
    },
    {
      year: "2023-Present",
      title: "BS in Data Science, IIT Madras",
      description: "Specialization in Machine Learning, AI & Applied Statistics",
      highlight: "Dual Degree Track"
    },
    {
      year: "2023-Present",
      title: "Full-Stack Development",
      description: "Built and deployed scalable web apps using React & Next.js",
      highlight: "IBM Certified"
    },
    {
      year: "2023-Present",
      title: "Cybersecurity Enthusiast",
      description: "Led penetration testing on open-source projects, focusing on vulnerability assessment and mitigation",
      highlight: "Google Certified"
    },
    {
      year: "2024-Present",
      title: "Quantitative Research Learner",
      description: "Studying financial models, time-series analysis, and algorithmic trading fundamentals",
      highlight: "Self-Taught"
    },
  ];

  const philosophies: PhilosophyItem[] = [
    {
      quote: "The intersection of technology and liberal arts is where true innovation emerges.",
      context: "On interdisciplinary thinking"
    },
    {
      quote: "Mastery in one domain is the foundation; wisdom comes from connecting many.",
      context: "On being a generalist"
    },
    {
      quote: "Art teaches us to see differently; science teaches us to think differently.",
      context: "On creativity and logic"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <ValuesSection values={values} />
      <PhilosophySection philosophies={philosophies} />
      <TimelineSection timeline={timeline} />
      <CTASection />
    </div>
  );
};

export default About;