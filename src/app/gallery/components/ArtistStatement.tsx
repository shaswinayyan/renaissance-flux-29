// src/app/gallery/components/ArtistStatement.tsx
export const ArtistStatement = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal-up">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">Artist Statement</h2>
        </div>
        
        <div className="prose prose-lg mx-auto text-center">
          <blockquote className="text-xl font-heading font-light italic leading-relaxed border-l-4 border-accent pl-6 text-left">
            "Art and technology are not opposing forces, but complementary languages 
            for understanding and reshaping our world. In my creative practice, 
            I explore how computational thinking can enhance rather than replace 
            human intuition and emotion."
          </blockquote>
          
          <div className="mt-8 text-left space-y-4 text-muted-foreground">
            <p>
              My artistic explorations serve as both personal expression and research 
              into the evolving relationship between humans and machines. Each piece 
              represents an experiment in translating abstract concepts—whether from 
              finance, technology, or philosophy—into tangible, emotional experiences.
            </p>
            
            <p>
              Through generative algorithms, I investigate emergent beauty in mathematical 
              systems. In photography, I capture the hidden geometries of our built 
              environment. My musical compositions explore the sonic landscapes of 
              data and uncertainty.
            </p>
            
            <p>
              This work reminds me that creativity and logic need not be separate domains. 
              The most profound innovations often emerge at their intersection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};