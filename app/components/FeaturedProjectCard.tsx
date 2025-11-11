'use client';

import Image from 'next/image';
import Button from './Button';

interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  color: string;
}

interface FeaturedProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}

export default function FeaturedProjectCard({ project, onClick }: FeaturedProjectCardProps) {
  const isCopilotLabs = project.title === 'Copilot Labs';
  
  // Special layout for Copilot labs with overflow
  if (isCopilotLabs) {
    return (
      <div
        className="cursor-pointer relative w-full group"
        style={{ 
          maxWidth: '600px',
          marginTop: '-48px',
          paddingTop: '48px' // Add space for overflow
        }}
        onClick={onClick}
      >
        <div
          className="relative w-full aspect-square"
          style={{ 
            backgroundColor: project.color,
            borderRadius: 'var(--radius-lg)',
            overflow: 'visible'
          }}
        >
          {/* Image container - extends above card */}
          {project.cover && (
            <div 
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 'calc(70% + 48px)',
                width: '100%',
                zIndex: 1
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transform: 'translateY(-48px)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)'
              }}>
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  sizes="460px"
                />
              </div>
            </div>
          )}
          
          {/* Content container - positioned at bottom */}
          <div 
            className="absolute left-0 right-0 flex flex-col"
            style={{
              bottom: '32px',
              paddingLeft: '32px',
              paddingRight: '28px',
              zIndex: 2
            }}
          >
            {/* Description text */}
            <p 
              className="text-[#4B2414]"
              style={{
                fontFamily: 'Ginto Copilot, sans-serif',
                fontWeight: 400,
                fontSize: '17px',
                lineHeight: '1.529em',
                textAlign: 'left',
                marginBottom: '8px'
              }}
            >
              {project.summary}
            </p>
            
            {/* Title */}
            <h3 
              className="text-[#4B2414]"
              style={{
                fontFamily: 'Ginto Copilot, sans-serif',
                fontWeight: 500,
                fontSize: '28px',
                lineHeight: '40px',
                letterSpacing: '-0.01em',
                textAlign: 'left',
                marginTop: 0,
                marginBottom: '16px'
              }}
            >
              {project.title}
            </h3>
            
            {/* Button - Strong CTA, Size 48 */}
            <Button 
              icon="/images/play-icon.svg"
              text="View now"
            />
          </div>
        </div>
      </div>
    );
  }
  
  // Normal layout for other cards
  return (
    <div
      className="card-base no-hover cursor-pointer relative w-full aspect-square group overflow-hidden"
      style={{ 
        backgroundColor: project.color,
        maxWidth: '600px'
      }}
      onClick={onClick}
    >
      {/* Image at top - absolute positioning, 70% height, full width with gradient mask */}
      {project.cover && (
        <div 
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '0',
            height: '70%',
            width: '100%',
            overflow: 'hidden',
            borderTopLeftRadius: 'var(--radius-lg)',
            borderTopRightRadius: 'var(--radius-lg)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)',
            zIndex: 1
          }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="460px"
          />
        </div>
      )}
      
      {/* Content container - positioned at bottom */}
      <div 
        className="absolute left-0 right-0 flex flex-col"
        style={{
          bottom: '32px',
          paddingLeft: '32px',
          paddingRight: '28px'
        }}
      >
          {/* Description text */}
          <p 
            className="text-[#4B2414]"
            style={{
              fontFamily: 'Ginto Copilot, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '1.529em',
              textAlign: 'left',
              marginBottom: '8px'
            }}
          >
            {project.summary}
          </p>
          
          {/* Title */}
          <h3 
            className="text-[#4B2414]"
            style={{
              fontFamily: 'Ginto Copilot, sans-serif',
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '40px',
              letterSpacing: '-0.01em',
              textAlign: 'left',
              marginTop: 0,
              marginBottom: '16px'
            }}
          >
            {project.title}
          </h3>
          
          {/* Button - Strong CTA, Size 48 */}
          <Button 
            icon="/images/play-icon.svg"
            text="View now"
          />
      </div>
    </div>
  );
}
