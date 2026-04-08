import { useLang } from "@/i18n/LangContext";
import { useState } from "react";

const EXAMPLE_VIDEO = "https://static.higgsfield.ai/kling-3/hero/hero-1.mp4";
const CARD_COUNT = 6;

export default function ExamplesSection() {
  const { t } = useLang();
  const [paused, setPaused] = useState(false);

  const cards = Array.from({ length: CARD_COUNT * 2 }, (_, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[480px] aspect-video rounded-xl overflow-hidden"
    >
      <video
        src={EXAMPLE_VIDEO}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  ));

  return (
    <section id="examples" aria-labelledby="examples-heading" className="py-20 md:py-28 bg-background overflow-hidden">
      <h2 id="examples-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-foreground">
        {t.examples.headingHighlight} {t.examples.heading}
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 w-max animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {cards}
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full bg-[#c8ff00] text-black font-semibold text-sm hover:bg-[#d4ff33] transition-colors"
        >
          {t.examples.cta} →
        </a>
      </div>
    </section>
  );
}
