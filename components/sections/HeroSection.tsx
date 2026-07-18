import React from 'react';
import Image from 'next/image';
import { Button } from '../Button';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-16 lg:py-24 bg-(--color-paper) overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1120px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-12">
              <Image 
                src="/images/logo sem fundo.png" 
                alt="Talevi Escola de Música" 
                width={200} 
                height={80} 
                className="w-[160px] md:w-[200px] h-auto"
                priority
              />
            </div>
            
            <h1 className="font-display text-(--color-rosewood) text-[clamp(2.5rem,4vw+1rem,4rem)] leading-[1.05] mb-6">
              <i className="italic">Destrave</i> no Violão: Aprenda +100 Acordes e Supere Suas Dificuldades Musicais
            </h1>
            
            <p className="font-body text-(--color-ink) text-lg md:text-xl mb-10 max-w-xl">
              O guia completo para músicos de todos os níveis, com a didática de Carlos Eduardo Dias Talevi.
            </p>
            
            <Button className="w-full sm:w-auto text-base py-4 px-8" href="#oferta">
              Quero Destravar Meu Violão Agora!
            </Button>
          </div>

          {/* Visual Content (Mockup) */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-[400px] aspect-[3/4] shadow-2xl rounded-sm overflow-hidden border border-(--color-parchment-line) transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/IMG_2633.PNG"
                alt="Capa do E-book +100 Acordes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Hint / Signature Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.03] text-(--color-rosewood) pointer-events-none translate-x-1/3 -translate-y-1/3">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C77.614 0 100 22.386 100 50 C100 77.614 77.614 100 50 100 C22.386 100 0 77.614 0 50 C0 22.386 22.386 0 50 0 Z" />
        </svg>
      </div>
    </section>
  );
}
