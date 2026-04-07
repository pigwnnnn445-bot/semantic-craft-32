import { useLang } from "@/i18n/LangContext";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  const { t, otherLangPath } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" className="text-lg font-bold font-display text-gradient" aria-label="Seedance home">
          Seedance
        </a>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <li><a href="#how-to-use" className="hover:text-foreground transition-colors">{t.nav.howItWorks}</a></li>
            <li><a href="#examples" className="hover:text-foreground transition-colors">{t.nav.examples}</a></li>
            <li><a href="#faq-heading" className="hover:text-foreground transition-colors">{t.nav.faq}</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to={otherLangPath} className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:bg-secondary transition-colors">
            {t.nav.switchLang}
          </Link>
          <a href="#how-to-use" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            {t.nav.tryNow}
          </a>
        </div>
      </div>
    </header>
  );
}
