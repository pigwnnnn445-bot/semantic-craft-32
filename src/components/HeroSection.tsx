import { useLang } from "@/i18n/LangContext";
import { useState, useRef } from "react";
import { X, Image as ImageIcon } from "lucide-react";

export default function HeroSection() {
  const { t } = useLang();
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const clearImage = () => {
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center" aria-labelledby="hero-heading">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://static.gamsgocdn.com/local/671678/2/1040/1120/ntu4j4djqkhbt2kq-0/3d687524c0b09c367635b8dcef07836b.mp4"
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
            <div className="flex">
              {/* Image upload */}
              <div className="flex-shrink-0 border-r border-white/15">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFile}
                  aria-label="Upload reference image"
                />
                {preview ? (
                  <div className="relative w-[120px] h-[100px]">
                    <img src={preview} alt="Uploaded reference preview" width={120} height={100} className="w-full h-full object-cover" />
                    <button
                      onClick={clearImage}
                      className="absolute top-1.5 right-1.5 p-0.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                      aria-label="Remove uploaded image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="w-[120px] h-[100px] flex flex-col items-center justify-center gap-1.5 text-white/50 hover:text-white/70 hover:bg-white/5 transition-colors"
                    aria-label="Add reference image"
                  >
                    <div className="relative">
                      <ImageIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="absolute -bottom-0.5 -right-1.5 text-xs leading-none" aria-hidden="true">+</span>
                    </div>
                    <span className="text-[11px] leading-tight text-center">Add Reference<br/>Image</span>
                  </button>
                )}
              </div>

              {/* Text input */}
              <div className="flex-1 p-4">
                <label htmlFor="hero-prompt" className="sr-only">Video prompt</label>
                <textarea
                  id="hero-prompt"
                  placeholder={t.hero.placeholder}
                  className="w-full h-[68px] bg-transparent text-white/90 text-sm placeholder:text-white/50 resize-none focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Generate button below the input box */}
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
