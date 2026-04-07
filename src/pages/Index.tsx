import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import BenefitsSection from "@/components/BenefitsSection";
import InputsSection from "@/components/InputsSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowToUseSection from "@/components/HowToUseSection";
import TipsSection from "@/components/TipsSection";
import ExamplesSection from "@/components/ExamplesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhatIsSection />
        <BenefitsSection />
        <InputsSection />
        <UseCasesSection />
        <HowToUseSection />
        <TipsSection />
        <ExamplesSection />
        <WhyChooseSection />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
