"use client";

import { Meteors } from "@/components/magicui/meteors";
import { useTranslations } from 'next-intl';
import Link from "next/link";

export function MeteorDemo() {
  const t = useTranslations('meteor');
  
  return (
    <div className="relative flex w-full h-[500px] flex-col items-center justify-center overflow-hidden bg-black">
      <Meteors number={30} />
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {t('title')}
          </h1>
          
          <p className="text-lg mb-10 text-neutral-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="https://api.whatsapp.com/send?phone=5511917673677&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20a%20H%20atuaria%20no%20meu%20neg%C3%B3cio!" 
              className="px-8 py-4 bg-[#EDFF8B] text-black font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#EDFF8B]/20 transition-all duration-300"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
    </div>
  );
}
