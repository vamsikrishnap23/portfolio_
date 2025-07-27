import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeProviderContext = createContext({
  theme: 'dark',
  setTheme: (theme: 'dark' | 'light') => {},
});

export function ThemeProvider({ children, defaultTheme = 'dark', storageKey = 'vite-ui-theme' }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);