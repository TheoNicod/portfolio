import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations } from '../types/translations';

// Import des traductions
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';

interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook raccourci pour les traductions
export const useTranslation = () => {
  const { t } = useLanguage();
  return { t };
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translationsMap: Record<Language, Translations> = {
  fr: frTranslations as unknown as Translations,
  en: enTranslations as unknown as Translations,
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Vérifier la préférence sauvegardée ou la préférence du navigateur
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    
    const initialLanguage = savedLanguage || browserLanguage;
    setLanguage(initialLanguage);
    
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = initialLanguage;
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('language', newLanguage);
    
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = newLanguage;
  };

  // Fonction pour obtenir une traduction par sa clé
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translationsMap[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback vers le français si la clé n'existe pas
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        value = translationsMap.fr;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return key; // Retourner la clé si aucune traduction n'est trouvée
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const translations = translationsMap[language];

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};