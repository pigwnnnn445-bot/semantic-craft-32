import { useLang } from "@/i18n/LangContext";

export default function WhatIsSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="what-is-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="what-is-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.whatIs.heading} <span className="text-gradient">{t.whatIs.headingHighlight}</span>?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">{t.whatIs.subtitle}</p>
        <div className="surface-card rounded-xl p-8 md:p-10">
          <p className="text-foreground leading-relaxed text-base md:text-lg">{t.whatIs.body}</p>
        </div>
      </div>
    </section>
  );
}
