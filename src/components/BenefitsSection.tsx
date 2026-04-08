import { useLang } from "@/i18n/LangContext";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function BenefitsSection() {
  const { t } = useLang();
  const { comparison, reviews } = t.benefits;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="comparison-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="comparison-heading" className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight mb-4">
          {comparison.heading}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-3xl">
          {comparison.subtitle}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 md:px-6 font-semibold text-muted-foreground w-[20%]">
                  {comparison.featureLabel}
                </th>
                {comparison.products.map((product) => (
                  <th key={product.name} className="text-left py-4 px-4 md:px-6 font-bold text-foreground">
                    {product.name} <span className="font-normal text-muted-foreground text-xs md:text-sm">{product.company}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-4 px-4 md:px-6 font-bold text-foreground align-top">
                    {row.feature}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`py-4 px-4 md:px-6 align-top ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {comparison.footnote && (
          <p className="text-muted-foreground text-xs mt-4">{comparison.footnote}</p>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href="https://app.seedance.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full bg-[#c8ff00] text-black font-semibold text-sm hover:bg-[#d4ff33] transition-colors"
          >
            {comparison.cta} →
          </a>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 mt-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight mb-4">
              {reviews.heading}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              {reviews.subtitle}
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.items.map((review, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[340px] md:w-[400px] rounded-xl border border-border bg-card p-6 flex flex-col justify-between snap-start"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <h4 className="font-bold text-foreground text-base leading-snug pr-4">
                    {review.title}
                  </h4>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-foreground text-foreground" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {review.body}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4">
                <span className="w-8 h-8 rounded-full bg-muted text-muted-foreground text-xs font-semibold flex items-center justify-center">
                  {review.initials}
                </span>
                <span className="text-sm font-medium text-foreground">{review.name}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          {reviews.trusted}
        </p>
      </div>
    </section>
  );
}