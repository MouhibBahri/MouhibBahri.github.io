// Single source of site copy. Every text field is { en, fr }.
// Facts come only from PORTFOLIO_DATA.md, the owner's feedback, and public pages
// (twigbit.ai, GitHub search). Do not add numbers that are not sourced.

export const site = {
  url: "https://mouhibbahri.github.io",
  name: "Mouhib Bahri",
  email: "mouhib.bahri.se@gmail.com",
  github: "https://github.com/MouhibBahri",
  linkedin: "https://www.linkedin.com/in/mouhib-bahri",
};

export const ui = {
  title: { en: "Mouhib Bahri | Software engineer, AI agents and full-stack", fr: "Mouhib Bahri | Ingénieur logiciel, agents IA et full-stack" },
  description: {
    en: "Mouhib Bahri, software engineering student building reliable systems for intelligent agents. Open to an end-of-studies internship from February 2027.",
    fr: "Mouhib Bahri, élève ingénieur logiciel : des systèmes fiables pour des agents intelligents. Disponible pour un stage de fin d’études dès février 2027.",
  },
  skip: { en: "Skip to content", fr: "Aller au contenu" },
  nav: {
    education: { en: "Education", fr: "Formation" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    contact: { en: "Contact", fr: "Contact" },
  },
  menu: { en: "Menu", fr: "Menu" },
  themeToggle: { en: "Toggle light and dark theme", fr: "Basculer entre thème clair et sombre" },
  langLabel: { en: "Language", fr: "Langue" },
  getInTouch: { en: "Get in touch", fr: "Me contacter" },
  seeProjects: { en: "See projects", fr: "Voir les projets" },
  highlights: { en: "Highlights", fr: "Détails" },
  howItWorks: { en: "How it works", fr: "Fonctionnement" },
  moreProjects: { en: "Other projects", fr: "Autres projets" },
  repo: { en: "Code", fr: "Code" },
  copyEmail: { en: "Copy email", fr: "Copier l’e-mail" },
  copied: { en: "Copied", fr: "Copié" },
  backToTop: { en: "Back to top", fr: "Haut de page" },
  spoken: { en: "Languages", fr: "Langues" },
  footer: { en: "Designed and built by Mouhib Bahri.", fr: "Conçu et développé par Mouhib Bahri." },
  search: {
    placeholder: { en: "Search a skill…", fr: "Rechercher…" },
    label: { en: "Search a skill in experience and projects", fr: "Chercher une compétence dans l’expérience et les projets" },
    open: { en: "Search a skill", fr: "Chercher une compétence" },
    none: { en: "No match", fr: "Aucun résultat" },
    inSkills: { en: "Listed in skills", fr: "Dans les compétences" },
    prev: { en: "Previous match", fr: "Résultat précédent" },
    next: { en: "Next match", fr: "Résultat suivant" },
    clear: { en: "Clear search", fr: "Effacer la recherche" },
    uses: { en: "matches", fr: "résultats" },
    use: { en: "match", fr: "résultat" },
  },
};

export const sections = {
  education: { n: "01", title: { en: "Education", fr: "Formation" } },
  experience: { n: "02", title: { en: "Experience", fr: "Expérience" } },
  projects: { n: "03", title: { en: "Projects", fr: "Projets" } },
  skills: { n: "04", title: { en: "Skills", fr: "Compétences" } },
  contact: { n: "05", title: { en: "Contact", fr: "Contact" } },
};

export const hero = {
  status: { en: "Open to internships · Feb 2027", fr: "Disponible en stage · févr. 2027" },
  role: { en: "SWE student · AI agents & full-stack engineer", fr: "Élève ingénieur logiciel · agents IA & full-stack" },
  slogan: { en: "Building reliable systems for intelligent agents.", fr: "Des systèmes fiables pour des agents intelligents." },
  photoAlt: { en: "Portrait of Mouhib Bahri", fr: "Portrait de Mouhib Bahri" },
};

// Count-up metrics: n = target, pre/suf around it.
// Commits and PRs = 2zero (692 / 104) + AI internship (154 / 16) + Axess (165 / 40)
// + public GitHub since 2022 (218 / 33).
export const stats = [
  { n: 2, suf: "+", l: { en: "years of internships and part-time engineering", fr: "ans de stages et de travail à temps partiel" } },
  { n: 15, pre: "Top ", l: { en: "at the TCPC 2024 programming contest", fr: "au concours de programmation TCPC 2024" } },
  { n: 1200, suf: "+", l: { en: "commits since 2022", fr: "commits depuis 2022" } },
  { n: 190, suf: "+", l: { en: "pull requests", fr: "pull requests" } },
];

export const education = {
  degree: { en: "Engineering degree (Master’s level) in Software Engineering", fr: "Diplôme national d’ingénieur en génie logiciel (niveau master)" },
  school: { en: "National Institute of Applied Science and Technology (INSAT)", fr: "Institut National des Sciences Appliquées et de Technologie (INSAT)" },
  dates: { en: "2022 – expected Dec 2027", fr: "2022 – diplôme prévu en déc. 2027" },
  mono: "IN",
  logo: "insat.webp",
};

const twigbit = {
  company: "twigbit",
  url: "https://www.twigbit.ai/en",
  mono: "Tw",
  logo: "twigbit.webp",
  place: { en: "Berlin · Remote", fr: "Berlin · À distance" },
  about: {
    en: "Berlin software agency that brings AI agents into teams’ daily work and builds the software around them. It also runs 2zero, its own climate-tech platform.",
    fr: "Agence logicielle berlinoise qui intègre des agents IA au travail quotidien des équipes et développe le logiciel autour. Elle porte aussi 2zero, sa propre plateforme climat.",
  },
};

export const experience = [
  {
    ...twigbit,
    title: { en: "Software Engineer (Part-Time)", fr: "Ingénieur logiciel (temps partiel)" },
    logo: "2zero.webp",
    dates: { en: "Oct 2025 – Oct 2026", fr: "oct. 2025 – oct. 2026" },
    extra: [{ label: "2zero.earth", url: "https://2zero.earth" }],
    metrics: [
      { n: 690, suf: "+", l: { en: "commits", fr: "commits" } },
      { n: 100, suf: "+", l: { en: "merged PRs", fr: "PR fusionnées" } },
      { n: 11, l: { en: "months part-time", fr: "mois à temps partiel" } },
    ],
    points: [
      { en: "Built 10+ pages and 50+ features of the 2zero web app, from the UI to the Next.js API routes over the existing backend.", fr: "Développé plus de 10 pages et 50 fonctionnalités de l’app web 2zero, de l’interface aux routes API Next.js sur le backend existant." },
      { en: "Architected the OTP authentication: access and refresh tokens, email verification, Redis rate limiting.", fr: "Conçu l’authentification OTP : jetons d’accès et de rafraîchissement, vérification d’e-mail, limitation de débit Redis." },
      { en: "Led the PostHog and OpenTelemetry rollout, then diagnosed 7 production issues from traces and session replays.", fr: "Mené le déploiement de PostHog et OpenTelemetry, puis diagnostiqué 7 incidents de production via traces et session replays." },
      { en: "Developed LLM agents that let a large client’s marketers create design components from a prompt, through a headless CMS over MCP.", fr: "Développé des agents LLM permettant au marketing d’un grand client de créer des composants depuis un prompt, via un CMS headless en MCP." },
      { en: "Secured the team’s MCP server with OAuth, so external agents get access tokens from the CMS.", fr: "Sécurisé le serveur MCP de l’équipe avec OAuth : les agents externes obtiennent leurs jetons auprès du CMS." },
      { en: "Reviewed 20+ teammate pull requests and wrote unit tests in a Scrum team.", fr: "Relu plus de 20 pull requests et écrit des tests unitaires au sein d’une équipe Scrum." },
    ],
    visible: 3,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "PostHog", "OpenTelemetry", "Python", "Django", "MCP"],
  },
  {
    ...twigbit,
    title: { en: "Software Engineer Intern, AI and Automation", fr: "Stagiaire ingénieur logiciel, IA et automatisation" },
    about: { en: "The company’s own AI agents, built full time in its core TypeScript monorepo.", fr: "Les agents IA internes de l’entreprise, développés à temps plein dans son monorepo TypeScript." },
    dates: { en: "Jul 2026 – Sep 2026", fr: "juil. 2026 – sept. 2026" },
    extra: [{ label: { en: "Woodpecker agent", fr: "Agent Woodpecker" }, url: "https://www.twigbit.ai/en/agents/marketing" }],
    metrics: [
      { n: 154, l: { en: "commits", fr: "commits" } },
      { n: 1, pre: "#", l: { en: "contributor by commits", fr: "contributeur en commits" } },
      { n: 4, l: { en: "agents reuse my memory", fr: "agents réutilisent ma mémoire" } },
    ],
    points: [
      { en: "Designed a persistent memory system that other agents in the company now reuse.", fr: "Conçu un système de mémoire persistante que d’autres agents de l’entreprise réutilisent." },
      { en: "Built Woodpecker, a multi-tenant content-marketing agent, from an empty folder.", fr: "Développé Woodpecker, un agent multi-tenant de content marketing, à partir d’un dossier vide." },
      { en: "Shipped Twig, a Slack agent that logs each teammate’s daily work into Notion.", fr: "Livré Twig, un agent Slack qui consigne le travail quotidien de chacun dans Notion." },
      { en: "Built shared packages: email-OTP sign-in with Argon2id, transactional email, a vector column type.", fr: "Développé des packages partagés : connexion OTP par e-mail avec Argon2id, e-mails transactionnels, type de colonne vectorielle." },
    ],
    visible: 3,
    tags: ["TypeScript", "Next.js", "Turso", "Drizzle", "Vercel AI SDK", "eve", "Slack API", "Notion API"],
  },
  {
    ...twigbit,
    title: { en: "Software Engineer Intern", fr: "Stagiaire ingénieur logiciel" },
    about: { en: "A residential CO2 calculator, shipped as a production app and a reusable monorepo package.", fr: "Un calculateur de CO2 résidentiel, livré en production et en package réutilisable du monorepo." },
    dates: { en: "Jul 2025 – Sep 2025", fr: "juil. 2025 – sept. 2025" },
    metrics: [
      { n: 40, suf: "+", l: { en: "formulas modeled", fr: "formules modélisées" } },
      { n: 12, l: { en: "retrofit models", fr: "modèles de rénovation" } },
    ],
    points: [
      { en: "Modeled the energy and financial formulas: HVAC sizing, hourly PV simulation on PVGIS data, ROI and payback.", fr: "Modélisé les formules énergétiques et financières : dimensionnement CVC, simulation PV horaire sur PVGIS, ROI et retour sur investissement." },
      { en: "Built retrofit models with cost-benefit analysis and amortization schedules, from solar panels to insulation.", fr: "Construit des modèles de rénovation avec analyse coûts-bénéfices et amortissement, des panneaux solaires à l’isolation." },
      { en: "Shipped it as a production Next.js app with formula validation, packaged for the company monorepo.", fr: "Livré en production comme application Next.js avec validation des formules, empaquetée pour le monorepo." },
    ],
    visible: 3,
    tags: ["Next.js", "TypeScript"],
  },
  {
    company: "Axess Logistique",
    mono: "Ax",
    logo: "axess.webp",
    place: { en: "Part-time", fr: "Temps partiel" },
    about: { en: "B2B delivery platform, built in a startup environment.", fr: "Plateforme de livraison B2B, dans un environnement startup." },
    title: { en: "Full-Stack Developer (Part-Time)", fr: "Développeur full-stack (temps partiel)" },
    dates: { en: "Nov 2024 – Mar 2025", fr: "nov. 2024 – mars 2025" },
    metrics: [
      { n: 165, suf: "+", l: { en: "commits", fr: "commits" } },
      { n: 2, suf: "M+", l: { en: "MySQL records managed", fr: "lignes MySQL gérées" } },
    ],
    points: [
      { en: "Refactored legacy Symfony code for performance, across 40+ pull requests.", fr: "Refactoré du code Symfony historique pour les performances, en plus de 40 pull requests." },
      { en: "Gathered requirements and validated features with 10+ business users, from chefs to finance staff.", fr: "Recueilli les besoins et validé les fonctionnalités avec plus de 10 utilisateurs métier, des chefs à la finance." },
      { en: "Maintained the Cloudways servers over SSH, releasing to a test server before production.", fr: "Maintenu les serveurs Cloudways en SSH, avec un serveur de test avant chaque mise en production." },
    ],
    visible: 3,
    tags: ["Symfony", "MySQL", "Twig", "Tailwind CSS", "Linux"],
  },
  {
    company: "Prima Pub",
    mono: "Pp",
    logo: "prima.webp",
    place: { en: "Remote", fr: "À distance" },
    about: { en: "eCommerce platform built for the client in 6 weeks.", fr: "Plateforme e-commerce réalisée pour le client en 6 semaines." },
    title: { en: "Full-Stack Developer Intern", fr: "Stagiaire développeur full-stack" },
    dates: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
    metrics: [
      { n: 100, l: { en: "PageSpeed, desktop", fr: "PageSpeed, desktop" } },
      { n: 96, l: { en: "PageSpeed, mobile", fr: "PageSpeed, mobile" } },
    ],
    points: [
      { en: "Built the platform with server-side rendering and incremental static generation.", fr: "Construit la plateforme avec rendu serveur et génération statique incrémentale." },
      { en: "Implemented role-based access with NextAuth.js and JWT.", fr: "Mis en place l’accès par rôle avec NextAuth.js et JWT." },
      { en: "Extended the engagement with an admin dashboard.", fr: "Prolongé la mission avec un tableau de bord d’administration." },
    ],
    visible: 3,
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    company: "Junior Enterprise INSAT",
    mono: "JE",
    logo: "jeinsat.webp",
    place: { en: "Student association", fr: "Association étudiante" },
    about: { en: "Backend of a financial management dashboard.", fr: "Backend d’un tableau de bord de gestion financière." },
    title: { en: "Backend Developer Intern", fr: "Stagiaire développeur backend" },
    dates: { en: "Aug 2024 – Oct 2024", fr: "août 2024 – oct. 2024" },
    metrics: [
      { n: 15, suf: "+", l: { en: "API endpoints", fr: "endpoints API" } },
      { n: 3, l: { en: "agile sprints", fr: "sprints agiles" } },
    ],
    points: [
      { en: "Designed the API with DTOs and validation, documented in Swagger.", fr: "Conçu l’API avec DTO et validation, documentée avec Swagger." },
      { en: "Added caching for large financial datasets.", fr: "Ajouté un cache pour les gros volumes de données financières." },
    ],
    visible: 3,
    tags: ["NestJS", "MySQL", "TypeORM", "Swagger"],
  },
];

