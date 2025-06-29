import React from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const menuItems = [
    { id: 'hero', label: 'Accueil', icon: <Home size={20} /> },
    { id: 'about', label: 'À propos', icon: <User size={20} /> },
    { id: 'projects', label: 'Projets', icon: <Briefcase size={20} /> },
    { id: 'resume', label: 'CV', icon: <FileText size={20} /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-1/2 left-2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-800/80 backdrop-blur-xl rounded-2xl p-1 border border-gray-700/50">
        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {item.icon}
              
              {/* Tooltip */}
              <div className="absolute left-16 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
              
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;