// src/app/not-found.tsx
'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname(); // Next.js alternative to useLocation

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 Number */}
        <div className="mb-8 reveal-scale">
          <div className="text-8xl sm:text-9xl font-heading font-bold text-accent opacity-90">
            404
          </div>
        </div>

        {/* Message */}
        <div className="mb-8 reveal-up">
          <h1 className="text-2xl sm:text-3xl font-heading font-medium mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-up">
          <Button asChild variant="gold" className="flex items-center">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" onClick={() => window.history.back()}>
            <div className="flex items-center cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </div>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-border reveal-up">
          <p className="text-sm text-muted-foreground mb-4">
            Still having trouble?
          </p>
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;