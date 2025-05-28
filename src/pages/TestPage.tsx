import React from 'react';
import BottomNavigation from '../components/BottomNaviation/BottomNavigation';
import { useColorTheme } from '../hooks/useColorTheme';

const TestPage: React.FC = () => {
  const { theme, colors } = useColorTheme();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        minWidth: '100vw',
        boxSizing: 'border-box',
        backgroundColor: colors.background
      }}
    >
      {/* Add your content here */}
      <h1 style={{ color: colors.text }}>Test Page</h1>
      <p style={{ color: colors.text }}>This page is positioned top left and takes up the full screen.</p>
      <BottomNavigation/>
    </div>
  );
};

export default TestPage;