/**
 * Tout le texte du site en français vit ici. La version anglaise est dans
 * `content/en.ts`, avec exactement la même structure.
 * Pour une mise à jour de contenu (expérience, projet, CV, coordonnées),
 * modifier ce fichier et son équivalent anglais, et si besoin `public/`.
 *
 * Règle typographique : pas de tiret long dans les textes visibles.
 * Utiliser le tiret simple "-", des virgules, des deux-points ou des points.
 */

export const site = {
  url: "https://portfolio-jeremy-morgan-patole.vercel.app",
  name: "Jérémy-Morgan Patole",
  title: "Chef de projet technique & Data Analyst",
  location: "Paris",
  /** Logo du ruban du haut : nom, puis intitulés en plus petit */
  brand: { name: "Jérémy-Morgan PATOLE", subtitle: "Chef de projet technique & Data Analyst" },
  /** Textes de l'image de partage (LinkedIn, Slack…) */
  og: { header: "Paris · portfolio", footer: "Étude de cas : TMRC FX" },
  seo: {
    title: "Jérémy-Morgan Patole | Chef de projet technique & Data Analyst",
    description:
      "Chef de projet technique et Data Analyst à Paris. Pilotage de projets clients, pipelines de données Python et IA. Étude de cas : TMRC FX.",
  },
};

/** Langue de cette version du site et bouton de bascule du ruban. */
export const i18n = {
  lang: "fr",
  ogLocale: "fr_FR",
  /** Préfixe des URL de cette langue ("" pour le français, servi à la racine). */
  base: "",
  /** Accueil de cette langue, pour construire les ancres ("/#contact"). */
  home: "/",
  switchTo: { label: "EN", ariaLabel: "Read this page in English", hrefLang: "en" },
};

/** Textes d'interface hors sections (accessibilité, libellés courts). */
export const ui = {
  skipLink: "Aller au contenu",
  mainNav: "Navigation principale",
  mobileNav: "Navigation mobile",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  newTab: "nouvel onglet",
  themeToggle: "Basculer entre thème clair et sombre",
  workTabs: "Lecture de l'étude de cas",
  pipelineSteps: "Étapes du pipeline",
  projectThemes: "Thèmes du projet",
  technologies: "Technologies",
  tools: "Outils",
  skills: "Compétences",
  /** Deux-points précédé d'une espace insécable, selon la typographie française. */
  colon: "\u00a0: ",
};

export const contact = {
  email: "jerempatole@live.fr",
  phone: "07 69 28 00 57",
  phoneHref: "tel:+33769280057",
  linkedin: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-patole-674794161/",
  linkedinLabel: "linkedin.com/in/jérémy-patole-674794161",
  github: "https://github.com/jmpbusiness2023-commits",
  ctaLabel: "Me contacter",
};

/** Les deux CV. Garder les mêmes noms de fichiers dans `public/` pour ne pas casser les liens. */
export const cvs = {
  projet: {
    label: "Télécharger le CV Projet",
    href: "/cv-jeremy-morgan-patole-projet.pdf",
  },
  data: {
    label: "Télécharger le CV Data",
    href: "/cv-jeremy-morgan-patole-data.pdf",
  },
};

