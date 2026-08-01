"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../Button";

export function HeroSection() {
  return (
    <section className="relative w-full pt-6 pb-12 lg:pt-8 lg:pb-12 bg-(--color-paper) overflow-hidden min-h-[100svh] lg:min-h-0 flex items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-[1120px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <Image 
                src="/images/logo sem fundo.png"
                alt="Talevi Escola de Música"
                width={180}
                height={72}
                className="w-[140px] md:w-[180px] h-auto"
                priority
              />
            </div>

            <h1 className="font-display text-(--color-rosewood) text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.1] mb-4">
              <i className="italic">Destrave</i> no Violão: Aprenda +100 Acordes e Supere Suas Dificuldades Musicais
            </h1>

            <p className="font-body text-(--color-ink) text-base md:text-lg mb-6 max-w-xl">
              O guia completo para músicos de todos os níveis, com a didática de Carlos Eduardo Dias Talevi.
            </p>

            <Button className="w-full sm:w-auto text-base py-3 px-8 shadow-md" href="#oferta">
              Quero Destravar Meu Violão Agora!
            </Button>
          </div>

          {/* Visual Content (Mockup) */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
            <motion.div
              className="relative w-full max-w-[320px] lg:max-w-[360px] aspect-[3/4] rounded-sm overflow-hidden border border-(--color-parchment-line) shadow-[0_20px_40px_rgba(0,0,0,0.12)] transform lg:rotate-2 hover:rotate-0 hover:scale-[1.05] hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/IMG_2633.PNG"
                alt="Capa do E-book +100 Acordes"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Hint / Signature Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.03] text-(--color-rosewood) pointer-events-none translate-x-1/3 -translate-y-1/3">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C77.614 0 100 22.386 100 50 C100 77.614 77.614 100 50 100 C22.386 100 0 77.614 22.386 0 50 0 Z" />
        </svg>
      </div>
    </section>
  );
}
