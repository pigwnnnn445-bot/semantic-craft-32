import { useLang } from "@/i18n/LangContext";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export default function SiteFooter() {
  const { t, lang, otherLangPath } = useLang();

  return (
    <footer className="border-t border-border py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.footer.productsHeading}
            </h4>
            <nav aria-label="Product navigation">
              <ul className="space-y-3">
                {t.footer.products.map((product) => (
                  <li key={product.path}>
                    <Link
                      to={product.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.footer.langHeading}
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to={lang === "en" ? "/" : "/"}
                className={`inline-flex items-center gap-2 text-sm transition-colors ${lang === "en" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Globe className="w-4 h-4" />
                English
              </Link>
              <Link
                to={lang === "zh" ? "/zh" : "/zh"}
                className={`inline-flex items-center gap-2 text-sm transition-colors ${lang === "zh" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Globe className="w-4 h-4" />
                中文
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-xs text-muted-foreground text-center">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
