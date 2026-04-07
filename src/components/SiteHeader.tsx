export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="/" className="text-lg font-bold font-display text-gradient" aria-label="Seedance home">
          Seedance
        </a>
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <li><a href="#how-to-use" className="hover:text-foreground transition-colors">How It Works</a></li>
            <li><a href="#examples" className="hover:text-foreground transition-colors">Examples</a></li>
            <li><a href="#faq-heading" className="hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </nav>
        <a href="#how-to-use" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Try Now
        </a>
      </div>
    </header>
  );
}
