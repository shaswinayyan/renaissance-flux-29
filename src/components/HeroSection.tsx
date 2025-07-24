import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({ 
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.1)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-accent opacity-10 animate-float"
          style={{ 
            animationDelay: "0s",
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-royal opacity-10 animate-float"
          style={{ 
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 rotate-45 bg-accent/10 animate-float"
          style={{ 
            animationDelay: "4s",
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px) rotate(${mousePosition.x * 10}deg)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-loader effect */}
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Name & Title */}
          <div className="mb-8">
            <h1 className="hero-title mb-6">
              <span className="text-gradient-gold">Shaswin</span>
              <br />
              <span className="text-foreground">Ayyan</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent animate-glow" />
              <p className="hero-subtitle text-muted-foreground">
                Engineer • Quant • Artist • Generalist
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className={cn(
            "mb-12 transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <p className="text-xl md:text-2xl font-heading font-light leading-relaxed max-w-4xl mx-auto">
              Blending art with analytics to shape the future
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Button variant="gold" size="hero" className="group">
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="hero">
              Read Philosophy
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className={cn(
            "transition-all duration-1000 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-accent transition-all duration-500"
            >
              <span className="text-sm font-medium tracking-wide">Discover More</span>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-10 h-10 border border-accent/10 rounded-full group-hover:border-accent/30 transition-colors duration-500" />
                <div className="absolute w-8 h-8 border border-accent/20 rounded-full animate-pulse" />
                <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/50" />
    </section>
  );
};

export default HeroSection;