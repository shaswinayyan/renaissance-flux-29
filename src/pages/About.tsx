import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote, Award, Heart, Lightbulb, Target, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  const values = [
    {
      icon: Lightbulb,
      title: "Intellectual Curiosity",
      description: "Perpetual learner with an insatiable appetite for understanding complex systems across disciplines."
    },
    {
      icon: Heart,
      title: "Human-Centered Design",
      description: "Technology should serve humanity, not the other way around. Every solution starts with empathy."
    },
    {
      icon: Target,
      title: "Excellence & Precision",
      description: "Commitment to craftsmanship and attention to detail in every endeavor, from code to creative work."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Building bridges between disciplines and fostering environments where innovation thrives."
    }
  ];

  const timeline = [
    {
      year: "2021-2025",
      title: "Mechatronics Engineering",
      description: "Strong focus in Applied Math & Quantitative Analysis",
      highlight: "Interdisciplinary Excellence"
    },
    {
      year: "2023-Present",
      title: "BS in Data Science, IIT Madras",
      description: "Specialization in Machine Learning, AI & Applied Statistics",
      highlight: "Dual Degree Track"
    },
    {
      year: "2023-Present",
      title: "Full-Stack Development",
      description: "Built and deployed scalable web apps using React & Next.js",
      highlight: "IBM Certified"
    },
    {
      year: "2023-Present",
      title: "Cybersecurity Enthusiast",
      description: "Led penetration testing on open-source projects, focusing on vulnerability assessment and mitigation",
      highlight: "Google Certified"
    },
    {
      year: "2024-Present",
      title: "Quantitative Research Learner",
      description: "Studying financial models, time-series analysis, and algorithmic trading fundamentals",
      highlight: "Self-Taught"
    },
  ];

  const philosophies = [
    {
      quote: "The intersection of technology and liberal arts is where true innovation emerges.",
      context: "On interdisciplinary thinking"
    },
    {
      quote: "Mastery in one domain is the foundation; wisdom comes from connecting many.",
      context: "On being a generalist"
    },
    {
      quote: "Art teaches us to see differently; science teaches us to think differently.",
      context: "On creativity and logic"
    }
  ];

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
      {/* Hero Introduction */}
      <section className="py-20 geometric-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h1 className="section-title mb-6">
              Beyond the <span className="text-gradient-royal">Resume</span>
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              A modern Renaissance approach to technology, art, and human progress.
              Exploring the intersections where analytical rigor meets creative vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-up">
              <div className="card-elegant">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-4">Current Focus</Badge>
                  <h2 className="text-2xl font-heading font-medium mb-4">
                    Building bridges between disciplines
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    My work spans quantitative finance, cybersecurity research, 
                    creative technology, and social impact initiatives. Each domain 
                    informs the others, creating a unique perspective on complex challenges.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Financial Engineering", "Machine Learning", "Digital Art", "Leadership", "Research"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal-up">
              <div className="relative">
                <div className="bg-gradient-accent rounded-2xl opacity-20 absolute inset-0 animate-float h-auto lg:aspect-square max-h-[90vh]" />
                <div className="relative z-10 p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-heading font-medium mb-2">Credentials & Learning Highlights</h3><br/>
                  <ul className="text-muted-foreground text-left list-disc pl-10 space-y-2">
                    <li>B.Tech in Mechatronics Engineering</li>
                    <li>BS in Data Science</li>
                    <li>Google Certified – Cybersecurity & Business Intelligence</li>
                    <li>IBM Certified – Full Stack Software Developer</li>
                    <li>Independent Learner – Quantitative Research & Finance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Core Values</h2>
            <p className="section-subtitle">
              The principles that guide my work and worldview
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="reveal-up card-elegant group hover:scale-105">
                <value.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quotes */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Philosophy</h2>
            <p className="section-subtitle">
              Reflections on the intersection of art, science, and human potential
            </p>
          </div>

          <div className="space-y-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="reveal-up">
                <div className="card-elegant text-center">
                  <Quote className="w-8 h-8 text-accent mx-auto mb-6" />
                  <blockquote className="text-xl font-heading font-light italic mb-4 leading-relaxed">
                    "{philosophy.quote}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">— {philosophy.context}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal-up">
            <h2 className="section-title mb-6">Journey</h2>
            <p className="section-subtitle">
              Key milestones in my academic and professional evolution
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="reveal-up">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-border ml-1.5 mt-2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="card-elegant">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline">{item.year}</Badge>
                        <Badge className="bg-gradient-accent">{item.highlight}</Badge>
                      </div>
                      <h3 className="font-heading text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 geometric-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-up">
          <h2 className="section-title mb-6">Let's Create Something Meaningful</h2>
          <p className="section-subtitle mb-8">
            Interested in collaborating on projects that matter? Let's explore the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">View My Work</Button>
            <Button variant="outline" size="lg">Get In Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;