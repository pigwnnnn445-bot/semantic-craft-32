import { useLang } from "@/i18n/LangContext";

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="/" className="text-lg font-bold font-display text-gradient">Seedance</a>
            <p className="text-sm text-muted-foreground mt-1">{t.footer.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground">
              <li><a href="#how-to-use" className="hover:text-foreground transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#examples" className="hover:text-foreground transition-colors">{t.nav.examples}</a></li>
              <li><a href="#faq-heading" className="hover:text-foreground transition-colors">{t.nav.faq}</a></li>
            </ul>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
