import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { PainSection } from '@/components/sections/PainSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { MechanismSection } from '@/components/sections/MechanismSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaFinalSection } from '@/components/sections/CtaFinalSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-paper) text-(--color-ink) font-body overflow-x-hidden selection:bg-(--color-primary) selection:text-white">
      <HeroSection />
      <PainSection />
      <AuthoritySection />
      <MechanismSection />
      <FeaturesSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaFinalSection />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-(--color-paper) border-t border-(--color-parchment-line) shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex justify-center">
        <a 
          href="#oferta"
          className="w-full h-12 bg-(--color-brass) text-(--color-ink) rounded-[4px] font-body font-bold text-sm tracking-wide uppercase shadow-[0_2px_0_color-mix(in_srgb,var(--color-ink)_18%,transparent)] flex items-center justify-center no-underline"
        >
          Quero Destravar Agora
        </a>
      </div>
    </main>
  );
}
