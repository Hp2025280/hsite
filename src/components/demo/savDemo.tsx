"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BarChart3, Zap, LineChart, TrendingUp } from "lucide-react";

export default function SavDemo() {
  const features = [
    { 
      id: 1, 
      title: "Análise Inteligente de Conversões",
      description: "O SAV transforma dados brutos de interações no WhatsApp em insights acionáveis para otimizar processos.",
      icon: <BarChart3 className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 2, 
      title: "Automação e Eficiência",
      description: "Coleta automatizada e análise estratégica das conversas, reduzindo custos operacionais.",
      icon: <Zap className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 3, 
      title: "Decisão Baseada em Dados",
      description: "Relatórios visuais e gráficos para maximizar conversões e otimizar processos.",
      icon: <LineChart className="w-8 h-8 text-[#EDFF8B]" />
    },
    { 
      id: 4, 
      title: "Oportunidades de Crescimento",
      description: "Identifica tendências de mercado para estratégias mais assertivas.",
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
            SAV - Sistema de Análise de Vendas
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Transforme suas interações em insights e potencialize os resultados do seu negócio
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
        <div className="mt-12">
          <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/sav2.png"
                fill
                className="object-cover object-center"
                alt="Dashboard do Sistema de Análise de Vendas"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link 
              href="https://api.whatsapp.com/send?phone=5511917673677&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20a%20H%20atuaria%20no%20meu%20neg%C3%B3cio!" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#EDFF8B] text-[#EDFF8B] font-semibold rounded-full hover:bg-[#EDFF8B] hover:text-black transition-all duration-300"
            >
              Agendar demonstração gratuita
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}