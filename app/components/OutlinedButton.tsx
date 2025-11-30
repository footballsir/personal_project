import Image from 'next/image';

interface OutlinedButtonProps {
  icon?: string;
  text: string;
  onClick?: () => void;
  size?: number;
  transparent?: boolean;
}

/**
 * Outlined button variant with Liquid Glass effect (macOS 26 style)
 */
export default function OutlinedButton({ icon, text, onClick, size = 40, transparent = false }: OutlinedButtonProps) {
  const height = `${size}px`;

  return (
    <button
      type="button"
      className="flex flex-row items-center justify-center transition-all duration-200"
      style={{
        padding: '0 8px',
        borderRadius: '20px',
        border: '0.5px solid rgba(255, 255, 255, 0.6)',
        backgroundColor: transparent ? 'transparent' : 'rgba(255, 255, 255, 0.4)',
        backdropFilter: transparent ? 'none' : 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(40px) saturate(180%)',
        boxShadow: transparent ? 'none' : '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 0.5px 1px rgba(255, 255, 255, 0.8)',
        color: '#272320',
        height,
        minHeight: height,
        width: 'fit-content',
        cursor: 'pointer'
      }}
      onClick={onClick}
      onMouseEnter={(event) => {
        if (!transparent) {
          event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        } else {
           event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      }}
      onMouseLeave={(event) => {
        if (!transparent) {
          event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        } else {
           event.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          style={{ marginRight: text ? '8px' : '0' }}
        />
      )}
      {text && (
        <span
          style={{
            fontFamily: 'Ginto Copilot, sans-serif',
            fontWeight: 400,
            fontSize: '17px',
            lineHeight: '1.529em',
            letterSpacing: '-0.01em'
          }}
        >
          {text}
        </span>
      )}
    </button>
  );
}
