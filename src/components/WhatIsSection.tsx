import { useLang } from "@/i18n/LangContext";
import step1Img from "@/assets/step1-upload.png";
import step2Img from "@/assets/step2-prompt.png";
import step3Img from "@/assets/step3-result.png";

const stepImages = [step1Img, step2Img, step3Img];

export default function WhatIsSection() {
  const { t } = useLang();

  return (
    <section aria-labelledby="what-is-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          id="what-is-heading"
          className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight text-center mb-16"
        >
          {t.whatIs.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {t.whatIs.steps.map((item, index) => (
            <div key={item.step} className="flex flex-col items-center text-center">
              {/* Card image */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-card border border-border">
                <img
                  src={stepImages[index]}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
                {item.step}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold font-display uppercase tracking-wide mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
