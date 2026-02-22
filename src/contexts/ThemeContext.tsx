import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextDefinition'; // Import ThemeContext from its definition file

type Theme = 'dark' | 'light';

// ThemeContextType is now defined in ThemeContextDefinition.ts
// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
