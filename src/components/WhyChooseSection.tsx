import { Check } from "lucide-react";

const reasons = [
  { title: "More Input Flexibility", desc: "Combine text, image, video, and audio inputs in a single generation — not just text-to-video." },
  { title: "Better for Audio-Aware Workflows", desc: "Native audio understanding makes Seedance 2.0 a better fit for sound-driven video creation." },
  { title: "Stronger Storytelling Structure", desc: "Multi-shot and scene-aware generation enables richer, more complete narratives." },
  { title: "More Control Over References", desc: "Use multiple reference types to guide character, style, and motion more precisely." },
];

export default function WhyChooseSection() {
  return (
    <section aria-labelledby="why-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="why-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Why choose <span className="text-gradient">Seedance 2.0</span> over simpler video models?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Seedance 2.0 is built for creators who need richer inputs, more structured storytelling, and stronger media control.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <article key={r.title} className="surface-card rounded-xl p-6 md:p-8 flex gap-4 items-start hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
