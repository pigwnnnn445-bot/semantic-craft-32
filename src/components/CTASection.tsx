import { useLang } from "@/i18n/LangContext";

export default function CTASection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="cta-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold font-display mb-4">
          {t.cta.heading} <span className="text-gradient">{t.cta.headingHighlight}</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="#how-to-use" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
            {t.cta.btn1}
          </a>
          <a href="#examples" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-base hover:bg-surface-hover transition-colors">
            {t.cta.btn2}
          </a>
        </div>
        <p className="text-xs text-muted-foreground">{t.cta.note}</p>
      </div>
    </section>
  );
}
