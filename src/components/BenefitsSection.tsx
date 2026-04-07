import { Film, Sparkles, Users, Clapperboard, SlidersHorizontal, Video } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [SlidersHorizontal, Sparkles, Users, Clapperboard, Film, Video];

export default function BenefitsSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="benefits-heading" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.benefits.heading} <span className="text-gradient">{t.benefits.headingHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg">{t.benefits.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((b, i) => {
            const Icon = icons[i];
            return (
              <article key={b.title} className="surface-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                <Icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold font-display mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
