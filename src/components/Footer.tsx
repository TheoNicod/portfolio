import React from 'react';
import { Heart, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:john.doe@example.com", label: "Email", color: "hover:text-cyan-400" },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub", color: "hover:text-purple-400" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" }
  ];

  return (
    <footer className="relative py-16 px-6 lg:px-20 border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main content */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">Créons ensemble</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                l'avenir numérique
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Prêt à transformer vos idées en réalité ? Contactez-moi pour discuter 
              de vos projets les plus ambitieux.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group p-4 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:border-current/50`}
                aria-label={social.label}
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
            <p className="text-gray-300 mb-4">Une idée de projet ? Une opportunité ?</p>
            <a
              href="mailto:john.doe@example.com"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-3" />
              Démarrons la conversation
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800/50 pt-8 space-y-4">
            <p className="flex items-center justify-center text-gray-400">
              Conçu avec <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> et beaucoup de café
            </p>
            <p className="text-sm text-gray-500">
              © 2024 John Doe. Tous droits réservés. Fait avec passion à Paris.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;