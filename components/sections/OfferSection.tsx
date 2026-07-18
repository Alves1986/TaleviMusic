import React from 'react';
import { Button } from '../Button';

export function OfferSection() {
  const hotmartUrl = process.env.NEXT_PUBLIC_HOTMART_PRODUCT_ID 
    ? `https://pay.hotmart.com/${process.env.NEXT_PUBLIC_HOTMART_PRODUCT_ID}` 
    : "#";

  return (
    <section id="oferta" className="w-full py-16 lg:py-24 bg-(--color-paper)">
      <div className="container mx-auto px-4 md:px-8 max-w-[800px] text-center">
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-8">
          O investimento
        </h2>
        
        <p className="font-body text-(--color-ink) text-lg mb-10 max-w-2xl mx-auto">
          Um dicionário completo de acordes, estruturado por um professor com 20+ anos de estrada e formação em Terapia Ocupacional.
        </p>

        <div className="bg-(--color-parchment) border border-(--color-parchment-line) rounded-lg p-8 md:p-12 mb-10 shadow-sm relative overflow-hidden">
          {/* Decorative watermark */}
          <div className="absolute top-0 left-0 opacity-[0.03] text-(--color-rosewood) pointer-events-none -translate-x-1/2 -translate-y-1/2">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C77.614 0 100 22.386 100 50 C100 77.614 77.614 100 50 100 C22.386 100 0 77.614 0 50 C0 22.386 22.386 0 50 0 Z" />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center relative z-10">
            <p className="font-body text-(--color-ink-muted) text-lg line-through mb-2">
              Valor total do conteúdo: R$ 97,00
            </p>
            <div className="flex items-center gap-4 mb-2">
              <span className="font-body text-(--color-ink) font-bold text-xl">Hoje:</span>
              <span className="font-mono text-(--color-primary) font-bold text-5xl md:text-6xl tracking-tight">
                R$ 19,90
              </span>
            </div>
            <p className="font-body text-(--color-ink) mt-4 max-w-md mx-auto">
              Menos de R$ 20 para ter um mapa completo de acordes sempre à mão.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            className="w-full sm:w-auto text-base py-4 px-10 shadow-lg text-lg"
            onClick={() => window.location.href = hotmartUrl}
          >
            Aproveite a Oferta por R$ 19,90
          </Button>
        </div>
      </div>
    </section>
  );
}
