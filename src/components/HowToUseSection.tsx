const steps = [
  { num: "01", title: "Choose Seedance 2.0", desc: "Select the Seedance 2.0 model in your preferred platform or playground." },
  { num: "02", title: "Write your prompt", desc: "Describe the scene, subject, style, motion, and mood you want." },
  { num: "03", title: "Add references", desc: "Upload images, video, or audio references to guide the generation." },
  { num: "04", title: "Generate and refine", desc: "Generate your video and iterate on the results to get the best output." },
];

export default function HowToUseSection() {
  return (
    <section id="how-to-use" aria-labelledby="howto-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="howto-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          How to use <span className="text-gradient">Seedance 2.0</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Start with a prompt, add references, and generate your final video in a few steps.
        </p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <li key={step.num} className="surface-card rounded-xl p-6 relative">
              <span className="text-4xl font-bold text-primary/20 font-display">{step.num}</span>
              <h3 className="text-lg font-semibold font-display mt-3 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="text-center mt-12">
          <a href="#examples" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
            Start Creating
          </a>
        </div>
      </div>
    </section>
  );
}
