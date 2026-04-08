import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LangContext";

export default function FAQSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          {t.faq.headingHighlight} {t.faq.heading}
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">{t.faq.subtitle}</p>
        <dl className="space-y-3">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="surface-card rounded-xl overflow-hidden">
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold font-display text-foreground hover:text-primary transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </dt>
                <dd id={`faq-answer-${i}`} className={isOpen ? "" : "hidden"}>
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
