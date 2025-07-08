export type Language = 'fr' | 'en';

export interface Translations {
  navigation: {
    home: string;
    // about: string;
    projects: string;
    resume: string;
  };
  theme: {
    lightMode: string;
    darkMode: string;
  };
  hero: {
    greeting: string;
    name: string;
    lastName: string;
    roles: string[];
    description: string;
    cta: {
      projects: string;
      resume: string;
    };
  };
  // about: {
  //   title: string;
  //   story: {
  //     title: string;
  //     paragraphs: string[];
  //   };
  //   education: {
  //     title: string;
  //     master: {
  //       title: string;
  //       period: string;
  //       school: string;
  //       description: string;
  //     };
  //     bachelor: {
  //       title: string;
  //       period: string;
  //       school: string;
  //       description: string;
  //     };
  //   };
  //   values: {
  //     innovation: {
  //       title: string;
  //       description: string;
  //     };
  //     performance: {
  //       title: string;
  //       description: string;
  //     };
  //     precision: {
  //       title: string;
  //       description: string;
  //     };
  //     learning: {
  //       title: string;
  //       description: string;
  //     };
  //   };
  //   skills: {
  //     frontend: string;
  //     backend: string;
  //     mobile: string;
  //     tools: string;
  //   };
  // };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    cta: string;
    ctaButton: string;
    buttons: {
      code: string;
      view: string;
    };
    list: {
      neurocommerce: {
        subtitle: string;
        description: string;
      };
      taskflow: {
        subtitle: string;
        description: string;
      };
      weathermind: {
        subtitle: string;
        description: string;
      };
      socialpulse: {
        subtitle: string;
        description: string;
      };
    };
  };
  resume: {
    title: string;
    subtitle: string;
    downloadButton: string;
    contact: {
      title: string;
    };
    certifications: {
      title: string;
      levels: {
        professional: string;
        associate: string;
        expert: string;
        intermediate: string;
      };
    };
    experience: {
      title: string;
      list: {
        lead: {
          title: string;
          company: string;
          period: string;
          description: string;
        };
        fullstack: {
          title: string;
          company: string;
          period: string;
          description: string;
        };
        project: {
          title: string;
          company: string;
          period: string;
          description: string;
        };
      };
    };
    education: {
      title: string;
      master: {
        title: string;
        period: string;
        description: string;
      };
      bachelor: {
        title: string;
        period: string;
        description: string;
      };
    };
  };
  footer: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaButton: string;
    madeWith: string;
    coffee: string;
    copyright: string;
    location: string;
  };
}