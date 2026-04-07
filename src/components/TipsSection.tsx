import { Lightbulb } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

export default function TipsSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="tips-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="tips-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.tips.heading} <span className="text-gradient">{t.tips.headingHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">{t.tips.subtitle}</p>
        <ul className="space-y-4">
          {t.tips.items.map((tip) => (
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
