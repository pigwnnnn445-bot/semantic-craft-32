import { useLang } from "@/i18n/LangContext";

const videoUrl = "https://static.higgsfield.ai/kling-3/hero/hero-1.mp4";

export default function FeaturesSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="features-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="features-heading" className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight mb-4">
          {t.features.heading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-16 max-w-3xl">
          {t.features.subtitle}
        </p>

        <div className="space-y-16 md:space-y-24">
          {t.features.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={item.title}
                className="border-t border-border pt-10 md:pt-14"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start`}>
                  {/* Video */}
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display tracking-wide uppercase mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-medium text-base md:text-lg mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                        {item.body}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={isEven ? 'self-end' : 'self-start'}>
                      <a
                        href="https://app.seedance.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 border-2 border-primary text-primary font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {t.features.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
