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
    bio: "With over 10 years of experience working with international clients, I combine three complementary areas of expertise. As a fullstack developer, I architect Node.js/Express APIs and end-to-end React/TypeScript applications — including AI-powered pipelines (LLM/Mistral, RabbitMQ) for large-scale data processing. My background as a frontend lead allowed me to deliver high-traffic projects (Oreo, Cadbury, Klépierre) with a strong focus on design systems, accessibility and performance. Finally, my Master's in AI & Data Engineering (INSI 2025) enables me to design predictive models (Machine Learning, TensorFlow) and surface insights through actionable dashboards. This triple expertise lets me drive a project from raw data all the way to the interface that makes it useful.",
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
      description: "Redesign and modernization of the HQM application with React/Node, workflow automation module and E2E Cypress tests for the Quality Monitoring platform.",
      stack: ["React", "Node.js", "TypeScript", "Cypress", "MySQL", "Docker", "Redis"],
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
      role: "FULL-STACK DEVELOPER (Node.js / React TypeScript)",
      details: "Design and development of the HQM application (Hubicus Quality Monitoring) — React/TypeScript interfaces, Node.js APIs, AI evaluation pipeline and continuous deployment.",
      responsibilities: [
        "Integrated Figma mockups into interactive, responsive React components aligned with the HQM design system.",
        "Built a documented design system with Storybook, standardizing React components for consistency and reuse across HQM.",
        "Designed a dynamic form engine to configure custom evaluation grids per channel (calls, chats).",
        "Developed a multimedia workspace with a synchronized interface (React / Redux Toolkit), custom audio player and integrated chat history.",
        "Implemented draft management via Redis with auto-save and form caching to prevent data loss.",
        "Designed and built REST APIs (Node.js / Express) for evaluation submission, retrieval and management — with validation, error handling and route security — enabling regression-free integration that standardized the evaluation process and significantly improved supervisor ergonomics.",
        "Integrated an AI evaluation pipeline combining speech-to-text and NLP/LLM (Mistral) via Node.js to analyze interactions and auto-fill scoring grids.",
        "Set up asynchronous orchestration (RabbitMQ) with a message-oriented architecture to delegate audio transcription and semantic analysis to background workers — drastically reducing analysis time and enabling ingestion of thousands of simultaneous calls and chats without impacting HQM performance.",
        "Built dynamic, interactive dashboards (Chart.js / ECharts) to visualize KPIs directly within HQM.",
        "Developed optimized Node.js APIs to filter and cross-reference large data volumes (evaluations by team, supervisor, agent, period).",
        "Set up comparative metrics between manual and AI evaluations to measure productivity gains, providing real-time team performance views and a concrete ROI demonstration for stakeholders.",
        "Investigated and resolved critical production bugs across the evaluation module, AI pipeline and dashboards — reducing incidents and maintaining high availability for business teams.",
        "Implemented end-to-end tests with Cypress for critical user flows (evaluation submission, AI scoring) to prevent regressions during deployments.",
        "Integrated an interactive user guide (Shepherd.js) with step-by-step tours covering module descriptions, button roles and contextual navigation — enabling autonomous onboarding and reducing recurring support questions.",
        "Collaborated with DevOps to improve Docker configurations (Dockerfiles, image adjustments, build pipeline optimization), reducing build times and stabilizing dev and production environments."
      ],
      stack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express", "Prisma", "RabbitMQ", "Redis", "Docker", "LLM/Mistral", "GitLab CI", "Jest/Vitest", "Cypress", "Storybook", "Shepherd.js"],
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
