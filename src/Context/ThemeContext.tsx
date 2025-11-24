import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('synco-theme');
    console.log('Log 1 - Tema salvo:', savedTheme);
    
    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    console.log('Log 2 - Aplicando classe:', theme);

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('synco-theme', theme);
    

    console.log('Log 3 - Classes atuais no HTML:', root.classList.toString());

  }, [theme]);

  const toggleTheme = () => {
    console.log('Log 4 - Botão clicado! Trocando tema...');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}