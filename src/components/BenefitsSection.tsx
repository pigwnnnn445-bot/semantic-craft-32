import { useLang } from "@/i18n/LangContext";

export default function BenefitsSection() {
  const { t } = useLang();
  const { comparison } = t.benefits;

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
    </section>
  );
}
