import React from 'react';
import { Brain, Rocket, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vue.js", "Tailwind CSS"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Backend", 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Figma"],
      color: "from-orange-500 to-red-500"
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
            <span className="text-white">Qui suis-</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">je ?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Story section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Mon Histoire</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Passionné par l'informatique depuis mon plus jeune âge, j'ai découvert 
                  le pouvoir transformateur de la technologie. Actuellement en Master 
                  Informatique, je me spécialise dans le développement d'applications 
                  web et mobile innovantes.
                </p>
                <p>
                  Mon approche combine créativité artistique et rigueur technique pour 
                  créer des expériences numériques qui marquent les esprits. Chaque 
                  projet est une opportunité d'explorer de nouveaux horizons technologiques.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">Formation</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                  <div className="absolute left-2 top-6 w-0.5 h-16 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Master Informatique</h4>
                    <p className="text-cyan-400 text-sm">2023 - 2025</p>
                    <p className="text-gray-400 text-sm mt-1">Université XYZ</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Licence Informatique</h4>
                    <p className="text-purple-400 text-sm">2020 - 2023</p>
                    <p className="text-gray-400 text-sm mt-1">Université XYZ</p>
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
              className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full`}></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
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