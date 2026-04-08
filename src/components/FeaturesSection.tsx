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
        <p className="text-muted-foreground text-base md:text-lg mb-14 max-w-2xl">
          <span className="text-foreground font-semibold">{t.features.subtitleBold}</span>{" "}
          {t.features.subtitleRest}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.features.items.map((item) => (
            <article key={item.title} className="group rounded-xl overflow-hidden">
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
              <div className="pt-4 pb-2">
                <h3 className="text-lg md:text-xl font-bold font-display tracking-wide uppercase mb-1.5">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
