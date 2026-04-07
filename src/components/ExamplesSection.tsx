const exampleTags = [
  "Text Only",
  "Text + Image",
  "Image + Audio",
  "Video + Audio",
  "Character Story",
  "Multi-Shot Video",
];

export default function ExamplesSection() {
  return (
    <section id="examples" aria-labelledby="examples-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="examples-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          <span className="text-gradient">Seedance 2.0</span> examples
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          See how different input combinations can shape the final result.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleTags.map((tag) => (
            <article key={tag} className="surface-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Video preview</span>
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/20 bg-primary/5 text-primary">
                  {tag}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-base hover:bg-surface-hover transition-colors">
            Explore More Examples
          </a>
        </div>
      </div>
    </section>
  );
}
