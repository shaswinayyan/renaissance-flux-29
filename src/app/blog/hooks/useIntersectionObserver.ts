// src/app/blog/hooks/useIntersectionObserver.ts
import { useEffect } from "react";

export const useIntersectionObserver = (dependencies: any[] = []) => {
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
  }, dependencies);
};