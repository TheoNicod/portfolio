import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Eye } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: "GoELAN",
      subtitle: t('projects.list.goelan.subtitle'),
      description: t('projects.list.goelan.description'),
      technologies: ["FastAPI", "LangChain", "MistralAI", "Python", "RAG", "React"],
      image: "/images/goelan_resized.png",
      demo: "https://goelan.uha.fr",
      paper: "goelan_paper_2025.pdf",
      date: "2025",
      featured: true,
      color: "from-blue-800 to-blue-900 dark:from-blue-500 dark:to-blue-700"
    },
    {
      title: "LLM",
      subtitle: t('projects.list.llm-personalization.subtitle'),
      description: t('projects.list.llm-personalization.description'),
      technologies: ["Python", "Ollama", "RAG", "Fine-tuning", , "Pytorch", "LangChain", "LlamaIndex", "FAISS"],
      image: "llm.jpeg",
      github: "https://github.com/eisenhowair/ProjetLLM",
      date: "2024",
      featured: true,
      color: "from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600"
    },
    {
      title: "AR Lung Visualization",
      subtitle: t('projects.list.aruco.subtitle'),
      description: t('projects.list.aruco.description'),
      technologies: ["Python", "ArUCO", "OpenCV"],
      image: "aruco.png",
      github: "https://github.com/TheoNicod/CXR-Lungs-Augmented-Reality",
      date: "2023",
      featured: false,
      color: "from-blue-700 to-cyan-600 dark:from-blue-600 dark:to-cyan-500"
    },
    {
      title: "NutriTrack",
      subtitle: t('projects.list.nutritrack.subtitle'),
      description: t('projects.list.nutritrack.description'),
      technologies: ["PHP", "MySQL", "JQuery", "Bootstrap"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/uha-fr/archiweb_2024_projets_gr04",
      date: "2023",
      featured: false,
      color: "from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('projects.title.0')} {t('projects.title.1')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-6"></div>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project card */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 h-full">
                {/* Image section */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image.startsWith("http") ? project.image : "/portfolio/images/" + project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 text-xs font-semibold">
                      FEATURED
                    </div>
                  )}
                  
                  {/* Date */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.date}</span>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">{project.subtitle}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 relative z-50"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('projects.buttons.code')}</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href="#"
                        className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 relative z-50"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('projects.buttons.view')}</span>
                      </a>
                    )}
                    {project.paper && (
                      <a
                        href={`/portfolio/public/${project.paper}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 relative z-50"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('projects.buttons.paper')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 border-2 border-gray-900 dark:border-white transition-all duration-300 ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;