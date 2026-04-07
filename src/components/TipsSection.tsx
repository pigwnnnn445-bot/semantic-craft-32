import { Lightbulb } from "lucide-react";

const tips = [
  { title: "Keep one clear subject", desc: "Focus on a single main subject first — don't overload the prompt with too many focal points." },
  { title: "Align all references", desc: "Image, video, and audio references should all point toward the same creative direction." },
  { title: "Describe motion and mood", desc: "Don't just describe what's there — also describe how things move and what atmosphere you want." },
  { title: "Use references for consistency", desc: "For multi-shot or longer narratives, use reference materials to maintain visual consistency." },
  { title: "Iterate in small steps", desc: "Start with short clips to test, then gradually increase complexity for best results." },
];

export default function TipsSection() {
  return (
    <section aria-labelledby="tips-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="tips-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          How to get the best results with <span className="text-gradient">Seedance 2.0</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Clear prompts and aligned references usually lead to more stable, higher-quality outputs.
        </p>
        <ul className="space-y-4">
          {tips.map((tip) => (
            <li key={tip.title} className="surface-card rounded-xl p-6 flex gap-4 items-start">
              <Lightbulb className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-semibold font-display mb-1">{tip.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
