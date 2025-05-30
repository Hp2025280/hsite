"use client";

import { Instagram } from "lucide-react";
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('nav');
    const locale = useLocale();
    
    return (
    <footer className="bg-black text-white py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/logowhite.png"
              alt="Logo"
              width={100}
              height={25}
              className="hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a href="https://www.instagram.com/hperformancehub?igsh=NHlpejQ3OTNhcGY5" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">
              <Instagram />
            </a>
            <a href={`/${locale}#sections`} className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">{t('solutions')}</a>
            <a href={`/${locale}/como-atuamos`} className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">{t('aboutUs')}</a>
            <a href={`/${locale}#faq`} className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">{t('faq')}</a>
            <a href="https://api.whatsapp.com/send?phone=5511917673677&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20a%20H%20atuaria%20no%20meu%20neg%C3%B3cio!" className="text-neutral-300 hover:text-[#EDFF8B] transition-colors duration-300">{t('contact')}</a>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-6 pt-6 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} H. {locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
    );
}