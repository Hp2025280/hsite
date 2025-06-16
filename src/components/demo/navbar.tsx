"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <nav className="fixed w-full px-4 bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
        <Image
          src="/logowhite.png"
          alt="Logo"
          width={100}
          height={25}
          className="hover:opacity-80 transition-opacity"
        />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex space-x-5 text-white font-semibold">
            <a href={`/${locale}`} className="hover:opacity-80 transition-opacity">{t('solutions')}</a>
            <a href={`/${locale}/como-atuamos`} className="hover:opacity-80 transition-opacity">{t('aboutUs')}</a>
            <a href={`/${locale}#cases`} className="hover:opacity-80 transition-opacity">Cases</a>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => switchLocale('pt')}
              className={`px-2 py-1 text-sm font-medium rounded transition-all ${
                locale === 'pt' 
                  ? 'bg-[#EDFF8B] text-black' 
                  : 'text-white hover:text-[#EDFF8B]'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`px-2 py-1 text-sm font-medium rounded transition-all ${
                locale === 'en' 
                  ? 'bg-[#EDFF8B] text-black' 
                  : 'text-white hover:text-[#EDFF8B]'
              }`}
            >
              EN
            </button>
          </div>
          
          <a href="https://cal.com/hperformance-gamirl/45min" className="px-3 py-3 bg-[#EDFF8B] font-semibold text-black rounded-full hover:opacity-80 transition-opacity">
            {t('diagnosis')}
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent w-full py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href={`/${locale}#solutions`} className="text-white font-semibold hover:opacity-80 transition-opacity">{t('solutions')}</a>
            <a href={`/${locale}/como-atuamos`} className="text-white font-semibold hover:opacity-80 transition-opacity">{t('aboutUs')}</a>
            <a href={`/${locale}#cases`} className="text-white font-semibold hover:opacity-80 transition-opacity">Cases</a>
            
            {/* Mobile Language Switcher */}
            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => switchLocale('pt')}
                className={`px-3 py-2 text-sm font-medium rounded transition-all ${
                  locale === 'pt' 
                    ? 'bg-[#EDFF8B] text-black' 
                    : 'text-white hover:text-[#EDFF8B] border border-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-2 text-sm font-medium rounded transition-all ${
                  locale === 'en' 
                    ? 'bg-[#EDFF8B] text-black' 
                    : 'text-white hover:text-[#EDFF8B] border border-white'
                }`}
              >
                EN
              </button>
            </div>
            
            <a href="https://cal.com/hperformance-gamirl/45min" className="px-3 py-3 bg-[#EDFF8B] font-semibold text-black rounded-full hover:opacity-80 transition-opacity text-center mt-4">
              {t('diagnosis')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}