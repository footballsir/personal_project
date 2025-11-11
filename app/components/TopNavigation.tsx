'use client';

import { useRouter } from 'next/navigation';
import OutlinedButton from '@/app/components/OutlinedButton';

/**
 * Lightweight top navigation with a single back button
 * Sticks to the top of the viewport for project detail pages
 */
export default function TopNavigation() {
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
        background: 'linear-gradient(180deg, rgba(230, 239, 245, 1) 0%, rgba(230, 239, 245, 1) 100%)'
      }}
    >
      <div
        className="mx-auto"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          maxWidth: '1680px',
          paddingLeft: '60px',
          paddingRight: '60px'
        }}
      >
        <OutlinedButton text="Back" onClick={handleBack} />
      </div>
    </nav>
  );
}
