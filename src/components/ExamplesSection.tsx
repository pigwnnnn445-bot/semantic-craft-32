import { useLang } from "@/i18n/LangContext";

export default function ExamplesSection() {
  const { t } = useLang();

  return (
    <section id="examples" aria-labelledby="examples-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="examples-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          <span className="text-gradient">{t.examples.headingHighlight}</span> {t.examples.heading}
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">{t.examples.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.examples.tags.map((tag) => (
            <article key={tag} className="surface-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{t.examples.preview}</span>
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/20 bg-primary/5 text-primary">
                  {tag}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-base hover:bg-surface-hover transition-colors">
            {t.examples.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
