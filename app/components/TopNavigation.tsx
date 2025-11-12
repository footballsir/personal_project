'use client';

import { useRouter } from 'next/navigation';
import OutlinedButton from '@/app/components/OutlinedButton';

interface TopNavigationProps {
  title?: string;
}

/**
 * Lightweight top navigation with a back button and centered title
 * Sticks to the top of the viewport for project detail pages
 */
export default function TopNavigation({ title }: TopNavigationProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <nav
      className="z-50"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        paddingTop: '8px',
        paddingBottom: '8px',
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
        <OutlinedButton icon="/images/icon_left.svg" text="" onClick={handleBack} />
        
        {/* Mobile warning message - temporarily hidden */}
        {false && (
        <div
          className="mobile-warning hidden max-[960px]:block"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '0 16px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            border: '0.5px solid rgba(255, 255, 255, 0.6)',
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 0.5px 1px rgba(255, 255, 255, 0.8)',
            fontFamily: 'Ginto Copilot, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.4',
            color: '#272320',
            letterSpacing: '0',
            whiteSpace: 'nowrap'
          }}
        >
          This site doesn&apos;t support mobile, view on larger screen
        </div>
        )}
        
        <div style={{ width: '40px' }} /> {/* Spacer for symmetry */}
      </div>
    </nav>
  );
}
