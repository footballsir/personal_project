import Image from 'next/image';

interface ProjectHeaderProps {
  title: string;
  description: string;
}

/**
 * Reusable project header component with clouds decoration and hero section
 * Used across all project detail pages
 */
export default function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <>
      <div
        className="absolute transition-transform duration-300 hover:scale-[1.2]"
        style={{
          width: '240px',
          height: '240px',
          zIndex: 10,
          pointerEvents: 'auto',
          right: 0,
          top: 0
        }}
      >
        <Image
          src="/images/sticker_proejct_header.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Clouds decoration with hero section overlay */}
      <div style={{ position: 'relative', marginBottom: '48px' }}>
        <Image
          src="/images/clouds.svg"
          alt=""
          width={1200}
          height={600}
          className="mx-auto"
          style={{ position: 'relative', zIndex: 5 }}
        />

        {/* Hero section - Title + Description - positioned over clouds */}
        <section
          className="flex flex-col items-center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            zIndex: 20
          }}
        >
          <div className="flex flex-col items-center max-w-[720px]">
            <h1
              style={{
                fontFamily: 'Ginto Copilot Nord, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.26em',
                letterSpacing: '-0.02em',
                color: '#33607D',
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
      </div>
    </>
  );
}
