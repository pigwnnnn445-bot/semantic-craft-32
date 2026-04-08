import { useLang } from "@/i18n/LangContext";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  const { t, lang, otherLangPath } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href={lang === "en" ? "/" : "/zh"} className="flex items-center gap-2" aria-label="Seedance home">
          <img src="https://static.higgsfield.ai/kling-3/logo.svg" alt="Seedance logo" width={100} height={28} className="h-7 invert" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
          <span className="text-lg font-bold font-display text-white hidden">Seedance</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <li><a href="#features-heading" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
            <li><a href="#examples" className="hover:text-white transition-colors">{t.nav.examples}</a></li>
            <li><a href="#faq-heading" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to={otherLangPath} className="px-3 py-1.5 rounded-md text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:bg-white/10 transition-colors">
            {t.nav.switchLang}
          </Link>
          <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
            {t.nav.tryNow}
          </a>
        </div>
      </div>
    </header>
  );
}
