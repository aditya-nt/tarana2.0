import { darkTheme, dreamTheme, lightTheme } from '@/styles/globalStyles';
import React, { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

export const themes = {
  day: 'day',
  night: 'night',
  dream: 'dream',
} as const;

type Theme = (typeof themes)[keyof typeof themes];

export interface ThemeContextType {
  theme: Theme;
  themeStyle: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes.day);

  const themeStyle = useMemo(() => {
    switch (theme) {
      case themes.day:
        return lightTheme;
      case themes.night:
        return darkTheme;
      case themes.dream:
        return dreamTheme;
      default:
        return lightTheme;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.day ? themes.night : prevTheme === themes.night ? themes.dream : themes.day,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyle }}>
      <SCThemeProvider theme={themeStyle}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
