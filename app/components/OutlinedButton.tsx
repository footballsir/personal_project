import Image from 'next/image';

interface OutlinedButtonProps {
  icon?: string;
  text: string;
  onClick?: () => void;
  size?: number;
}

/**
 * Outlined button variant with Liquid Glass effect (macOS 26 style)
 */
export default function OutlinedButton({ icon, text, onClick, size =40 }: OutlinedButtonProps) {
  const height = `${size}px`;

  return (
    <button
      type="button"
      className="flex flex-row items-center justify-center transition-all duration-200"
      style={{
        padding: '0 8px',
        borderRadius: '20px',
        border: '0.5px solid rgba(255, 255, 255, 0.6)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 0.5px 1px rgba(255, 255, 255, 0.8)',
        color: '#272320',
        height,
        minHeight: height,
        width: 'fit-content',
        cursor: 'pointer'
      }}
      onClick={onClick}
      onMouseEnter={(event) => {
        event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        // event.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        // event.currentTarget.style.transform = 'scale(1)';
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
