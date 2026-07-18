import React from 'react';
import { Button } from '../Button';
import { SectionDivider } from '../SectionDivider';

export function CtaFinalSection() {
  const hotmartUrl = process.env.NEXT_PUBLIC_HOTMART_PRODUCT_ID 
    ? `https://pay.hotmart.com/${process.env.NEXT_PUBLIC_HOTMART_PRODUCT_ID}` 
    : "#";

  return (
    <section className="w-full py-16 lg:py-28 bg-(--color-paper) border-t border-(--color-parchment-line) relative overflow-hidden">
      
      {/* Decorative large logo watermark */}
      <div className="absolute bottom-0 left-0 opacity-[0.03] text-(--color-rosewood) pointer-events-none -translate-x-1/4 translate-y-1/4">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C77.614 0 100 22.386 100 50 C100 77.614 77.614 100 50 100 C22.386 100 0 77.614 0 50 C0 22.386 22.386 0 50 0 Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[800px] text-center relative z-10">
        
        <h2 className="font-display text-(--color-primary) text-[clamp(2rem,3vw+1rem,3.5rem)] mb-6">
          Pronto para destravar seu violão?
        </h2>
        
        <p className="font-body text-(--color-ink) text-xl mb-12">
          O mapa está aqui. Falta só você começar.<br/>
          <strong>R$ 19,90. Garantia de 7 dias. Zero risco.</strong>
        </p>
        
        <div className="flex justify-center mb-16">
          <Button 
            className="w-full sm:w-auto text-base py-5 px-12 shadow-xl text-lg"
            href={hotmartUrl}
          >
            Quero Meu E-book Agora!
          </Button>
        </div>
        
        <SectionDivider chordName="C" />
      </div>
    </section>
  );
}
