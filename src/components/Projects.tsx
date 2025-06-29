import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Zap, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NeuroCommerce",
      subtitle: "E-commerce Platform",
      description: "Plateforme e-commerce révolutionnaire avec IA prédictive, recommandations personnalisées et interface immersive. Architecture microservices avec paiements sécurisés.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com",
      date: "2024",
      featured: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "TaskFlow Pro",
      subtitle: "Productivity Suite",
      description: "Suite collaborative avancée avec synchronisation temps réel, analytics prédictifs et workflows automatisés. Interface adaptative multi-plateforme.",
      technologies: ["React Native", "Firebase", "TypeScript", "WebRTC"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com",
      date: "2024",
      featured: false,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "WeatherMind",
      subtitle: "AI Weather Analytics",
      description: "Dashboard météorologique intelligent avec prédictions ML, visualisations 3D interactives et alertes contextuelles géolocalisées.",
      technologies: ["Vue.js", "D3.js", "Python", "OpenWeatherMap"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com",
      date: "2023",
      featured: false,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "SocialPulse",
      subtitle: "Analytics Platform",
      description: "Plateforme d'analyse sociale avancée avec traitement NLP, sentiment analysis et tableaux de bord prédictifs en temps réel.",
      technologies: ["Python", "Django", "PostgreSQL", "D3.js", "NLP"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      demo: "https://example.com",
      date: "2023",
      featured: true,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-20 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Mes </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Créations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez mes projets les plus innovants, où créativité et technologie se rencontrent
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background image with overlay */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gray-900/60"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top section */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                  {project.featured && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      <Zap className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Main content */}
                <div className="space-y-4">
                  <div>
                    <p className="text-cyan-400 text-sm font-medium mb-1">{project.subtitle}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className={`flex space-x-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-gray-700/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all`}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Voir</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-300 ${
                hoveredProject === index 
                  ? `border-gradient-to-r ${project.color} opacity-100` 
                  : 'border-transparent opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Intéressé par une collaboration ?</p>
          <button
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Contactez-moi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;