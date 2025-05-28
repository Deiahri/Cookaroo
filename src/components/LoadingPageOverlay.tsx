import React from 'react';

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.2)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const spinnerStyle: React.CSSProperties = {
  width: '64px',
  height: '64px',
  border: '8px solid #ddd',
  borderTop: '8px solid #0070f3',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

const spinnerKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`;

const LoadingPageOverlay: React.FC = () => (
  <>
    <style>{spinnerKeyframes}</style>
    <div style={overlayStyle}>
      <div style={spinnerStyle} />
    </div>
  </>
);

export default LoadingPageOverlay;