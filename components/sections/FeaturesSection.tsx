import React from 'react';
import { Button } from '../Button';

export function FeaturesSection() {
  const hotmartUrl = "https://hotmart.com/pt-br/marketplace/produtos/100-acordes-para-voce-destravar-no-violao";
  const features = [
    { title: "Tríades e Tétrades", desc: "entenda a estrutura dos acordes em vez de decorar posições" },
    { title: "Acordes Maiores e Menores", desc: "domine as bases que sustentam 80% das músicas" },
    { title: "Acordes com Sétima", desc: "adicione profundidade e cor ao seu som" },
    { title: "Acordes Alterados", desc: "saia das quatro paredes dos acordes básicos" },
    { title: "Acordes Diminutos e Meio Diminutos", desc: "complete seu vocabulário harmônico" },
    { title: "Acordes Sustenidos e Naturais", desc: "nunca mais se perca nas alterações" },
    { title: "Dicionário completo em formato digital", desc: "consulte sempre que precisar, em qualquer dispositivo" }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-paper)">
      <div className="container mx-auto px-4 md:px-8 max-w-[1000px]">
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] text-center mb-16">
          O que você vai encontrar no e-book
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {features.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-mono text-(--color-brass) text-xl font-bold mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-body font-bold text-(--color-ink) text-lg mb-1">{item.title}</h3>
                <p className="font-body text-(--color-ink-muted)">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button href={hotmartUrl}>
            Quero Meu E-book Agora!
          </Button>
        </div>
      </div>
    </section>
  );
}
