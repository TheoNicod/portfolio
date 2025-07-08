import React from 'react';
import { Brain, Rocket, Target, Lightbulb } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vue.js", "Tailwind CSS"],
      color: "from-blue-800 to-blue-700 dark:from-blue-500 dark:to-blue-600"
    },
    {
      category: "Backend", 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600"
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-blue-700 to-cyan-600 dark:from-blue-600 dark:to-cyan-500"
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Figma"],
      color: "from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "Toujours à la recherche de solutions créatives et avant-gardistes"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimisation constante pour des expériences utilisateur exceptionnelles"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Précision",
      description: "Attention méticuleuse aux détails dans chaque ligne de code"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Apprentissage",
      description: "Curiosité permanente et adaptation aux nouvelles technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-20 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">{t('about.title.first')}</span>
            <span className="bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 bg-clip-text text-transparent">{t('about.title.second')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Story section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-100 dark:border-slate-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.story.title')}</h3>
              <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
                <p>
                  {t('about.story.paragraphs.0')}
                </p>
                <p>
                  {t('about.story.paragraphs.1')}
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/30 dark:to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 dark:border-slate-700/30 hover:border-blue-700/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-blue-700 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-amber-100 dark:border-slate-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Formation</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-800 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-16 bg-gradient-to-b from-blue-800/50 dark:from-blue-500/50 to-transparent"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Master Informatique</h4>
                    <p className="text-blue-700 dark:text-blue-400 text-sm">2023 - 2025</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mt-1">Université XYZ</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-800 dark:from-cyan-500 dark:to-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Licence Informatique</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm">2020 - 2023</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mt-1">Université XYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/30 dark:to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700/30 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full`}></div>
                    <span className="text-slate-700 dark:text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;