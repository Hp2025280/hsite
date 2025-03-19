"use client";

import { JSX } from "react";
import { useState } from "react";

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
  return (
    <div className="max-w-6xl mx-auto">
        <div className="mx-auto mb-16">
          <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">Perguntas Frequentes</h3>
          <p className="text-4xl font-bold mb-6 md:mb-0 text-[#EDFF8B]">
            Tire suas dúvidas sobre como trabalhamos
          </p>
          <div className="w-16 h-1 bg-[#EDFF8B] mt-8"></div>
        </div>
            
        <div className="space-y-6">
          {[
            {
              question: "Como funciona o diagnóstico H?",
              answer: "A partir do momento que o cliente se interessa em ser nosso parceiro, fazemos um diagnóstico gratuito da situação da empresa e mostramos como o ecossistema da H pode transformar seu negócio."
            },
            {
              question: "Quais são os valores de investimento?",
              answer: "Para saber o valor de investimento do seu projeto, necessitamos conhecer seu negócio a fundo, assim montamos uma operação com 100% de eficácia. Entre em contato conosco e agende uma reunião."
            },
            {
              question: "Como acompanho meus resultados?",
              answer: "Você terá contato direto e diário com uma equipe em um grupo no WhatsApp e receberá relatórios semanais e mensais sobre como sua operação está andando, tanto por WhatsApp como outras ferramentas."
            }
          ].map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
    </div>
  )};