// Featured projects. The first is shown wide.
export const featured = [
  {
    id: "memory",
    fig: "memory",
    title: { en: "Persistent memory for AI agents", fr: "Mémoire persistante pour agents IA" },
    meta: { en: ["Jul 2026", "Designer and builder"], fr: ["juil. 2026", "Conception et réalisation"] },
    line: {
      en: "A cross-session RAG memory for a production agent. It improves with use and fades when stale.",
      fr: "Une mémoire RAG inter-sessions pour un agent en production. Elle s’améliore à l’usage et s’efface quand elle vieillit.",
    },
    points: [
      { en: "1024-d embeddings, int8-quantized into libSQL F8_BLOB columns through a custom Drizzle type.", fr: "Embeddings de 1024 dimensions, quantifiés en int8 dans des colonnes libSQL F8_BLOB via un type Drizzle sur mesure." },
      { en: "Recall ranked by similarity × 0.95^days, plus a hook that injects the top memories at session start.", fr: "Rappel classé par similarité × 0,95^jours, plus un hook qui injecte les meilleurs souvenirs en début de session." },
      { en: "Weights tuned by agent ratings (EWMA, α = 0.3) and a nightly decay with a ~69-day half-life.", fr: "Poids ajustés par les notes de l’agent (EWMA, α = 0,3) et décroissance nocturne, demi-vie d’environ 69 jours." },
      { en: "Nightly garbage collection, and recalled memories are treated as data, never as commands.", fr: "Nettoyage nocturne, et les souvenirs rappelés sont traités comme des données, jamais comme des commandes." },
    ],
    result: { big: "4", text: { en: "other agents adopted it as their memory model", fr: "autres agents l’ont adoptée comme modèle de mémoire" } },
    tags: ["TypeScript", "Turso", "Drizzle", "eve", "Vercel AI SDK", "RAG"],
  },
  {
    id: "ddr",
    fig: "chain",
    title: { en: "Distributed Dataset Repository", fr: "Distributed Dataset Repository" },
    repo: "https://github.com/Amir-Mallek/Distributed-Dataset-Repository",
    meta: { en: ["Feb – May 2026", "Team of 4"], fr: ["févr. – mai 2026", "Équipe de 4"] },
    line: {
      en: "A replicated chunk store for AI datasets in Go and gRPC, inspired by the Google File System.",
      fr: "Un stockage de chunks répliqués pour datasets IA, en Go et gRPC, inspiré du Google File System.",
    },
    points: [
      { en: "Designed for 50+ GB datasets: 64 MiB chunks, 1 MiB CRC32-checked blocks, replication factor 3.", fr: "Conçu pour des datasets de plus de 50 Go : chunks de 64 Mio, blocs de 1 Mio vérifiés par CRC32, facteur de réplication 3." },
      { en: "I built the master’s failure handling: heartbeats, dead-node detection and automatic re-replication.", fr: "J’ai réalisé la gestion des pannes du master : heartbeats, détection des nœuds morts et re-réplication automatique." },
      { en: "Chained acks: fsync, wait for downstream, seal, ack upstream. A client ack means every replica persisted.", fr: "Acks en chaîne : fsync, attente de l’aval, scellement, ack vers l’amont. Un ack client garantit la persistance de toutes les répliques." },
      { en: "A failure-injection suite kills a node, corrupts a chunk, and checks the rebuilt copy’s SHA-256.", fr: "Une suite d’injection de pannes tue un nœud, corrompt un chunk et vérifie le SHA-256 de la copie reconstruite." },
    ],
    team: ["AM", "RA", "MK", "MB"],
    result: { text: { en: "Presented to course faculty. About 31% of the hand-written code is mine.", fr: "Présenté aux enseignants. Environ 31 % du code écrit à la main est de moi." } },
    tags: ["Go", "gRPC", "Protocol Buffers", "BoltDB", "Docker"],
  },
  {
    id: "dapp",
    fig: "dapp",
    title: { en: "Decentralized crowdfunding", fr: "Crowdfunding décentralisé" },
    meta: { en: ["Mar – May 2025", "Team of 3"], fr: ["mars – mai 2025", "Équipe de 3"] },
    line: {
      en: "A full-stack dApp where backers’ funds stay in a smart contract and are released milestone by milestone.",
      fr: "Une dApp full-stack où les fonds des contributeurs restent dans un smart contract et sont libérés jalon par jalon.",
    },
    points: [
      { en: "Gasless wallet sign-in: the backend issues a nonce and the wallet signs it.", fr: "Connexion wallet sans gas : le backend émet un nonce que le wallet signe." },
      { en: "Campaign metadata stored on IPFS, so it cannot change after launch.", fr: "Métadonnées des campagnes stockées sur IPFS, immuables après le lancement." },
      { en: "On-chain, milestone-based fund release written in Solidity and tested with Foundry.", fr: "Libération des fonds par jalons on-chain, écrite en Solidity et testée avec Foundry." },
    ],
    team: ["MB", "+2"],
    result: { text: { en: "Tested and deployed on Ethereum testnets.", fr: "Testée et déployée sur les testnets Ethereum." } },
    tags: ["Solidity", "Foundry", "Ethers.js", "IPFS", "NestJS", "MongoDB", "React"],
  },
  {
    id: "woodpecker",
    fig: "pipeline",
    title: { en: "Woodpecker, a content-marketing agent", fr: "Woodpecker, agent de content marketing" },
    site: { label: "twigbit.ai", url: "https://www.twigbit.ai/en/agents/marketing" },
    meta: { en: ["Jul – Sep 2026", "Built end to end"], fr: ["juil. – sept. 2026", "Réalisé de bout en bout"] },
    line: {
      en: "A multi-tenant agent that watches the market, proposes ideas, plans per channel and drafts posts for review.",
      fr: "Un agent multi-tenant qui surveille le marché, propose des idées, planifie par canal et rédige des posts à relire.",
    },
    points: [
      { en: "About 20 tools, with a nightly sweep over 8 signal sources scored 0 to 1 against each tenant’s ideal customers.", fr: "Une vingtaine d’outils, dont une veille nocturne sur 8 sources notées de 0 à 1 selon les clients cibles de chaque tenant." },
      { en: "Tenant isolation enforced in 13 repositories at the data-access boundary.", fr: "Isolation des tenants appliquée dans 13 repositories, à la frontière d’accès aux données." },
      { en: "A Next.js app with posts, calendar and review, plus an agent chat that survives a page refresh.", fr: "Une app Next.js avec posts, calendrier et relecture, et un chat d’agent qui survit à un rafraîchissement." },
    ],
    result: { big: "13k", text: { en: "lines, merged as a single pull request", fr: "lignes, fusionnées en une seule pull request" } },
    tags: ["TypeScript", "Next.js", "eve", "Turso", "Drizzle", "Vercel AI SDK"],
  },
  {
    id: "2zero",
    fig: "observe",
    title: { en: "2zero web platform", fr: "Plateforme web 2zero" },
    site: { label: "2zero.earth", url: "https://2zero.earth" },
    meta: { en: ["Oct 2025 – Oct 2026", "Core web developer"], fr: ["oct. 2025 – oct. 2026", "Développeur web principal"] },
    line: {
      en: "A production sustainability platform. I was one of the main developers of its web version from day one.",
      fr: "Une plateforme de développement durable en production. J’ai été l’un des principaux développeurs de sa version web dès le premier jour.",
    },
    points: [
      { en: "10+ pages and 50+ features, from community moderation to a Leaflet map and leaderboards.", fr: "Plus de 10 pages et 50 fonctionnalités, de la modération communautaire à une carte Leaflet et des classements." },
      { en: "Logs and traces sent over OTLP to PostHog, with readable production stack traces.", fr: "Logs et traces envoyés en OTLP vers PostHog, avec des stack traces lisibles en production." },
      { en: "Dates migrated to the Temporal API for timezone-correct countdowns and leaderboards.", fr: "Dates migrées vers l’API Temporal, pour des comptes à rebours et classements justes quel que soit le fuseau." },
    ],
    result: { big: "90+", text: { en: "municipalities and companies use it", fr: "communes et entreprises l’utilisent" } },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tinybird", "PostHog", "OpenTelemetry"],
  },
];

