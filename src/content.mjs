// Single source of site copy. Every text field is { en, fr }.
// Facts come only from PORTFOLIO_DATA.md. Do not add numbers that are not there.

export const site = {
  url: "https://mouhibbahri.github.io",
  name: "Mouhib Bahri",
  email: "mouhib.bahri.se@gmail.com",
  github: "https://github.com/MouhibBahri",
  linkedin: "https://www.linkedin.com/in/mouhib-bahri",
};

export const ui = {
  title: { en: "Mouhib Bahri | Software Engineer, AI agents and distributed systems", fr: "Mouhib Bahri | Ingénieur logiciel, agents IA et systèmes distribués" },
  description: {
    en: "Software engineer building AI agent systems and the backend infrastructure under them: persistent memory, multi-tenancy, observability and distributed storage.",
    fr: "Ingénieur logiciel : je conçois des systèmes d’agents IA et l’infrastructure backend qui les porte, mémoire persistante, multi-tenant, observabilité et stockage distribué.",
  },
  skip: { en: "Skip to content", fr: "Aller au contenu" },
  nav: {
    about: { en: "About", fr: "Profil" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    education: { en: "Education", fr: "Formation" },
    contact: { en: "Contact", fr: "Contact" },
  },
  menu: { en: "Menu", fr: "Menu" },
  close: { en: "Close", fr: "Fermer" },
  themeToggle: { en: "Toggle light and dark theme", fr: "Basculer entre thème clair et sombre" },
  langLabel: { en: "Language", fr: "Langue" },
  getInTouch: { en: "Get in touch", fr: "Me contacter" },
  seeProjects: { en: "See projects", fr: "Voir les projets" },
  companyProject: { en: "Company project, source not public", fr: "Projet d’entreprise, code non public" },
  capstone: { en: "University capstone", fr: "Projet de synthèse universitaire" },
  universityProject: { en: "University project", fr: "Projet universitaire" },
  freelance: { en: "Freelance", fr: "Freelance" },
  howItWorks: { en: "How it works", fr: "Fonctionnement" },
  result: { en: "Result", fr: "Résultat" },
  moreProjects: { en: "More projects", fr: "Autres projets" },
  viewRepo: { en: "Repository", fr: "Dépôt" },
  visitSite: { en: "Live site", fr: "Site" },
  copyEmail: { en: "Copy email", fr: "Copier l’e-mail" },
  copied: { en: "Copied", fr: "Copié" },
  backToTop: { en: "Back to top", fr: "Haut de page" },
  role: { en: "Role", fr: "Rôle" },
  when: { en: "When", fr: "Période" },
  team: { en: "Team", fr: "Équipe" },
  certifications: { en: "Certifications", fr: "Certifications" },
  spoken: { en: "Spoken languages", fr: "Langues parlées" },
  howIWork: { en: "How I work", fr: "Ma façon de travailler" },
  interests: { en: "Interests", fr: "Centres d’intérêt" },
  remote: { en: "Remote", fr: "À distance" },
  footer: { en: "Designed and built by Mouhib Bahri.", fr: "Conçu et développé par Mouhib Bahri." },
  source: { en: "Source", fr: "Code source" },
  notFound: { en: "This page does not exist.", fr: "Cette page n’existe pas." },
  goHome: { en: "Back to the homepage", fr: "Retour à l’accueil" },
};

export const sections = {
  about: { n: "01", title: { en: "About", fr: "Profil" } },
  experience: { n: "02", title: { en: "Experience", fr: "Expérience" } },
  projects: { n: "03", title: { en: "Selected projects", fr: "Projets choisis" } },
  skills: { n: "04", title: { en: "Skills", fr: "Compétences" } },
  education: { n: "05", title: { en: "Education and achievements", fr: "Formation et distinctions" } },
  contact: { n: "06", title: { en: "Contact", fr: "Contact" } },
};

export const hero = {
  status: { en: "Open to an end-of-studies internship from February 2027", fr: "Disponible pour un stage de fin d’études à partir de février 2027" },
  role: { en: "Software Engineer, AI agents and distributed systems", fr: "Ingénieur logiciel, agents IA et systèmes distribués" },
  pitch: {
    en: "I build AI agent systems and the backend infrastructure under them: persistent memory, multi-tenancy, observability and distributed storage.",
    fr: "Je conçois des systèmes d’agents IA et l’infrastructure backend qui les porte : mémoire persistante, multi-tenant, observabilité et stockage distribué.",
  },
  sub: {
    en: "Final-year Software Engineering student at INSAT, graduating in 2027.",
    fr: "Élève ingénieur en dernière année de génie logiciel à l’INSAT, diplôme en 2027.",
  },
  figCaption: { en: "Fig. 0  The stack I work on", fr: "Fig. 0  La pile sur laquelle je travaille" },
  layers: [
    { k: "agents", label: { en: "Agent runtime", fr: "Runtime d’agents" }, note: { en: "tools, schedules, sub-agents", fr: "outils, tâches planifiées, sous-agents" } },
    { k: "memory", label: { en: "Persistent memory", fr: "Mémoire persistante" }, note: { en: "vector recall, decay, feedback", fr: "rappel vectoriel, décroissance, feedback" } },
    { k: "tenancy", label: { en: "Multi-tenancy", fr: "Multi-tenant" }, note: { en: "tenant-scoped data access", fr: "accès aux données par tenant" } },
    { k: "obs", label: { en: "Observability", fr: "Observabilité" }, note: { en: "traces, logs, session replay", fr: "traces, logs, session replay" } },
    { k: "storage", label: { en: "Distributed storage", fr: "Stockage distribué" }, note: { en: "replication, fault tolerance", fr: "réplication, tolérance aux pannes" } },
  ],
};

export const stats = [
  { v: "690+", l: { en: "commits on a production platform", fr: "commits sur une plateforme en production" } },
  { v: "100+", l: { en: "merged pull requests", fr: "pull requests fusionnées" } },
  { v: "90+", l: { en: "municipalities and companies on that platform", fr: "communes et entreprises sur cette plateforme" } },
  { v: "4", l: { en: "other agents reuse my memory system", fr: "autres agents réutilisent ma mémoire d’agent" } },
  { v: "Top 15", l: { en: "TCPC 2024 programming contest", fr: "concours de programmation TCPC 2024" } },
  { v: "2+ yrs", vfr: "2+ ans", l: { en: "of internship and part-time engineering", fr: "de stages et de travail à temps partiel" } },
];

export const about = {
  bio: {
    en: "Final-year Software Engineering student at INSAT with two-plus years of internship and part-time experience building production systems, across AI agent engineering, full-stack web, blockchain, DevOps and distributed systems. I am drawn to problems with real technical depth, where I can research, design and own a solution rather than implement a spec. I work mostly in TypeScript and C++, and my sweet spot is backend and systems work with enough full-stack range to ship end to end.",
    fr: "Élève ingénieur en dernière année de génie logiciel à l’INSAT, avec plus de deux ans de stages et de travail à temps partiel sur des systèmes en production : agents IA, web full-stack, blockchain, DevOps et systèmes distribués. J’aime les problèmes qui ont une vraie profondeur technique, où je peux chercher, concevoir et porter une solution plutôt qu’appliquer un cahier des charges. Je travaille surtout en TypeScript et en C++. Mon terrain de prédilection est le backend et les systèmes, avec assez de polyvalence full-stack pour livrer de bout en bout.",
  },
  origin: {
    en: "I started in competitive programming (C++), which built my fluency in algorithms and data structures. My strongest instincts are architectural: I read the papers and the documentation first, then design the system properly.",
    fr: "J’ai commencé par la programmation compétitive (C++), qui m’a donné l’aisance en algorithmique et en structures de données. Mon réflexe le plus fort est architectural : je lis d’abord les papiers et la documentation, puis je conçois le système correctement.",
  },
  work: [
    { en: "Reads the docs and the papers before writing code.", fr: "Lire la documentation et les papiers avant d’écrire du code." },
    { en: "Owns ambiguous problems that have no existing template.", fr: "Prendre en main des problèmes flous, sans modèle existant." },
    { en: "Backend and systems first, with real full-stack range.", fr: "Backend et systèmes d’abord, avec une vraie polyvalence full-stack." },
    { en: "Code review, unit tests and Agile Scrum as daily practice.", fr: "Revue de code, tests unitaires et Scrum au quotidien." },
  ],
  interests: ["AI agents", "Agent memory", "RAG", "Distributed systems", "Backend architecture", "Observability", "Blockchain / Web3", "DevOps"],
  interestsFr: ["Agents IA", "Mémoire d’agent", "RAG", "Systèmes distribués", "Architecture backend", "Observabilité", "Blockchain / Web3", "DevOps"],
};

// Experience, grouped by company.
export const experience = [
  {
    company: "Twigbit Technologies GmbH",
    mono: "Tw",
    place: { en: "Berlin, Germany · Remote", fr: "Berlin, Allemagne · À distance" },
    span: { en: "Jul 2025 – Oct 2026", fr: "juil. 2025 – oct. 2026" },
    roles: [
      {
        title: { en: "Software Engineer (Part-Time)", fr: "Ingénieur logiciel (temps partiel)" },
        dates: { en: "Oct 2025 – Oct 2026", fr: "oct. 2025 – oct. 2026" },
        summary: {
          en: "Two tracks: the 2zero sustainability platform, used by 90+ municipalities and companies, and a large client’s website redesign.",
          fr: "Deux volets : la plateforme de développement durable 2zero, utilisée par plus de 90 communes et entreprises, et la refonte du site d’un grand client.",
        },
        metrics: ["690+ commits", "100+ merged PRs", "20+ PRs reviewed"],
        metricsFr: ["690+ commits", "100+ PR fusionnées", "20+ PR relues"],
        points: [
          { en: "Built 10+ pages and 50+ features of the 2zero web app, from the UI to the Next.js API routes that adapt the existing backend.", fr: "Développé plus de 10 pages et 50 fonctionnalités de l’application web 2zero, de l’interface aux routes API Next.js qui adaptent le backend existant." },
          { en: "Architected the OTP authentication: access and refresh tokens, email verification, Redis-backed rate limiting.", fr: "Conçu l’authentification OTP : jetons d’accès et de rafraîchissement, vérification d’e-mail, limitation de débit sur Redis." },
          { en: "Led the PostHog and OpenTelemetry integration, then used traces and session replay to diagnose 7 production issues.", fr: "Mené l’intégration PostHog et OpenTelemetry, puis diagnostiqué 7 incidents de production grâce aux traces et au session replay." },
          { en: "On the redesign team, built LLM agents that let the client’s marketers create design components from a prompt, through a headless CMS exposed over MCP with OAuth.", fr: "Dans l’équipe de refonte, développé des agents LLM qui permettent au marketing du client de créer des composants à partir d’un prompt, via un CMS headless exposé en MCP avec OAuth." },
        ],
        tags: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Redis", "Tinybird", "PostHog", "OpenTelemetry", "Python", "Django", "MCP"],
      },
      {
        title: { en: "Software Engineer Intern, AI and Automation", fr: "Stagiaire ingénieur logiciel, IA et automatisation" },
        dates: { en: "Jul 2026 – Sep 2026", fr: "juil. 2026 – sept. 2026" },
        summary: {
          en: "Full time in the company’s core TypeScript agent monorepo, as its largest contributor by commits over the period.",
          fr: "À temps plein dans le monorepo TypeScript des agents de l’entreprise, dont j’ai été le premier contributeur en commits sur la période.",
        },
        metrics: ["154 commits", "16+ reviewed PRs merged"],
        metricsFr: ["154 commits", "16+ PR relues et fusionnées"],
        points: [
          { en: "Designed the persistent agent memory system, later adopted by 4 other agents.", fr: "Conçu le système de mémoire persistante des agents, adopté ensuite par 4 autres agents." },
          { en: "Built Woodpecker, a multi-tenant content-marketing agent, from an empty folder.", fr: "Développé Woodpecker, un agent multi-tenant de content marketing, à partir d’un dossier vide." },
          { en: "Shipped Twig, a Slack agent that collects each teammate’s daily work log into Notion.", fr: "Livré Twig, un agent Slack qui collecte le compte rendu quotidien de chaque membre de l’équipe dans Notion." },
          { en: "Built shared packages: email-OTP sign-in with Argon2id, transactional email, a vector column type.", fr: "Développé des packages partagés : connexion par OTP e-mail avec Argon2id, e-mails transactionnels, type de colonne vectorielle." },
        ],
        tags: ["TypeScript", "Next.js", "Turso", "Drizzle", "Vercel AI SDK", "eve", "Slack API", "Notion API"],
      },
      {
        title: { en: "Software Engineer Intern", fr: "Stagiaire ingénieur logiciel" },
        dates: { en: "Jul 2025 – Sep 2025", fr: "juil. 2025 – sept. 2025" },
        summary: {
          en: "A residential CO2 calculator, shipped as a production Next.js app and a reusable monorepo package.",
          fr: "Un calculateur de CO2 résidentiel, livré en production avec Next.js et en package réutilisable du monorepo.",
        },
        metrics: ["40+ formulas", "12 retrofit models"],
        metricsFr: ["40+ formules", "12 modèles de rénovation"],
        points: [
          { en: "Researched and modeled energy and financial formulas: HVAC sizing, hourly PV simulation on PVGIS data, ROI and payback.", fr: "Recherché et modélisé des formules énergétiques et financières : dimensionnement CVC, simulation PV horaire sur données PVGIS, ROI et retour sur investissement." },
          { en: "Built retrofit models with cost-benefit analysis and amortization schedules, from solar panels to insulation.", fr: "Construit des modèles de rénovation avec analyse coûts-bénéfices et plans d’amortissement, des panneaux solaires à l’isolation." },
        ],
        tags: ["Next.js", "TypeScript"],
      },
    ],
  },
  {
    company: "Axess Logistique",
    mono: "Ax",
    place: { en: "Part-time", fr: "Temps partiel" },
    span: { en: "Nov 2024 – Mar 2025", fr: "nov. 2024 – mars 2025" },
    roles: [
      {
        title: { en: "Full-Stack Developer (Part-Time)", fr: "Développeur full-stack (temps partiel)" },
        dates: { en: "Nov 2024 – Mar 2025", fr: "nov. 2024 – mars 2025" },
        summary: { en: "A B2B delivery platform, in a startup environment.", fr: "Une plateforme de livraison B2B, dans un environnement startup." },
        metrics: ["165+ commits", "40+ PRs", "2M+ MySQL records"],
        metricsFr: ["165+ commits", "40+ PR", "2M+ lignes MySQL"],
        points: [
          { en: "Refactored legacy Symfony code for performance and managed the MySQL databases.", fr: "Refactoré du code Symfony historique pour les performances et administré les bases MySQL." },
          { en: "Worked directly with 10+ business users, from chefs to finance staff, on requirements and fixes.", fr: "Travaillé directement avec plus de 10 utilisateurs métier, des chefs à la finance, sur les besoins et les correctifs." },
          { en: "Maintained the Cloudways servers over SSH, with a test server before every production deploy.", fr: "Maintenu les serveurs Cloudways en SSH, avec un serveur de test avant chaque mise en production." },
        ],
        tags: ["Symfony", "MySQL", "Twig", "Tailwind CSS", "Linux"],
      },
    ],
  },
  {
    company: "Prima Pub",
    mono: "Pp",
    place: { en: "Remote", fr: "À distance" },
    span: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
    roles: [
      {
        title: { en: "Full-Stack Developer Intern", fr: "Stagiaire développeur full-stack" },
        dates: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
        summary: { en: "An eCommerce platform, built in 6 weeks, then extended with an admin dashboard.", fr: "Une plateforme e-commerce construite en 6 semaines, puis complétée par un tableau de bord d’administration." },
        metrics: ["100 PageSpeed desktop", "96 mobile"],
        metricsFr: ["100 PageSpeed desktop", "96 mobile"],
        points: [
          { en: "Server-side rendering and incremental static generation for 92 SEO, 92 accessibility, 100 best practices.", fr: "Rendu serveur et génération statique incrémentale : 92 en SEO, 92 en accessibilité, 100 en bonnes pratiques." },
          { en: "NextAuth.js with JWT-based role access.", fr: "NextAuth.js avec contrôle d’accès par rôle basé sur JWT." },
        ],
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      },
    ],
  },
  {
    company: "Junior Enterprise INSAT",
    mono: "JE",
    place: { en: "Student association", fr: "Association étudiante" },
    span: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
    roles: [
      {
        title: { en: "Backend Developer Intern", fr: "Stagiaire développeur backend" },
        dates: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
        summary: { en: "The backend of a financial management dashboard.", fr: "Le backend d’un tableau de bord de gestion financière." },
        metrics: ["15+ endpoints", "3 sprints"],
        metricsFr: ["15+ endpoints", "3 sprints"],
        points: [
          { en: "Designed the API with DTOs and validation, documented in Swagger, with caching for large financial datasets.", fr: "Conçu l’API avec DTO et validation, documentée avec Swagger, avec mise en cache des gros volumes financiers." },
        ],
        tags: ["NestJS", "MySQL", "TypeORM", "Swagger"],
      },
    ],
  },
];

export const featured = [
  {
    id: "memory",
    fig: "memory",
    title: { en: "Persistent AI agent memory", fr: "Mémoire persistante pour agents IA" },
    kind: "company",
    meta: { en: ["Jul 2026", "Designer and builder", "Twigbit"], fr: ["juil. 2026", "Conception et réalisation", "Twigbit"] },
    line: {
      en: "Cross-session, self-tuning RAG memory for a production agent. It improves with use and fades when stale.",
      fr: "Une mémoire RAG inter-sessions et auto-ajustée pour un agent en production. Elle s’améliore à l’usage et s’efface quand elle vieillit.",
    },
    points: [
      { en: "1024-d embeddings, int8-quantized into libSQL F8_BLOB columns through a custom Drizzle type.", fr: "Embeddings de 1024 dimensions, quantifiés en int8 dans des colonnes libSQL F8_BLOB via un type Drizzle sur mesure." },
      { en: "Ranked by (1 − d) × 0.95^days, plus automatic injection of the top memories at session start.", fr: "Classement par (1 − d) × 0,95^jours, plus injection automatique des meilleurs souvenirs en début de session." },
      { en: "Weights tuned by agent feedback (EWMA, α = 0.3) and a nightly decay with a ~69-day half-life.", fr: "Poids ajustés par le feedback de l’agent (EWMA, α = 0,3) et décroissance nocturne, demi-vie d’environ 69 jours." },
      { en: "Nightly garbage collection, and recalled memories are treated as data, never as commands.", fr: "Nettoyage nocturne, et les souvenirs rappelés sont traités comme des données, jamais comme des commandes." },
    ],
    result: { en: "Adopted as the memory model for 4 other agents at the company.", fr: "Adopté comme modèle de mémoire par 4 autres agents de l’entreprise." },
    tags: ["TypeScript", "Turso / libSQL", "Drizzle", "eve", "Vercel AI SDK", "RAG"],
  },
  {
    id: "ddr",
    fig: "chain",
    title: { en: "Distributed Dataset Repository", fr: "Distributed Dataset Repository" },
    kind: "capstone",
    repo: "https://github.com/Amir-Mallek/Distributed-Dataset-Repository",
    meta: { en: ["Feb – May 2026", "Team of 4", "~31% of hand-written code"], fr: ["févr. – mai 2026", "Équipe de 4", "~31 % du code écrit à la main"] },
    line: {
      en: "A replicated chunk store for AI datasets in Go and gRPC, inspired by the Google File System and designed for 50+ GB datasets.",
      fr: "Un stockage de chunks répliqués pour datasets IA, en Go et gRPC, inspiré du Google File System et conçu pour des datasets de plus de 50 Go.",
    },
    points: [
      { en: "64 MiB chunks streamed in 1 MiB CRC32-checked blocks, replication factor 3 via chain replication.", fr: "Chunks de 64 Mio envoyés en blocs de 1 Mio vérifiés par CRC32, facteur de réplication 3 en chaîne." },
      { en: "I built the master’s failure handling: heartbeats every 10 s, a 15 s timeout, automatic re-replication.", fr: "J’ai réalisé la gestion des pannes du master : heartbeat toutes les 10 s, timeout de 15 s, re-réplication automatique." },
      { en: "Chained acks: fsync, wait for downstream, seal, ack upstream. A client ack means every replica persisted.", fr: "Acquittements en chaîne : fsync, attente de l’aval, scellement, ack vers l’amont. Un ack client garantit que toutes les répliques sont persistées." },
      { en: "A failure-injection suite kills a node and corrupts a chunk in Docker, then checks the rebuilt copy’s SHA-256.", fr: "Une suite d’injection de pannes tue un nœud et corrompt un chunk dans Docker, puis vérifie le SHA-256 de la copie reconstruite." },
    ],
    result: { en: "Presented to course faculty. Team: Amir Mallek, Roua Ayadi, Moncef Koubaa and me.", fr: "Présenté aux enseignants du cours. Équipe : Amir Mallek, Roua Ayadi, Moncef Koubaa et moi." },
    tags: ["Go", "gRPC", "Protocol Buffers", "BoltDB", "Docker Compose"],
  },
  {
    id: "woodpecker",
    fig: "pipeline",
    title: { en: "Woodpecker, a content-marketing agent", fr: "Woodpecker, agent de content marketing" },
    kind: "company",
    meta: { en: ["Jul – Sep 2026", "Built end to end", "~13k-line PR"], fr: ["juil. – sept. 2026", "Réalisé de bout en bout", "PR d’environ 13k lignes"] },
    line: {
      en: "A multi-tenant agent that watches the market, proposes ideas, plans per channel and drafts source-grounded posts.",
      fr: "Un agent multi-tenant qui surveille le marché, propose des idées, planifie par canal et rédige des posts ancrés dans leurs sources.",
    },
    points: [
      { en: "About 20 tools, with a nightly sweep over 8 signal sources scored 0 to 1 against each tenant’s ideal customers.", fr: "Une vingtaine d’outils, dont une veille nocturne sur 8 types de sources, notées de 0 à 1 selon les clients cibles de chaque tenant." },
      { en: "Tenancy enforced in 13 repositories at the data-access boundary, so a query cannot forget it.", fr: "Isolation des tenants appliquée dans 13 repositories, au niveau de l’accès aux données : aucune requête ne peut l’oublier." },
      { en: "A Next.js app with posts, calendar and review, plus an agent chat that survives a page refresh.", fr: "Une application Next.js avec posts, calendrier et relecture, et un chat d’agent qui survit à un rafraîchissement." },
    ],
    tags: ["TypeScript", "Next.js", "eve", "Turso", "Drizzle", "Vercel AI SDK"],
  },
  {
    id: "2zero",
    fig: "observe",
    title: { en: "2zero web platform", fr: "Plateforme web 2zero" },
    kind: "company",
    site: "https://2zero.earth",
    meta: { en: ["Oct 2025 – Oct 2026", "Core web developer", "90+ organizations"], fr: ["oct. 2025 – oct. 2026", "Développeur web principal", "90+ organisations"] },
    line: {
      en: "A production sustainability platform. I was one of the main developers of its web version from day one.",
      fr: "Une plateforme de développement durable en production. J’ai été l’un des principaux développeurs de sa version web dès le premier jour.",
    },
    points: [
      { en: "10+ pages and 50+ features, from community moderation to a Leaflet map and leaderboards.", fr: "Plus de 10 pages et 50 fonctionnalités, de la modération communautaire à une carte Leaflet et des classements." },
      { en: "OTP authentication, and logs and traces sent over OTLP to PostHog, with readable production stack traces.", fr: "Authentification OTP, logs et traces envoyés en OTLP vers PostHog, avec des stack traces lisibles en production." },
      { en: "Date handling migrated to the Temporal API for timezone-correct countdowns and leaderboards.", fr: "Gestion des dates migrée vers l’API Temporal, pour des comptes à rebours et classements justes quel que soit le fuseau." },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tinybird", "PostHog", "OpenTelemetry"],
  },
];

export const more = [
  { glyph: "agent", kind: "company", date: "2026", title: { en: "AI agents for a client’s website", fr: "Agents IA pour le site d’un client" }, line: { en: "LLM agents that create A/B-tested design components through a headless CMS exposed over MCP, behind OAuth.", fr: "Des agents LLM qui créent des composants testés en A/B via un CMS headless exposé en MCP, derrière OAuth." }, tags: ["Python", "Django", "MCP", "OAuth"] },
  { glyph: "chain", kind: "university", date: { en: "Mar – May 2025", fr: "mars – mai 2025" }, title: { en: "Decentralized crowdfunding dApp", fr: "dApp de crowdfunding décentralisé" }, line: { en: "Gasless wallet sign-in, campaign metadata on IPFS and milestone-based fund release on chain. Team of 3.", fr: "Connexion wallet sans gas, métadonnées sur IPFS et déblocage des fonds par jalons on-chain. Équipe de 3." }, tags: ["Solidity", "Foundry", "NestJS", "MongoDB", "React", "Ethers.js"] },
  { glyph: "clock", kind: "company", date: "2026", title: { en: "Twig, the Slack work-log agent", fr: "Twig, l’agent de suivi sur Slack" }, line: { en: "A 15-minute cron matches each user’s reminder time and time zone for stateless, at-most-once delivery. Used by a team of 5.", fr: "Un cron de 15 minutes compare l’heure de rappel et le fuseau de chacun, pour un envoi sans état et au plus une fois. Utilisé par une équipe de 5." }, tags: ["TypeScript", "eve", "Slack API", "Notion API"] },
  { glyph: "sun", kind: "company", date: "2025", title: { en: "Residential CO2 calculator", fr: "Calculateur de CO2 résidentiel" }, line: { en: "40+ energy and financial formulas, hourly PV simulation and 12 retrofit models, packaged for the monorepo.", fr: "Plus de 40 formules énergétiques et financières, simulation PV horaire et 12 modèles de rénovation, en package du monorepo." }, tags: ["Next.js", "TypeScript"] },
  { glyph: "pulse", kind: "freelance", date: { en: "Jan – Dec 2025", fr: "janv. – déc. 2025" }, title: { en: "Patient tracking platform", fr: "Plateforme de suivi de patients" }, line: { en: "A healthcare application built for thousands of patient records, covered by 30+ unit, functional and integration tests.", fr: "Une application de santé conçue pour des milliers de dossiers patients, couverte par plus de 30 tests unitaires, fonctionnels et d’intégration." }, tags: ["NestJS", "MySQL", "React"] },
  { glyph: "gauge", kind: "university", date: { en: "Dec 2024", fr: "déc. 2024" }, title: { en: "Website runtime monitoring API", fr: "API de monitoring de sites web" }, line: { en: "Real-time performance tracking, with Strategy and Singleton patterns for scalable notifications.", fr: "Suivi des performances en temps réel, avec les patterns Strategy et Singleton pour des notifications évolutives." }, tags: ["C#", ".NET", "MySQL"] },
  { glyph: "ledger", kind: "jei", date: { en: "Aug – Oct 2024", fr: "août – oct. 2024" }, title: { en: "Financial management dashboard backend", fr: "Backend de tableau de bord financier" }, line: { en: "15+ Swagger-documented endpoints with caching for large financial datasets.", fr: "Plus de 15 endpoints documentés avec Swagger, avec cache pour les gros volumes financiers." }, tags: ["NestJS", "MySQL", "TypeORM"] },
  { glyph: "cart", kind: "prima", date: { en: "Aug – Oct 2024", fr: "août – oct. 2024" }, title: { en: "eCommerce platform", fr: "Plateforme e-commerce" }, line: { en: "Built in 6 weeks, with 100 desktop and 96 mobile PageSpeed performance.", fr: "Construite en 6 semaines, avec 100 en desktop et 96 en mobile sur PageSpeed." }, tags: ["Next.js", "Prisma", "PostgreSQL"] },
];

export const kinds = {
  company: { en: "Company project", fr: "Projet d’entreprise" },
  university: { en: "University project", fr: "Projet universitaire" },
  freelance: { en: "Freelance", fr: "Freelance" },
  jei: { en: "Junior Enterprise INSAT", fr: "Junior Entreprise INSAT" },
  prima: { en: "Prima Pub", fr: "Prima Pub" },
};

export const skills = [
  { g: { en: "Languages", fr: "Langages" }, items: ["TypeScript / JavaScript", "C++", "Go", "Python", "Solidity", "Java", "C#", "SQL"] },
  { g: { en: "AI and agents", fr: "IA et agents" }, items: ["RAG", "Vector search and embeddings", "LLM agents", "Agent memory systems", "MCP", "OAuth for agents", "LLM-driven pipelines", "eve", "Vercel AI SDK", "Efficient LLM customization", "Claude Code"], itemsFr: ["RAG", "Recherche vectorielle et embeddings", "Agents LLM", "Mémoire d’agent", "MCP", "OAuth pour agents", "Pipelines pilotés par LLM", "eve", "Vercel AI SDK", "Personnalisation efficace de LLM", "Claude Code"] },
  { g: { en: "Backend", fr: "Backend" }, items: ["NestJS", "Next.js API routes", "Django", "gRPC", "REST", "OAuth", "Symfony", ".NET"] },
  { g: { en: "Frontend", fr: "Frontend" }, items: ["Next.js (App Router, RSC)", "React", "Nuxt.js", "Tailwind CSS"] },
  { g: { en: "Databases", fr: "Bases de données" }, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Turso / libSQL", "Tinybird", "Drizzle ORM", "TypeORM", "Prisma"] },
  { g: { en: "Distributed systems", fr: "Systèmes distribués" }, items: ["Replication and fault tolerance", "gRPC and Protocol Buffers", "Event-driven architecture", "Lambda architecture"], itemsFr: ["Réplication et tolérance aux pannes", "gRPC et Protocol Buffers", "Architecture événementielle", "Architecture Lambda"] },
  { g: { en: "Blockchain / Web3", fr: "Blockchain / Web3" }, items: ["Solidity", "Foundry", "Ethers.js", "IPFS", "Smart contract deployment"], itemsFr: ["Solidity", "Foundry", "Ethers.js", "IPFS", "Déploiement de smart contracts"] },
  { g: { en: "DevOps and observability", fr: "DevOps et observabilité" }, items: ["Docker", "CI/CD", "Vercel", "Linux and SSH", "Cloudways", "OpenTelemetry", "PostHog", "Prometheus and Grafana"], itemsFr: ["Docker", "CI/CD", "Vercel", "Linux et SSH", "Cloudways", "OpenTelemetry", "PostHog", "Prometheus et Grafana"] },
  { g: { en: "Algorithms", fr: "Algorithmique" }, items: ["Graph algorithms", "Sliding window", "Prefix sums", "Two pointers", "Trees", "Contest-honed C++"], itemsFr: ["Algorithmes de graphes", "Fenêtre glissante", "Sommes préfixes", "Deux pointeurs", "Arbres", "C++ de compétition"] },
  { g: { en: "Practices", fr: "Pratiques" }, items: ["Agile Scrum", "Git", "Code review", "System design", "Design patterns", "OOP", "Unit, integration and E2E testing", "Swagger / OpenAPI"], itemsFr: ["Scrum", "Git", "Revue de code", "Conception de systèmes", "Design patterns", "POO", "Tests unitaires, d’intégration et E2E", "Swagger / OpenAPI"] },
];

export const spoken = [
  { l: { en: "English", fr: "Anglais" }, v: { en: "Advanced", fr: "Avancé" } },
  { l: { en: "French", fr: "Français" }, v: { en: "Intermediate, B1/B2", fr: "Intermédiaire, B1/B2" } },
  { l: { en: "German", fr: "Allemand" }, v: { en: "Beginner, A1", fr: "Débutant, A1" } },
];

export const education = {
  degree: { en: "National Engineering Diploma, Software Engineering", fr: "Diplôme national d’ingénieur, génie logiciel" },
  school: { en: "INSAT, National Institute of Applied Science and Technology", fr: "INSAT, Institut National des Sciences Appliquées et de Technologie" },
  dates: { en: "2022 – 2027 · expected December 2027", fr: "2022 – 2027 · diplôme prévu en décembre 2027" },
  line: {
    en: "Five-year program, equivalent to a Bachelor’s plus a Master’s. Mathematics and physics foundation, then software engineering, AI and deep learning, blockchain, security and Scrum.",
    fr: "Cursus de cinq ans, équivalent licence plus master. Socle de mathématiques et de physique, puis génie logiciel, IA et deep learning, blockchain, sécurité et Scrum.",
  },
  capstone: { en: "Capstone: Distributed Dataset Repository", fr: "Projet de synthèse : Distributed Dataset Repository" },
  certs: [
    { n: "React Basics", by: "Meta" },
    { n: "Efficient Large Language Model (LLM) Customization", by: "" },
  ],
};

export const achievements = [
  { v: "Top 15", t: { en: "TCPC 2024, collegiate programming contest", fr: "TCPC 2024, concours universitaire de programmation" } },
  { v: "Top 10", t: { en: "Consistently, in national programming contests, Sep to Dec 2024", fr: "De façon régulière, aux concours nationaux de programmation, sept. à déc. 2024" } },
  { v: "#1", t: { en: "Contributor by commits to the core agent monorepo during the 2026 internship", fr: "Contributeur en commits du monorepo des agents pendant le stage 2026" } },
  { v: "4", t: { en: "Company agents adopted the memory system I designed", fr: "Agents de l’entreprise ont adopté le système de mémoire que j’ai conçu" } },
  { v: "7", t: { en: "Production issues diagnosed with PostHog and OpenTelemetry", fr: "Incidents de production diagnostiqués avec PostHog et OpenTelemetry" } },
];

export const contact = {
  title: { en: "Let’s talk.", fr: "Parlons-en." },
  line: {
    en: "Open to end-of-studies internships starting February 2027, for 4 to 6 months. If you are building agents or the systems under them, I would like to hear about it.",
    fr: "Je cherche un stage de fin d’études de 4 à 6 mois à partir de février 2027. Si vous construisez des agents ou les systèmes qui les portent, j’aimerais en discuter.",
  },
  facts: [
    { k: { en: "Start", fr: "Début" }, v: { en: "February 2027", fr: "Février 2027" } },
    { k: { en: "Duration", fr: "Durée" }, v: { en: "4 to 6 months", fr: "4 à 6 mois" } },
    { k: { en: "Focus", fr: "Domaines" }, v: { en: "AI agents, backend, distributed systems", fr: "Agents IA, backend, systèmes distribués" } },
  ],
};
