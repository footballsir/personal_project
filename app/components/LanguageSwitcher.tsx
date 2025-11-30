'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
      className="fixed top-8 right-8 z-50 px-4 py-2 rounded-full backdrop-blur-md bg-white/40 border border-white/60 shadow-sm hover:bg-white/60 transition-all text-sm font-medium text-[#272320]"
      style={{
        fontFamily: 'Ginto Copilot, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
      }}
    >
      {locale === 'en' ? '中文' : 'English'}
    </button>
  );
}
