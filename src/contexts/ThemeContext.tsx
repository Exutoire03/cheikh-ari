'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Vérifier que nous sommes côté client
    if (typeof window === 'undefined') return;
    
    // Récupérer le thème depuis localStorage ou utiliser la préférence système
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    
    // Appliquer le thème au document (sur l'élément <html>)
    const html = document.documentElement;
    // Supprimer toutes les classes de thème existantes
    html.classList.remove('dark', 'light');
    if (initialTheme === 'dark') {
      html.classList.add('dark');
    }
    console.log('Initial theme applied:', initialTheme, 'HTML classes:', html.className);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === 'undefined') return;
    
    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', theme);
    
    // Appliquer le thème au document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('toggleTheme called, current theme:', theme);
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      console.log('Switching theme from', prev, 'to', newTheme);
      // Appliquer immédiatement pour une réactivité instantanée
      if (typeof window !== 'undefined') {
        const html = document.documentElement;
        // Supprimer toutes les classes de thème existantes
        html.classList.remove('dark', 'light');
        if (newTheme === 'dark') {
          html.classList.add('dark');
          console.log('Added dark class to html, classes:', html.className);
        } else {
          console.log('Removed dark class from html, classes:', html.className);
        }
        localStorage.setItem('theme', newTheme);
      }
      return newTheme;
    });
  };

  // Toujours fournir le contexte, même avant le montage
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Retourner une valeur par défaut au lieu de lancer une erreur
    // Cela permet au composant de fonctionner lors du SSR
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
    };
  }
  return context;
}