export const more = [
  { glyph: "clock", date: "2026", title: { en: "Twig, a Slack work-log agent", fr: "Twig, agent de suivi sur Slack" }, line: { en: "A 15-minute cron matches each user’s reminder time and time zone for stateless, at-most-once delivery. Used by a team of 5.", fr: "Un cron de 15 minutes compare l’heure de rappel et le fuseau de chacun, pour un envoi sans état et au plus une fois. Utilisé par une équipe de 5." }, tags: ["TypeScript", "eve", "Slack API", "Notion API"] },
  { glyph: "pulse", date: { en: "Jan – Dec 2025", fr: "janv. – déc. 2025" }, title: { en: "Patient tracking platform", fr: "Plateforme de suivi de patients" }, line: { en: "A freelance healthcare app built for thousands of patient records, covered by 30+ unit, functional and integration tests.", fr: "Une app de santé en freelance, conçue pour des milliers de dossiers patients et couverte par plus de 30 tests." }, tags: ["NestJS", "MySQL", "React"] },
  { glyph: "gauge", date: { en: "Dec 2024", fr: "déc. 2024" }, title: { en: "Website runtime monitoring API", fr: "API de monitoring de sites web" }, line: { en: "Real-time performance tracking, with Strategy and Singleton patterns for scalable notifications.", fr: "Suivi des performances en temps réel, avec les patterns Strategy et Singleton pour des notifications évolutives." }, tags: ["C#", ".NET", "MySQL"] },
];

