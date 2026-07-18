import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "Sempre travei na hora de fazer pestana e entender as tríades. Com o material do Carlos, parece que tudo fez sentido. Hoje toco sem medo.",
      author: "João Paulo",
      role: "Aluno há 6 meses"
    },
    {
      quote: "Material direto ao ponto. Não é só decoreba, a gente entende o porquê de cada acorde. O melhor investimento que fiz pro meu violão.",
      author: "Maria Fernanda",
      role: "Iniciante no violão"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-parchment) border-y border-(--color-parchment-line)">
      <div className="container mx-auto px-4 md:px-8 max-w-[1000px]">
        <div className="text-center mb-16">
          <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-6">
            Quem já usou, aprova
          </h2>
          <p className="font-body text-(--color-ink) text-lg max-w-2xl mx-auto">
            Carlos Eduardo tem 6 anos de experiência na Hotmart. Durante esse tempo, centenas de alunos já utilizaram seus materiais para destravar no violão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((test, i) => (
            <TestimonialCard 
              key={i}
              quote={test.quote}
              author={test.author}
              role={test.role}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-caption text-(--color-ink-muted) italic">
            Mencionar participações em eventos, DVDs e festivais regionais como reforço de credibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
