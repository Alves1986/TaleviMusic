import React from 'react';
import { SectionDivider } from '../SectionDivider';

export function MechanismSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-parchment) border-t border-(--color-parchment-line)">
      <div className="container mx-auto px-4 md:px-8 max-w-[900px] text-center">
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-8">
          Música + compreensão do aprendizado humano
        </h2>
        
        <div className="font-body text-(--color-ink) text-lg space-y-6 max-w-2xl mx-auto">
          <p>
            Este não é mais um dicionário de acordes seco e confuso.
          </p>
          <p>
            O <strong>+100 Acordes</strong> foi construído por alguém que entende tanto de música quanto do processo de aprender. Cada acorde é apresentado com clareza: cifra, casa, pestana, tríade, tétrade — tudo organizado para que você não precise decorar sem entender.
          </p>
          <p>
            A abordagem considera o seu bem-estar durante o aprendizado. Exercícios que trabalham performance e superação de frustrações. Porque tocar violão não é só sobre dedilhar cordas — é sobre se sentir capaz.
          </p>
        </div>
        
        <div className="mt-20">
          <SectionDivider chordName="D" />
        </div>
      </div>
    </section>
  );
}
