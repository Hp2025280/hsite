"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('features');
  
  const features = [
    {
        id: 'analytics',
        title: t('analytics.title'),
        description: t('analytics.description'),
        learnMore: t('analytics.learnMore'),
        icon: <BarChart3 className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'dashboards',
        title: t('dashboards.title'),
        description: t('dashboards.description'),
        learnMore: t('dashboards.learnMore'),
        icon: <LayoutDashboard className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'ai',
        title: t('ai.title'),
        description: t('ai.description'),
        learnMore: t('ai.learnMore'),
        icon: <Brain className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'marketing',
        title: t('marketing.title'),
        description: t('marketing.description'),
        learnMore: t('marketing.learnMore'),
        icon: <TrendingUp className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'software',
        title: t('software.title'),
        description: t('software.description'),
        learnMore: t('software.learnMore'),
        icon: <Code2 className="w-6 h-6 text-[#EDFF8B]" />,
      },
      {
        id: 'optimization',
        title: t('optimization.title'),
        description: t('optimization.description'),
        learnMore: t('optimization.learnMore'),
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
  learnMore,
  icon,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  title: string;
  description: string;
  learnMore: string;
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
              {learnMore}
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
