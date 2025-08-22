import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial content reveal
    const contentTimer = setTimeout(() => setShowContent(true), 200);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsCompleting(true);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 120);

    return () => {
      clearInterval(timer);
      clearTimeout(contentTimer);
    };
  }, [onComplete]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-1200 ease-out",
      isCompleting && "opacity-0 scale-110 blur-sm"
    )}>
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background" />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-accent opacity-5 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-royal opacity-5 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 rotate-45 bg-accent/5 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className={cn(
        "relative flex flex-col items-center transition-all duration-1000 ease-out",
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Enhanced Geometric Animation */}
        <div className="relative mb-12">
          <div className="w-32 h-32 relative">
            {/* Outer Ring - Sophisticated Animation */}
            <div
              className="absolute inset-0 border-2 border-accent/30 rounded-full animate-spin"
              style={{
                animationDuration: "4s",
                background: `conic-gradient(from 0deg, transparent, hsl(var(--accent) / 0.1), transparent)`
              }}
            />
            {/* Middle Ring */}
            <div
              className="absolute inset-3 border border-royal/20 rounded-full animate-spin"
              style={{
                animationDuration: "3s",
                animationDirection: "reverse",
                background: `conic-gradient(from 180deg, transparent, hsl(var(--royal) / 0.1), transparent)`
              }}
            />
            {/* Inner Ring */}
            <div
              className="absolute inset-6 border border-accent/40 rounded-full animate-spin"
              style={{ animationDuration: "2s" }}
            />
            {/* Center Core - Pulsing */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-accent rounded-full animate-pulse shadow-gold" />
            </div>
            {/* Enhanced Floating Particles */}
            <div className="absolute -inset-12">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute rounded-full animate-float",
                    i % 2 === 0 ? "w-2 h-2 bg-accent/20" : "w-1.5 h-1.5 bg-royal/20"
                  )}
                  style={{
                    top: `${50 + Math.sin(i * (2 * Math.PI / 8)) * 40}%`,
                    left: `${50 + Math.cos(i * (2 * Math.PI / 8)) * 40}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + (i % 3)}s`
                  }}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Enhanced Loading Content */}
        <div className="text-center space-y-4">
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-tight">
            Shaswin Ayyan
          </h3>

          {/* Sophisticated Progress Bar */}
          <div className="relative w-48 h-1.5 bg-muted/50 rounded-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-accent rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{
                width: `${progress}%`,
                boxShadow: progress > 20 ? '0 0 10px hsl(var(--accent) / 0.3)' : 'none'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
              style={{
                transform: `translateX(${progress * 2 - 100}%)`,
                transition: 'transform 0.5s ease-out'
              }}
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              {progress < 30 ? "Initializing..." :
                progress < 70 ? "Loading Experience..." :
                  progress < 100 ? "Almost Ready..." : "Welcome"}
            </p>
            <p className="text-xs text-muted-foreground/70 font-light">
              Renaissance Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;