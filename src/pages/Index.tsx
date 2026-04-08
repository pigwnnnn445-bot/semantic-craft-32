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
