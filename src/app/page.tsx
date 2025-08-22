'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preloader";
import Index from "./Index";

export default function HomePage() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <main className={cn(
      "transition-all duration-500 ease-out",
      isTransitioning ? "opacity-95 scale-[0.99]" : "opacity-100 scale-100"
    )}>
      <Index />
    </main>
  );
}