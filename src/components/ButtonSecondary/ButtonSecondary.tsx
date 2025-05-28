import { type CSSProperties, type ButtonHTMLAttributes } from 'react';
import { useColorTheme } from '../../hooks/useColorTheme';
import { Theme } from '../../utils/globals';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  style?: CSSProperties;
};

const ButtonSecondary: React.FC<ButtonProps> = ({ style, children, ...rest }) => {
  const { theme } = useColorTheme();

  const isLightTheme = (theme == 'light');
  const color = isLightTheme ? '#fff' : '#ddd';
  const backgroundColor = isLightTheme ? Theme.darkGrey : '#0000';
  const border = isLightTheme ? `2px solid ${Theme.darkGrey}` : `2px solid #ddd`;

  const defaultStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'color 0.5s, border 0.5s, background-color 0.5s',
    ...style,
  };

  return (
    <button style={defaultStyle} {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;