import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Développeur', 'Créatif', 'Innovateur', 'Étudiant'];

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
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8 lg:order-1 order-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-cyan-400">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-medium">Bonjour, je suis</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-white">Théo</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nicod
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-gray-300 h-12">
              <span className="text-cyan-400">{text}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Étudiant passionné en Master Informatique, je crée des expériences 
            numériques innovantes qui repoussent les limites du possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <Code2 className="w-5 h-5" />
                <span>Voir mes créations</span>
              </span>
            </button>
            
            <button
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Mon parcours</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="lg:order-2 order-1 relative">
          <div className="relative w-80 h-80 mx-auto">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse"></div>
            <div className="absolute inset-8 rounded-full border-2 border-pink-500/30 animate-spin-slow"></div>
            
            {/* Center avatar */}
            <div className="absolute inset-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              JD
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white animate-float">
              <Code2 className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white animate-float-delayed">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;