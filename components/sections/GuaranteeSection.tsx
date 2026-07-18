import React from 'react';
import { Badge } from '../Badge';

export function GuaranteeSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-parchment) border-y border-(--color-parchment-line)">
      <div className="container mx-auto px-4 md:px-8 max-w-[800px] text-center">
        
        <div className="flex justify-center mb-8">
          <Badge 
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            }
          >
            GARANTIA INCONDICIONAL
          </Badge>
        </div>
        
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-6">
          Sem risco para você
        </h2>
        
        <p className="font-body text-(--color-ink) text-lg max-w-2xl mx-auto">
          Você tem 7 dias de garantia. Acesse o e-book, explore o conteúdo, teste na prática. Se não fizer sentido para você, devolvemos 100% do valor. Sem letra miúda, sem burocracia.
        </p>
        
      </div>
    </section>
  );
}
