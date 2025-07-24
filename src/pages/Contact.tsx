import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Calendar, MapPin, Phone, Send, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const projectTypes = [
    "Consulting & Advisory",
    "Technical Development",
    "Research Collaboration", 
    "Speaking Engagement",
    "Creative Project",
    "Other"
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alexander@meridian.dev",
      description: "Best for detailed project discussions",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/alexandermeridian",
      description: "Professional networking & opportunities",
      primary: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/alexandermeridian",
      description: "Open source collaborations",
      primary: false
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      value: "calendly.com/alexandermeridian",
      description: "Direct consultation booking",
      primary: true
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });
    
    setIsSubmitting(false);
  };

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
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal-up">
            <h1 className="section-title mb-6">
              Let's Create Something <span className="text-gradient-gold">Extraordinary</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto mb-8">
              Whether you're looking to solve complex technical challenges, explore creative 
              collaborations, or discuss innovative ideas, I'd love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Always open to meaningful conversations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="reveal-up">
                <Card className={cn(
                  "p-6 text-center transition-all duration-300 hover:shadow-hover hover:-translate-y-1 cursor-pointer group",
                  method.primary ? "border-accent/20 bg-accent/5" : ""
                )}>
                  <method.icon className={cn(
                    "w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform",
                    method.primary ? "text-accent" : "text-muted-foreground"
                  )} />
                  <h3 className="font-heading text-lg font-medium mb-2">{method.label}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{method.value}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                  {method.primary && (
                    <Badge className="mt-3 bg-gradient-accent">Preferred</Badge>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="reveal-up">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Send a Message</h2>
              <p className="section-subtitle">
                Tell me about your project, idea, or just say hello
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <Button
                        key={type}
                        type="button"
                        variant={formData.projectType === type ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData({...formData, projectType: type})}
                        className="text-xs h-8"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project, timeline, goals, or anything else you'd like to share..."
                    rows={6}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-40"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal-up text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-heading text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">
                Based in New York<br />
                Available globally for remote work
              </p>
            </div>
            
            <div className="reveal-up text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-heading text-lg font-medium mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                Within 24 hours for inquiries<br />
                Same day for urgent matters
              </p>
            </div>
            
            <div className="reveal-up text-center">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-heading text-lg font-medium mb-2">Availability</h3>
              <p className="text-muted-foreground">
                Currently accepting projects<br />
                Q2 2024 booking available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal-up">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of projects do you typically work on?",
                answer: "I specialize in quantitative finance systems, cybersecurity consulting, full-stack web applications, creative technology installations, and strategic technical advisory work. I'm particularly drawn to interdisciplinary projects that combine multiple domains."
              },
              {
                question: "Do you take on freelance or consulting work?",
                answer: "Yes, I'm available for both short-term consulting engagements and longer-term project work. I'm selective about projects that align with my values and offer meaningful challenges."
              },
              {
                question: "What's your approach to collaboration?",
                answer: "I believe in transparent communication, iterative development, and bringing both technical excellence and creative thinking to every project. I work best with teams that value both rigor and innovation."
              }
            ].map((faq, index) => (
              <div key={index} className="reveal-up">
                <Card className="p-6">
                  <h3 className="font-heading text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;