import Image from 'next/image';

interface OutlinedButtonProps {
  icon?: string;
  text: string;
  onClick?: () => void;
  size?: number;
}

/**
 * Outlined button variant used for lightweight actions (e.g., Back button in project pages)
 */
export default function OutlinedButton({ icon, text, onClick, size =40 }: OutlinedButtonProps) {
  const height = `${size}px`;

  return (
    <button
      type="button"
      className="flex flex-row items-center justify-center transition-colors"
      style={{
        padding: '0 16px',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        backgroundColor: 'transparent',
        color: '#272320',
        height,
        minHeight: height,
        width: 'fit-content',
        cursor: 'pointer'
      }}
      onClick={onClick}
      onMouseEnter={(event) => {
        event.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          style={{ marginRight: '8px' }}
        />
      )}
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
    </button>
  );
}
