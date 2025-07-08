import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { sendEmail } from '../encodeEmail';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:", label: "Email" },
    { icon: <Github size={20} />, href: "https://github.com/TheoNicod", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/th%C3%A9o-nicod-b21b36273/", label: "LinkedIn" },
  ];

  return (
    <footer className="py-16 px-6 lg:px-20 bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-700">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-12">
          {/* Main content */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Contacts
              <br />
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              -
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                onClick={(e) => {
                  if (social.href.startsWith('mailto:')) {
                    e.preventDefault();
                    sendEmail();
                  }
                }}
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 space-y-4">
            <p className="text-sm text-gray-500">
              © 2025 Théo Nicod. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;