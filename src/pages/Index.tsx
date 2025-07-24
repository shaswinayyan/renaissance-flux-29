import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import DomainsSection from "@/components/DomainsSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") 
              ? parseInt(entry.target.getAttribute("data-delay")!) 
              : 0;
            
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    // Enhanced selector for all reveal animations
    const animationElements = document.querySelectorAll(
      ".reveal-up, .reveal-scale, .reveal-slide-left, .reveal-slide-right"
    );
    
    animationElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Domains of Expertise */}
      <DomainsSection />

      {/* Philosophy Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
          <div className="mb-8 sm:mb-12">
            <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-accent" />
            <h2 className="section-title mb-4 sm:mb-6">Philosophy & Approach</h2>
          </div>
          
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-light italic leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
            "The future belongs to those who can navigate the intersection of 
            analytical rigor and creative vision, building bridges between 
            disciplines to solve humanity's most complex challenges."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/about">
                Learn My Story
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <RecentWorkSection />

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-accent" />
          <h2 className="section-title mb-4 sm:mb-6">Let's Create Something Meaningful</h2>
          <p className="section-subtitle mb-6 sm:mb-8 max-w-3xl mx-auto">
            Whether you're looking to solve complex technical challenges or explore 
            creative collaborations, I'm always open to meaningful conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="gold" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
