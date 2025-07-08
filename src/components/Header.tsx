import React from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { t } = useTranslation();
 
  const menuItems = [
    { id: 'hero', label: t('navigation.home'), icon: <Home size={20} /> },
    { id: 'projects', label: t('navigation.projects'), icon: <Briefcase size={20} /> },
    { id: 'resume', label: t('navigation.resume'), icon: <FileText size={20} /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-1/2 left-2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 shadow-lg">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon}
             
              {/* Tooltip */}
              <div className="absolute left-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
              </div>
             
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;