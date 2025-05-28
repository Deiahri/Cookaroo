import { type CSSProperties, type ButtonHTMLAttributes } from 'react';
import { useColorTheme } from '../../hooks/useColorTheme';
import { Theme } from '../../utils/globals';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  style?: CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ style, children, ...rest }) => {
  const { theme } = useColorTheme();

  const isLightTheme = (theme == 'light');
  const color = isLightTheme ? '#fff' : Theme.orange;
  const backgroundColor = isLightTheme ? Theme.orange : 'transparent';
  const border = isLightTheme ? `2px solid ${Theme.orange}` : `2px solid ${Theme.orange}`;

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

export default Button;