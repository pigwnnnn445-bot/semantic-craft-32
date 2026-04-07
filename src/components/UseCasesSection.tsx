import { Megaphone, ShoppingBag, BookOpen, Music, Share2, Film } from "lucide-react";

const useCases = [
  { icon: Megaphone, title: "AI Ads", desc: "Turn product ideas into cinematic branded videos with richer references and cleaner motion." },
  { icon: ShoppingBag, title: "Product Videos", desc: "Showcase products with polished visuals, consistent angles, and engaging motion." },
  { icon: BookOpen, title: "Character Stories", desc: "Create narrative-driven scenes with stable characters across multiple shots." },
  { icon: Music, title: "Music-Driven Clips", desc: "Generate visuals that respond to audio mood, rhythm, and energy." },
  { icon: Share2, title: "Social Media Shorts", desc: "Produce scroll-stopping short-form videos optimized for social platforms." },
  { icon: Film, title: "Cinematic Multi-Shot Videos", desc: "Build structured, multi-scene videos with coherent storytelling." },
];

export default function UseCasesSection() {
  return (
    <section aria-labelledby="usecases-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          What can you create with <span className="text-gradient">Seedance 2.0</span>?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          From ad-style content to multi-scene storytelling, Seedance 2.0 fits a wide range of video creation workflows.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <article key={uc.title} className="surface-card rounded-xl p-6 hover:border-primary/30 transition-colors">
              <uc.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold font-display mb-2">{uc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
