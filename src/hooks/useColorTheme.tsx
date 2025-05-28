import { createContext, useContext, useState, type ReactNode } from "react";

type ColorTheme = "light" | "dark";

interface ThemeColors {
  background: string;
  text: string;
  textSecondary: string;
  // Add more color properties as needed
}

const themeColors: Record<ColorTheme, ThemeColors> = {
  light: {
    background: "#f4f4f4",
    text: "#111",
    textSecondary: '#555'
  },
  dark: {
    background: "#1E1E1E",
    text: "#ffffff",
    textSecondary: '#ddd'
  },
};

interface ColorThemeContextProps {
  theme: ColorTheme;
  colors: ThemeColors;
  setTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
  loading: boolean,
  setLoading: (v: boolean) => void;
}

const ColorThemeContext = createContext<ColorThemeContextProps | undefined>(
  undefined
);

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ColorTheme>('light');
  const [loading, setLoading] = useState<boolean>(false);

  const setTheme = (newTheme: ColorTheme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = themeColors[theme];

  return (
    <ColorThemeContext.Provider value={{ theme, colors, setTheme, toggleTheme, loading, setLoading }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
};
