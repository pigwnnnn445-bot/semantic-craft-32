import { useLang } from "@/i18n/LangContext";

export default function SiteHeader() {
  const { t, lang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href={lang === "en" ? "/" : "/zh"} className="flex items-center gap-2" aria-label="Rita home">
          <span className="text-lg font-bold font-display text-white">Rita</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
            {t.nav.tryNow}
          </a>
        </div>
      </div>
    </header>
  );
}
