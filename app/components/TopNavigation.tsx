'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import OutlinedButton from '@/app/components/OutlinedButton';
import { useLanguage } from '@/app/i18n/LanguageContext';

interface TopNavigationProps {
  title?: string;
  showBackButton?: boolean;
}

/**
 * Lightweight top navigation with a back button and centered title
 * Sticks to the top of the viewport for project detail pages
 */
export default function TopNavigation({ title, showBackButton = true }: TopNavigationProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { locale, setLocale } = useLanguage();

  const handleBack = () => {
    // Use startTransition to make navigation non-blocking
    // This ensures the button click is responsive even when the page is busy
    startTransition(() => {
      router.push('/');
    });
  };

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <nav
      className="z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
        pointerEvents: 'none',
        // backdropFilter: 'blur(20px)',
        // background: 'linear-gradient(180deg, rgba(230, 239, 245, 1) 0%, rgba(230, 239, 245, 1) 100%)'
      }}
    >
      <div
        className="mx-auto nav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1680px',
          paddingLeft: '60px',
          paddingRight: '60px',
          position: 'relative'
        }}
      >
        {/* Left: Back Button */}
        <div style={{ width: '100px', pointerEvents: 'auto' }}>
          {showBackButton && (
            <OutlinedButton
              icon="/images/icon_left.svg"
              text=""
              onClick={handleBack}
            />
          )}
        </div>

        {/* Center: Title - Hidden */}
        <div style={{ width: '0px' }}></div>

        {/* Right: Language Switcher */}
        <div style={{ width: '100px', display: 'flex', justifyContent: 'flex-end', pointerEvents: 'auto' }}>
          <OutlinedButton
            text={locale === 'en' ? '中文' : 'English'}
            onClick={toggleLanguage}
          />
        </div>
      </div>
    </nav>
  );
}
