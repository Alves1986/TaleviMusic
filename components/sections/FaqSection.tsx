"use client";

import React, { useState } from 'react';
import { cn } from '../Button';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-(--color-parchment-line) last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-body font-bold text-(--color-primary) text-lg pr-8">
          {question}
        </span>
        <span className={cn(
          "text-(--color-brass) transition-transform duration-300 flex-shrink-0 text-2xl leading-none",
          isOpen ? "rotate-45" : "rotate-0"
        )}>
          +
        </span>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="font-body text-(--color-ink) text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como recebo o e-book?",
      a: "Assim que a compra for confirmada na Hotmart, você recebe o acesso ao material digital por e-mail. Pode baixar e consultar em qualquer dispositivo."
    },
    {
      q: "Preciso de conhecimento prévio de teoria musical?",
      a: "Não. O material foi construído para músicos de todos os níveis, desde quem nunca estudou teoria até quem quer aprofundar."
    },
    {
      q: "Qual o formato do material?",
      a: "E-book em formato digital, otimizado para leitura em celular, tablet e computador."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia. Se o conteúdo não atender suas expectativas, devolvemos 100% do valor investido."
    },
    {
      q: "Funciona para violão elétrico também?",
      a: "Sim. Os acordes e cifras são universais para violão acústico e elétrico."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-paper)">
      <div className="container mx-auto px-4 md:px-8 max-w-[800px]">
        <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="bg-(--color-parchment) rounded-[4px] p-6 md:p-10 border border-(--color-parchment-line)">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
