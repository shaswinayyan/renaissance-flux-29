import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NewsletterSignup = () => (
  <section className="py-20 bg-secondary/30">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
      <h2 className="section-title mb-6">Stay Connected</h2>
      <p className="section-subtitle mb-8">
        Get notified when I publish new thoughts on technology, philosophy, and innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Input placeholder="Enter your email" className="flex-1" />
        <Button variant="gold">Subscribe</Button>
      </div>
    </div>
  </section>
);