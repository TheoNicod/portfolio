import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 w-6 h-6 text-gray-700 dark:text-gray-400 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
       
        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 w-6 h-6 text-gray-700 dark:text-gray-400 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
     
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;