export const nav = [
  { label: "Profil", href: "/#profil" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Expériences", href: "/#experiences" },
  { label: "Projets", href: "/#projects" },
  { label: "Environnements", href: "/#clients" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  pitch:
    "Je pilote des projets logiciels de bout en bout et je construis les pipelines de données qui les font tourner.",
  primaryCta: { label: "Voir le projet phare", href: "/#tmrc-fx" },
  /** Renvoie vers « Deux façons de travailler avec moi », seul endroit où les CV se téléchargent. */
  cvCta: { label: "Voir les CV", href: "/#approche" },
  photoAlt:
    "Jérémy-Morgan Patole, bras croisés, dans un espace de travail lumineux",
  availability: "Basé à Paris · hybride",
};

export const profile = {
  heading: "Ingénieur de formation, chef de projet et analyste de données par la pratique.",
  text: "Ingénieur Bac+5 en mécanique des structures, passé par Dassault Aviation (via ALTEN) et Stellantis, puis formé à la data et à l'IA chez Ironhack. Je collabore aujourd'hui avec VekTrel sur des projets clients menés de bout en bout : cadrage, décisions tracées, recette et livraison, avec un vrai pied dans la technique (Python, données temps réel, agents IA).",
};

export const twoWays = {
  anchor: "approche",
  heading: "Deux façons de travailler avec moi",
  intro:
    "Un même parcours, deux lectures. Selon votre besoin, voici ce que je prends en charge et ce qui le prouve.",
  tracks: [
    {
      id: "projet",
      title: "Pilotage de projet technique",
      lead: "Pour les postes de chef de projet technique, déploiement, intégration et professional services.",
      proofs: [
        "Cadrage client : identifier les points bloquants dès le brief et faire valider des arbitrages documentés avant tout développement",
        "Recette sur l'environnement du client, guides d'installation, suivi des anomalies",
        "Plus de 3 ans en conseil chez un grand compte de la défense, sous fortes exigences de normes et de sécurité",
      ],
      cv: cvs.projet,
    },
    {
      id: "data",
      title: "Data & IA",
      lead: "Pour les postes de data analyst, data scientist et data & IA.",
      proofs: [
        "Pipeline Python temps réel : ingestion, validation, détection de valeurs aberrantes, rejeu déterministe",
        "Analyse de sensibilité sur historique réel pour arbitrer des paramètres métier",
        "Tableaux de bord (Tableau, Power BI), A/B testing, construction et pilotage d'agents IA",
      ],
      cv: cvs.data,
    },
  ],
};

/** Les seuls chiffres autorisés pour TMRC FX. Ne pas en ajouter. */
export const tmrcStats = [
  { value: "33", label: "versions livrées" },
  { value: "~740", label: "tests automatisés" },
  { value: "2", label: "plateformes : macOS et Windows" },
  { value: "3", label: "personnes + agents IA" },
];

/** Description de TMRC FX : bloc Projet phare, carte Use cases et introduction de l'étude de cas. */
const tmrcSummary =
  "Création d'un assistant d'analyse technique qui repère des configurations de marché Forex à partir de la stratégie fournie par le client. Co-pilotage du projet pour VekTrel, du cadrage à la livraison d'une application de bureau macOS connectée à MetaTrader 5.";

export const tmrcFeature = {
  eyebrow: "Projet phare",
  heading: "TMRC FX : du brief client à l'application livrée",
  context: tmrcSummary,
  cta: { label: "Lire l'étude de cas", href: "/use-cases/tmrc-fx" },
  tags: ["Cadrage", "Recette", "Python", "Temps réel", "Tauri"],
};

/** Section Expertise : les briques du profil, en trois familles. */
export const expertise = {
  heading: "Expertise",
  intro: "Les briques du profil, en trois familles : piloter, analyser, concevoir.",
  families: [
    {
      name: "Pilotage de projet",
      items: [
        "Cadrage et recueil des besoins",
        "Planification par jalons",
        "Gestion des risques",
        "Recette et livraison",
        "Coordination multi-acteurs",
        "Relation client",
      ],
    },
    {
      name: "Data & IA",
      items: [
        "Analyse de données",
        "Python",
        "SQL / MySQL",
        "Data engineering",
        "Tableau",
        "Power BI",
        "Visualisation de données",
        "Construction d'agents IA",
      ],
    },
    {
      name: "Ingénierie & industrie",
      items: [
        "Études mécaniques",
        "CAO / CATIA V5 / VPM",
        "Gestion documentaire / PLM",
        "Respect des normes et standards",
        "Lecture d'environnements techniques",
        "Résolution de problèmes",
      ],
    },
  ],
};

export const experiencesSection = {
  heading: "Expériences",
  intro: "Du bureau d'études aéronautique au pilotage de projets clients.",
  educationHeading: "Formation",
};

export type Experience = {
  title: string;
  org: string;
  period: string;
  place: string;
  summary?: string;
  bullets: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    title: "Chef de projet technique & développeur data",
    org: "En collaboration avec VekTrel, projet client TMRC FX",
    period: "Sept. 2026 - aujourd'hui",
    place: "Paris (hybride)",
    summary:
      "Pilotage en binôme d'un projet client de bout en bout : un assistant d'analyse de marché EUR/USD connecté à MetaTrader 5, livré en application de bureau macOS et Windows.",
    bullets: [],
    link: { label: "Lire l'étude de cas", href: "/use-cases/tmrc-fx" },
  },
  {
    title: "Ingénieur d'étude en conseil, aménageur électrique RAFALE",
    org: "ALTEN SA, en mission chez Dassault Aviation",
    period: "Oct. 2022 - mars 2025",
    place: "Saint-Cloud",
    bullets: [
      "Intégration CAO (CATIA V5) des harnais de câblage et des équipements sur trois versions du RAFALE (Marine, Monoplace, Biplace), selon les standards Dassault Aviation et les normes militaires",
      "Gestion de la configuration avion et de la liasse documentaire sur logiciel PLM",
    ],
  },
  {
    title: "Ingénieur d'étude stagiaire",
    org: "Stellantis, Centre technique",
    period: "Févr. - août 2022",
    place: "Vélizy-Villacoublay",
    bullets: [
      "Analyse de calculs mécaniques et statistiques pour optimiser le dimensionnement des systèmes de direction et la robustesse du modèle",
    ],
  },
];

export const education = [
  {
    title: "Bootcamp Data & IA, certification RNCP37827 Bloc 1 (niveau 6)",
    org: "Ironhack Paris",
    period: "Oct. - déc. 2025",
  },
  {
    title: "Certification Gestion de projet",
    org: "ORSYS La Défense",
    period: "Avr. 2024",
  },
  {
    title: "Master Mécanique des structures composites, Aéronautique",
    org: "UFR SITEC, Université Paris Nanterre",
    period: "2018 - 2020",
  },
  {
    title: "Licence 3 Sciences pour l'ingénieur, Mécanique",
    org: "Université Paris Nanterre",
    period: "2016 - 2017",
  },
];

export const projectsSection = {
  heading: "Projets data",
  intro: "Menés pendant le bootcamp Data & IA d'Ironhack. Le code est public sur GitHub.",
  detailLabel: "Voir le détail",
  githubLabel: "GitHub",
  othersLabel: "Également :",
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  period: string;
  tags: string[];
  tools: string[];
  details: string[];
  skills: string[];
  repos: { label: string; href: string }[];
  /** Affiché dans la section Projets de l'accueil */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "final-project",
    title: "Analyse du marché du jeu vidéo",
    subtitle: "Projet final Ironhack",
    summary:
      "Collecte par API et web scraping, modélisation SQL, tableau de bord Tableau et data storytelling sur l'industrie du jeu vidéo.",
    period: "Déc. 2025",
    tags: ["Python", "SQL", "Tableau", "Web scraping"],
    tools: ["Python", "Pandas", "SQL", "Tableau", "Jupyter Notebook", "GitHub"],
    details: [
      "Collecte des données par API et web scraping, puis nettoyage et structuration.",
      "Modélisation SQL et sélection d'angles d'analyse sur les tendances, volumes et dynamiques du secteur.",
      "Restitution dans un tableau de bord Tableau, avec une narration orientée décision.",
    ],
    skills: ["Analyse de marché", "Data storytelling", "Modélisation SQL", "Visualisation"],
    repos: [
      {
        label: "Voir le dépôt GitHub",
        href: "https://github.com/jmpbusiness2023-commits/Final-Project--Video-Game-Market-Analysis",
      },
    ],
    featured: true,
  },
  {
    slug: "vanguard-ab-test",
    title: "A/B test Vanguard",
    subtitle: "Expérimentation et statistique",
    summary:
      "Comparaison de deux parcours clients, tests statistiques et recommandation, visualisation Tableau.",
    period: "Nov. 2025",
    tags: ["A/B testing", "Statistiques", "Tableau"],
    tools: ["Python", "Pandas", "SciPy", "Tableau", "GitHub"],
    details: [
      "Comparaison d'un parcours client existant et d'un nouveau parcours.",
      "Tests d'hypothèses pour juger si les écarts observés sont significatifs.",
      "Recommandation argumentée et visualisation des résultats dans Tableau.",
    ],
    skills: ["A/B testing", "Raisonnement statistique", "Aide à la décision"],
    repos: [
      {
        label: "Voir le dépôt GitHub",
        href: "https://github.com/jmpbusiness2023-commits/Project-2--Week_5_6",
      },
    ],
    featured: true,
  },
  {
    slug: "movie-market-analysis",
    title: "Analyse du marché du cinéma",
    subtitle: "API, web scraping et tendances",
    summary:
      "Données issues d'API et de web scraping, analyse des tendances du marché avec Python.",
    period: "Oct. 2025",
    tags: ["Python", "API", "Web scraping"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    details: [
      "Collecte de données sur les films par API et web scraping.",
      "Analyse des facteurs qui influencent la trajectoire commerciale d'un film.",
      "Restitution des tendances sous forme d'angles de lecture exploitables.",
    ],
    skills: ["Collecte de données", "Analyse de tendances", "Visualisation"],
    repos: [
      {
        label: "Voir le dépôt GitHub",
        href: "https://github.com/jmpbusiness2023-commits/Week-3-Project--1",
      },
      {
        label: "Voir le second dépôt",
        href: "https://github.com/jmpbusiness2023-commits/Week-4--Mini-Project",
      },
    ],
    featured: true,
  },
  {
    slug: "shark-attack-analysis",
    title: "Analyse des attaques de requins",
    subtitle: "Nettoyage et exploration de données",
    summary:
      "Nettoyage d'un jeu de données hétérogène, puis exploration des tendances principales.",
    period: "Oct. 2025",
    tags: ["Python", "Pandas", "Nettoyage"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "GitHub"],
    details: [
      "Traitement des valeurs manquantes et homogénéisation des colonnes.",
      "Exploration structurée des variables pour faire ressortir les tendances.",
      "Synthèse des enseignements dans une lecture accessible.",
    ],
    skills: ["Nettoyage de données", "Analyse exploratoire", "Qualité de données"],
    repos: [
      {
        label: "Voir le dépôt GitHub",
        href: "https://github.com/jmpbusiness2023-commits/Week-2-Mini-Project---Shark-Attacks",
      },
    ],
    featured: false,
  },
  {
    slug: "escape-room",
    title: "Escape Room",
    subtitle: "Mini-projet Python",
    summary:
      "Jeu d'évasion en Python : séquences d'actions, règles d'accès et progression du joueur.",
    period: "Oct. 2025",
    tags: ["Python", "Algorithmique"],
    tools: ["Python", "VS Code", "GitHub"],
    details: [
      "Conception d'une expérience d'escape game avec logique de progression et conditions d'accès.",
      "Structuration du code autour des actions du joueur et de règles simples.",
      "Travail sur la lisibilité et le séquencement du programme.",
    ],
    skills: ["Logique algorithmique", "Structuration du code"],
    repos: [
      {
        label: "Voir le dépôt GitHub",
        href: "https://github.com/jmpbusiness2023-commits/Week-1-Mini-Project---Python-Quest",
      },
    ],
    featured: false,
  },
];

export const environments = {
  heading: "Des contextes exigeants et structurants",
  text: "Aéronautique de défense, automobile, projets logiciels clients : des environnements où la rigueur, les normes et la qualité du livrable ne se négocient pas.",
  /** Structures, toutes au même niveau */
  major: [
    { name: "Dassault Aviation", line: "Intégration CAO sur le RAFALE, en mission via ALTEN" },
    { name: "Stellantis", line: "Études mécaniques et statistiques, centre technique de Vélizy" },
    { name: "ALTEN", line: "Conseil en ingénierie" },
    { name: "VekTrel", line: "Co-pilotage de projets clients, du cadrage à la livraison" },
  ],
  educationHeading: "Formation",
  education: [
    { name: "Ironhack", line: "Bootcamp Data & IA, certification RNCP niveau 6" },
    { name: "UFR SITEC", line: "Master Mécanique des structures composites, Aéronautique" },
  ],
};

export const useCases = {
  heading: "Use cases",
  intro:
    "Des cas concrets, du projet client aux projets data, avec le détail de la démarche.",
  tmrcLabel: "Projet client · en collaboration avec VekTrel · Sept. 2026 - aujourd'hui",
};

export const stack = {
  heading: "Stack",
  intro: "Les outils que j'utilise, regroupés par usage.",
  families: [
    {
      name: "Data",
      items: ["Python", "Pandas", "SQL / MySQL", "Tableau", "Power BI", "DataMiner", "Qligent"],
    },
    {
      name: "Projet",
      items: ["Notion", "Trello", "GitHub", "Suite Office"],
    },
    {
      name: "IA",
      items: ["Claude Code", "Codex"],
    },
    {
      name: "Ingénierie",
      items: ["CATIA V5", "VPM", "PLM"],
    },
  ],
};

export const contactSection = {
  heading: "À la recherche d'un chef de projet technique ou d'un profil data, rigoureux et adaptable ?",
  text: "Disponible pour échanger sur des opportunités en pilotage de projets techniques, en data et en IA, en particulier dans des environnements exigeants.",
  labels: {
    email: "Email",
    phone: "Téléphone",
    linkedin: "LinkedIn",
    linkedinShort: "jérémy-patole",
    github: "GitHub",
    githubShort: "jmpbusiness2023-commits",
  },
  footerLinks: { top: "Haut de page" },
};

/** Libellés des pages /use-cases/... */
export const caseLabels = {
  back: "Tous les use cases",
  footerHeading: "Un projet ou un poste à pourvoir ? Parlons-en.",
  tmrc: {
    eyebrow: "Étude de cas",
    context: "Contexte",
    role: "Mon rôle",
    challenge: "Le défi principal",
    work: "Ce que j'ai fait",
    results: "Résultats",
    stack: "Stack",
    lessons: "Ce que j'en retiens",
  },
  project: {
    frameLabel: "Cadre",
    frameValue: "Bootcamp Data & IA, Ironhack",
    periodLabel: "Période",
    toolsLabel: "Outils",
    codeLabel: "Code",
    codeLink: "Dépôt public sur GitHub",
    approach: "Démarche",
    toolsAndSkills: "Outils et compétences",
    others: "Autres use cases",
    tmrcLink: "TMRC FX, projet client",
  },
};

export const outsideWork = {
  label: "En dehors du travail",
  items: ["DJ", "Piano et percussions", "Arts martiaux"],
};

/** Étude de cas complète : /use-cases/tmrc-fx */
export const tmrcCase = {
  slug: "tmrc-fx",
  title: "TMRC FX",
  heading: "TMRC FX : du brief client à l'application livrée",
  lead: tmrcSummary,
  seo: {
    title: "Étude de cas TMRC FX | Jérémy-Morgan Patole",
    description:
      "Cadrage, recette et pipeline de données Python temps réel : comment un savoir-faire de marché discrétionnaire est devenu une application de bureau livrée.",
  },
  meta: [
    { label: "Cadre", value: "En collaboration avec VekTrel, pour un client pilote" },
    { label: "Période", value: "Sept. 2026 - aujourd'hui" },
    { label: "Rôle", value: "Copilote du projet" },
    { label: "Livrable", value: "Application de bureau macOS et Windows" },
  ],
  context:
    "Un client pilote voulait un assistant pour repérer des configurations de marché sur l'EUR/USD à partir de règles qu'il appliquait à la main. Son brief était riche mais très interprétatif : une même règle pouvait produire de 10 à plus de 1 700 signaux sur la même période selon la lecture.",
  role: "Copilote du projet aux côtés du responsable de VekTrel : cadrage, relecture des livrables contractuels, recette, et développement de plusieurs modules.",
  challenge:
    "Transformer un savoir-faire discrétionnaire en règles testables, et ne rien coder avant d'avoir des règles validées par le client.",
  work: {
    pilotage: {
      label: "Pilotage",
      lead: "Ce qui intéresse un recruteur projet : cadrage, contrat, jalons, recette, équipe.",
      items: [
        "20 questions bloquantes identifiées et soumises au client, tranchées en décisions tracées et versionnées",
        "Relecture de la proposition commerciale ligne par ligne contre le registre de décisions, 4 réserves levées avant signature",
        "Pilotage par jalons et critères d'acceptation, avenant de plateforme géré avec le client",
        "Recette sur l'environnement du client (macOS, MetaTrader 5), sessions de recette datées, guides d'installation",
        "Coordination d'une équipe de 3 personnes et d'agents IA (documents de passation, revue de pull requests)",
      ],
    },
    data: {
      label: "Data",
      lead: "Ce qui intéresse un recruteur data : pipeline, qualité, rejeu, analyse, modules livrés.",
      items: [
        "Pipeline Python : ingestion en continu des bougies M1, validation stricte des fichiers, agrégation multi-horizons (M5, H1), horodatage UTC",
        "Qualité des données : filtrage des valeurs aberrantes (spreads, valeur du pip), reconstruction d'historique",
        "Rejeu déterministe sans fuite de données futures, pour comparer les variantes de règles",
        "Analyse de sensibilité des règles sur 6 mois d'historique réel",
        "Modules livrés : calculateur de taille de position et registre de risque, moteur d'alertes avec journal, packaging de l'application macOS",
      ],
    },
  },
  architecture: {
    heading: "Architecture",
    caption:
      "Les données de marché circulent de MetaTrader 5 vers un pipeline Python local, qui produit des alertes. La décision d'entrer en position reste humaine.",
    pipelineSteps: ["Agrégation", "Structure", "Règles", "Risque", "Annonces économiques"],
    /** Les étapes du schéma, dans l'ordre. Le nœud `pipeline` reçoit les `pipelineSteps`. */
    nodes: [
      { title: "MetaTrader 5", detail: "Plateforme de marché du client" },
      { title: "Indicateur d'export", detail: "MQL5, bougies M1" },
      { title: "Fichier local", detail: "Validé strictement à chaque lecture" },
      { title: "Pipeline Python", detail: "Rejouable, horodaté en UTC", pipeline: true },
      { title: "Alertes et application", detail: "Application de bureau, journal des alertes" },
      { title: "Décision humaine", detail: "Aucun ordre réel exécuté automatiquement", human: true },
    ] as { title: string; detail: string; pipeline?: boolean; human?: boolean }[],
  },
  stack: ["Python (bibliothèque standard, pytest)", "TypeScript", "Tauri", "MQL5", "GitHub (PR, issues, jalons)", "Claude Code", "Codex"],
  lessons: [
    "Cadrer avant de coder : une règle ambiguë coûte plus cher en développement qu'en atelier avec le client.",
    "Tracer chaque décision : un registre versionné rend le périmètre vérifiable, jusque dans la proposition commerciale.",
    "Tester sur l'environnement réel du client : c'est là que se révèlent les écarts que l'environnement de développement masque.",
  ],
  disclaimer:
    "Outil d'aide à la décision, sans exécution automatique d'ordres réels. Le nom du client et le code source sont confidentiels.",
};
