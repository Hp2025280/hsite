"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';
import { BarChart3, Zap, LineChart, TrendingUp } from "lucide-react";

export default function SavDemo() {
  const t = useTranslations('sav');
  
  const features = [
    { 
      id: 1, 
      title: t('feature1.title'),
      description: t('feature1.description'),
      icon: <BarChart3 className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 2, 
      title: t('feature2.title'),
      description: t('feature2.description'),
      icon: <Zap className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 3, 
      title: t('feature3.title'),
      description: t('feature3.description'),
      icon: <LineChart className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 4, 
      title: t('feature4.title'),
      description: t('feature4.description'),
      icon: <TrendingUp className="w-8 h-8 text-[#EDFF8B]" />
    },
  ];

  return (
    <section className="py-20 bg-black text-white mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          {/* <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">SAV</h3> */}
          <h2 className="text-4xl font-bold mb-6 text-[#EDFF8B]">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#EDFF8B] mx-auto mt-8"></div>
        </div>

        {/* Features Row (responsive) */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="flex flex-col items-center text-center w-64 p-6 rounded-sm border-b border-[#EDFF8B]/30 bg-black/30 "
            >
              <div className="rounded-full bg-[#EDFF8B]/10 p-4 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-[#EDFF8B] mb-2">
                {feature.title}
              </h4>
              <p className="text-neutral-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="rounded-2xl overflow-hidden border border-[#EDFF8B]/20 shadow-2xl bg-gradient-to-br from-black/40 to-[#EDFF8B]/5">
              <Image
                src="/sav.png"
                alt="SAV Dashboard"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}