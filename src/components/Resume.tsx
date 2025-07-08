import React from 'react';
import { Download, Mail, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { getEmail } from '../encodeEmail';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'CV_Theo_Nicod.pdf';
    link.click();
  };

  const skills = [
    {
      category: t('resume.skills.category.language_prog'),
      items: ["Bash", "C", "C++", "Java", "Javascript", "PHP", "Python", "SQL"],
      color: "from-blue-800 to-blue-700 dark:from-blue-500 dark:to-blue-600"
    },
    {
      category: t('resume.skills.category.ai'), 
      items: ["Deep Learning", "Fine-tuning", "Hugging Face", "Keras", "LangChain", "LLM", "Ollama", "Prompting", "PyTorch", "RAG", "Scikit-learn"],
      color: "from-cyan-600 to-cyan-400 dark:from-cyan-500 dark:to-cyan-600"
    },
    {
      category: "Web",
      items: ["MongoDB", "MySQL", "NodeJs", "React", "Redis", "REST APIs", "Spring Boot", "Symfony", "Vue.js", "WebSockets"],
      color: "from-blue-700 to-cyan-600 dark:from-blue-600 dark:to-cyan-500"
    },
    {
      category: t('resume.skills.category.tools'),
      items: ["Docker", "Git", "Google Colab", "Kubernetes"],
      color: "from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600"
    },
    {
      category: t('resume.skills.category.language.title'),
      items: [
        `${t('resume.skills.category.language.french.title')} (${t('resume.skills.category.language.french.level')})`,
        `${t('resume.skills.category.language.english.title')} (${t('resume.skills.category.language.english.level')})`
      ],
      color: "from-cyan-600 to-cyan-600 dark:from-cyan-500 dark:to-cyan-600"
    }
  ];

  const experiences = [
    {
      title: t('resume.experience.list.goelan.title'),
      company: t('resume.experience.list.goelan.company'),
      companyLink: "https://www.elan.uha.fr/ncu-elan/",
      period: t('resume.experience.list.goelan.period'),
      description: t('resume.experience.list.goelan.description'),
      skills: ["FastAPI", "LangChain", "MistralAI", "Python", "RAG", "React"]
    },
    {
      title: t('resume.experience.list.unsolite.title'),
      company: t('resume.experience.list.unsolite.company'),
      companyLink: "https://www.unsolite.com/",
      period: t('resume.experience.list.unsolite.period'),
      description: t('resume.experience.list.unsolite.description'),
      skills: ["MySQL", "Symfony", "Team Collaboration", "WebSockets"]
    },
  ];

  const education = [
    {
      title: t('resume.education.master.title'),
      logo: "M",
      place: t('resume.education.master.place'),
      period: "2025",
      courses: [
        t('resume.education.master.courses.0'),
        t('resume.education.master.courses.1'),
        t('resume.education.master.courses.2'),
        t('resume.education.master.courses.3'),
        t('resume.education.master.courses.4'),
        t('resume.education.master.courses.5'),
        t('resume.education.master.courses.6'),
        t('resume.education.master.courses.7'),
        t('resume.education.master.courses.8'),
      ]
    },
    {
      title: t('resume.education.bachelor.title'),
      logo: "L",
      place: t('resume.education.bachelor.place'),
      period: "2023",
      courses: [
        t('resume.education.bachelor.courses.0'),
        t('resume.education.bachelor.courses.1'),
        t('resume.education.bachelor.courses.2'),
        t('resume.education.bachelor.courses.3'),
        t('resume.education.bachelor.courses.4'),
        t('resume.education.bachelor.courses.5'),
        t('resume.education.bachelor.courses.6'),
        t('resume.education.bachelor.courses.7'),
        t('resume.education.bachelor.courses.8'),
      ]
    },
    {
      title: t('resume.education.bac.title'),
      logo: "B",
      place: t('resume.education.bac.place'),
      period: "2019",
      courses: []
    }
  ]

  return (
    <section id="resume" className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('resume.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('resume.subtitle')}
          </p>
          
          {/* Download button */}
          <button
            onClick={handleDownloadCV}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 border border-gray-900 dark:border-white inline-flex items-center space-x-3"
          >
            <Download className="w-5 h-5" />
            <span>{t('resume.downloadButton')}</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact & Info */}
          <div className="space-y-8">
            {/* Contact card */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" />
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm">{getEmail()}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm">Mulhouse, France</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm">Besançon, France</span>
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" />
                {t('resume.skills.title')}
              </h3>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${skillGroup.color} rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300`}>
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h4>
                    </div>
                    
                    <div className="ml-11 flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-4 text-gray-600 dark:text-gray-400" />
                {t('resume.experience.title')}
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 ml-12 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-16 top-6 w-4 h-4 bg-gray-900 dark:bg-white"></div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                          <a 
                          href={`${exp.companyLink}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 font-medium">
                            {exp.company}
                          </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-4 text-gray-600 dark:text-gray-400" />
                Formation
              </h3>
              
              <div className="space-y-6">
                {education.map((ed, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 font-bold flex-shrink-0">
                        {ed.logo}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{ed.title}</h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{ed.period}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{ed.place}</p>
                        
                        {/* Courses */}
                        <div className="flex flex-wrap gap-2">
                          {ed.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs border border-gray-300 dark:border-gray-600"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;