"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Header() {
  const { lang, toggle } = useTranslation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="https://www.leesle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading font-bold text-lg tracking-[0.25em] text-primary hover:text-gold transition-colors"
        >
          LEESLE
        </a>
        <button
          onClick={toggle}
          className="px-4 py-1.5 text-xs font-medium tracking-wider border border-gray-light rounded-full hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 uppercase"
        >
          {lang === "en" ? "한국어" : "English"}
        </button>
      </div>
      {/* Subtle bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-light to-transparent" />
    </header>
  );
}
