'use client';

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footers";
import './index.css';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.documentElement.classList.contains("dark")
    ) {
      const theme = localStorage.getItem("theme");
      if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsInitialLoading(false);
  };

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {isInitialLoading ? (
              <Preloader onComplete={handlePreloaderComplete} />
            ) : (
              <>
                <Navigation />
                <main>{children}</main>
                <Footer />
              </>
            )}
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}