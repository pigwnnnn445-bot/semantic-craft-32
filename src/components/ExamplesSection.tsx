import { useLang } from "@/i18n/LangContext";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const exampleImages = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1518676590747-1e3dcf5a04be?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=340&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=340&fit=crop",
];

export default function ExamplesSection() {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="examples" aria-labelledby="examples-heading" className="py-20 md:py-28 bg-background">
      <div className="max-w-[100vw] overflow-hidden">
        <h2 id="examples-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-foreground">
          {t.examples.headingHighlight} {t.examples.heading}
        </h2>

        {/* Carousel */}
        <div className="relative group">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {exampleImages.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[480px] aspect-video rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Example ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
      </div>
    </section>
  );
}
