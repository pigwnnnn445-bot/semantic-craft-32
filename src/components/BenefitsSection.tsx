import { Film, Sparkles, Users, Clapperboard, SlidersHorizontal, Video } from "lucide-react";

const benefits = [
  { icon: SlidersHorizontal, title: "Multi-Modal Inputs", desc: "Combine text, images, video, and audio to guide one generation." },
  { icon: Sparkles, title: "Native Audio Co-Generation", desc: "Generate visuals and audio in one workflow for more complete outputs." },
  { icon: Users, title: "Character Consistency", desc: "Keep characters, style, and identity more stable across scenes." },
  { icon: Clapperboard, title: "Multi-Shot Storytelling", desc: "Build richer, more structured videos beyond a single moving shot." },
  { icon: Film, title: "Frame-Level Precision", desc: "Better control over timing, transitions, and motion quality." },
  { icon: Video, title: "Cinematic Output", desc: "Create polished videos for ads, stories, and branded content." },
];

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Key Benefits of <span className="text-gradient">Seedance 2.0</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg">
          Purpose-built features for cinematic, multimodal AI video creation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article key={b.title} className="surface-card rounded-xl p-6 hover:border-primary/30 transition-colors">
              <b.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold font-display mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
