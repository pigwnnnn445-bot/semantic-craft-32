import { useLang } from "@/i18n/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" aria-labelledby="hero-heading">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://static.higgsfield.ai/kling-3/hero/hero-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster="https://static.higgsfield.ai/kling-3/hero/hero-1-poster.jpg"
        title="Seedance 2.0 AI video generation demo"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
          <span className="text-sm font-semibold text-white">Seedance 2.0</span>
          <span className="text-white/40 text-sm">×</span>
          <span className="text-sm font-semibold text-white">Rita</span>
        </div>

        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem] font-bold font-display leading-tight mb-6 text-white uppercase tracking-tight max-w-5xl mx-auto">
          {t.hero.h1}
        </h1>

        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex justify-center mb-16">
          <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#c8ff00] text-black font-semibold text-sm hover:bg-[#d4ff33] transition-colors">
            {t.hero.cta2}
          </a>
        </div>

        {/* Prompt input area */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/20 bg-black/30 backdrop-blur-md overflow-hidden">
            <div className="p-4">
              <label htmlFor="hero-prompt" className="sr-only">Video prompt</label>
              <textarea
                id="hero-prompt"
                placeholder={t.hero.placeholder}
                className="w-full h-[68px] bg-transparent text-white/90 text-sm placeholder:text-white/50 resize-none focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full py-3 rounded-lg bg-[#c8ff00] text-black text-sm font-semibold hover:bg-[#d4ff33] transition-colors flex items-center justify-center gap-1.5">
              Generate <span className="text-base" aria-hidden="true">✦</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
