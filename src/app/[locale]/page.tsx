"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
// import { SpotlightNewDemo } from "@/components/demo/spotlightDemo";
import { WavyBackgroundDemo } from "@/components/demo/wavyBackDemo";
import { FeaturesSectionDemo } from "@/components/demo/featuresDemo";
// import { MarqueeDemo } from "@/components/demo/marqueeDemo";
import { TestimonialsDemo } from "@/components/demo/testimonialsDemo";
import SavDemo from "@/components/demo/savDemo";
import Header from "@/components/demo/navbar"
import Footer from "@/components/demo/footer";
import FaqDemo from "@/components/demo/faqDemo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MarqueeDemo } from "@/components/demo/marqueeDemo";

// Custom fade-in component
const FadeInSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <WavyBackgroundDemo />
      </motion.div>

      {/* Marquee Clients */}
      <div> <MarqueeDemo /> </div>

      {/* Features Section */}
      <section id="sections" className="mt-[300px] bg-black text-white">
        {/* Preview */}
        <FadeInSection>
          <div className="max-w-6xl mx-auto px-4 mb-16">
            <div>
              <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">
                {t('solutions.title')}
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 md:mb-0 text-[#EDFF8B]">
                  {t('solutions.heading')}
                </h2>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {t('solutions.description')}
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        {/* Features */}
        <FadeInSection delay={0.2} className="mt-[100px] max-w-7xl mx-auto">
          <FeaturesSectionDemo />
        </FadeInSection>
      </section>

      {/* SAV */}
      <FadeInSection delay={0.1}>
        <SavDemo />
      </FadeInSection>

      {/* Como Atuamos */}
      <section id="aboutus" className="py-24 bg-black text-white mx-auto px-4">
        <FadeInSection>
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">{t('howWeWork.title')}</h3>
            <p className="text-4xl font-bold mb-6 md:mb-0 text-[#EDFF8B]">
              {t('howWeWork.heading')}
            </p>
            <div className="w-16 h-1 bg-[#EDFF8B] mt-8"></div>
          </div>
        </FadeInSection>
        
        <div className="max-w-6xl mx-auto">
          {/* Outsourcing */}
          <FadeInSection delay={0.2}>
            <div className="bg-black/30 rounded-2xl border border-neutral-800 hover:border-[#EDFF8B]/30 transition-all duration-300 shadow-lg backdrop-blur-sm group overflow-hidden mb-16">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4 relative flex items-center justify-center p-0 bg-[#EDFF8B]/5 overflow-hidden">
                  <Image
                    src="/outsourcing.jpg"
                    alt="Logo H"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="lg:w-3/4 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#EDFF8B]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EDFF8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EDFF8B] group-hover:translate-x-1 transition-transform">{t('howWeWork.outsourcing.title')}</h3>
                  </div>
                  
                  <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                    {t('howWeWork.outsourcing.description')}
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <Link 
                      href="/como-atuamos" 
                      className="inline-flex items-center rounded-full px-6 py-3 bg-transparent border-2 border-[#EDFF8B] text-[#EDFF8B] font-semibold hover:bg-[#EDFF8B] hover:text-black transition-all duration-300 group-hover:scale-105"
                    >
                      {t('howWeWork.outsourcing.learnMore')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
      
          {/* Projetos Sob Medida */}
          <FadeInSection delay={0.3}>
            <div className="bg-black/30 rounded-2xl border border-neutral-800 hover:border-[#EDFF8B]/30 transition-all duration-300 shadow-lg backdrop-blur-sm group overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/4 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#EDFF8B]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#EDFF8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#EDFF8B] group-hover:translate-x-1 transition-transform">{t('howWeWork.customProjects.title')}</h3>
                  </div>
                  
                  <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                    {t('howWeWork.customProjects.description')}
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <Link 
                      href="/como-atuamos" 
                      className="inline-flex items-center rounded-full px-6 py-3 bg-transparent border-2 border-[#EDFF8B] text-[#EDFF8B] font-semibold hover:bg-[#EDFF8B] hover:text-black transition-all duration-300 group-hover:scale-105"
                    >
                      {t('howWeWork.customProjects.learnMore')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/4 relative flex items-center justify-center p-0 bg-[#EDFF8B]/5 overflow-hidden">
                  <Image
                    src="/sobmedida.jpg"
                    alt="Logo H"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

    {/* FAQ Section */}
    <section id="faq" className="py-20 bg-black text-white mx-auto px-4">
      <FadeInSection>
        <FaqDemo />
      </FadeInSection>
    </section>

    {/* Depoimentos */}
    <section id="aboutus" className="py-24 bg-black text-white mx-auto px-4">
      <FadeInSection>
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="inline-block font-bold mb-10 text-[#EDFF8B] rounded-full border-2 border-[#EDFF8B] px-8 py-3">{t('testimonials.title')}</h3>
          <p className="text-4xl font-bold mb-6 md:mb-0 text-[#EDFF8B]">
            {t('testimonials.heading')}
          </p>
          <div className="w-16 h-1 bg-[#EDFF8B] mt-8"></div>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div>
          <TestimonialsDemo />
        </div>
      </FadeInSection>
    </section>

    {/* Final CTA Section */}
    <FadeInSection delay={0.1}>
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-black to-black/70 border border-[#EDFF8B]/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#EDFF8B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#EDFF8B]/5 blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#EDFF8B]/5 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t('cta.heading')} <span className="text-[#EDFF8B]">{locale === 'pt' ? 'soluções' : 'solutions'}</span>
              </h2>
              
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-12">
                {t('cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <Link 
                  href="https://cal.com/hperformance-gamirl/45min" 
                  className="px-8 py-4 bg-[#EDFF8B] text-black font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#EDFF8B]/20 transition-all duration-300 text-lg min-w-[200px]"
                >
                  {t('cta.hireUs')}
                </Link>
                
                <Link 
                  href="#solutions" 
                  className="px-8 py-4 bg-transparent border-2 border-[#EDFF8B] text-[#EDFF8B] font-bold rounded-full hover:bg-[#EDFF8B]/10 hover:scale-105 transition-all duration-300 text-lg min-w-[200px]"
                >
                  {t('cta.ourSolutions')}
                </Link>
              </div>
            </div>
            
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#EDFF8B] opacity-30"></div>
            <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-[#EDFF8B] opacity-30"></div>
          </div>
        </div>
      </section>
    </FadeInSection>

    {/* Footer */}
    <Footer />
    </div>
  );
} 