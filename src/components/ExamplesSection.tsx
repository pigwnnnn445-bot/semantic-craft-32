import { useLang } from "@/i18n/LangContext";
import { useState } from "react";

const exampleImages = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1518676590747-1e3dcf5a04be?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=340&fit=crop",
];

// Duplicate for seamless loop
const allImages = [...exampleImages, ...exampleImages];

export default function ExamplesSection() {
  const { t } = useLang();
  const [paused, setPaused] = useState(false);

  return (
    <section id="examples" aria-labelledby="examples-heading" className="py-20 md:py-28 bg-background overflow-hidden">
      <h2 id="examples-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-foreground">
        {t.examples.headingHighlight} {t.examples.heading}
      </h2>

      {/* Marquee */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 w-max animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[480px] aspect-video rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Example ${(i % exampleImages.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
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
