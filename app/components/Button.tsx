import Image from 'next/image';

interface ButtonProps {
  icon?: string;
  text: string;
  onClick?: () => void;
  variant?: 'strong-cta';
  size?: 48;
}

export default function Button({ 
  icon, 
  text, 
  onClick,
  variant = 'strong-cta',
  size = 48 
}: ButtonProps) {
  return (
    <button 
      className="flex flex-row justify-center items-center transition-colors group"
      style={{
        padding: '0 12px',
        borderRadius: '12px',
        backgroundColor: '#272320',
        boxShadow: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px)',
        border: 'none',
        cursor: 'pointer',
        height: `${size}px`,
        minHeight: `${size}px`,
        width: 'fit-content'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#000000';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#272320';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = '#322D29';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = '#000000';
      }}
    >
      {/* Icon + Text container */}
      <div className="flex flex-row justify-center items-center">
        {/* Icon Left - 24x24 icon */}
        {icon && (
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            style={{ 
              flexShrink: 0,
              filter: 'brightness(0) saturate(100%) invert(91%) sepia(5%) saturate(435%) hue-rotate(336deg) brightness(95%) contrast(88%)'
            }}
            className="group-active:opacity-70"
          />
        )}
        
        {/* Text with padding */}
        <div className="flex flex-row justify-center items-center" style={{ padding: '0 6px' }}>
          <span 
            className="group-active:opacity-70"
            style={{
              fontFamily: 'Ginto Copilot, sans-serif',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: '1.529em',
              color: '#E2DDD9',
              transition: 'color 0.2s ease'
            }}
          >
            {text}
          </span>
        </div>
      </div>
    </button>
  );
}
