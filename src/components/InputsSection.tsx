import { Type, ImageIcon, VideoIcon, Music } from "lucide-react";

const inputs = [
  { icon: Type, title: "Text Prompt", desc: "Describe the scene, subject, style, motion, and mood in words." },
  { icon: ImageIcon, title: "Image References", desc: "Guide subject appearance, composition, or visual direction with images." },
  { icon: VideoIcon, title: "Video References", desc: "Use existing footage to guide pacing, motion, or scene design." },
  { icon: Music, title: "Audio Inputs", desc: "Use sound or music as part of the generation workflow." },
];

export default function InputsSection() {
  return (
    <section aria-labelledby="inputs-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="inputs-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          What inputs does <span className="text-gradient">Seedance 2.0</span> support?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Use one input or combine multiple references to shape the final video.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {inputs.map((input) => (
            <article key={input.title} className="surface-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <input.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold font-display mb-2">{input.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{input.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
