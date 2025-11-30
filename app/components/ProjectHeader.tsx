import Image from 'next/image';

interface ProjectHeaderProps {
  title: string;
  description: string;
  titleColor?: string;
  showSticker?: boolean;
}

/**
 * Reusable project header component with clouds decoration and hero section
 * Used across all project detail pages
 */
export default function ProjectHeader({ 
  title, 
  description, 
  titleColor = '#33607D',
  showSticker = true
}: ProjectHeaderProps) {
  return (
    <>
      {showSticker && (
        <div
          className="absolute w-[480px] h-[480px] z-0 transition-all duration-300 ease-out opacity-100 transform"
          style={{ right: '-240px', top: '-240px' }}
        >
          <Image
            src="/images/sticker2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Hero section - Title + Description */}
      <section
        className="flex flex-col items-center"
        style={{
          marginTop: '120px',
          marginBottom: '120px',
          width: '100%',
          position: 'relative',
          zIndex: 20
        }}
      >
        <div className="flex flex-col items-center max-w-[720px]">
          <h1 
            style={{
              fontFamily: 'Ginto Copilot Nord, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '1.26em',
              letterSpacing: '-0.02em',
              color: titleColor,
              textAlign: 'center',
              margin: 0,
              marginBottom: '24px'
            }}
          >
            {title}
          </h1>

          <p className="text-base" style={{ textAlign: 'left' }}>
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
