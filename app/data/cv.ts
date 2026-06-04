// data/cv.ts
interface Experience {
  company: string
  period: string
  role: string
  details: string
  stack?: string[]
  responsibilities?: string[]
  current?: boolean
}

export const cvData = {
  profile: {
    name: "Andy Ranaivo",
    title: "Fullstack Node/React Developer · Frontend Expert · Data Scientist",
    shortBio: "Fullstack Node/React Developer, Frontend Expert and Data Scientist. I build robust web architectures, high-performance interfaces and predictive models that turn raw data into actionable intelligence.",
    bio: "With over 10 years of experience working with international clients, I combine three complementary areas of expertise. As a fullstack developer, I build solid Node.js/Express APIs and end-to-end React/TypeScript interfaces. My background as a frontend lead allowed me to deliver high-traffic projects (Oreo, Cadbury, Klépierre) using Vue.js, Nuxt and Next.js. Finally, my Master's in AI & Data Engineering (INSI 2025) enables me to design predictive models (Machine Learning, TensorFlow) and surface insights through actionable dashboards. This triple expertise lets me drive a project from raw data all the way to the interface that makes it useful.",
    email: "andyranaivo22@gmail.com",
    phone: "+261 38 59 928 53",
    location: "Antananarivo, Madagascar",
    linkedin: "https://www.linkedin.com/in/andy-ranaivo-02684112b/",
    github: "https://github.com/AndyKoloina"
  },
  projects: [
    {
      title: "Hubicus — Groupe BVA",
      client: "Éditeur de logiciels français",
      description: "Refonte et modernisation de l'application HQM avec React/node, module d'automatisation de workflows et tests E2E Cypress pour la plateforme Quality Monitoring.",
      stack: ["React", "node", "typescript", "Cypress", "mysql", "Docker","redis"],
      link: "https://www.hubicus.com/",
      image: "/img/hubicus.png",
      isMobile: false
    },
    {
      title: "Private Sport Shop",
      client: "Bocasay / PSS",
      description: "Refonte et évolution de l'application mobile E-commerce, intégration UI/UX pixel-perfect et optimisation des parcours d'achat.",
      stack: ["React Native", "Symfony 5", "Google Analytics","Mysql","docker","firebase"],
      link: "https://www.privatesportshop.fr/",
      image: "/img/pss.png",
      isMobile: false
    },
    {
      title: "Oreo — Mondelez",
      client: "Hangar Worldwide",
      description: "Développement et refonte du site international OREO. Création de composants React/TypeScript interactifs, animations marketing et intégration CMS.",
      stack: ["React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.oreo.com/",
      image: "/img/oreo.png",
      isMobile: false
    },
    {
      title: "Cadbury — Mondelez",
      client: "Hangar Worldwide",
      description: "Refonte du site de la marque Cadbury UK. Expérience utilisateur et intégration frontend pixel-perfect en environnement Sitecore.",
      stack: ["React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.cadbury.co.uk/",
      image: "/img/cadburry.png",
      isMobile: false
    },
    {
      title: "Klépierre",
      client: "Hangar Worldwide",
      description: "Réalisation du portail web des centres commerciaux Klépierre. Architecture Next.js, intégration GraphQL et composants réutilisables en environnement Sitecore.",
      stack: ["Next.js", "React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.klepierre.com/",
      image: "/img/klepierre.png",
      isMobile: false
    },
    {
      title: "Kaufman & Broad",
      client: "Hangar Worldwide",
      description: "Développement frontend du site immobilier Kaufman & Broad. Modules de recherche avancée, configurateurs et intégration CMS Drupal.",
      stack: ["Drupal", "React", "TypeScript", "Next.js", "Sass"],
      link: "https://www.kaufmanbroad.fr/",
      image: "/img/kaufman.png",
      isMobile: false
    }
  ],
  experiences: [
    {
      company: "NOVITY MADAGASCAR",
      period: "October 2021 – Present",
      role: "SENIOR FULLSTACK NODE/REACT DEVELOPER",
      details: "Fullstack design and development of the HQM application (Hubicus Quality Monitoring) — Node.js APIs, React/TypeScript interfaces, automated testing and continuous deployment.",
      responsibilities: [
        "Architecture and progressive migration of the HQM app to a Node.js/Express + React/TypeScript stack",
        "RESTful API development, data flow management (MySQL, Redis) and Docker containerization",
        "React interface development — reusable components, custom hooks, Redux state management",
        "E2E testing with Cypress and unit testing with Jest, integrated into the CI pipeline",
        "Code review, refactoring and continuous performance optimization",
        "Agile/Scrum collaboration within an international team (Groupe BVA, France)"
      ],
      stack: ["Node.js", "React", "TypeScript", "Express", "MySQL", "Redis", "Docker", "Cypress"],
      current: true
    },
    {
      company: "BOCASAY MAURITIUS",
      period: "March 2020 – September 2021",
      role: "MOBILE DEVELOPER",
      details: "Rebuilt the PSS mobile app. Pixel-perfect integration of e-commerce UI designs, performance tracking via Google Analytics tags."
    },
    {
      company: "HANGAR WORLDWIDE MAURITIUS",
      period: "October 2016 – February 2020",
      role: "FRONTEND DEVELOPER / TECHNICAL LEAD",
      details: "Revamp, maintenance and creation of high-traffic websites. Technical Lead on the Pampers project. Advanced React/TypeScript/GraphQL development for Klepierre and Mondelez brands (Oreo, Cadbury)."
    },
    {
      company: "VIVETIC MADAGASCAR",
      period: "February 2015 – September 2016",
      role: "SOFTWARE DEVELOPER",
      details: "Development and maintenance of MES (Manufacturing Execution System) tools for production management."
    }
  ] as Experience[],
  education: [
    {
      degree: "Master's in AI & Data Engineering (I2AD)",
      school: "INSI — University specializing in Computer Science & Artificial Intelligence",
      year: "2025"
    },
    {
      degree: "Bachelor's in Application Development",
      school: "IT University — University specializing in Computer Science",
      year: "2015"
    }
  ],
  certifications: [
    {
      name: "Certification Vue3 & Pinia",
      issuer: "Vue mastery",
      year: "2023"
    },
    {
      name: "Certification React",
      issuer: "Udemy",
      year: "2020"
    }
  ],
  skills: [
    "Javascript", "Typescript", "Css", "Sass", "Tailwind", "NextJS", "NodeJS", "HTML5", "Nuxt 3", "REACT/REDUX", "VUEJS(2/3)", "Vuex", "Pinia", "Sitecore", "Python", "Django", "Cypress", "Jest", "Tensorflow", "PowerBI", "DataWarehouse", "Oracle", "Mysql", "PostgreSQL"
  ],
  languages: [
    "Malagasy (native)",
    "French (fluent)",
    "English (intermediate)"
  ]
};