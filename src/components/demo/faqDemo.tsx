"use client";

import { JSX } from "react";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-white hover:text-[#EDFF8B] transition-colors duration-300">
          {question}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#EDFF8B]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6">
          <p className="text-neutral-300 font-semibold">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqDemo(): JSX.Element {
  const t = useTranslations('faq');
  
  const faqItems = [
    {
      question: t('question1'),
      answer: t('answer1')
    },
    {
      question: t('question2'),
      answer: t('answer2')
    },
    {
      question: t('question3'),
      answer: t('answer3')
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
        <div className="mx-auto mb-16">
          <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">{t('title')}</h3>
          <p className="text-4xl font-bold mb-6 md:mb-0 text-[#EDFF8B]">
            {t('subtitle')}
          </p>
          <div className="w-16 h-1 bg-[#EDFF8B] mt-8"></div>
        </div>
            
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
    </div>
  )}