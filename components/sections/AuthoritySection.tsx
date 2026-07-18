import React from 'react';
import Image from 'next/image';
import { SectionDivider } from '../SectionDivider';

export function AuthoritySection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-(--color-paper)">
      <div className="container mx-auto px-4 md:px-8 max-w-[1120px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Photo */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[4px] overflow-hidden border border-(--color-parchment-line) shadow-lg">
              <Image 
                src="/images/IMG_2632.PNG"
                alt="Carlos Eduardo Dias Talevi"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="w-full lg:w-7/12">
            <h2 className="font-display text-(--color-primary) text-[clamp(1.75rem,2vw+1rem,2.5rem)] mb-6">
              Quem vai te guiar
            </h2>
            
            <div className="font-body text-(--color-ink) space-y-5 text-[1.0625rem]">
              <p>
                <strong>Carlos Eduardo Dias Talevi</strong> é professor de música, diretor musical e músico com mais de 20 anos de experiência. Há mais de 10 anos ensina violão e teoria musical para alunos de todos os perfis — desde crianças em musicalização infantil até adultos que tentaram aprender antes e desistiram.
              </p>
              <p>
                Sua atuação em igrejas, apresentações e participações em DVDs e festivais regionais reforça sua autoridade prática no campo musical.
              </p>
              <p>
                E há algo mais: Carlos Eduardo é estudante de Terapia Ocupacional. Isso significa que ele entende não só a técnica do violão, mas o processo humano de aprender — como superar bloqueios, lidar com frustração e construir confiança no instrumento.
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="mt-20">
          <SectionDivider chordName="G" />
        </div>
      </div>
    </section>
  );
}
