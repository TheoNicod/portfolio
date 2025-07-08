import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'resume'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen relative overflow-x-hidden transition-colors duration-300">
          <div className="fixed top-4 right-4 z-50 flex space-x-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          
          <Header activeSection={activeSection} />
          <main className="relative z-10">
            <Hero />
            {/* <About /> */}
            <Projects />
            <Resume />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;