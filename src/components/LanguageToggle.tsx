import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group relative p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <div className="flex items-center space-x-2">
        <Languages className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <div className="flex items-center space-x-1">
          <span
            className={`text-sm font-semibold transition-colors duration-300 ${
              language === 'fr'
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            FR
          </span>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <span
            className={`text-sm font-semibold transition-colors duration-300 ${
              language === 'en'
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            EN
          </span>
        </div>
      </div>
     
      {/* Indicateur actif */}
      <div
        className={`absolute bottom-1 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
          language === 'fr' ? 'left-8 w-4' : 'right-8 w-4'
        }`}
      />
     
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {language === 'fr' ? 'English' : 'Français'}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
      </div>
    </button>
  );
};

export default LanguageToggle;