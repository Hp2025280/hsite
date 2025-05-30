"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  const t = useTranslations('hero');
  
  return (
    <div className="relative min-h-[100vh] w-full flex flex-col items-center justify-center  antialiased overflow-hidden bg-black py-20 md:py-24 mb-[-300px]">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="px-4 max-w-7xl mx-auto relative z-10 w-full">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6">
            {t('title')}
            </h1>
            <p className="mt-4 mb-8 font-normal text-base md:text-lg text-neutral-300 max-w-2xl text-center mx-auto">
            {t('subtitle')}
            </p>
            <div className="flex justify-center">
            <a href="https://api.whatsapp.com/send?phone=5511917673677&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20a%20H%20atuaria%20no%20meu%20neg%C3%B3cio!" className="px-8 py-3 bg-[#EDFF8B] font-semibold text-black rounded-full hover:opacity-80 transition-opacity inline-block">
                {t('cta')}
            </a>
            </div>
        </div>
        </WavyBackground>
    </div>
  );
}
