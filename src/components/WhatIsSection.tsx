export default function WhatIsSection() {
  return (
    <section aria-labelledby="what-is-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="what-is-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          What is <span className="text-gradient">Seedance 2.0</span>?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">
          Seedance 2.0 is a multimodal AI video model designed for richer storytelling, better motion quality, and audio-aware video generation.
        </p>
        <div className="surface-card rounded-xl p-8 md:p-10">
          <p className="text-foreground leading-relaxed text-base md:text-lg">
            Seedance 2.0 is built for creators who want more control over how AI videos look, sound, and flow. It supports multimodal inputs such as text, images, video, and audio, making it a strong choice for character-driven scenes, ad-style videos, and multi-shot storytelling. Compared with simpler video models, it is better suited for richer references, more coherent scenes, and audio-aware generation.
          </p>
        </div>
      </div>
    </section>
  );
}
