'use client';

interface ProjectTagProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
}

/**
 * Tag/Badge component for project metadata
 * Reusable across project pages
 */
export default function ProjectTag({ 
  text, 
  backgroundColor = '#B3D0EB',
  textColor = '#0E4174',
  borderRadius = '99px'
}: ProjectTagProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        padding: '24px 36px',
        backgroundColor,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span
        style={{
          fontFamily: 'Ginto Copilot, sans-serif',
          fontWeight: 650,
          fontSize: '20px',
          lineHeight: '1.3em',
          letterSpacing: '-0.01em',
          color: textColor,
          textAlign: 'center',
          width: '200px'
        }}
      >
        {text}
      </span>
    </div>
  );
}
