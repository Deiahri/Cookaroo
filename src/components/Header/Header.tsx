import { type CSSProperties } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  style?: CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, style }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    navigate(-1);
  };

  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '8vh',
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        position: 'relative',
        ...style,
      }}
    >
      <button
        onClick={handleBack}
        style={{
          background: 'none',
          border: 'none',
          padding: '0 16px',
          cursor: onBack ? 'pointer' : 'default',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: '#333',
          fontSize: '1.5rem',
        }}
        aria-label="Back"
      >
        <FaChevronLeft />
      </button>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#222',
          }}
        >
          {title}
        </span>
      </div>
    </header>
  );
};

export default Header;