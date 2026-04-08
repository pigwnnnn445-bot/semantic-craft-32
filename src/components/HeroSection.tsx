import { useLang } from "@/i18n/LangContext";
import seedanceTopview from "@/assets/seedance-topview.png";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" aria-labelledby="hero-heading">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://static.higgsfield.ai/kling-3/hero/hero-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <img src={seedanceTopview} alt="Seedance × Topview" className="mx-auto mb-8 h-10" />
        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 text-white uppercase tracking-tight">
          {t.hero.h1_1}: {t.hero.h1_2}
        </h1>

        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#how-to-use" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
            {t.hero.cta1}
          </a>
          <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors">
            {t.hero.cta2}
          </a>
        </div>

        {/* Prompt input area */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl border border-white/20 bg-black/30 backdrop-blur-md p-4">
            <p className="text-left text-white/50 text-sm mb-8">{t.hero.placeholder}</p>
            <div className="flex justify-end">
              <button className="px-5 py-2 rounded-lg bg-[#c8ff00] text-black text-sm font-semibold hover:bg-[#d4ff33] transition-colors flex items-center gap-1.5">
                Generate <span className="text-base">✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
