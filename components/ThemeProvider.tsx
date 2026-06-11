'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeKey = 'warm' | 'dark' | 'tech';

export const THEMES: Record<ThemeKey, string> = {
  warm: 'Warm Editorial',
  dark: 'Dark Scholar',
  tech: 'Clean Technical',
};

interface ThemeContextValue {
  theme: ThemeKey;
  fontSize: number;
  setTheme: (t: ThemeKey) => void;
  setFontSize: (s: number) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  fontSize: 17,
  setTheme: () => {},
  setFontSize: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('dark');
  const [fontSize, setFontSizeState] = useState(17);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (() => {
      try { return JSON.parse(localStorage.getItem('io_tweaks') || '{}'); }
      catch { return {}; }
    })();
    if (saved.theme) setThemeState(saved.theme);
    if (saved.fontSize) setFontSizeState(saved.fontSize);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    
    let scale = 1;
    if (fontSize === 15) scale = 0.9;
    if (fontSize === 19) scale = 1.1;
    document.documentElement.style.setProperty('--font-scale', scale.toString());
    
    localStorage.setItem('io_tweaks', JSON.stringify({ theme, fontSize }));
  }, [theme, fontSize, mounted]);

  const setTheme = (t: ThemeKey) => setThemeState(t);
  const setFontSize = (s: number) => setFontSizeState(s);

  return (
    <ThemeContext.Provider value={{ theme, fontSize, setTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
