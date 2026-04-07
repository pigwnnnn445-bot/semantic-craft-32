import { Megaphone, ShoppingBag, BookOpen, Music, Share2, Film } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

const icons = [Megaphone, ShoppingBag, BookOpen, Music, Share2, Film];

export default function UseCasesSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="usecases-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.useCases.heading} <span className="text-gradient">{t.useCases.headingHighlight}</span>?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">{t.useCases.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.useCases.items.map((uc, i) => {
            const Icon = icons[i];
            return (
              <article key={uc.title} className="surface-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                <Icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold font-display mb-2">{uc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
