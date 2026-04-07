const tags = ["Multi-Modal Inputs", "Native Audio", "Character Consistency", "Multi-Shot Video"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24" aria-labelledby="hero-heading">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="list" aria-label="Key features">
          {tags.map((tag) => (
            <span key={tag} role="listitem" className="px-3 py-1 rounded-full text-xs font-medium border border-primary/20 bg-primary/5 text-primary">
              {tag}
            </span>
          ))}
        </div>

        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
          <span className="text-gradient">Seedance 2.0</span>{" "}
          <span className="text-foreground">AI Video Generator</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Create cinematic AI videos with text, images, video, and audio inputs — with native audio, better character consistency, and multi-shot storytelling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#how-to-use" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
            Try Seedance 2.0
          </a>
          <a href="#examples" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-base hover:bg-surface-hover transition-colors">
            View Examples
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Currently available in supported platforms and playground-based workflows.
        </p>
      </div>
    </section>
  );
}
