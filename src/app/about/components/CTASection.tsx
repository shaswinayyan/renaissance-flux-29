// src/app/about/components/CTASection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 geometric-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
        <h2 className="section-title mb-6">Let's Create Something Meaningful</h2>
        <p className="section-subtitle mb-8">
          Interested in collaborating on projects that matter? Let's explore the possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;