export const skills = [
  { icon: "code", g: { en: "Languages", fr: "Langages" }, items: ["TypeScript", "JavaScript", "C++", "Go", "Python", "Solidity", "Java", "C#", "SQL"] },
  { icon: "agent", g: { en: "AI and agents", fr: "IA et agents" }, items: ["LLM agents", "RAG", "Vector search", "Agent memory", "MCP", "OAuth for agents", "eve", "Vercel AI SDK", "LLM customization", "Claude Code"], itemsFr: ["Agents LLM", "RAG", "Recherche vectorielle", "Mémoire d’agent", "MCP", "OAuth pour agents", "eve", "Vercel AI SDK", "Personnalisation de LLM", "Claude Code"] },
  { icon: "server", g: { en: "Backend", fr: "Backend" }, items: ["NestJS", "Next.js", "Django", "gRPC", "REST", "OAuth", "Symfony", ".NET"] },
  { icon: "layout", g: { en: "Frontend", fr: "Frontend" }, items: ["Next.js", "React", "Nuxt.js", "Tailwind CSS"] },
  { icon: "db", g: { en: "Databases", fr: "Bases de données" }, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Turso", "Tinybird", "Drizzle", "TypeORM", "Prisma"] },
  { icon: "nodes", g: { en: "Distributed systems", fr: "Systèmes distribués" }, items: ["Replication", "Fault tolerance", "gRPC", "Protocol Buffers", "Event-driven architecture"], itemsFr: ["Réplication", "Tolérance aux pannes", "gRPC", "Protocol Buffers", "Architecture événementielle"] },
  { icon: "chain", g: { en: "Blockchain", fr: "Blockchain" }, items: ["Solidity", "Foundry", "Ethers.js", "IPFS", "Smart contracts"] },
  { icon: "pulse", g: { en: "DevOps and observability", fr: "DevOps et observabilité" }, items: ["Docker", "CI/CD", "Vercel", "Linux", "OpenTelemetry", "PostHog", "Prometheus", "Grafana"] },
  { icon: "check", g: { en: "Practices", fr: "Pratiques" }, items: ["Code review", "System design", "Design patterns", "Testing", "Agile Scrum", "Git", "Swagger"], itemsFr: ["Revue de code", "Conception de systèmes", "Design patterns", "Tests", "Scrum", "Git", "Swagger"] },
];

export const spoken = [
  { l: { en: "English", fr: "Anglais" }, v: { en: "Advanced", fr: "Avancé" } },
  { l: { en: "French", fr: "Français" }, v: { en: "Intermediate, professional use", fr: "Intermédiaire, usage professionnel" } },
  { l: { en: "German", fr: "Allemand" }, v: { en: "Beginner", fr: "Débutant" } },
];

export const contact = {
  title: { en: "Let’s talk.", fr: "Parlons-en." },
  line: {
    en: "Open to end-of-studies internships starting February 2027, for 4 to 6 months.",
    fr: "Je cherche un stage de fin d’études de 4 à 6 mois à partir de février 2027.",
  },
  facts: [
    { k: { en: "Start", fr: "Début" }, v: { en: "February 2027", fr: "Février 2027" } },
    { k: { en: "Duration", fr: "Durée" }, v: { en: "4 to 6 months", fr: "4 à 6 mois" } },
  ],
};
