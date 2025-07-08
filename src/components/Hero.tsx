import React, { useEffect, useState } from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { sendEmail } from '../encodeEmail';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    t('hero.roles.0'),
    t('hero.roles.1'),
    t('hero.roles.2'),
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wide uppercase">
                  {t('hero.greeting')}
                </p>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Théo</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">Nicod</span>
                </h1>
                
                <div className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 h-8 flex items-center">
                  <span className="text-gray-900 dark:text-white font-medium">{text}</span>
                  <span className="animate-pulse text-gray-400 ml-1">|</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 border border-gray-900 dark:border-white"
                >
                  {t('hero.cta.projects')}
                </button>
                
                <button
                  onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                >
                  {t('hero.cta.resume')}
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Professional photo section */}
          <div className="lg:order-2 order-1 relative">
            <div className="relative max-w-md mx-auto">
              
              {/* Main photo container */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg font-medium overflow-hidden">
                  {/* Remplacer par votre photo professionnelle */}
                  <img 
                    src="/path/to/your/photo.jpg" 
                    alt="Théo Nicod" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden flex items-center justify-center text-gray-500 dark:text-gray-400">
                    
                  </div>
                </div>
                
                {/* Subtle geometric accent */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 dark:bg-white"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 dark:bg-gray-700"></div>
              </div>

              {/* Social links */}
              <div className="flex justify-center space-x-6 mt-8">
                <a 
                  href="#"
                  target='_self'
                  onClick={(e) => {
                    e.preventDefault();
                    sendEmail();
                  }}
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/TheoNicod"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/th%C3%A9o-nicod-b21b36273/" 
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors lg:block hidden"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;