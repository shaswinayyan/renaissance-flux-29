import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsCompleting(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-800",
      isCompleting && "opacity-0 scale-105"
    )}>
      <div className="relative flex flex-col items-center">
        {/* Geometric Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 relative">
            {/* Outer Ring */}
            <div 
              className="absolute inset-0 border-2 border-accent/20 rounded-full animate-spin"
              style={{ animationDuration: "3s" }}
            />
            {/* Inner Ring */}
            <div 
              className="absolute inset-2 border-2 border-accent/40 rounded-full animate-spin"
              style={{ animationDuration: "2s", animationDirection: "reverse" }}
            />
            {/* Center Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
            </div>
            {/* Floating Particles */}
            <div className="absolute -inset-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
                  style={{
                    top: `${20 + Math.sin(i) * 30}%`,
                    left: `${20 + Math.cos(i) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "4s"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h3 className="font-heading text-lg text-foreground">
            Shaswin Ayyan
          </h3>
          <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {progress < 100 ? "Loading..." : "Ready"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;