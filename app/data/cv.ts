// data/cv.ts
export const cvData = {
  profile: {
    name: "Andy Ranaivo",
    title: "Data Scientist & Développeur Frontend",
    shortBio: "Data Scientist et Développeur Frontend passionné. Je conçois des modèles prédictifs complexes et crée des interfaces web hautement performantes pour les rendre accessibles.",
    bio: "Fort de plus de 10 ans d'expérience auprès de clients internationaux, je possède une double expertise singulière. D'une part, j'évolue dans l'ingénierie des données et l'Intelligence Artificielle (Machine Learning, Vue d'ensemble des données, Modèles prédictifs). D'autre part, mon solide bagage en tant que Lead Développeur Frontend (Vue.js, Nuxt/Next, ReactJS) me permet de construire des architectures web robustes de bout en bout. Je transforme la donnée en intelligence, puis la restitue au travers d'interfaces UI/UX dynamiques et innovantes.",
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
      description: "Refonte et modernisation SSR avec Nuxt 3, module d'automatisation de workflows et tests E2E Cypress pour la plateforme Quality Monitoring.",
      stack: ["Nuxt 3", "Vue 3", "Pinia", "Cypress", "Symfony 7", "Docker"],
      link: "https://www.hubicus.com/",
      image: "/img/hubicus.png",
      isMobile: false
    },
    {
      title: "Private Sport Shop",
      client: "Bocasay / PSS",
      description: "Refonte et évolution de l'application mobile E-commerce, intégration UI/UX pixel-perfect et optimisation des parcours d'achat.",
      stack: ["React Native", "Symfony 5", "Google Analytics"],
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
      period: "Octobre 2021 – Aujourd'hui",
      role: "DEVELOPPEUR FRONTEND SENIOR",
      details: "Refonte de l'application HQM (architecture SSR, Nuxt 3). Conception de formulaires dynamiques, automatisation de processus métiers. Pilotage de la migration Vue 2 vers Vue 3, gestion d'état Pinia. Implémentation tests E2E Cypress. Collaboration Agile Scrum."
    },
    {
      company: "BOCASAY MAURITIUS",
      period: "Mars 2020 – Septembre 2021",
      role: "DEVELOPPEUR FRONTEND SENIOR",
      details: "Refonte de l'application mobile PSS. Intégration pixel-perfect des maquettes graphiques E-commerce, suivi des performances via Google Analytics tags."
    },
    {
      company: "HANGAR WORLDWIDE MAURITIUS",
      period: "Octobre 2016 – Février 2020",
      role: "DÉVELOPPEUR FRONTEND / LEAD TECHNIQUE",
      details: "Refonte, maintenance et création de sites web à fort trafic. Lead Technique Projet Pampers. Développement avancé React/TypeScript/GraphQL pour les sites Klepierre et Mondelez (Oreo, Cadbury)."
    },
    {
      company: "VIVETIC MADAGASCAR",
      period: "Février 2015 – Septembre 2016",
      role: "DÉVELOPPEUR SI",
      details: "Développement et maintenance d'outils de GPAO (Gestion de Production Assistée par Ordinateur)."
    }
  ],
  education: [
    {
      degree: "MASTER 1 en Ingénierie Intelligence Artificielle et Data (I2AD)",
      school: "INSI - Université spécialisée en Informatique et intelligence artificielle",
      year: "2025"
    },
    {
      degree: "Licence en développement d'application",
      school: "IT University – Université spécialisée en Informatique",
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
    "Malgache (langue maternelle)",
    "Français (courant)",
    "Anglais (intermédiaire)"
  ]
};