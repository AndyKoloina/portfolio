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
    title: "Senior Fullstack Developer · Frontend Expert · Data Scientist",
    shortBio: "Senior Fullstack Developer with 10+ years of experience, specializing in the modern JavaScript ecosystem. I transform business requirements into scalable, high-performance technical architectures.",
    bio: "With over 10 years of experience working with international clients, I combine three complementary areas of expertise. As a fullstack developer, I architect PHP/Symfony REST APIs and Vue.js applications — including AI-powered pipelines (LLM/Mistral, RabbitMQ) for large-scale data processing. My background as a frontend lead allowed me to deliver high-traffic projects (Oreo, Cadbury, Klépierre) with a strong focus on design systems, accessibility and performance. Finally, my Master's in AI & Data Engineering (INSI 2025) enables me to design predictive models (Machine Learning, TensorFlow) and surface insights through actionable dashboards. This triple expertise lets me drive a project from raw data all the way to the interface that makes it useful.",
    email: "andyranaivo22@gmail.com",
    phone: "+261 38 59 928 53",
    location: "Antananarivo, Madagascar",
    linkedin: "https://www.linkedin.com/in/andy-ranaivo-02684112b/",
    github: "https://github.com/AndyKoloina"
  },
  projects: [
    {
      title: "Hubicus — Groupe BVA",
      client: "French Software Publisher",
      description: "Multichannel quality monitoring platform for contact centers: Symfony REST APIs, PHP 8 / Symfony 7 migration, Vue 3 / Pinia frontend and an AI evaluation pipeline (speech-to-text + Mistral LLM) orchestrated via RabbitMQ.",
      stack: ["Symfony", "PHP 8", "Vue.js 3", "Pinia", "RabbitMQ", "MySQL", "Redis", "Docker"],
      link: "https://www.hubicus.com/",
      image: "/img/hubicus.png",
      isMobile: false
    },
    {
      title: "Private Sport Shop",
      client: "Bocasay / PSS",
      description: "Redesign and evolution of the PSS e-commerce mobile app, pixel-perfect UI/UX integration and checkout flow optimization.",
      stack: ["React Native", "Symfony 5", "Google Analytics", "MySQL", "Docker", "Firebase"],
      link: "https://www.privatesportshop.fr/",
      image: "/img/pss.png",
      isMobile: false
    },
    {
      title: "Oreo — Mondelez",
      client: "Hangar Worldwide",
      description: "Development and redesign of the international OREO website. Interactive React/TypeScript components, marketing animations and CMS integration.",
      stack: ["React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.oreo.com/",
      image: "/img/oreo.png",
      isMobile: false
    },
    {
      title: "Cadbury — Mondelez",
      client: "Hangar Worldwide",
      description: "Redesign of the Cadbury UK brand website. User experience and pixel-perfect frontend integration in a Sitecore environment.",
      stack: ["React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.cadbury.co.uk/",
      image: "/img/cadburry.png",
      isMobile: false
    },
    {
      title: "Klépierre",
      client: "Hangar Worldwide",
      description: "Development of the Klépierre shopping centre web portal. Next.js architecture, GraphQL integration and reusable components in a Sitecore environment.",
      stack: ["Next.js", "React", "TypeScript", "GraphQL", "Sitecore"],
      link: "https://www.klepierre.com/",
      image: "/img/klepierre.png",
      isMobile: false
    },
    {
      title: "Kaufman & Broad",
      client: "Hangar Worldwide",
      description: "Frontend development of the Kaufman & Broad real estate website. Advanced search modules, configurators and Drupal CMS integration.",
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
      role: "FULL-STACK DEVELOPER (PHP / Symfony / Vue.js)",
      details: "Multichannel customer interaction quality monitoring platform (calls, chats, e-mails and other channels) for contact centers, on behalf of a software publisher client.",
      responsibilities: [
        "Designed and developed REST APIs covering multiple platform features (evaluations, users, reporting, among others), with route security and standardized business processes.",
        "Led technical migrations from PHP 5 → PHP 7 → PHP 8 and Symfony 5 → Symfony 7, modernizing the backend architecture and durably reducing technical debt.",
        "Integrated an AI evaluation pipeline (speech-to-text + Mistral LLM) orchestrated asynchronously via RabbitMQ and cached with Redis, ingesting large volumes of calls and chats without impacting performance.",
        "Migrated the frontend from Vue 2 / Vuex to Vue 3 / Pinia, improving maintainability, reactivity and interface performance.",
        "Resolved complex performance-related bugs and set up cron jobs to automate the platform's recurring processing tasks.",
        "Implemented functional tests with Behat, worked in an agile (Scrum) setting and collaborated closely with the DevOps team on Docker configurations."
      ],
      stack: ["PHP 7/8", "Symfony 5/7", "Vue.js 2 & 3", "Vuex", "Pinia", "Behat", "LLM/Mistral", "RabbitMQ", "MySQL", "Redis", "Docker", "Git", "GitLab CI", "Scrum/Jira"],
      current: true
    },
    {
      company: "BOCASAY MAURITIUS",
      period: "March 2020 – September 2021",
      role: "MOBILE DEVELOPER",
      details: "Revamp and evolution of the PSS (Private Sport Shop) mobile e-commerce application.",
      responsibilities: [
        "Pixel-perfect integration of new UI/UX designs and development of complex features for the sales funnel, improving user experience and checkout flow.",
        "Implemented a Google Analytics tagging plan for precise user behavior tracking, identifying friction points in the conversion funnel and optimizing sales KPIs."
      ],
      stack: ["React Native", "React", "Symfony 5", "MySQL", "Redis", "Docker", "Google Analytics"]
    },
    {
      company: "HANGAR WORLDWIDE MAURITIUS",
      period: "October 2016 – February 2020",
      role: "FRONTEND DEVELOPER / TECHNICAL LEAD",
      details: "Architecture and maintenance of high-traffic international digital platforms (Pampers, Oreo, Cadbury, Klépierre).",
      responsibilities: [
        "Led frontend architecture and defined development standards (W3C, SEO, Accessibility) for Pampers — building a durable, accessible and SEO-optimized technical foundation.",
        "Designed a reusable React / TypeScript component library with GraphQL API integration, accelerating development cycles and standardizing the UI.",
        "Developed multi-brand websites (Mondelez, Klépierre) with responsive design and cross-browser compatibility, delivering a seamless experience to millions of users."
      ],
      stack: ["React", "TypeScript", "GraphQL", "Next.js", "Sass", "Sitecore", "Storybook", "Azure DevOps"]
    },
    {
      company: "VIVETIC MADAGASCAR",
      period: "February 2015 – September 2016",
      role: "SOFTWARE DEVELOPER",
      details: "Development and maintenance of GPAO (Computer-Aided Production Management) tools for manufacturing execution."
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
    },
    {
      name: "Claude Certification",
      issuer: "Anthropic",
      year: "In progress"
    }
  ],
  skills: [
    "Javascript", "Typescript", "CSS / Sass", "Tailwind", "React / Redux", "Vue.js 3 / Pinia",
    "Node.js", "NextJS", "HTML5", "Nuxt 3", "Python", "Django", "Cypress", "Jest / Vitest",
    "Tensorflow", "PowerBI", "DataWarehouse", "Oracle", "MySQL", "PostgreSQL",
    "Prisma", "RabbitMQ", "Redis", "Docker", "Storybook", "Beautiful Soup", "Sitecore"
  ],
  languages: [
    "Malagasy (native)",
    "French (fluent)",
    "English (intermediate)"
  ]
};
