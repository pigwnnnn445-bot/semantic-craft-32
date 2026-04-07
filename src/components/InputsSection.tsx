import { Type, ImageIcon, VideoIcon, Music } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [Type, ImageIcon, VideoIcon, Music];

export default function InputsSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="inputs-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="inputs-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.inputs.heading} <span className="text-gradient">{t.inputs.headingHighlight}</span> {t.inputs.headingSuffix}
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">{t.inputs.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.inputs.items.map((input, i) => {
            const Icon = icons[i];
            return (
              <article key={input.title} className="surface-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <Icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold font-display mb-2">{input.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{input.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
