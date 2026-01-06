'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700">
        <span className="inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-800 translate-x-1" />
      </div>
    );
  }

  const handleToggle = () => {
    console.log('Toggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300
                 bg-gray-700 dark:bg-gray-300
                 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                 focus:ring-offset-gray-950 dark:focus:ring-offset-white"
      aria-label="Toggle theme"
      type="button"
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-800
                    transition-transform duration-300 ease-in-out
                    ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}
                    flex items-center justify-center`}
      >
        {theme === 'dark' ? (
          <FiMoon className="h-4 w-4 text-gray-800" />
        ) : (
          <FiSun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
}

