'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Locale } from './locales';

interface LanguageContextType {
  locale: Locale;
  t: typeof dictionary['en'];
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'zh')) {
      setLocale(savedLocale);
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Prevent hydration mismatch by rendering children only after mount, 
  // or just accept that the initial render might be 'en' and then switch.
  // For a portfolio, it's better to show content immediately.
  // We'll just return the provider.

  return (
    <LanguageContext.Provider value={{ locale, t: dictionary[locale], setLocale: handleSetLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
