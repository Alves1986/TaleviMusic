import React from 'react';
import { SectionDivider } from '../SectionDivider';

export function PainSection() {
  return (
    <section className="w-full py-16 lg:py-28 bg-(--color-parchment) border-t border-(--color-parchment-line)">
      <div className="container mx-auto px-4 md:px-8 max-w-[800px] text-center">
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-8">
          Você já tentou aprender violão e <i className="italic">travou</i> no mesmo lugar?
        </h2>
        
        <div className="font-body text-(--color-ink) text-lg md:text-xl space-y-6 leading-relaxed">
          <p>
            Você pega o violão, tenta tocar aquela música que gosta, e para no mesmo acorde. Dedo erra a casa. Pestana não sai. A mão trava. E a frustração vem.
          </p>
          <p>
            A maioria acha que é falta de talento. Mas não é.
          </p>
          <p className="font-semibold">
            É falta do mapa certo.
          </p>
        </div>
        
        <div className="mt-16">
          <SectionDivider chordName="Em" />
        </div>
      </div>
    </section>
  );
}
