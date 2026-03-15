"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');

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
            <Link href="/" className="hover:opacity-80 transition-opacity">{t('solutions')}</Link>
            <Link href="/how-we-work" className="hover:opacity-80 transition-opacity">{t('aboutUs')}</Link>
            <a href="#cases" className="hover:opacity-80 transition-opacity">Cases</a>
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
            <a href="#solutions" className="text-white font-semibold hover:opacity-80 transition-opacity">{t('solutions')}</a>
            <Link href="/how-we-work" className="text-white font-semibold hover:opacity-80 transition-opacity">{t('aboutUs')}</Link>
            <a href="#cases" className="text-white font-semibold hover:opacity-80 transition-opacity">Cases</a>

            <a href="https://cal.com/hperformance-gamirl/45min" className="px-3 py-3 bg-[#EDFF8B] font-semibold text-black rounded-full hover:opacity-80 transition-opacity text-center mt-4">
              {t('diagnosis')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
