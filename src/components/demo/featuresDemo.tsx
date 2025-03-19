import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
    BarChart3, 
    LayoutDashboard, 
    Brain, 
    TrendingUp, 
    Code2, 
    Zap
  } from 'lucide-react';

export function FeaturesSectionDemo() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const features = [
    {
        id: 'analytics',
        title: 'Analytics',
        description: 'Auxiliando sua empresa a gerar insights precisos para melhor escala de projetos e operações',
        icon: <BarChart3 className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'dashboards',
        title: 'Dashboards & BI',
        description: 'Criação de Dashboards personalizados para uma visão mais ampla e intuitiva ajudando em tomadas de decisões em diversas áreas.',
        icon: <LayoutDashboard className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'ai',
        title: 'AI & Automation',
        description: 'Focado em inteligência artificial para otimização de processos, chatbots, e automações inteligentes.',
        icon: <Brain className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'marketing',
        title: 'Data Driven Marketing',
        description: 'Soluçoes em inbound marketing Seo, Estratégias de marketing baseadas em dados para performance e crescimento.',
        icon: <TrendingUp className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'software',
        title: 'Software Solutions',
        description: 'Desenvolvemos soluções que auxiliam em coleta de dados para melhor eficiencia operacional, e impulsionar a escalabilidade do seu negócio.',
        icon: <Code2 className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'optimization',
        title: 'Strategy Optimization',
        description: 'Desenvolvemos estratégias personalizadas para escalar vendas otimizar funis maximizar conversões com base em inteligência de dados e automação.',
        icon: <Zap className="w-6 h-6 text-[#EDFF8B]" />
      },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature 
          key={feature.id} 
          {...feature} 
          index={index}
          isHovered={hoveredId === feature.id}
          onMouseEnter={() => setHoveredId(feature.id)}
          onMouseLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800 cursor-pointer",
        (index === 0 || index === 3) && "lg:border-l border-neutral-800",
        index < 3 && "lg:border-b border-neutral-800"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      
      <div className="flex flex-col justify-between h-full px-10">
        {/* Top section */}
        <div>
          <div className="mb-4 relative z-10 text-neutral-400">
            {icon}
          </div>
          <div className="text-lg font-bold mb-2 relative z-10">
            <div className="absolute left-[-10px] inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#EDFF8B] transition-all duration-200 origin-center" />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 group-hover/feature:text-[#EDFF8B]">
              {title}
            </span>
          </div>
        </div>
        
        {/* Bottom section with hover effect */}
        <div className="relative min-h-[80px] mt-4 z-10">
          {/* "Saiba mais" text (shown when not hovered) */}
          <div 
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-[#EDFF8B] text-sm font-semibold">
              Saiba mais →
            </p>
          </div>
          
          {/* Description (shown when hovered) */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-neutral-300 text-sm mb-4">
              {description}
            </p>
            <div className="mt-3 w-8 h-1 bg-[#EDFF8B]" />
          </div>
        </div>
      </div>
    </div>
  );
};
