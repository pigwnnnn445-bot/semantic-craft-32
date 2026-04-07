import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is Seedance 2.0?", a: "Seedance 2.0 is a multimodal AI video model for creating richer, reference-driven video outputs." },
  { q: "What inputs does Seedance 2.0 support?", a: "It supports text, images, video, and audio inputs in supported workflows." },
  { q: "Can Seedance 2.0 generate video with audio?", a: "Yes, public descriptions emphasize native audio or audio-aware generation." },
  { q: "Is Seedance 2.0 good for multi-shot storytelling?", a: "Yes, it is often positioned for richer scene structure and multi-shot video generation." },
  { q: "Can I use image and video references together?", a: "In supported workflows, Seedance 2.0 is positioned as a multimodal model that can combine multiple reference types." },
  { q: "Is Seedance 2.0 available via API?", a: "BytePlus currently states that Seedance 2.0 is available via Model Playground and does not support API invocation at this time." },
  { q: "What is the difference between Seedance 1.5 Pro and Seedance 2.0?", a: "Seedance 2.0 is generally positioned with broader multimodal input and richer storytelling workflows, while Seedance 1.5 Pro is more often framed around strong base video quality and audio-video generation." },
  { q: "Who should use Seedance 2.0?", a: "It is a good fit for creators, marketers, product teams, and storytellers who want more than a simple text-to-video workflow." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          <span className="text-gradient">Seedance 2.0</span> FAQ
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          Common questions about Seedance 2.0 capabilities and availability.
        </p>
        <dl className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="surface-card rounded-xl overflow-hidden">
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold font-display text-foreground hover:text-primary transition-colors"
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-5 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
