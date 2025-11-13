import Image from 'next/image';

/**
 * Loading component with animated gif
 * Used as fallback for Suspense boundaries
 */
export default function Loading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#E6EFF5'
      }}
    >
      <Image
        src="/images/loading.gif"
        alt="Loading..."
        width={48}
        height={48}
        unoptimized
      />
    </div>
  );
}
