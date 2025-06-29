import React from 'react';
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = '#'; // Remplacer par l'URL réelle du CV
    link.download = 'CV_John_Doe.pdf';
    link.click();
  };

  const experiences = [
    {
      title: "Lead Developer",
      company: "TechCorp Innovation",
      period: "Juin 2024 - Août 2024",
      description: "Direction technique d'une équipe de 4 développeurs sur une plateforme SaaS révolutionnaire. Implémentation d'architectures microservices et optimisation des performances.",
      skills: ["React", "Node.js", "Docker", "AWS"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupLab",
      period: "Jan 2024 - Mai 2024",
      description: "Développement complet d'une application mobile cross-platform avec intégration IA et analytics avancés.",
      skills: ["React Native", "Python", "TensorFlow", "Firebase"]
    },
    {
      title: "Project Lead",
      company: "Université XYZ",
      period: "Sept 2023 - Déc 2023",
      description: "Leadership d'un projet étudiant innovant : plateforme e-learning avec réalité augmentée et gamification.",
      skills: ["Vue.js", "Three.js", "WebXR", "MongoDB"]
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", date: "2024", level: "Professional" },
    { name: "Google Cloud Developer", date: "2024", level: "Associate" },
    { name: "React Advanced Patterns", date: "2023", level: "Expert" },
    { name: "Machine Learning Specialist", date: "2023", level: "Intermediate" }
  ];

  return (
    <section id="resume" className="py-20 px-6 lg:px-20 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Mon </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Parcours</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Découvrez mon évolution professionnelle et mes accomplissements
          </p>
          
          {/* Download button */}
          <button
            onClick={handleDownloadCV}
            className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center space-x-3">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Télécharger CV Complet</span>
            </span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact & Info */}
          <div className="space-y-8">
            {/* Contact card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 mr-4 text-cyan-400" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 mr-4 text-purple-400" />
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-5 h-5 mr-4 text-pink-400" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-gradient-to-b from-cyan-500 to-purple-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-400">{cert.date}</span>
                      <span className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-2 py-1 rounded-full">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-4 text-cyan-400" />
                Expérience Professionnelle
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-purple-500/50"></div>
                    )}
                    
                    <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 ml-12 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-16 top-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-4 text-purple-400" />
                Formation
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                      M
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Master Informatique</h4>
                      <p className="text-cyan-400 text-sm">2023 - 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Spécialisation en Intelligence Artificielle et Développement Web Avancé</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                      L
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Licence Informatique</h4>
                      <p className="text-purple-400 text-sm">2020 - 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Formation complète en programmation, algorithmique et systèmes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;