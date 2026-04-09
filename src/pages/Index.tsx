import { Helmet } from "react-helmet-async";
import { useLang } from "@/i18n/LangContext";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExamplesSection from "@/components/ExamplesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

function buildJsonLd(lang: "en" | "zh", t: any) {
  const baseUrl = "https://seedance.ai";
  const currentUrl = lang === "en" ? `${baseUrl}/` : `${baseUrl}/zh`;

  const graph: any[] = [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: "Seedance",
    },
    {
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      url: currentUrl,
      name: t.siteTitle,
      description: t.siteDescription,
      inLanguage: lang === "en" ? "en" : "zh-Hans",
      isPartOf: { "@id": `${baseUrl}/#website` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${currentUrl}#software`,
      name: "Seedance 2.0 AI Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      description: t.siteDescription,
      url: currentUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: String(t.benefits.reviews.items.length),
        bestRating: "5",
        worstRating: "1",
      },
      review: t.benefits.reviews.items.map((r: any) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        name: r.title,
        reviewBody: r.body,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "首页",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Seedance 2.0",
          item: currentUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${currentUrl}#faq`,
      mainEntity: t.faq.items.map((faq: any) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

const Index = () => {
  const { lang, t } = useLang();
  const baseUrl = "https://seedance.ai";
  const enUrl = `${baseUrl}/`;
  const zhUrl = `${baseUrl}/zh`;
  const currentUrl = lang === "en" ? enUrl : zhUrl;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDescription} />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="zh" href={zhUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDescription} />
        <meta property="og:url" content={currentUrl} />
        <script type="application/ld+json">{buildJsonLd(lang, t)}</script>
      </Helmet>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExamplesSection />
        <FeaturesSection />
        <WhatIsSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
