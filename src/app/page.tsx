import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <WhyChooseUsSection />
      <WhatWeOfferSection />
      <TechnologiesSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
